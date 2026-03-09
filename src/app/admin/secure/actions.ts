"use server";

export async function verifyAdminPassword(password: string) {
    const correctPassword = process.env.ADMIN_PASSWORD;
    if (!correctPassword) {
        console.warn("ADMIN_PASSWORD is not set in environment variables.");
        return false;
    }
    return password === correctPassword;
}
