import { useRouter } from 'next/navigation'
import BaseButton from '@/shared/button'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import TechCard from './tech-card'
import Image from 'next/image'
import Circle from './assets/circle.svg?url'
import Expense from './assets/expense.svg?url'
import { techSolution } from '@/assets/icons/it-solution'
import TechSolutionMobile from './assets/tech-solution.svg?url'
import { useMediaQuery } from '@mui/material'
import './styles.scss'

const TechSolution = () => {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 700px)');
  return (
    <div className="tech-solution-section-wrapper tech-solution-desktop">
      <div className="tech-solution-section">
        <div className="tech-solution-section-text-wrapper">
          <div className="tech-solution-text-heading">
            <SectionTitle
              text="Maximizing Your Business Potential With Expert IT Solutions"
              markText="solutions"
              align={isMobile ? 'center' : 'left'}
            />
          </div>
          <SectionDescription
            className="tech-solution-text-description"
            text="Welcome to Zenmonk, where Software Innovation meets professionalism
              and solution oriented mindset. We are fluent in your language,
              proficient in technical terminology, and validate our newage
              expertise with custom solutions"
          />
          <div className="tech-solution-section-image-wrapper tech-solution-mobile">
            <Image fill src={TechSolutionMobile} alt="tech-solution" />
            <Image src={Expense} alt="Expense" className='tech-solution-expense-img' width={200} height={200} />
            <Image src={Circle} alt="Circle" className='tech-solution-circle-img-1' width={200} height={200} />
            <Image src={Circle} alt="Circle2" className='tech-solution-circle-img-2' width={200} height={200} />
          </div>
        </div>
        <div className="tech-solution-section-card-wrapper">
          {techSolution.map(({ name, Icon }, index) => (
            <TechCard key={index} Icon={Icon} title={name} />
          ))}
        </div>
        <BaseButton
          onClick={() => router.push('/services/software-development')}
          className="tech-solution-button"
        >
          EXPLORE SERVICES
        </BaseButton>
      </div>
      <div className="tech-solution-section-image-wrapper">
        <Image fill src={TechSolutionMobile} alt="tech-solution" />
        <Image src={Expense} alt="Expense" className='tech-solution-expense-img' width={200} height={200} />
        <Image src={Circle} alt="Circle" className='tech-solution-circle-img-1' width={200} height={200} />
        <Image src={Circle} alt="Circle2" className='tech-solution-circle-img-2' width={200} height={200} />
      </div>
    </div>
  )
}

export default TechSolution
