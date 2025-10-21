import { Sidebar } from '../Privacy/SideBar'
import { TermsSection } from '../Privacy/TermSection'
export function TermsPage() {
  const sections = [
    {
      id: 'introduction',
      number: 1,
      title: 'Introduction',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis.',
    },
    {
      id: 'acceptance',
      number: 2,
      title: 'Acceptance of Terms',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis.',
    },
    {
      id: 'changes',
      number: 3,
      title: 'Changes to Terms',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis.',
    },
    {
      id: 'privacy',
      number: 4,
      title: 'Privacy Policy',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis.',
    },
    {
      id: 'use-of-services1',
      number: 5,
      title: 'Use of Services',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis.',
    },
    {
      id: 'use-of-services2',
      number: 6,
      title: 'Use of Services',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis.',
    },
    {
      id: 'use-of-services3',
      number: 7,
      title: 'Use of Services',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis.',
    },
    {
      id: 'use-of-services4',
      number: 8,
      title: 'Use of Services',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis.',
    },
    {
      id: 'use-of-services5',
      number: 9,
      title: 'Use of Services',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis.',
    },
    {
      id: 'use-of-services6',
      number: 10,
      title: 'Use of Services',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis.',
    },
    {
      id: 'contact-information',
      number: 11,
      title: 'Contact Information',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis. Praesent sagittis ipsum et nulla vestibulum, sed imperdiet turpis mollis.',
    },
  ]
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
        <Sidebar sections={sections} onSectionClick={handleScrollToSection} />
      </div>
      <div className="md:w-3/4">
        {sections.map((section) => (
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
