'use client';

import { PageViewTracker } from '@/lib/components/page-view-tracker';
import { ScrollTracker } from '@/lib/components/scroll-tracker';
import { TrackedLink } from '@/lib/components/tracked-link';
import { TrackedButton } from '@/lib/components/tracked-button';
import { ANALYTICS_EVENTS } from '@/lib/analytics';

export default function MeetTheTesters() {
  const testers = [
    {
      name: "Britt Joiner",
      role: "Product-focused developer and productivity systems builder",
      location: "Washington DC, USA",
      background: [
        "Britt Joiner is a product-focused developer who has spent years building, testing, and breaking SaaS tools, low-code platforms, and productivity systems.",
        "She approaches reviews the same way she evaluates tools for real use. What's confusing. What breaks trust. What silently slows users down.",
        "Because she regularly tests and recommends tools for real workflows, her feedback focuses on practical friction points. Not opinions. Not theory. Just what's getting in the user's way and what to fix first."
      ],
      interests: ["SaaS tools", "Low code builders", "Productivity apps"],
      image: "👩‍💻",
      link: "https://brittjoiner.com/",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageViewTracker pageTitle="Meet the Testers" />
      <ScrollTracker pageTitle="Meet the Testers" />

      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <TrackedLink
              href="/"
              trackingProps={{
                element_text: 'Rate My Product',
                location: 'navigation',
                link_type: 'navigation',
              }}
            >
              <h1 className="text-2xl font-bold text-blue-600">Rate My Product</h1>
            </TrackedLink>
            <nav className="flex gap-6">
              <TrackedLink
                href="/"
                trackingProps={{
                  element_text: 'Home',
                  location: 'navigation',
                  link_type: 'navigation',
                }}
                className="text-gray-600 hover:text-gray-900"
              >
                Home
              </TrackedLink>
              <TrackedLink
                href="/#how-it-works"
                trackingProps={{
                  element_text: 'How It Works',
                  location: 'navigation',
                  link_type: 'navigation',
                }}
                className="text-gray-600 hover:text-gray-900"
              >
                How It Works
              </TrackedLink>
              <TrackedLink
                href="/#pricing"
                trackingProps={{
                  element_text: 'Pricing',
                  location: 'navigation',
                  link_type: 'navigation',
                }}
                className="text-gray-600 hover:text-gray-900"
              >
                Pricing
              </TrackedLink>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Your Reviewer
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
          <div className="flex justify-center">
            {testers.map((tester, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-10 hover:shadow-lg transition max-w-2xl w-full">
                <div className="text-7xl mb-6 text-center">{tester.image}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">{tester.name}</h3>
                <p className="text-blue-600 font-semibold mb-3 text-center text-lg">{tester.role}</p>
                <p className="text-gray-500 mb-6 text-center">{tester.location}</p>
                <div className="mb-6 space-y-4">
                  {Array.isArray(tester.background) ? (
                    tester.background.map((paragraph, i) => (
                      <p key={i} className="text-gray-700 text-lg leading-relaxed">{paragraph}</p>
                    ))
                  ) : (
                    <p className="text-gray-700 text-lg leading-relaxed">{tester.background}</p>
                  )}
                </div>
                <div className="border-t pt-6">
                  <p className="text-sm font-semibold text-gray-500 uppercase mb-3">Tests</p>
                  <div className="flex flex-wrap gap-2">
                    {tester.interests.map((interest, i) => (
                      <span key={i} className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-6">
                  <TrackedLink
                    href={tester.link}
                    trackingProps={{
                      element_text: `View Profile - ${tester.name}`,
                      location: 'testers_page',
                      link_type: 'external',
                      section: 'tester_profile',
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition inline-block"
                  >
                    View Profile
                  </TrackedLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Just Britt Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why is it just Britt right now?
            </h3>
            <p className="text-gray-700 mb-4">
              I'm starting small to validate this service and ensure every review delivers real value.
              Britt is the perfect first tester because she has years of experience working in SaaS and
              constantly tests low-code and productivity tools for various use cases.
            </p>
            <p className="text-gray-700 mb-4">
              She regularly recommends products to improve personal and business productivity and operations,
              so she knows exactly what makes a product intuitive, trustworthy, and worth using—and what
              causes people to bounce.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-6">
              <p className="text-blue-900 font-semibold">
                More testers are coming soon! As the service grows, I'll be adding more experienced
                testers across different industries and use cases to give you diverse perspectives on your product.
              </p>
            </div>
            <div className="mt-6 text-center">
              <TrackedLink
                href="https://britt.fillout.com/t/pPyrN5Crzjus"
                trackingProps={{
                  element_text: 'Apply to be a tester',
                  location: 'testers_page',
                  link_type: 'external',
                  section: 'tester_application',
                }}
                target="_blank"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Apply to be a tester
              </TrackedLink>
            </div>
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
          <TrackedLink
            href="https://buy.stripe.com/fZu00jaVScL35xe5JQe7m0r"
            trackingProps={{
              element_text: 'Submit Your Product',
              location: 'testers_page',
              link_type: 'stripe_checkout',
            }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-lg inline-block"
          >
            Submit Your Product
          </TrackedLink>
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
                <li>
                  <TrackedLink
                    href="/#how-it-works"
                    trackingProps={{
                      element_text: 'How It Works',
                      location: 'footer',
                      link_type: 'footer',
                    }}
                    className="hover:text-white"
                  >
                    How It Works
                  </TrackedLink>
                </li>
                <li>
                  <TrackedLink
                    href="/#benefits"
                    trackingProps={{
                      element_text: 'Why Us',
                      location: 'footer',
                      link_type: 'footer',
                    }}
                    className="hover:text-white"
                  >
                    Why Us
                  </TrackedLink>
                </li>
                <li>
                  <TrackedLink
                    href="/#pricing"
                    trackingProps={{
                      element_text: 'Pricing',
                      location: 'footer',
                      link_type: 'footer',
                    }}
                    className="hover:text-white"
                  >
                    Pricing
                  </TrackedLink>
                </li>
                <li>
                  <TrackedLink
                    href="#"
                    trackingProps={{
                      element_text: 'FAQ',
                      location: 'footer',
                      link_type: 'footer',
                    }}
                    className="hover:text-white"
                  >
                    FAQ
                  </TrackedLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <TrackedLink
                    href="#"
                    trackingProps={{
                      element_text: 'About',
                      location: 'footer',
                      link_type: 'footer',
                    }}
                    className="hover:text-white"
                  >
                    About
                  </TrackedLink>
                </li>
                <li>
                  <TrackedLink
                    href="mailto:brittanyjoiner15@gmail.com"
                    trackingProps={{
                      element_text: 'Contact',
                      location: 'footer',
                      link_type: 'footer',
                    }}
                    className="hover:text-white"
                  >
                    Contact
                  </TrackedLink>
                </li>
                <li>
                  <TrackedLink
                    href="#"
                    trackingProps={{
                      element_text: 'Terms of Service',
                      location: 'footer',
                      link_type: 'footer',
                    }}
                    className="hover:text-white"
                  >
                    Terms of Service
                  </TrackedLink>
                </li>
                <li>
                  <TrackedLink
                    href="#"
                    trackingProps={{
                      element_text: 'Privacy Policy',
                      location: 'footer',
                      link_type: 'footer',
                    }}
                    className="hover:text-white"
                  >
                    Privacy Policy
                  </TrackedLink>
                </li>
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
