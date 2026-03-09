"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { verifyAdminPassword } from "./actions";

export default function AdminPage() {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const isValid = await verifyAdminPassword(password);
            if (isValid) {
                setIsAuthenticated(true);
            } else {
                setError("Invalid password");
            }
        } catch (err) {
            setError("Error verifying password");
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="flex min-h-screen items-center justify-center p-4">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>Admin Access</CardTitle>
                        <CardDescription>Enter the password to access the secure area.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                            />
                            {error && <p className="text-sm text-red-500">{error}</p>}
                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? "Verifying..." : "Login"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return <AdminDashboard />;
}

function AdminDashboard() {
    const waitingList = useQuery(api.query.getWaitingList) || [];
    const queries = useQuery(api.query.getQueries) || [];

    const isRecent = (timestamp: number) => {
        const oneHourAgo = Date.now() - 60 * 60 * 1000;
        return timestamp > oneHourAgo;
    };

    return (
        <div className="container mx-auto p-8 space-y-8">
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>

            <div className="grid gap-8 md:grid-cols-2">
                {/* Waiting List Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Waiting List ({waitingList.length})</CardTitle>
                        <CardDescription>Users who have signed up to the waiting list.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="rounded-md border h-96 overflow-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Email</TableHead>
                                        <TableHead className="w-[150px] text-right">Added On</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {waitingList.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={2} className="text-center">No emails found.</TableCell>
                                        </TableRow>
                                    ) : (
                                        waitingList.map((entry) => (
                                            <TableRow key={entry._id}>
                                                <TableCell className="font-medium">
                                                    <div className="flex items-center gap-2">
                                                        {entry.email}
                                                        {isRecent(entry.createdAt) && (
                                                            <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20">
                                                                Recent
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    {new Date(entry.createdAt).toLocaleDateString()}
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>

                {/* Queries Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>User Queries ({queries.length})</CardTitle>
                        <CardDescription>Messages and queries submitted by users.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="rounded-md border h-96 overflow-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Details</TableHead>
                                        <TableHead className="w-[150px] text-right">Received</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {queries.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={2} className="text-center">No queries found.</TableCell>
                                        </TableRow>
                                    ) : (
                                        queries.map((q) => (
                                            <TableRow key={q._id}>
                                                <TableCell>
                                                    <div className="flex items-center gap-2">
                                                        <div className="font-semibold">{q.subject || "No Subject"}</div>
                                                        {isRecent(q.createdAt) && (
                                                            <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20">
                                                                Recent
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground">{q.email}</div>
                                                    {q.type && <div className="text-xs font-mono text-muted-foreground mt-1">[{q.type}]</div>}
                                                    {q.message && <div className="text-sm mt-2">{q.message}</div>}
                                                </TableCell>
                                                <TableCell className="text-right align-top pt-4">
                                                    {new Date(q.createdAt).toLocaleDateString()}
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
