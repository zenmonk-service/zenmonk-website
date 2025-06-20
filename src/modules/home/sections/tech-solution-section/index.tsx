import Image from 'next/image'
import { TechSolution, techSolution } from '@/assets/icons/it-solution'
import BaseButton from '@/shared/button'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import './styles.scss'
import TechCard from './tech-card'
import { useRouter } from 'next/navigation'

const TechSolutionSection = () => {
  const router = useRouter()
  return (
    <section className="panel">
      <div className="tech-solution-section-wrapper desktop">
        <div className="tech-solution-section">
          <div className="tech-solution-section-text-wrapper">
            <div className="text-heading">
              <SectionTitle
                text="Our Expertise Lies In Crafting"
                align="left"
              />
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
            ></SectionDescription>
          </div>
          <div className="tech-solution-section-card-wrapper">
            {techSolution.map((tech: TechSolution, index) => {
              return <TechCard key={index} Icon={tech.src} title={tech.name} />
            })}
          </div>
          <BaseButton onClick={()=> router.push("/services/software-development")} className="button">EXPLORE SERVICES</BaseButton>
        </div>
        <div className="tech-solution-section-image-wrapper">
          <Image fill src="/tech-solutions.png" alt="tech-solution" />
        </div>
      </div>
      {/* <TechMobileSolutionSection/> */}
    </section>
  )
}

export { TechSolutionSection }
