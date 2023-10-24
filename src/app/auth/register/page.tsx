export default function Register() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-white text-3xl mb-4">Register</h1>
      <form className="mt-6">
        <div className="mb-2">
          <label htmlFor="username" className="text-sm">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter the Username"
            className="w-full px-4 py-2 mt-2 text-gray-700 rounded-md focus:outline-none focus:ring"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
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
            className="w-full px-4 py-2 mt-2 text-gray-700 rounded-md focus:outline-none focus:ring"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="passwordConf" className="text-sm">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 mt-2 text-gray-700 rounded-md focus:outline-none focus:ring"
            required
          />
        </div>
        <div className="mt-auto">
          <input type="checkbox" className="h-3 w-3" required />
          <label htmlFor="acceptTerms" className="ml-2 text-sm text-white">
            I accept the terms and conditions
          </label>
          <button className="w-full px-4 py-2 mt-5 text-white bg-gray-700 rounded-md hover:bg-gray-600">
            Register
          </button>
        </div>
        <div className="flex justify-center mt-1 text-sm">
          <span className="me-1">Already have account ?</span>
          <a
            href="/auth/login"
            className="text-gray-400 hover:text-gray-300 text-sm"
          >
            Login
          </a>
        </div>
      </form>
    </div>
  );
}
