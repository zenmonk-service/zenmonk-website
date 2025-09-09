import Innovation from '@/modules/how-we-work/Innovation'
import HeroSection from '@/modules/how-we-work/hero-section'
import Process from '@/modules/how-we-work/process'
import Quality from '@/modules/how-we-work/quality'
import ReadyToTalk from '@/modules/how-we-work/ready-to-talk'

const page = () => {
  return (
    <div>
      <HeroSection />
      <Process />
      <Quality />
      <Innovation />
      <ReadyToTalk />
    </div>
  )
}

export default page
