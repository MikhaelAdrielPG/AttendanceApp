export default function About() {
  return (
    <div className="container">
      <nav className="bg-gray-800 p-4 mx-auto max-w-screen-md">
        <div className="container flex justify-between items-center">
          <a href="/" className="text-white text-xl font-bold">
            Your Website
          </a>
          <div className="flex space-x-4">
            <a href="/" className="text-white">
              Home
            </a>
            <a href="/about" className="text-white">
              About
            </a>
          </div>
        </div>
      </nav>

      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">This is the about page of your website.</p>
      </div>
    </div>
  );
}
