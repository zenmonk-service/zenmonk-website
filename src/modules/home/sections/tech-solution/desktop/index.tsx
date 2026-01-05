import { useRouter } from 'next/navigation'
import { techSolution } from '@/assets/icons/it-solution'
import BaseButton from '@/shared/button'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import './styles.scss'
import TechCard from '../tech-card'
import Image from 'next/image'

const TechSolutionDesktop = () => {
  const router = useRouter()
  return (
    <div className="tech-solution-section-wrapper desktop">
      <div className="tech-solution-section">
        <div className="tech-solution-section-text-wrapper">
          <div className="text-heading">
            <SectionTitle text="Our Expertise Lies In Crafting" align="left" />
            <SectionTitle
              text="Business Solutions"
              markText="solutions"
              align="left"
              markTextProps={{ rotate: 1.8 }}
            />
          </div>
          <SectionDescription
            className="text-description"
            text="Welcome to Zenmonk, where Software Innovation meets professionalism
              and solution oriented mindset. We are fluent in your language,
              proficient in technical terminology, and validate our new-age
              expertise with custom solutions"
          />
        </div>
        <div className="tech-solution-section-card-wrapper">
          {techSolution.map(({ name, Icon }, index) => (
            <TechCard key={index} Icon={Icon} title={name} />
          ))}
        </div>
        <BaseButton
          onClick={() => router.push('/services/software-development')}
          className="button"
        >
          EXPLORE SERVICES
        </BaseButton>
      </div>
      <div className="tech-solution-section-image-wrapper">
        <Image fill src="/tech-solution.png" alt="tech-solution" />
      </div>
    </div>
  )
}

export default TechSolutionDesktop
