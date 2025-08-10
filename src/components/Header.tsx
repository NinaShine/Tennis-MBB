import React from 'react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo ou photo du club */}
        <div className="flex items-center space-x-2">
          <img
            src="/mbb-logo.png" // Mets ici le chemin exact de ta photo
            alt="Club de Tennis"
            className="h-12 object-contain"
          />
          <span className="font-semibold text-gray-900">Tennis Booking</span>
        </div>

        {/* Crédit */}
        <nav className="text-sm text-gray-600">
          Fait par <strong>Nina SALHI</strong>
        </nav>
      </div>
    </header>
  )
}
