const { default: z } = require("zod")

export const onboardingSchema = z.object({
    industry: z.string({
        required_error: "Please select an industry",
    }),

    subIndustry: z.string({
        required_error: "Please select a specialization",
    }),

    bio: z.string().max(500).optional(),
    experience: z
        .string()
        .transform((val) => parseInt(val, 10))
        .pipe(
            z
                .number()
                .min(0, "Experience must be atleast 0 years")
                .max(30, "Experience cannot exceed 30 years")
        ),

    skills: z.string().transform((val) =>
        val
            ? val
                .split(",")
                .map((skill) => skill.trim())
                .filter(Boolean)
            : undefined
    ),
});