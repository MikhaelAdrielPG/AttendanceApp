export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-white text-3xl mb-4">Login</h1>
      <form className="mt-6">
        <div className="mb-2">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter the Email"
            className="w-full px-4 py-2 mt-2 text-gray-700 rounded-md focus:outline-none focus:ring"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring"
            required
          />
        </div>
        <div className="mt-auto">
          <a
            href="/auth/password"
            className="text-gray-400 hover:text-gray-300 text-sm"
          >
            Forgot Password
          </a>
          <button className="w-full px-4 py-2 mt-5 text-white bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Login
          </button>
          <div className="flex justify-center mt-1 text-sm">
            <span className="me-1">Don't have account ?</span>
            <a
              href="/auth/register"
              className="text-gray-400 hover:text-gray-300 text-sm"
            >
              Register
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
