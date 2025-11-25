import { useState, useEffect } from 'react'
import { Sidebar } from './SideBar'
import { TermsSection } from './TermSection'
import { useContentful } from '../../contexts/ContentfulContext'

export function PrivacyPage() {
  const { privacyJson } = useContentful()
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = privacyJson.map(section => section.id)
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Set initial active section
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [privacyJson])

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <div className="container mx-auto p-[80px] flex flex-col md:flex-row gap-6 mt-[-100px]">
      <div className="md:w-1/4 md:sticky md:top-8 self-start">
        <Sidebar 
          sections={privacyJson} 
          onSectionClick={handleScrollToSection}
          activeSection={activeSection}
        />
      </div>
      <div className="md:w-3/4">
        {privacyJson.map((section) => (
          <TermsSection
            key={section.id}
            id={section.id}
            number={section.number}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  )
}
