import React from 'react'

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <svg
          className="mx-auto h-16 w-16 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.364 5.636l-1.414-1.414a9 9 0 10-12.728 12.728l1.414 1.414m1.414-1.414A9 9 0 1116.95 4.222l1.414 1.414m-1.414 1.414L12 12m0 0l-4.95 4.95"
          />
        </svg>
        <h1 className="text-2xl font-bold text-gray-900 mt-4">Oops!</h1>
        <p className="text-gray-600 mt-2">Sorry, something went wrong.</p>
        <p className="text-gray-600 mt-1">Please try again later.</p>
        <button
          onClick={() => window.location.href = '/'}
          className="mt-4 inline-flex items-center px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          Go Back Home
        </button>
      </div>
    </div>
  )
}