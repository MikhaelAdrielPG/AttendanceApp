export default function Password() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-white text-3xl mb-4">Reset Password</h1>
      <form className="mt-6">
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
        <div className="mt-auto">
          <button className="w-full px-4 py-2 mt-5 text-white bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Sent Password Reset Link
          </button>
          <div className="flex justify-center mt-5 text-sm">
            <a
              href="/auth/login"
              className="text-gray-400 hover:text-gray-300 text-sm"
            >
              Back
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
