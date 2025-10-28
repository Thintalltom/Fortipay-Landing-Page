import React from 'react'
interface SidebarProps {
  sections: {
    id: string
    number: number
    title: string
  }[]
  onSectionClick?: (id: string) => void
  activeSection?: string
}
export function Sidebar({ sections, onSectionClick, activeSection }: SidebarProps) {
  const handleClick = (id: string) => {
    if (onSectionClick) {
      onSectionClick(id)
    }
  }
  return (
    <div className="  p-4 rounded">
      <h2 className="text-[16px] font-semibold mb-4 text-[#BFBFBF] font-[Lato]"> Table of Contents</h2>
      <ul className="space-y-4 border-l-2 border-gray-300 pl-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => handleClick(section.id)}
              className={`text-left hover:text-[#03377D] w-full font-[Lato] font-regular text-[#888888] text-[16px] pl-4 py-2 -ml-4 transition-colors ${
                activeSection === section.id ? 'border-l-4 border-[#03377D] text-[#03377D] font-semibold' : ''
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}