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
              <a href="/meet-the-testers" className="text-gray-600 hover:text-gray-900">Meet the Testers</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Find out what's confusing, broken, or slowing users down before you launch
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Skip the $20k UX agency and the generic survey takers. Get product-focused feedback
            from real humans in your target audience—with clear issues, priorities, and what to fix.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://buy.stripe.com/fZu00jaVScL35xe5JQe7m0r">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get feedback in 48 hours
              </button>
            </a>
          </div>
          <p className="text-gray-600 mt-4 text-lg">
            <em>Early-January price: $99 one time fee. Limited slots.</em>
          </p>
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
              <h3 className="text-xl font-semibold mb-4">Send us your product</h3>
              <p className="text-gray-600">
                Once you pay, you'll be directed to a link to tell us who you're building for and instructions to test it out. No scripts, no recruiting, no long intake forms.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">We match real users who try it</h3>
              <p className="text-gray-600">
                People who match your target audience use your product and record what happens—no incentive-chasing survey takers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Get actionable feedback</h3>
              <p className="text-gray-600">
                Screen recordings + written critique focused on UX, clarity, friction, onboarding, and what breaks trust... in your inbox within 48 hours.
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
                Why not just hire a UX agency?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Because you don't need a $20k research report written by product people.
                You need to know what actual users trip over so you can ship fixes this week.{' '}
                <a href="/meet-the-testers" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                  Meet your reviewer →
                </a>
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Real humans, not anonymous testers.</strong> People who'd actually use your product, not doing it for $5.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Product-focused critique.</strong> Not vague opinions—specific issues with UX, clarity, friction, and trust.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Actionable output.</strong> Clear priorities and concrete suggestions, not 40-slide decks.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Zero effort on your end.</strong> No scripts, no recruiting, no workshops. Just send a link.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">What You Get</h3>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <p className="font-semibold text-gray-900">Screen recordings</p>
                  <p className="text-gray-600 text-sm">Watch exactly where users get stuck or confused</p>
                </div>
                <div className="border-b pb-4">
                  <p className="font-semibold text-gray-900">Product critique</p>
                  <p className="text-gray-600 text-sm">UX, onboarding, clarity, trust issues—what needs fixing</p>
                </div>
                <div className="border-b pb-4">
                  <p className="font-semibold text-gray-900">Prioritized issues</p>
                  <p className="text-gray-600 text-sm">What's breaking the experience vs. nice-to-haves</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Concrete suggestions</p>
                  <p className="text-gray-600 text-sm">Specific changes you can make, not generic advice</p>
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
              Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Pay once, get feedback. No subscriptions or hidden fees.
            </p>
          </div>

          <div className="flex justify-center max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-lg transition max-w-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Single Review</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$99</span>
              </div>
              <p className="text-gray-600 mb-6">Full onboarding and product feedback loop</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Britt tests your product</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">10-15 min Screen recording</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Written product critique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Issues + suggestions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">48-hour delivery</span>
                </li>
              </ul>
              <a href="https://buy.stripe.com/fZu00jaVScL35xe5JQe7m0r" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
                  Get Started
                </button>
              </a>
            </div>

            {/* TEMPORARILY HIDDEN - Pro Plan - Most Popular */}
            {/* <div className="bg-white rounded-2xl border-2 border-blue-600 p-8 relative hover:shadow-xl transition transform md:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$249</span>
              </div>
              <p className="text-gray-600 mb-6">Get patterns from 3 users</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">3 users from your target audience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Screen recordings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Written product critique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Prioritized issues + suggestions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">24-hour delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">User demographics</span>
                </li>
              </ul>

              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
            </div> */}

            {/* TEMPORARILY HIDDEN - Deep Dive Plan */}
            {/* <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Deep Dive</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$599</span>
              </div>
              <p className="text-gray-600 mb-6">Find everything before launch</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">10 users from your target audience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Screen recordings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Written product critique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Analysis of patterns across all users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">Prioritized issues + suggestions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">12-hour delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">User demographics</span>
                </li>
              </ul>

              <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
                Get Started
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ship with confidence
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Find the issues that'll tank your launch before you hit publish.
          </p>
          <a href="https://buy.stripe.com/fZu00jaVScL35xe5JQe7m0r">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-lg">
              Submit Your Product
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Rate My Product</h3>
              <p className="text-sm">
                Find out what's confusing, broken, or slowing users down—before you launch.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="/meet-the-testers" className="hover:text-white">Meet the Testers</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="mailto:brittanyjoiner15@gmail.com" className="hover:text-white">Contact</a></li>
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
