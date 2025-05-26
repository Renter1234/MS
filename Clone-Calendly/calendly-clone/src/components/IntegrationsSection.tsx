"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const IntegrationsSection = () => {
  const integrations = [
    { name: "Zoom", icon: "🎥" },
    { name: "Salesforce", icon: "☁️" },
    { name: "Google Calendar", icon: "📅" },
    { name: "Slack", icon: "💬" },
    { name: "Microsoft Teams", icon: "👥" },
    { name: "Gmail", icon: "✉️" },
    { name: "Outlook", icon: "📧" },
    { name: "Chrome", icon: "🌐" },
    { name: "Webex", icon: "📹" },
    { name: "HubSpot", icon: "🎯" },
    { name: "Zapier", icon: "⚡" },
    { name: "Greenhouse", icon: "🌱" },
    { name: "LinkedIn", icon: "💼" },
    { name: "Stripe", icon: "💳" },
    { name: "Typeform", icon: "📝" },
    { name: "Intercom", icon: "💭" },
    { name: "ActiveCampaign", icon: "📊" },
    { name: "PayPal", icon: "💰" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Connect Calendly to the tools you already use
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Boost productivity with 100+ integrations
          </p>
          <Button variant="outline" className="mb-12">
            View all integrations
          </Button>
        </div>

        {/* Integration Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {integration.icon}
              </div>
              <span className="text-xs text-gray-600 text-center">
                {integration.name}
              </span>
            </div>
          ))}
        </div>

        {/* Featured Integrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Google suite
                </h3>
                <p className="text-gray-600 mb-4">
                  Get your job done faster by connecting Calendly to Google Calendar, Meet, Analytics, and more.
                </p>
                <Link href="/integration/google">
                  <Button variant="outline" size="sm">
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Microsoft suite
                </h3>
                <p className="text-gray-600 mb-4">
                  Make your day easier with Calendly integrations for Microsoft Teams, Outlook, Azure SSO, and more.
                </p>
                <Link href="/integration/microsoft">
                  <Button variant="outline" size="sm">
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default IntegrationsSection
