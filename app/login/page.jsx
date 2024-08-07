'use client'
import { login } from './actions'
import { useRouter } from 'next/navigation'

export default function LoginPage() {

  const router = useRouter();

  const handleSignUpRedirect = () => {
    router.push('../signup');
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background-start to-background-end">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">Welcome</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-500 dark:text-gray-300 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-500 dark:text-gray-300 sm:text-sm"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              formAction={login}
              className="w-full mr-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={handleSignUpRedirect}
              className="w-full ml-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-600"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
