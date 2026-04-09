import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bgDark">
      <div className="bg-cardDark border border-gray-700 rounded-2xl px-8 py-10 w-full max-w-md shadow-xl">
        <h1 className="text-2xl font-semibold mb-1 text-center">Sign in</h1>
        <p className="text-sm text-gray-400 mb-6 text-center">
          to continue to Budget Tracker
        </p>

        <form className="space-y-4">
          <div>
            <label className="text-xs text-gray-400">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg bg-bgDark border border-gray-600 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400">Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg bg-bgDark border border-gray-600 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-emerald-500 hover:bg-emerald-600 text-sm font-medium py-2.5 rounded-lg transition"
          >
            Sign in
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-400 text-center">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-emerald-400 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
