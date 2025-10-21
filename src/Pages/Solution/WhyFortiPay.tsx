import TagButton from '../../components/TagButton'
import {
  ComparisonTable,
  type ComparisonTableColumn,
  type ComparisonTableRow,
} from './ComparisonTable'
const WhyFortiPay = () => {
      const columns: ComparisonTableColumn[] = [
        {
          title: 'Legacy Fraud Tools',
          backgroundColor: '#E8F4F8',
          textColor: '#1E3A5F',
        },
        {
          title: 'FortiPay',
          backgroundColor: '#003B73',
          textColor: '#FFFFFF',
        },
      ]
      const rows: ComparisonTableRow[] = [
        {
          feature: 'Accessibility',
          columns: [
            'Expensive, built only for enterprise-level companies.',
            'Affordable, designed for SMBs and growing businesses.',
          ],
        },
        {
          feature: 'Integration Speed',
          columns: [
            'Complex setup requiring dedicated engineering teams.',
            'Quick SDK integration—live in minutes, not months.',
          ],
        },
        {
          feature: 'Fraud Detection',
          columns: [
            'Relies on outdated, static rules.',
            'AI-powered, real-time behavioral and device analysis.',
          ],
        },
        {
          feature: 'Risk Scoring',
          columns: [
            'Limited transparency on scoring decisions.',
            'Clear, detailed FortiScores with context and reasons.',
          ],
        },
        {
          feature: 'User Experience',
          columns: [
            'Rigid processes that can block legitimate customers.',
            'Smart verification minimizes friction for good users.',
          ],
        },
        {
          feature: 'Support & Updates',
          columns: [
            'Slow updates and minimal customer support.',
            'Responsive support and continuous system improvements.',
          ],
        },
        {
          feature: 'Cost Efficiency',
          columns: [
            'High licensing fees and hidden costs.',
            'Transparent, usage-based pricing tailored to your needs.',
          ],
        },
      ]
  return (
    <div className='px-[80px] pt-[80px] pb-[40px]'>
        <div className='flex flex-col justify-center items-center gap-[20px]'>
            <TagButton>FEATURES OVERVIEW</TagButton>
            <h3 className='text-[#03377D] font-[Manrope] text-[46px] font-medium'>Why FortiPay is Different</h3>
            <p className='text-[#848484] font-[Lato] font-normal text-[16px]'>Manager eager one search timepoint race. Goalposts regroup do yet invite vec language slipstream web hop.</p>

             <ComparisonTable columns={columns} rows={rows} />
        </div>

    </div>
  )
}

export default WhyFortiPay