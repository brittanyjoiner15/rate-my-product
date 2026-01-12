export default function MeetTheTesters() {
  const testers = [
    {
      name: "Britt Joiner",
      role: "Developer and Solution Arhcitext",
      location: "Richmond, VA",
      background: "Brittany is a full-stack developer with years of experience building 0 applications and developing low-code solutions. She loves exploring new technologies and contributing to projects.",
      interests: ["SaaS tools", "Low code builders", "Productivity apps"],
      image: "👩‍💻",
      link: "https://brittjoiner.com/",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <a href="/">
              <h1 className="text-2xl font-bold text-blue-600">Rate My Product</h1>
            </a>
            <nav className="flex gap-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="/#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="/#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Meet the Testers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people who actually use products like yours. Not anonymous survey takers or paid clickers—
            these are builders, operators, and power users who give you feedback you can actually use.
          </p>
        </div>
      </section>

      {/* Testers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testers.map((tester, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{tester.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{tester.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{tester.role}</p>
                <p className="text-sm text-gray-500 mb-4">{tester.location}</p>
                <p className="text-gray-700 mb-4">{tester.background}</p>
                <div className="border-t pt-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Tests</p>
                  <div className="flex flex-wrap gap-2">
                    {tester.interests.map((interest, i) => (
                      <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={tester.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition text-sm">
                    View Profile
                  </button>
                </a>  
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get feedback from people like these
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We match your product with testers who'd actually be your users.
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
                <li><a href="/#how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="/#benefits" className="hover:text-white">Why Us</a></li>
                <li><a href="/#pricing" className="hover:text-white">Pricing</a></li>
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
