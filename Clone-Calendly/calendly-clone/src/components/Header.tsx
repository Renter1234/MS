"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ChevronDown, Menu, X } from "lucide-react"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">Calendly</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <div className="row-span-3">
                        <div className="font-semibold mb-2">Scheduling</div>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Simplified booking</div>
                          <div className="text-sm text-gray-600">Easy scheduling for everyone</div>
                        </NavigationMenuLink>
                        <div className="font-semibold mb-2 mt-4">Platform</div>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Integrations</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Mobile app</div>
                        </NavigationMenuLink>
                      </div>
                      <div>
                        <div className="font-semibold mb-2">Product overview</div>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Why choose Calendly</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <div>
                        <div className="font-semibold mb-2">By business size</div>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Individuals</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Small business</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Large companies</div>
                        </NavigationMenuLink>
                      </div>
                      <div>
                        <div className="font-semibold mb-2">By team</div>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Sales</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Marketing</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Customer success</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/for-enterprise" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-700 hover:text-gray-900 font-medium">
                      Enterprise
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <div>
                        <div className="font-semibold mb-2">Explore</div>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Customer stories</div>
                          <div className="text-sm text-gray-600">See how businesses are growing with Calendly</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Blog</div>
                          <div className="text-sm text-gray-600">Read the latest product and company news</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Resource library</div>
                          <div className="text-sm text-gray-600">Access ebooks, webinars, guides, videos, and more</div>
                        </NavigationMenuLink>
                      </div>
                      <div>
                        <div className="font-semibold mb-2">Learn & connect</div>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Help Center</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">API & Developer tools</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Calendly Community</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Contact us</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-700 hover:text-gray-900 font-medium">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
                Talk to sales
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 font-medium">
                Get started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
              <Link href="/product" className="block px-3 py-2 text-gray-700">
                Product
              </Link>
              <Link href="/solutions" className="block px-3 py-2 text-gray-700">
                Solutions
              </Link>
              <Link href="/enterprise" className="block px-3 py-2 text-gray-700">
                Enterprise
              </Link>
              <Link href="/resources" className="block px-3 py-2 text-gray-700">
                Resources
              </Link>
              <Link href="/pricing" className="block px-3 py-2 text-gray-700">
                Pricing
              </Link>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <Link href="/contact" className="block px-3 py-2 text-gray-700">
                  Talk to sales
                </Link>
                <Link href="/login" className="block px-3 py-2 text-gray-700">
                  Log In
                </Link>
                <Link href="/signup" className="block px-3 py-2 mt-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Get started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
