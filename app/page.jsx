import Image from "next/image";
import { logout } from "./logout/actions";
import DemoClientComponent from "./components/OpaurClientComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-xl font-semibold">My App</h1>
        </div>
        <nav className="flex items-center gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Login</a>
          <form action={logout} className="inline">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </form>
        </nav>
      </header>

      <div className="flex-grow flex flex-col items-center justify-center p-10">
        <DemoClientComponent />
      </div>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-5xl mx-auto flex justify-center items-center">
          <p className="text-sm">By OpAur Test</p>
        </div>
      </footer>
    </main>
  );
}
