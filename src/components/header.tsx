"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-slate-800 text-white z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <h1 className="text-xl font-bold">Reckers Projectmanagement</h1>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-blue-400 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-blue-400 transition-colors"
              >
                Over Ons
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('services')}
                className="hover:text-blue-400 transition-colors"
              >
                Diensten
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left py-2 px-4 hover:bg-slate-700 rounded transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left py-2 px-4 hover:bg-slate-700 rounded transition-colors"
                >
                  Over Ons
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left py-2 px-4 hover:bg-slate-700 rounded transition-colors"
                >
                  Diensten
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left py-2 px-4 hover:bg-slate-700 rounded transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}