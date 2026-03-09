import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const saveEmail = mutation({
    args: {
        email: v.string(),
    },
    handler: (ctx, args) => {
        ctx.db.insert("waitingList", {
            email: args.email,
            createdAt: Date.now(),
        });
    },
})

export const getWaitingList = query({
    handler: async (ctx) => {
        return await ctx.db.query("waitingList").order("desc").collect();
    },
});

export const getQueries = query({
    handler: async (ctx) => {
        return await ctx.db.query("query").order("desc").collect();
    },
});

export const saveQuery = mutation({
    args: {
        type: v.optional(v.string()),
        subject: v.optional(v.string()),
        message: v.optional(v.string()),
        email: v.string(),
    },
    handler: (ctx, args) => {
        ctx.db.insert("query", {
            type: args.type,
            subject: args.subject,
            message: args.message,
            email: args.email,
            createdAt: Date.now(),
        });
    },
})
