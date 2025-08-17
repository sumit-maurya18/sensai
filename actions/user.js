"use server";

import { headers } from "next/headers";
import { getAuth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";


export async function updateUser(data) {
    const currentHeaders = headers();
    const { userId } = getAuth({ headers: currentHeaders });

    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    try {
        const result = await db.$transaction(async (tx) => {
            // find if industry exists
            let industryInsight = await tx.industryInsight.findUnique({
                where: { industry: data.industry },
            });

            // if industry doesn't exist, create with default values
            if (!industryInsight) {
                industryInsight = await tx.industryInsight.create({
                    data: {
                        industry: data.industry,
                        salaryRanges: [],
                        growthRate: 0,
                        demandLevel: "Medium",
                        topSkills: [],
                        marketOutlook: "Neutral",
                        keyTrends: [],
                        recommendedSkills: [],
                        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                    },
                });
            }

            // update user
            const updatedUser = await tx.user.update({
                where: { id: user.id },
                data: {
                    industry: data.industry,
                    bio: data.bio,
                    skills: data.skill,
                },
            });

            return { updatedUser, industryInsight };
        }, { timeout: 10000 });

        return result;

    } catch (error) {
        console.log("Error updating user and industry:", error.message);
        throw new Error("Failed to update profile");
    }
}

export async function getUserOnboardingStatus() {
    const currentHeaders = headers();
    const { userId } = getAuth({ headers: currentHeaders });

    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    try {
        const userData = await db.user.findUnique({
            where: { clerkUserId: userId },
            select: { industry: true },
        });

        return { isOnBoarded: !!userData?.industry };

    } catch (error) {
        console.error("Error checking onboarding status:", error.message);
        throw new Error("Failed to check onboarding status");
    }
}
