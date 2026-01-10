export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">Rate My Product</h1>
            <nav className="flex gap-6">
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900">Benefits</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Get Real Feedback From Real Users
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect product builders with enthusiastic testers who provide authentic feedback,
            screen recordings, and detailed insights to help you improve your product.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Submit Your Product
            </button>
            <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Submit Your Product</h3>
              <p className="text-gray-600">
                Builders submit their product with details about what kind of feedback they need.
                Choose your testing criteria and select your package.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Testers Try Your Product</h3>
              <p className="text-gray-600">
                Matched testers from your target audience try your product while recording their
                onboarding experience and documenting their thoughts.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Receive Detailed Feedback</h3>
              <p className="text-gray-600">
                Get video recordings of the onboarding experience plus comprehensive written
                feedback about what works and what needs improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                For Product Builders
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Stop guessing what users think. Get authentic, unfiltered feedback from real people
                who match your target audience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Video Recordings:</strong> Watch real users navigate your onboarding flow
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Detailed Insights:</strong> Get written feedback on UX, features, and first impressions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Target Audience:</strong> Feedback from users who match your ideal customer profile
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Fast Turnaround:</strong> Receive feedback within days, not weeks
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">What You Get</h3>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <p className="font-semibold text-gray-900">Screen Recording</p>
                  <p className="text-gray-600 text-sm">Full onboarding session capture</p>
                </div>
                <div className="border-b pb-4">
                  <p className="font-semibold text-gray-900">Written Feedback</p>
                  <p className="text-gray-600 text-sm">Detailed thoughts on UX and features</p>
                </div>
                <div className="border-b pb-4">
                  <p className="font-semibold text-gray-900">Pain Points</p>
                  <p className="text-gray-600 text-sm">What confused or frustrated testers</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Suggestions</p>
                  <p className="text-gray-600 text-sm">Ideas for improvement from fresh eyes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the package that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$99</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for testing a single feature</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">1 tester review</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Video recording of onboarding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Written feedback report</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Basic ratings (3 categories)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">48-hour turnaround</span>
                </li>
              </ul>

              <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
                Get Started
              </button>
            </div>

            {/* Pro Plan - Most Popular */}
            <div className="bg-white rounded-2xl border-2 border-blue-600 p-8 relative hover:shadow-xl transition transform md:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$249</span>
              </div>
              <p className="text-gray-600 mb-6">Comprehensive feedback from multiple users</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">3 tester reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Video recordings of onboarding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Detailed written feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Comprehensive ratings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">24-hour turnaround</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Tester demographics</span>
                </li>
              </ul>

              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$599</span>
              </div>
              <p className="text-gray-600 mb-6">Deep insights for critical launches</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">10 tester reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Video recordings & screen shares</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">In-depth analysis report</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Full rating breakdown</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">12-hour turnaround</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Tester demographics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>

              <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Real User Feedback?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join product builders who are shipping better products with authentic user insights.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-lg">
            Submit Your Product
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Rate My Product</h3>
              <p className="text-sm">
                Get authentic user feedback to build better products. Real users, real insights, real results.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="#benefits" className="hover:text-white">Benefits</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2026 Rate My Product. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
