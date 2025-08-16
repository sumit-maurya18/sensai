
import { PrismaClient } from "./generated/prisma";

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production"){
    globalThis.prisma = db;
}

/**
 * Initializes and exports a singleton PrismaClient instance.
 * In development mode, attaches the PrismaClient to the global object to prevent
 * multiple instances during hot-reloading, which can cause connection issues.
 * In production, a new instance is created without attaching to the global object.
 */

