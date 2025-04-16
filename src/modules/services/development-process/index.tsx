'use client'

import { usePathname } from 'next/navigation'
import { SectionTitle } from '@/shared/typography'
import Cloud from './assets/cloud.svg'
import Digital from './assets/digital.svg'
import Growth from './assets/growth.svg'
import AI from './assets/growthtwo.svg'
import It from './assets/it.svg'
import Product from './assets/product.svg'
import Mobile from './assets/product.svg'
import Consult from './assets/product.svg'
import Software from './assets/software.svg'
import Ui from './assets/ui.svg'

const DevelopmentProcess = () => {
  const pathname = usePathname()
  const serviceRoute = pathname.split('/')[2]

  const renderAsset = () => {
    switch (serviceRoute) {
      case 'software-development':
        return <Software />
      case 'growth-&-marketing':
        return <Growth />
      case 'mobile-app-development':
        return <Mobile />
      case 'it-training-&-workshops':
        return <It />
      case 'product-development':
        return <Product />
      case 'industry-specific-solutions':
        return <Digital />
      case 'it-&-business-consultation':
        return <Consult />
      case 'cloud-development':
        return <Cloud />
      case 'ui-ux-design':
        return <Ui />
      case 'ai-based-softwares':
        return <AI />
      default:
        return <Cloud /> // Default to Cloud if no match
    }
  }

  return (
    <div
      style={{
        marginTop: '1.125vw',
      }}
    >
      {serviceRoute !== 'ui-ux-design' && (
        <SectionTitle
          text="Our development Process"
          markText="Process"
          markTextProps={{
            rotate: 2,
          }}
        />
      )}
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          marginTop: '3.125vw',
        }}
      >
        {renderAsset()}
      </div>
    </div>
  )
}

export default DevelopmentProcess
