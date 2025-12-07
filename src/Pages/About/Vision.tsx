
import TagButton from '../../components/TagButton'
import FeatureGrid from './FeatureGrid'
const Vision = () => {
    return (
        <div className='p-[80px]'>

            <div className='flex justify-center flex-col items-center'>
                <TagButton>FEATURES OVERVIEW</TagButton>
                <h3 className='text-[#0259cc] font-[Manrope] font-medium text-[38px]'>Vision & Values</h3>
                <p className='text-[#848484] text-[16px] font-[Lato] font-normal'>Territories reach commitment book obviously last manager.</p>
            </div>
            {/* <div className='flex flex-col gap-[10px]'>
                <div className='grid grid-cols-3'>
                    <div className='flex justify-between'>
                        <div>

                        <p>Innovation that protects</p>
                    <p>We continuously evolve our fraud prevention technology to stay ahead of emerging threats, ensuring our clients are always protected by the most advanced tools in the industry.</p>
                        </div>
                        <button>Get started</button>
                    </div>
                    <p>1</p>
                    <p>1</p>
                </div>
            </div> */}
            <div>
                <FeatureGrid />
            </div>
        </div>
    )
}

export default Vision