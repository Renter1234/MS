"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const ProductDemo = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Connect your calendars",
      description: "Calendly connects up to six calendars to automate scheduling with real-time availability.",
      image: "https://ext.same-assets.com/2319160034/1000763952.webp"
    },
    {
      title: "Add your availability",
      description: "Keep invitees informed of your availability. Take control of your calendar with detailed availability settings, scheduling rules, buffers, and more.",
      image: "https://ext.same-assets.com/2319160034/1866879305.webp"
    },
    {
      title: "Connect conferencing tools",
      description: "Sync your video conferencing tools and set preferences for in-person meetings or calls.",
      image: "https://ext.same-assets.com/2319160034/1593214974.webp"
    },
    {
      title: "Customize your event types",
      description: "Choose from pre-built templates or quickly create custom event types for any meeting you need to schedule.",
      image: "https://ext.same-assets.com/2319160034/3908466952.webp"
    },
    {
      title: "Share your scheduling link",
      description: "Easily book meetings by embedding scheduling links on your website, landing pages, or emails.",
      image: "https://ext.same-assets.com/2319160034/3658400960.webp"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Calendly makes scheduling simple
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Calendly's easy enough for individual users, and powerful enough to meet the needs of
            enterprise organizations — including 86% of the Fortune 500 companies.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            Sign up for free
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps Navigation */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-white shadow-lg border-l-4 border-blue-600'
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                    activeStep === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-2 ${
                      activeStep === index ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm ${
                      activeStep === index ? 'text-gray-600' : 'text-gray-500'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Display */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <Image
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeStep === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDemo
