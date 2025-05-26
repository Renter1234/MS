"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  const footerSections = [
    {
      title: "Features",
      links: [
        { name: "Scheduling automation", href: "/features/scheduling" },
        { name: "Customizable availability", href: "/features/availability" },
        { name: "Mobile apps", href: "/features/mobile-apps" },
        { name: "Browser extensions", href: "/features/browser-extensions" },
        { name: "Meeting routing", href: "/features/routing" },
        { name: "Event Types", href: "/features/event-types" },
        { name: "Email & website embeds", href: "/features/embed-options" },
        { name: "Reminders & follow-ups", href: "/features/workflows" },
        { name: "Meeting polls", href: "/features/meeting-polls" },
        { name: "Analytics", href: "/features/analytics" },
        { name: "Admin management", href: "/features/admin-management" }
      ]
    },
    {
      title: "Integrations",
      links: [
        { name: "Google ecosystem", href: "/integration?search=google" },
        { name: "Microsoft ecosystem", href: "/integration?search=microsoft" },
        { name: "Calendars", href: "/integration#calendars" },
        { name: "Video conferencing", href: "/integration#video-conferencing" },
        { name: "Payments", href: "/integration#payments" },
        { name: "Sales & CRM", href: "/integration#sales-and-crm" },
        { name: "Recruiting & ATS", href: "/integration#recruiting-and-ats" },
        { name: "Email messaging", href: "/integration#email-messaging" },
        { name: "Embed Calendly", href: "/integration#embed-calendly" },
        { name: "Analytics", href: "/integration#analytics" },
        { name: "API & connectors", href: "/integration#api-and-connectors" },
        { name: "Security & compliance", href: "/integration#security-and-compliance" }
      ]
    },
    {
      title: "Calendly",
      links: [
        { name: "Pricing", href: "/pricing" },
        { name: "Product overview", href: "/features" },
        { name: "Solutions", href: "/solutions" },
        { name: "For individuals", href: "/solutions/individuals" },
        { name: "For small businesses", href: "/solutions/small-business" },
        { name: "For enterprise", href: "/solutions/enterprise" },
        { name: "Compare", href: "/compare" },
        { name: "Security", href: "/security" },
        { name: "Sign up for free", href: "/signup" },
        { name: "Talk to sales", href: "/contact" },
        { name: "Get a demo", href: "/contact/demo" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help center", href: "/help" },
        { name: "Resource center", href: "/resources" },
        { name: "Blog", href: "/blog" },
        { name: "Customer stories", href: "/customers" },
        { name: "Calendly community", href: "https://community.calendly.com" },
        { name: "Developer tools", href: "https://developer.calendly.com" },
        { name: "Release notes", href: "/release-notes" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About us", href: "/about" },
        { name: "Leadership", href: "/leadership" },
        { name: "Careers", href: "https://careers.calendly.com", badge: "We're hiring!" },
        { name: "Newsroom", href: "/newsroom" },
        { name: "Become a partner", href: "/partners/contact" },
        { name: "Contact us", href: "/contact-us" }
      ]
    }
  ]

  const downloads = [
    { name: "App Store", href: "https://apps.apple.com/app/calendly-mobile/id1451094657" },
    { name: "Google Play", href: "https://play.google.com/store/apps/details?id=com.calendly.app" },
    { name: "Chrome extension", href: "https://chromewebstore.google.com/detail/calendly-meeting-scheduli/cbhilkcodigmigfbnphipnnmamjfkipp" },
    { name: "Edge extension", href: "https://microsoftedge.microsoft.com/addons/detail/calendly-meeting-schedul/hfngfpepejakabkhocoamdlnipilcpga" },
    { name: "Firefox extension", href: "https://addons.mozilla.org/en-US/firefox/addon/calendly-meeting-scheduling" },
    { name: "Outlook add-in", href: "https://appsource.microsoft.com/en-us/product/office/WA104381446" }
  ]

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/calendly", icon: "🐦" },
    { name: "Facebook", href: "https://www.facebook.com/calendly", icon: "📘" },
    { name: "Instagram", href: "https://www.instagram.com/calendly", icon: "📷" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/calendly", icon: "💼" },
    { name: "YouTube", href: "https://www.youtube.com/c/Calendly", icon: "📺" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center"
                    >
                      {link.name}
                      {link.badge && (
                        <span className="ml-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Downloads Section */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Downloads</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {downloads.map((download, index) => (
              <Link
                key={index}
                href={download.href}
                className="text-gray-300 hover:text-white transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {download.name}
              </Link>
            ))}
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-gray-300 hover:text-white transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </div>

          {/* Language & Legal */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-4">
              <select className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-sm">
                <option>English</option>
                <option>Français</option>
                <option>Español</option>
                <option>Deutsch</option>
                <option>Português</option>
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/legal/privacy-notice" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/legal" className="hover:text-white">
                Legal
              </Link>
              <Link href="https://www.calendlystatus.com" className="hover:text-white">
                Status
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            Copyright Calendly 2025
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
