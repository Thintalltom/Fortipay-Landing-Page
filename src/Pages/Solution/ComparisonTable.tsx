import  { Fragment } from 'react'
export interface ComparisonTableColumn {
  title: string
  backgroundColor: string
  textColor: string
}
export interface ComparisonTableRow {
  feature: string
  columns: string[]
}
export interface ComparisonTableProps {
  columns: ComparisonTableColumn[]
  rows: ComparisonTableRow[]
}
export function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  return (
    <div className="w-full max-w-[1400px] mx-auto flex mb-[30px]">
      <div className="grid grid-cols-[250px_1fr_1fr] gap-0 flex-1 border border-gray-200 rounded-[12px] overflow-hidden">
        <div className="p-4 font-bold text-[20px] text-[#2A2A2A]  font-[Manrope]">Features</div>
        {columns.map((column, index) => (
          <div
            key={index}
            className={`p-4 font-bold text-[20px] text-[#2A2A2A]  font-[Manrope]  ${index === 0 ? 'rounded' : ''} ${index === columns.length - 1 ? 'rounded' : ''}`}
            style={{
              backgroundColor: column.backgroundColor,
              color: column.textColor,
            }}
          >
            {column.title}
          </div>
        ))}
        {rows.map((row, rowIndex) => (
          <Fragment key={rowIndex}>
            <div className="p-4 border border-gray-200 text-[16px] font-semibold font-[Lato] text-[#2A2A2A]">
              {row.feature}
            </div>
            {row.columns.map((content, colIndex) => (
              <div
                key={colIndex}
                className="p-4 border border-gray-200"
                style={{
                  backgroundColor: columns[colIndex].backgroundColor,
                  color: columns[colIndex].textColor,
                }}
              >
                {content}
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}