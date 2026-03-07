import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    waitingList: defineTable({
        email: v.string(),
        createdAt: v.number(),
    })
    .index("by_createdAt", ['createdAt']),


    query:defineTable({
        type: v.optional(v.string()),
        subject: v.optional(v.string()),
        message: v.optional(v.string()),
        email: v.string(),
        createdAt: v.number(),
    })
})