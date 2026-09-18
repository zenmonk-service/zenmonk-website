import React from 'react'
import DevTechTreeBackground from './dev-tree-background'
import { DevTreeIcons } from './dev-tree.icon'
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
        title: `Zen Tech Wonders We\nExcel In Software &\nEngineering`,
        markText: 'Engineering',
        description:
          'We architect robust, scalable software solutions engineered to solve mission-critical business challenges. Our modern engineering practices streamline deployment lifecycles, enforce ironclad security protocols, and build high-throughput backends. By harnessing modern tech ecosystems, we empower enterprises to build reliable digital foundations that scale effortlessly with growing user demands.',
        treeIcons: DevTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'growth-and-marketing':
    case 'growth-&-marketing':
      return {
        title: `Zen Tech Wonders We\nExcel In Growth &\nMarketing`,
        markText: 'Marketing',
        description:
          'We pioneer data-driven digital marketing ecosystems that turn online visibility into measurable revenue acceleration. Our holistic growth strategies combine predictive audience analytics, high-converting creative funnels, and precision multi-channel campaigns. By leveraging modern marketing automation, we empower businesses to maximize ROI and achieve sustainable brand leadership.',
        treeIcons: DevTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'custom-app-development':
      return {
        title: `Zen Tech Wonders We\nExcel In Custom &\nApp Development`,
        markText: 'Development',
        description:
          'We build intuitive, high-performance mobile and web applications tailored to unique enterprise and customer needs. From cross-platform native architectures to responsive web portals, our engineering ensures blazing speed, fluid interactions, and rock-solid stability. We help organizations convert visionary ideas into engaging digital products that delight users and drive real adoption.',
        treeIcons: DevTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'it-training-and-workshops':
    case 'it-training-&-workshops':
      return {
        title: `Zen Tech Wonders We\nExcel In Knowledge &\nUpskilling`,
        markText: 'Upskilling',
        description:
          'We bridge technological skill gaps through immersive, hands-on corporate training programs and technical workshops. Our industry veteran mentors guide engineering teams through modern frameworks, DevOps pipelines, and cloud-native architectures. By simulating real-world production challenges, we empower professionals to build cutting-edge competencies and drive technical excellence.',
        treeIcons: DevTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'product-development':
      return {
        title: `Zen Tech Wonders We\nExcel In Product &\nInnovation`,
        markText: 'Innovation',
        description:
          'We turn ambitious product visions into market-ready digital realities through disciplined end-to-end product development. From initial MVP discovery to full-scale enterprise launch, our multidisciplinary teams integrate agile methodologies, user feedback loops, and robust engineering. We help brands launch transformative products that capture market share and deliver lasting commercial impact.',
        treeIcons: DevTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'industries-specific-solution':
    case 'industry-specific-solutions':
      return {
        title: `Zen Tech Wonders We\nExcel In Domain &\nIndustry Solutions`,
        markText: 'Solutions',
        description:
          'We engineer bespoke digital solutions crafted specifically for complex industry verticals, including healthcare, fintech, and retail. Our deep domain expertise ensures seamless compliance with strict regulatory mandates while modernizing legacy operational workflows. We equip enterprises with tailored tech architectures that boost operational resilience and competitive advantage.',
        treeIcons: DevTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'ai-solutions':
    case 'ai-based-softwares':
      return {
        title: `Zen Tech Wonders We\nExcel In AI &\nIntelligence`,
        markText: 'Intelligence',
        description:
          'We unleash the transformative power of artificial intelligence and machine learning to build next-generation smart applications. Our engineers deploy custom LLMs, computer vision algorithms, and predictive analytics models seamlessly into production pipelines. We empower organizations to automate complex tasks, extract actionable insights, and unlock unprecedented operational efficiency.',
        treeIcons: DevTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'it-and-business-consultation':
    case 'it-&-business-consultation':
      return {
        title: `Zen Tech Wonders We\nExcel In Strategic &\nConsultation`,
        markText: 'Consultation',
        description:
          'We provide visionary technology and strategic advisory that bridges the gap between digital potential and executive business goals. Our seasoned consultants evaluate architectural maturity, optimize IT expenditure, and craft comprehensive transformation roadmaps. We guide leadership teams to navigate technological disruption and build agile, future-proof organizations.',
        treeIcons: DevTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'cloud-development':
      return {
        title: `Zen Tech Wonders We\nExcel In Cloud &\nInfrastructure`,
        markText: 'Infrastructure',
        description:
          'We architect elastic, resilient cloud ecosystems designed for maximum uptime, high security, and seamless scalability. Our certified architects specialize in multi-cloud migrations, microservices containerization, and automated Kubernetes orchestration. We help enterprises optimize cloud expenditure, enhance disaster recovery, and accelerate software deployment velocity.',
        treeIcons: DevTreeIcons,
        background: DevTechTreeBackground,
      }

    case 'ui-ux-design':
      return {
        title: `Zen Tech Wonders We\nExcel In Design &\nExperience`,
        markText: 'Experience',
        description:
          'We craft human-centered digital experiences that seamlessly blend visual elegance with intuitive usability. Our design system engineers and UX researchers analyze behavioral data to build frictionless navigation flows, accessible typography, and delightful interactions. We empower brands to forge deep emotional connections with users across every screen and touchpoint.',
        treeIcons: UITreeIcons,
        background: UiTechTreeBackground,
      }

    default:
      return {
        title: `Zen Tech Wonders We\nExcel In Innovation &\nExcellence`,
        markText: 'Excellence',
        description:
          'We lead the way in technological innovation, consistently delivering solutions that transform industries. Our commitment to excellence helps businesses and individuals achieve more by streamlining processes, enhancing security, and fostering sustainable growth. Through our expertise and dedication, we empower teams to navigate complex digital landscapes and unlock their full potential in an ever-evolving market.',
        treeIcons: DevTreeIcons,
        background: DevTechTreeBackground,
      }
  }
}
