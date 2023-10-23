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
            className="w-full px-4 py-2 mt-2 text-gray-700 rounded-md focus:outline-none focus:ring"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-2 text-gray-700 rounded-md focus:outline-none focus:ring"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 mt-2 text-gray-700 rounded-md focus:outline-none focus:ring"
          />
        </div>
        <div className="mt-6">
          <button className="w-full px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-600">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
