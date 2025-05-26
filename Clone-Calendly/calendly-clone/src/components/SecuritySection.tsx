"use client"

import { Button } from "@/components/ui/button"

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-300 rounded-full opacity-20 animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-300 rounded-full opacity-20 animate-pulse delay-700" />
        <div className="absolute bottom-1/3 left-1/2 w-40 h-40 bg-blue-300 rounded-full opacity-20 animate-pulse delay-500" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
          Power up your scheduling
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Get started in seconds — for free.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
          >
            Sign up for free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
          >
            Get a demo
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SecuritySection
