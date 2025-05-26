"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const CtaSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Easy
              </h2>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-600">
                ahead
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              We take the work out of connecting with others so you can accomplish more.
            </p>
          </div>

          {/* Right Content - Featured Report */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">📊</span>
              </div>
              <div className="flex-1">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  FEATURED
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2024 Report: The State of Meetings
                </h3>
                <p className="text-gray-600 mb-4">
                  See the latest data on meeting culture and productivity
                </p>
                <Link href="/resources/guides/2024-state-of-meetings-report">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Read the report
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

export default CtaSection
