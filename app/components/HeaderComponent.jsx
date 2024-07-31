'use client';

import { logout } from "../logout/actions";

export default function AuthValidation({ user }) {
    return (
        <header className="bg-gray-800 text-white p-4 dark:bg-gray-900 dark:text-gray-200">
            <nav className="container mx-auto flex items-center justify-between">
                <div className="text-lg font-bold">
                    <span className="text-xl">OpAur</span>
                </div>
                <div className="flex space-x-4">
                    {user ? (
                        <>
                            <a
                                href="/private"
                                className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white px-4 py-2 rounded transition"
                            >
                                Dashboard
                            </a>
                            <form action={logout} className="inline">
                                <button
                                    type="submit"
                                    className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white px-4 py-2 rounded transition"
                                >
                                    Logout
                                </button>
                            </form>
                        </>
                    ) : (
                        <a
                            href="/login"
                            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded transition"
                        >
                            Login
                        </a>
                    )}
                </div>
            </nav>
        </header>
    );
}
