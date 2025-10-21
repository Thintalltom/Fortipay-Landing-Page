import React from 'react'
interface TermsSectionProps {
  id: string
  number: number
  title: string
  content: string
}
export function TermsSection({
  id,
  number,
  title,
  content,
}: TermsSectionProps) {
  return (
    <div
      id={id}
      className=" p-6  mb-6 scroll-mt-4"
    >
      <h2 className="text-[24px] font-medium mb-4 text-[#03377D] font-[Manrope]">
        {number}. {title}
      </h2>
      <p className="text-[#848484] font-[Lato] font-regular">{content}</p>
    </div>
  )
}
