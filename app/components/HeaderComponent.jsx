"use client";

import { logout } from "../logout/actions";
import { ArrowRight } from 'lucide-react';

export default function AuthValidation({ user }) {
  return (
    <header className="bg-primary dark:bg-muted p-4 text-primary-foreground dark:text-primary ">
      <nav className="container mx-auto flex items-center justify-between max-w-[1000px]">
        <div className="text-lg font-bold">
          <span className="text-xl">OpAur</span>
        </div>
        <div className="flex space-x-4">
          {user ? (
            <>
              <a
                href="/private"
                className="px-4 py-1 text-sm rounded transition rounded-lg bg-primary-foreground dark:bg-primary dark:text-primary-foreground text-primary flex items-center "
                style={{
            
                }}
              >
                Dashboard
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
              <form action={logout} className="inline">
                <button
                  type="submit"
                  className="px-4 py-1 text-sm rounded transition rounded-lg bg-primary-foreground dark:bg-primary dark:text-primary-foreground  text-primary"
                  style={{
                  }}
                >
                  Logout
                </button>
              </form>
            </>
          ) : (
            <a
              href="/login"
              className="px-4 py-1 text-sm rounded transition rounded-lg bg-primary-foreground dark:bg-primary dark:text-primary-foreground text-primary "
              style={{
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
