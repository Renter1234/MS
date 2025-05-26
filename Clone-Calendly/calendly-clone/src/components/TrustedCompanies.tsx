"use client"

import Image from "next/image"

const TrustedCompanies = () => {
  const companies = [
    {
      name: "Lyft",
      logo: "https://ext.same-assets.com/2319160034/575572586.svg"
    },
    {
      name: "L'Oreal",
      logo: "https://ext.same-assets.com/2319160034/2802321541.svg"
    },
    {
      name: "Dropbox",
      logo: "https://ext.same-assets.com/2319160034/569729385.svg"
    },
    {
      name: "Company",
      logo: "https://ext.same-assets.com/2319160034/3923543323.svg"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-600 text-lg font-medium mb-12">
          Trusted by more than 100,000 of the world's leading organizations
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {companies.map((company, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate for seamless scroll effect */}
          {companies.map((company, index) => (
            <div key={`duplicate-${index}`} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedCompanies
