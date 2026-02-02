import CloudDevelopment from '@/assets/services/cloud-service'
import ItAndBusinessConsultation from '@/assets/services/consulting-service'
import CustomAppDevelopment from '@/assets/services/custom-app-development'
import DigitalTransformation from '@/assets/services/digital-transformation'
import GrowthAndMarketingSolution from '@/assets/services/growth'
import IndustrySpecificSolution from '@/assets/services/industry'
import ProductDevelopment from '@/assets/services/product-development'
import SoftwareDevelopment from '@/assets/services/software-development'
import ItTraining from '@/assets/services/it-training'
import UiUxDesign from '@/assets/services/ui-ux-design'

export const OurServices = [
  {
    id: 'software-development',
    route: '/software-development',
    name: 'Software Development',
    description:
      'Zenmonk excels in custom enterprise software development, delivering scalable and secure solutions. We provide end-to-end support from legacy modernization to deployment, ensuring optimal software performance tailored to your business needs.',
    services: [
      {
        id: 'software-development-enterprise-solutions',
        title: 'Enterprise Solutions',
        description:
          'Streamline operations with scalable enterprise software solutions that drive efficiency and growth.',
        icon: SoftwareDevelopment.Enterprise,
      },
      {
        id: 'software-development-erp-software',
        title: 'ERP Software',
        description:
          'Optimize business processes with robust ERP software tailored to your operational needs.',
        icon: SoftwareDevelopment.Erp,
      },
      {
        id: 'software-development-crm-software',
        title: 'CRM Software',
        description:
          'Strengthen customer relationships with customizable CRM that boosts engagement and satisfaction.',
        icon: SoftwareDevelopment.Crm,
      },
      {
        id: 'software-development-hcm-software',
        title: 'HCM Software',
        description:
          'Manage your workforce effectively with human capital management software designed to support HR operations.',
        icon: SoftwareDevelopment.Hcm,
      },
      {
        id: 'software-development-scm-software',
        title: 'SCM Software',
        description:
          'Improve supply chain efficiency with advanced SCM solutions that ensure seamless logistics and inventory management.',
        icon: SoftwareDevelopment.Scm,
      },
      {
        id: 'software-development-custom-software-solutions',
        title: 'Custom Software Solutions',
        description:
          'Get tailored software solutions designed to meet your unique business challenges and objectives.',
        icon: SoftwareDevelopment.CustomSolution,
      },
    ],
  },
  {
    id: 'product-development',
    route: '/product-development',
    name: 'Product Development',
    description:
      'Need a standout product design? From conceptualization to prototyping, we ensure your product not only meets market demands but excels in user experience. Let us transform your vision into an exceptional product experience.',
    services: [
      {
        id: 'product-development-saas-products',
        title: 'SaaS Products',
        description:
          'Develop scalable SaaS products that cater to your industry-specific needs and drive growth.',
        icon: ProductDevelopment.Saas,
      },
      {
        id: 'product-development-ecommerce-solutions',
        title: 'E-commerce Solutions',
        description:
          'Build robust e-commerce platforms to enhance your online retail experience and drive sales.',
        icon: ProductDevelopment.Ecomm,
      },
      {
        id: 'product-development-mobile-apps',
        title: 'Mobile',
        description:
          'Design and develop mobile apps that provide seamless user experiences across all devices.',
        icon: ProductDevelopment.MobileApp,
      },
      {
        id: 'product-development-web-applications',
        title: 'Web Applications',
        description:
          'Create high-performance web applications tailored to your business needs.',
        icon: ProductDevelopment.WebApplication,
      },
      {
        id: 'product-development-custom-software-solutions',
        title: 'Custom Software Solutions',
        description:
          'Get customized software solutions that address your unique business challenges.',
        icon: ProductDevelopment.CustomSoftwareSolution,
      },
      {
        id: 'product-development-mvp-development',
        title: 'MVP Development',
        description:
          'Launch your product quickly with a Minimum Viable Product to validate your idea in the market.',
        icon: ProductDevelopment.Mvp,
      },
    ],
  },
  {
    id: 'custom-app-development',
    route: '/custom-app-development',
    name: 'Custom App Development',
    description:
      'Need a game-changing mobile and web app? We create transformative mobile & web applications for businesses using agile methodologies. Let us redefine your app experience together.',
    services: [
      {
        id: 'custom-app-development-mobile-app-development',
        title: 'Mobile App Development',
        description:
          "Create dynamic and user-friendly mobile applications to boost your business's digital presence.",
        icon: CustomAppDevelopment.MobileAppDevelopment,
      },
      {
        id: 'custom-app-development-application-integration',
        title: 'Application Integration',
        description:
          'Seamlessly integrate your applications for enhanced workflow and connectivity across platforms.',
        icon: CustomAppDevelopment.ApplicationIntegration,
      },
      {
        id: 'custom-app-development-custom-software-solutions',
        title: 'Custom Software Solutions',
        description:
          'Develop tailored software solutions that meet your specific business goals and technical requirements.',
        icon: CustomAppDevelopment.CustomSoftwareSolutions,
      },
      {
        id: 'custom-app-development-api-development',
        title: 'API Development',
        description:
          'Build and integrate powerful APIs to extend the functionality and connectivity of your applications.',
        icon: CustomAppDevelopment.ApiDevelopment,
      },
      {
        id: 'custom-app-development-cross-platform-development',
        title: 'Cross-Platform Development',
        description:
          'Deliver apps that work seamlessly across multiple platforms, ensuring a consistent user experience.',
        icon: CustomAppDevelopment.CrossPlatformDevelopment,
      },
      {
        id: 'custom-app-development-progressive-web-app',
        title: 'Progressive Web App',
        description:
          'Create fast, reliable, and engaging web apps that offer native-like experiences across devices.',
        icon: CustomAppDevelopment.ProgressiveWebApp,
      },
    ],
  },
  {
    id: 'ui-ux-design',
    route: '/ui-ux-design',
    name: 'UI/UX Design',
    description:
      'Want to transform user interactions? We design intuitive and engaging experiences that make every touch point seamless and enjoyable. Let us enhance your interface with precision and creativity.',
    services: [
      {
        id: 'ui-ux-design-user-research',
        title: 'User Research',
        description:
          'Gain valuable insights into user behavior to guide your design and development decisions.',
        icon: UiUxDesign.UserResearch,
      },
      {
        id: 'ui-ux-design-wireframing',
        title: 'Wireframing',
        description:
          "Create effective wireframes to visualize and plan your digital product's structure and flow.",
        icon: UiUxDesign.Wireframing,
      },
      {
        id: 'ui-ux-design-prototyping',
        title: 'Prototyping',
        description:
          'Develop interactive prototypes to validate design concepts before full-scale development.',
        icon: UiUxDesign.Prototyping,
      },
      {
        id: 'ui-ux-design-usability-testing',
        title: 'Usability Testing',
        description:
          'Ensure your digital products provide an excellent user experience through thorough usability testing.',
        icon: UiUxDesign.UsabilityTesting,
      },
      {
        id: 'ui-ux-design-interface-design',
        title: 'Interface Design',
        description:
          'Design visually appealing and intuitive interfaces that enhance user engagement.',
        icon: UiUxDesign.InterfaceDesign,
      },
      {
        id: 'ui-ux-design-interaction-design',
        title: 'Interaction Design',
        description:
          'Craft seamless and engaging user interactions for a more intuitive digital experience.',
        icon: UiUxDesign.InteractionDesign,
      },
    ],
  },
  {
    id: 'cloud-development',
    route: '/cloud-development',
    name: 'Cloud Development',
    description:
      'Need a cloud solution that adapts to your business needs? We design agile, scalable, and secure cloud environments, allowing you to focus on growth while we manage the technical complexities.',
    services: [
      {
        id: 'cloud-development-cloud-computing',
        title: 'Cloud Computing',
        description:
          'Leverage cloud computing to scale your business and improve operational efficiency.',
        icon: CloudDevelopment.CloudComputing,
      },
      {
        id: 'cloud-development-cloud-security-services',
        title: 'Cloud Security Services',
        description:
          'Protect your cloud infrastructure with top-tier security solutions.',
        icon: CloudDevelopment.CloudSecurity,
      },
      {
        id: 'cloud-development-iaas',
        title: 'Infrastructure as a Service (IaaS)',
        description:
          'Utilize IaaS for flexible, scalable cloud infrastructure tailored to your needs.',
        icon: CloudDevelopment.Iaas,
      },
      {
        id: 'cloud-development-paas',
        title: 'Platform as a Service (PaaS)',
        description:
          'Accelerate development with PaaS solutions that streamline the application lifecycle.',
        icon: CloudDevelopment.Paas,
      },
      {
        id: 'cloud-development-cloud-migration',
        title: 'Cloud Migration',
        description:
          'Seamlessly migrate your applications and data to the cloud with minimal disruption.',
        icon: CloudDevelopment.CloudMigration,
      },
      {
        id: 'cloud-development-cloud-optimization',
        title: 'Cloud Optimization',
        description:
          'Optimize your cloud resources to maximize efficiency and reduce costs.',
        icon: CloudDevelopment.CloudOptimization,
      },
    ],
  },
  {
    id: 'digital-transformation-and-automation',
    route: '/digital-transformation',
    name: 'Digital Transformation & Automation',
    description:
      'Looking to revolutionize your digital landscape? Together, let us navigate your digital route and equip your company with advanced analytics, seamless integration, and automation for sustained growth and agility.',
    services: [
      {
        id: 'digital-transformation-digital-strategy-development',
        title: 'Digital Strategy Development',
        description:
          'Develop a comprehensive digital strategy to enhance your business operations and growth.',
        icon: DigitalTransformation.DigitalStrategy,
      },
      {
        id: 'digital-transformation-digital-workflow-automation',
        title: 'Digital Workflow Automation',
        description:
          'Automate workflows to improve efficiency and reduce manual tasks.',
        icon: DigitalTransformation.InteractionDesign,
      },
      {
        id: 'digital-transformation-process-automation',
        title: 'Process Automation',
        description:
          'Streamline your processes with advanced automation solutions.',
        icon: DigitalTransformation.ProcessAutomation,
      },
      {
        id: 'digital-transformation-data-analytics-insights',
        title: 'Data Analytics & Insights',
        description:
          'Leverage data analytics to gain insights and make informed decisions.',
        icon: DigitalTransformation.DataAnalytics,
      },
      {
        id: 'digital-transformation-technology-integration',
        title: 'Technology Integration',
        description:
          'Seamlessly integrate new technologies to enhance your business operations.',
        icon: DigitalTransformation.TechnologyIntegration,
      },
      {
        id: 'digital-transformation-machine-learning-solutions',
        title: 'Machine Learning Solutions',
        description:
          'Implement AI and machine learning solutions to drive innovation and efficiency.',
        icon: DigitalTransformation.Ai,
      },
    ],
  },
  {
    id: 'it-and-business-consultation',
    route: '/it-business-consultation',
    name: 'IT & Business Consultations',
    description:
      'Need expert guidance? We partner with you to improve your software architecture and craft a tech-focused roadmap. From strategy to execution, our consultants ensure seamless digital transformation.',
    services: [
      {
        id: 'it-business-consultation-it-consulting',
        title: 'IT Consulting',
        description:
          'Receive expert advice on optimizing your IT infrastructure and aligning technology with your business goals.',
        icon: ItAndBusinessConsultation.ItConsulting,
      },
      {
        id: 'it-business-consultation-business-consulting',
        title: 'Business Consulting',
        description:
          'Get strategic insights and solutions to drive your business forward.',
        icon: ItAndBusinessConsultation.BusinessConsulting,
      },
      {
        id: 'it-business-consultation-project-management',
        title: 'Project Management',
        description:
          'Manage projects effectively from inception to completion with expert project management services.',
        icon: ItAndBusinessConsultation.ProjectManagement,
      },
      {
        id: 'it-business-consultation-technology-audits',
        title: 'Technology Audits',
        description:
          'Assess and improve your technology infrastructure with in-depth audits.',
        icon: ItAndBusinessConsultation.TechnologyAudits,
      },
      {
        id: 'it-business-consultation-managed-it-services',
        title: 'Managed IT Services',
        description:
          'Focus on your core business while we manage your IT needs.',
        icon: ItAndBusinessConsultation.ManagedIt,
      },
      {
        id: 'it-business-consultation-strategic-planning',
        title: 'Strategic Planning',
        description:
          'Create and implement a strategic roadmap that aligns with your long-term goals.',
        icon: ItAndBusinessConsultation.StrategicPlanning,
      },
    ],
  },
  {
    id: 'growth-and-marketing',
    route: '/growth-and-marketing',
    name: 'Growth & Marketing',
    description:
      "Need to boost your online presence? We craft strategies to enhance your visibility and reputation, from SEO to Social Media Optimization. Let us amplify your business's digital footprint.",
    services: [
      {
        id: 'growth-and-marketing-digital-marketing-strategy',
        title: 'Digital Marketing Strategy',
        description:
          'Develop and implement digital marketing strategies that boost your online presence and drive growth.',
        icon: GrowthAndMarketingSolution.DigitalMarketing,
      },
      {
        id: 'growth-and-marketing-seo',
        title: 'SEO (Search Engine Optimization)',
        description:
          'Improve your search engine rankings with expert SEO strategies.',
        icon: GrowthAndMarketingSolution.Seo,
      },
      {
        id: 'growth-and-marketing-social-media-marketing',
        title: 'Social Media Marketing',
        description:
          'Engage your audience and build your brand through targeted social media marketing.',
        icon: GrowthAndMarketingSolution.SocialMedia,
      },
      {
        id: 'growth-and-marketing-content-marketing',
        title: 'Content Marketing',
        description:
          'Create compelling content that attracts and retains customers.',
        icon: GrowthAndMarketingSolution.ContentMarketing,
      },
      {
        id: 'growth-and-marketing-performance-analytics',
        title: 'Performance Analytics',
        description:
          'Measure and optimize your marketing efforts with in-depth performance analytics.',
        icon: GrowthAndMarketingSolution.Performance,
      },
      {
        id: 'growth-and-marketing-branding-positioning',
        title: 'Branding & Positioning',
        description:
          "Establish and enhance your brand's presence with strategic branding and positioning.",
        icon: GrowthAndMarketingSolution.Branding,
      },
    ],
  },
  {
    id: 'industries-specific-solution',
    route: '/industries-specific-solution',
    name: 'Industry-Specific Solutions',
    description:
      'Need AI to revolutionize your business? We are your experts. From pilot projects to full-scale AI integration, we provide intelligent solutions to boost efficiency and innovation. Let us empower your business with innovative AI tools and services.',
    services: [
      {
        id: 'industry-specific-solution-banking-solutions',
        title: 'Banking Solutions',
        description:
          'Transform your financial operations with secure and scalable software solutions.',
        icon: IndustrySpecificSolution.Banking,
      },
      {
        id: 'industry-specific-solution-consumer-solutions',
        title: 'Consumer Solutions',
        description:
          'Optimize your CPG operations with software tailored to streamline production and distribution.',
        icon: IndustrySpecificSolution.Consumer,
      },
      {
        id: 'industry-specific-solution-education-solutions',
        title: 'Education Solutions',
        description:
          'Enhance learning experiences with innovative EdTech solutions.',
        icon: IndustrySpecificSolution.Education,
      },
      {
        id: 'industry-specific-solution-healthcare-it-solutions',
        title: 'Healthcare IT Solutions',
        description:
          'Improve patient care with advanced healthcare IT solutions that streamline operations.',
        icon: IndustrySpecificSolution.HealthCare,
      },
      {
        id: 'industry-specific-solution-business-operations-optimization',
        title: 'Business Operations Optimization',
        description:
          'Increase operational efficiency with business process optimization software.',
        icon: IndustrySpecificSolution.Business,
      },
      {
        id: 'industry-specific-solution-ecommerce-solutions',
        title: 'E-commerce Solutions',
        description:
          'Enhance your retail and e-commerce operations with scalable digital solutions.',
        icon: IndustrySpecificSolution.Retail,
      },
    ],
  },
  {
    id: 'it-training-and-workshops',
    route: '/it-training-&-workshops',
    name: 'IT Training & Workshops',
    description:
      'Upskill your team with practical, hands-on training and workshops. We provide expert-led programs covering agile methodologies, cloud computing, devops, and full-stack development.',
    services: [
      {
        id: 'it-training-agile',
        title: 'Agile Training',
        description:
          'Master agile methodologies to improve team collaboration and project delivery.',
        icon: ItTraining.AgileTraining,
      },
      {
        id: 'it-training-cloud',
        title: 'Cloud Training',
        description:
          'Learn to build and manage scalable cloud infrastructure with our expert-led sessions.',
        icon: ItTraining.CloudTraining,
      },
      {
        id: 'it-training-devops',
        title: 'DevOps Training',
        description:
          'Adopt DevOps practices to streamline your development and operations workflows.',
        icon: ItTraining.DevopsTraining,
      },
      {
        id: 'it-training-mern',
        title: 'MERN Stack Training',
        description:
          'Master full-stack web development with the MERN (MongoDB, Express, React, Node) stack.',
        icon: ItTraining.MernTraining,
      },
      {
        id: 'it-training-ui',
        title: 'UI/UX Training',
        description:
          'Develop the skills to create intuitive and engaging user experiences.',
        icon: ItTraining.UiTraining,
      },
      {
        id: 'it-training-technical',
        title: 'Technical Skills',
        description:
          'Enhance your technical expertise with specialized training in the latest technologies.',
        icon: ItTraining.TechnicalSkill,
      },
    ],
  },
  {
    id: 'ai-based-softwares',
    route: '/ai-based-softwares',
    name: 'AI Based Softwares',
    description:
      'Empower your business with intelligent AI-driven software. We specialize in developing custom AI solutions that automate processes, provide deep insights, and drive innovation.',
    services: [
      {
        id: 'ai-development',
        title: 'AI Development',
        description:
          'Build custom AI solutions tailored to your unique business needs and objectives.',
        icon: DigitalTransformation.Ai,
      },
      {
        id: 'machine-learning',
        title: 'Machine Learning',
        description:
          'Implement machine learning models to analyze data and predict future trends.',
        icon: DigitalTransformation.Ai,
      },
      {
        id: 'nlp-solutions',
        title: 'NLP Solutions',
        description:
          'Enhance user interactions with advanced natural language processing technologies.',
        icon: DigitalTransformation.Ai,
      },
      {
        id: 'predictive-analytics',
        title: 'Predictive Analytics',
        description:
          'Leverage data to forecast outcomes and make informed strategic decisions.',
        icon: DigitalTransformation.DataAnalytics,
      },
    ],
  },
  {
    id: 'ai-solutions',
    route: '/ai-based-softwares',
    name: 'AI Solutions',
    description:
      'Need AI to revolutionize your business? We are your experts. From pilot projects to full-scale AI integration, we provide intelligent solutions to boost efficiency and innovation. Let us empower your business with innovative AI tools and services.',
    services: [
      {
        id: 'industry-specific-solution-banking-solutions',
        title: 'Banking Solutions',
        description:
          'Transform your financial operations with secure and scalable software solutions.',
        icon: IndustrySpecificSolution.Banking,
      },
      {
        id: 'industry-specific-solution-consumer-solutions',
        title: 'Consumer Solutions',
        description:
          'Optimize your CPG operations with software tailored to streamline production and distribution.',
        icon: IndustrySpecificSolution.Consumer,
      },
      {
        id: 'industry-specific-solution-education-solutions',
        title: 'Education Solutions',
        description:
          'Enhance learning experiences with innovative EdTech solutions.',
        icon: IndustrySpecificSolution.Education,
      },
      {
        id: 'industry-specific-solution-healthcare-it-solutions',
        title: 'Healthcare IT Solutions',
        description:
          'Improve patient care with advanced healthcare IT solutions that streamline operations.',
        icon: IndustrySpecificSolution.HealthCare,
      },
      {
        id: 'industry-specific-solution-business-operations-optimization',
        title: 'Business Operations Optimization',
        description:
          'Increase operational efficiency with business process optimization software.',
        icon: IndustrySpecificSolution.Business,
      },
      {
        id: 'industry-specific-solution-ecommerce-solutions',
        title: 'E-commerce Solutions',
        description:
          'Enhance your retail and e-commerce operations with scalable digital solutions.',
        icon: IndustrySpecificSolution.Retail,
      },
    ],
  },
]
