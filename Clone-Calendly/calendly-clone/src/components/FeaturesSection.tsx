"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "Browser extensions",
      description: "Quickly find and share scheduling links from your inbox, LinkedIn, CRM, and more.",
      image: "https://ext.same-assets.com/2319160034/3641730847.webp",
      learnMoreLink: "/features/browser-extensions"
    },
    {
      title: "Automated workflows",
      description: "Boost attendance and save time by automating reminders and follow-ups.",
      image: "https://ext.same-assets.com/2319160034/426121031.webp",
      learnMoreLink: "/features/workflows"
    },
    {
      title: "Routing forms",
      description: "Instantly qualify, route, and schedule meetings with high-value leads and customers directly from your website.",
      image: "https://ext.same-assets.com/2319160034/4034018924.webp",
      learnMoreLink: "/features/routing"
    },
    {
      title: "Round robin & collective events",
      description: "Pool your team's schedule together to offer more booking options to customers, or automatically combine availability to quickly schedule co-hosted calls.",
      image: "https://ext.same-assets.com/2319160034/2149252361.webp",
      learnMoreLink: "/features/scheduling"
    },
    {
      title: "Admin management",
      description: "Team admins enjoy tools to streamline onboarding, ensure consistency, track scheduling trends, maintain security standards, and more.",
      image: "https://ext.same-assets.com/2319160034/2173192528.webp",
      learnMoreLink: "/features/admin-management"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            More than a scheduling link
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Calendly's functionality goes way beyond just a scheduling link, with customizable,
            automated features to help you and your team achieve goals faster.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            Sign up for free
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-white shadow-lg border-l-4 border-blue-600'
                    : 'bg-white/80 hover:bg-white hover:shadow-md'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <h3 className={`text-xl font-semibold mb-3 ${
                  activeFeature === index ? 'text-gray-900' : 'text-gray-700'
                }`}>
                  {feature.title}
                </h3>
                <p className={`mb-4 ${
                  activeFeature === index ? 'text-gray-600' : 'text-gray-500'
                }`}>
                  {feature.description}
                </p>
                <Link href={feature.learnMoreLink}>
                  <Button
                    variant="outline"
                    size="sm"
                    className={activeFeature === index ? 'border-blue-600 text-blue-600' : ''}
                  >
                    Learn more
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Feature Image */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <Image
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeFeature === index ? 'bg-blue-600' : 'bg-gray-300'
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

export default FeaturesSection
