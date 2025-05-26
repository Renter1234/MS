"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-lg">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Easy scheduling ahead
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join 20 million professionals who easily book meetings with the #1 scheduling tool.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/signup" className="flex-1 sm:flex-none">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
                >
                  <Image
                    src="https://ext.same-assets.com/2319160034/624388827.svg"
                    alt="Google"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Sign up with Google
                </Button>
              </Link>
              <div className="text-center sm:text-left text-gray-500 text-sm self-center">
                or
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link href="/signup">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
                >
                  Sign up free with email.
                </Button>
              </Link>
              <Link href="/contact/demo">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto text-gray-700 hover:text-gray-900 px-8 py-4 text-lg font-semibold underline"
                >
                  Get a demo
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              No credit card required
            </p>

            {/* Feature highlights */}
            <div className="mt-12 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Share your booking page</h3>
                  <p className="text-gray-600 text-sm">
                    Share your scheduling link directly with invitees, or embed your availability in an email or on your website.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Reduce no-shows and stay on track</h3>
                  <p className="text-gray-600 text-sm">
                    Schedule meeting reminders, follow-up emails, or SMS messages to improve meeting attendance and results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <Image
                src="https://ext.same-assets.com/2319160034/2771814290.webp"
                alt="Share your booking page"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg shadow-2xl"
                priority
              />

              {/* Floating notification cards */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-900">Meeting confirmed</div>
                    <div className="text-xs text-gray-500">with Sarah Johnson</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-3 animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-900">New booking</div>
                    <div className="text-xs text-gray-500">Tomorrow at 2pm</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-60 animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-40 animate-pulse delay-300" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
