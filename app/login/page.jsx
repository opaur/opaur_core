'use client'

import { login } from './actions'
import { useRouter } from 'next/navigation'
import Footer from "../components/FooterComponent";

export default function LoginPage() {
  const router = useRouter();

  const handleSignUpRedirect = () => {
    router.push('../signup');
  }

  return (
    <main className="flex min-h-screen flex-col">
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Sign in to your account</h2>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom-purple focus:border-custom-purple dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom-purple focus:border-custom-purple dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
            />
          </div>
          <div className="flex justify-end">
            <a href="#" className="text-sm text-custom-purple hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            formAction={login}
            className="w-full py-2 px-4 text-primary rounded-md shadow-sm text-sm font-medium bg-custom-purple hover:bg-custom-purple-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-purple transition-colors duration-200"
          >
            Sign in
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            New Customer?{' '}
            <button
              onClick={handleSignUpRedirect}
              className="text-custom-purple hover:underline font-semibold"
            >
              Create account
            </button>
          </p>
        </div>
      </div>
      
    </div>
    <Footer />
    </main>
    
  )
}