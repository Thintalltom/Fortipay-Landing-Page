
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
  const formatContent = (text: string) => {
    return text
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('💠')) {
          return (
            <div key={index} className="font-semibold text-[#0259cc] mt-4 mb-2">
              {line}
            </div>
          )
        }
        if (line.startsWith('•')) {
          return (
            <div key={index} className="ml-4 mb-1">
              {line}
            </div>
          )
        }
        if (line.trim() === '') {
          return <br key={index} />
        }
        return (
          <div key={index} className="mb-2">
            {line}
          </div>
        )
      })
  }

  return (
    <div
      id={id}
      className="p-6 mb-6 scroll-mt-4"
    >
      <h2 className="text-[24px] font-medium mb-4 text-[#0259cc] font-[Manrope]">
        {number}. {title}
      </h2>
      <div className="text-[#848484] font-[Lato] font-regular">
        {formatContent(content)}
      </div>
    </div>
  )
}
