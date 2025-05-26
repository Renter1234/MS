"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true)

  const plans = [
    {
      name: "Free",
      description: "For personal use",
      price: "Always free",
      yearlyPrice: "Always free",
      popular: false,
      features: [
        "1 calendar connection",
        "Unlimited 1-on-1 meetings",
        "Basic email reminders",
        "Basic scheduling page customization"
      ],
      cta: "Get started",
      ctaVariant: "outline" as const
    },
    {
      name: "Standard",
      description: "For professionals and small teams",
      price: "$10",
      yearlyPrice: "$8",
      billing: "/seat/mo",
      yearlyBilling: "/seat/mo",
      savingsBadge: "Save 16%",
      popular: false,
      features: [
        "Everything in Free",
        "6 calendar connections",
        "Unlimited event types",
        "Custom branding",
        "Email/SMS notifications",
        "Analytics"
      ],
      cta: "Get started",
      ctaVariant: "default" as const
    },
    {
      name: "Teams",
      description: "For growing businesses",
      price: "$16",
      yearlyPrice: "$12",
      billing: "/seat/mo",
      yearlyBilling: "/seat/mo",
      savingsBadge: "Save 20%",
      popular: true,
      features: [
        "Everything in Standard",
        "Team scheduling",
        "Admin management",
        "Advanced analytics",
        "Workflows automation",
        "Round-robin scheduling",
        "Routing forms"
      ],
      cta: "Try for free",
      ctaVariant: "default" as const
    },
    {
      name: "Enterprise",
      description: "For large companies",
      price: "Custom Pricing",
      yearlyPrice: "Custom Pricing",
      startingPrice: "$15k",
      startingBilling: "/yr",
      popular: false,
      features: [
        "Everything in Teams",
        "Advanced security",
        "SAML SSO",
        "Advanced admin controls",
        "API access",
        "Custom contracts",
        "Dedicated support"
      ],
      cta: "Talk to sales",
      ctaVariant: "outline" as const
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Pick the perfect plan for your team
          </h2>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Billed monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Billed yearly
            </span>
            {isYearly && (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Save up to 20%
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-6 ${
                plan.popular
                  ? 'border-2 border-blue-600 shadow-lg'
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  Recommended plan
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {plan.description}
                </p>

                <div className="mb-4">
                  {plan.startingPrice ? (
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {isYearly ? plan.yearlyPrice : plan.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        Starts at
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        {plan.startingPrice}
                        <span className="text-sm text-gray-500">{plan.startingBilling}</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        {isYearly ? plan.yearlyPrice : plan.price}
                      </div>
                      {plan.billing && (
                        <div className="text-sm text-gray-500">
                          {isYearly ? plan.yearlyBilling : plan.billing}
                          {isYearly && plan.savingsBadge && (
                            <span className="ml-2 text-green-600 font-medium">
                              {plan.savingsBadge}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : plan.ctaVariant === 'outline'
                      ? 'border-blue-600 text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                  variant={plan.ctaVariant}
                >
                  {plan.cta}
                </Button>
              </div>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline">
            Learn more on our pricing page
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
