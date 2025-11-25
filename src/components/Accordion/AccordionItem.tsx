// import React from 'react'
import { MinusIcon, PlusIcon } from 'lucide-react'
interface AccordionItemProps {
  title: string
  content: string
  isActive: boolean
  onClick: () => void
}
export const AccordionItem = ({
  title,
  content,
  isActive,
  onClick,
}: AccordionItemProps) => {
  return (
    <div
      className={`border-b border-gray-200 last:border-b-0 ${isActive ? 'bg-blue-50' : 'bg-gray-100'}`}
    >
      <button
        className="flex w-full items-center justify-between p-4 text-left"
        onClick={onClick}
        aria-expanded={isActive}
      >
        <div className="flex items-center">
          <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
            {isActive ? <MinusIcon size={16} /> : <PlusIcon size={16} />}
          </div>
          <span className="text-sm font-medium text-gray-700">{title}</span>
        </div>
      </button>
      {isActive && (
        <div className="px-12 pb-4 pt-0">
          <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  )
}
