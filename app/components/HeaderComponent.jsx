'use client'; 
import { logout } from "../logout/actions";
export default function AuthValidation({ user }) {
    
  if (user) {
    return (<form action={logout} className="inline">
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </form>);
  } else {
    return <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Login</a>;
  }
}