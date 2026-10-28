import React from 'react'
import { AiSolutionsTreeIcons } from './ai-solutions.icon'
import { CloudDevelopmentTreeIcons } from './cloud-development.icon'
import { CustomAppDevelopmentTreeIcons } from './custom-app-development.icon'
import DevTechTreeBackground from './dev-tree-background'
import { DevTreeIcons } from './dev-tree.icon'
import { GrowthMarketingTreeIcons } from './growth-marketing.icon'
import { IndustryTreeIcons } from './industry-tree.icon'
import { ItBusinessConsultantsTreeIcons } from './it-business-consultants.icon'
import { ItTrainingTreeIcons } from './it-training.icon'
import { ProductDevelopmentTreeIcons } from './product-development.icon'
import { SoftwareDevelopmentTreeIcons } from './software-development.icon'
import UiTechTreeBackground from './ui-tree-background/ui-tech-tree-background'
import { UITreeIcons } from './ui-tree.icon'

export interface TechTreeData {
  title: string
  markText: string
  description: string
  treeIcons: typeof DevTreeIcons | typeof UITreeIcons
  background: React.ComponentType
}

export const getTreeIconsByServiceId = (serviceId: string): TechTreeData => {
  switch (serviceId) {
    case 'software-development':
      return {
        title: `Zen Tech Wonders\nWe Excel In\nSoftware & Engineering`,
        markText: 'Engineering',
        description:
          'From scalable platforms to high-performance systems, we engineer technology built for reliability, security, and growth.',
        treeIcons: SoftwareDevelopmentTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'growth-and-marketing':
    case 'growth-&-marketing':
      return {
        title: `Zen Tech Wonders We\nExcel In Growth &\nMarketing`,
        markText: 'Marketing',
        description:
          'From scalable platforms to high-performance systems, we engineer technology built for reliability, security, and growth.',
        treeIcons: GrowthMarketingTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'custom-app-development':
      return {
        title: `Zen Tech Wonders We\nExcel In Custom &\nApp Development`,
        markText: 'Development',
        description:
          'From scalable platforms to high-performance systems, we engineer technology built for reliability, security, and growth.',
        treeIcons: CustomAppDevelopmentTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'it-training-and-workshops':
    case 'it-training-&-workshops':
      return {
        title: `Zen Tech Wonders We\nExcel In Knowledge &\nUpskilling`,
        markText: 'Upskilling',
        description:
          'From scalable platforms to high-performance systems, we engineer technology built for reliability, security, and growth.',
        treeIcons: ItTrainingTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'product-development':
      return {
        title: `Zen Tech Wonders We\nExcel In Product &\nInnovation`,
        markText: 'Innovation',
        description:
          'From scalable platforms to high-performance systems, we engineer technology built for reliability, security, and growth.',
        treeIcons: ProductDevelopmentTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'industries-specific-solution':
    case 'industry-specific-solutions':
      return {
        title: `Zen Tech Wonders We\nExcel In Domain &\nIndustry Solutions`,
        markText: 'Solutions',
        description:
          'From scalable platforms to high-performance systems, we engineer technology built for reliability, security, and growth.',
        treeIcons: IndustryTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'ai-solutions':
    case 'ai-based-softwares':
      return {
        title: `Zen Tech Wonders We\nExcel In AI &\nIntelligence`,
        markText: 'Intelligence',
        description:
          'From scalable platforms to high-performance systems, we engineer technology built for reliability, security, and growth.',
        treeIcons: AiSolutionsTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'it-and-business-consultation':
    case 'it-&-business-consultation':
      return {
        title: `Zen Tech Wonders We\nExcel In Strategic &\nConsultation`,
        markText: 'Consultation',
        description:
          'From scalable platforms to high-performance systems, we engineer technology built for reliability, security, and growth.',
        treeIcons: ItBusinessConsultantsTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'cloud-development':
      return {
        title: `Zen Tech Wonders We\nExcel In Cloud &\nInfrastructure`,
        markText: 'Infrastructure',
        description:
          'From scalable platforms to high-performance systems, we engineer technology built for reliability, security, and growth.',
        treeIcons: CloudDevelopmentTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'ui-ux-design':
      return {
        title: `Zen Tech Wonders We\nExcel In Design &\nExperience`,
        markText: 'Experience',
        description:
          'From scalable platforms to high-performance systems, we engineer technology built for reliability, security, and growth.',
        treeIcons: UITreeIcons,
        background: UiTechTreeBackground,
      }

    default:
      return {
        title: `Zen Tech Wonders We\nExcel In Innovation &\nExcellence`,
        markText: 'Excellence',
        description:
          'From scalable platforms to high-performance systems, we engineer technology built for reliability, security, and growth.',
        treeIcons: DevTreeIcons,
        background: DevTechTreeBackground,
      }
  }
}
