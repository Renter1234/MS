"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const CustomerStories = () => {
  const stories = [
    {
      stat: "169%",
      description: "return on investment",
      company: "HackerOne",
      image: "https://ext.same-assets.com/2319160034/3941821987.svg",
      link: "/customers/hackerone"
    },
    {
      stat: "160%",
      description: "increase in customers reached",
      company: "Vonage",
      image: "https://ext.same-assets.com/2319160034/3863795888.svg",
      link: "/customers/vonage"
    },
    {
      stat: "20%",
      description: "decrease in scheduling errors",
      company: "UT Austin",
      image: "https://ext.same-assets.com/2319160034/2209289792.svg",
      link: "/customers/ut-austin"
    },
    {
      stat: "8 days",
      description: "reduction in time-to-hire",
      company: "Muck Rack",
      image: "https://ext.same-assets.com/2319160034/3504562113.svg",
      link: "/customers/muck-rack"
    },
    {
      stat: "26%",
      description: "increase in website bookings",
      company: "SmithAI",
      image: "https://ext.same-assets.com/2319160034/912883953.svg",
      link: "/customers/smithai"
    }
  ]

  const securityLogos = [
    { name: "DSS", logo: "https://ext.same-assets.com/2319160034/2746920458.svg" },
    { name: "CCPA", logo: "https://ext.same-assets.com/2319160034/978942663.svg" },
    { name: "ISO", logo: "https://ext.same-assets.com/2319160034/2517486451.svg" }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Discover how businesses grow with Calendly
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learn how teams of all sizes are using Calendly's scheduling automation platform to create value.
          </p>
          <Button variant="outline">
            View customer stories
          </Button>
        </div>

        {/* Customer Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {stories.slice(0, 3).map((story, index) => (
            <Link key={index} href={story.link}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <Image
                    src={story.image}
                    alt={`${story.stat} ${story.description}`}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {story.stat}
                </div>
                <div className="text-gray-600">
                  {story.description}
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Additional Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {stories.slice(3).map((story, index) => (
            <Link key={index} href={story.link}>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <Image
                    src={story.image}
                    alt={story.company}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {story.stat}
                    </div>
                    <div className="text-gray-600">
                      {story.description}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Built to keep your organization secure
          </h3>

          <div className="flex justify-center items-center space-x-8 mb-8">
            {securityLogos.map((badge, index) => (
              <Image
                key={index}
                src={badge.logo}
                alt={badge.name}
                width={60}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Keep your scheduling data secure with enterprise-grade admin management, security integrations,
            data governance, compliance audits, and privacy protections.
          </p>

          <Button variant="outline">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CustomerStories
