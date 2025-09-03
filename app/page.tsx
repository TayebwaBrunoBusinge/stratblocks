export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">StratBlocks</h1>
        <nav className="space-x-6 text-gray-600">
          <a href="#features" className="hover:text-gray-900">
            Features
          </a>
          <a href="#pricing" className="hover:text-gray-900">
            Pricing
          </a>
          <a href="#about" className="hover:text-gray-900">
            About
          </a>
          <a href="#contact" className="hover:text-gray-900">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center max-w-2xl">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Build, Test & Deploy profitable Trading Strategies Faster
        </h2>
        <h2 className="text-5xl font-extrabold text-green-500 mb-6">
          WITHOUT CODE!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          StratBlocks is a new way to build, backtest and optimise trading
          strategies - WITHOUT CODE.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-2xl shadow hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} StratBlocks. All rights reserved.
      </footer>
    </div>
  );
}
