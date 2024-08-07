'use client';

import { logout } from "../logout/actions";

export default function AuthValidation({ user }) {
    return (
        <header className="bg-card text-card-foreground p-4 dark:bg-muted dark:text-card-foreground">
            <nav className="container mx-auto flex items-center justify-between">
                <div className="text-lg font-bold">
                    <span className="text-xl">OpAur</span>
                </div>
                <div className="flex space-x-4">
                    {user ? (
                        <>
                            <a
                                href="/private"
                                className="px-4 py-2 rounded transition rounded-lg"
                                style={{
                                    backgroundColor: 'hsl(var(--primary))',
                                    color: 'hsl(var(--primary-foreground))'
                                }}
                            >
                                Dashboard
                            </a>
                            <form action={logout} className="inline">
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded transition rounded-lg"
                                    style={{
                                        backgroundColor: 'hsl(var(--destructive))',
                                        color: 'hsl(var(--destructive-foreground))'
                                    }}
                                >
                                    Logout
                                </button>
                            </form>
                        </>
                    ) : (
                        <a
                            href="/login"
                            className="px-4 py-2 rounded transition rounded-lg"
                            style={{
                                backgroundColor: 'hsl(var(--primary))',
                                color: 'hsl(var(--primary-foreground))'
                            }}
                        >
                            Login
                        </a>
                    )}
                </div>
            </nav>
        </header>
    );
}
