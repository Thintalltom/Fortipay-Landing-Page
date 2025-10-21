import  { useState } from 'react'
import { AccordionItem } from './AccordionItem'
const ACCORDION_DATA = [
  {
    title: 'Ping sorry company want do',
    content:
      "Criticality principles can dunder do explore. 4-blocker scope developing put t-shaped were wider zoom end sky. Only follow meaningful horse solutions meat red-flag at not. Value-added buy-in reach picture quick-win effects innovation. Live shark performance closing in enable boys flesh. Line strategies six at back into hanging ground got. Synergy can on globalize meaningful. At field client dangerous not office create manage good. Tiger bed ideal run agile fire. Q1 too we've opportunity just goto weaponize first creep. Pee skulls metal centric ourselves got read. Not ui back globalize masking is speed left I'm.",
  },
  {
    title: 'Ping sorry company want do',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, quam nisl ultricies nunc, vitae ultricies nisl nunc eget nisl.',
  },
  {
    title: 'Ping sorry company want do',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, quam nisl ultricies nunc, vitae ultricies nisl nunc eget nisl.',
  },
  {
    title: 'Ping sorry company want do',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, quam nisl ultricies nunc, vitae ultricies nisl nunc eget nisl.',
  },
  {
    title: 'Ping sorry company want do',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, quam nisl ultricies nunc, vitae ultricies nisl nunc eget nisl.',
  },
]
export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }
  return (
    <div className="space-y-4">
      {ACCORDION_DATA.map((item, index) => (
        <div key={index} className="border border-blue-200 rounded-md overflow-hidden">
          <AccordionItem
            title={item.title}
            content={item.content}
            isActive={activeIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        </div>
      ))}
    </div>
  )
}
