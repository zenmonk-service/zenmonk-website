import COST_EFFECTIVE from './assets/cost_effective.svg'
import EXPERT_KNOWLEDGE from './assets/expert_knowledge.svg'
import ON_TIME from './assets/on_time.svg'
import PROVEN_SUCCESS from './assets/proven_sucess.svg'
import SUPPORT from './assets/support.svg'

export interface IdealChoiceCard {
  icon: any
  title: string
  description: string
}

export interface IdealChoiceServiceData {
  title: string
  markText: string
  description: string
  cards: IdealChoiceCard[]
}

export const idealChoiceDataMap: Record<string, IdealChoiceServiceData> = {
  'software-development': {
    title: 'Why Our Software Engineering is Your Ideal Choice',
    markText: 'Software Engineering',
    description: 'See how our battle-tested engineering methodologies, agile delivery, and robust architectures drive your digital success.',
    cards: [
      {
        icon: PROVEN_SUCCESS,
        title: 'Architectural Excellence',
        description: 'Robust, clean-code architectures built for high scalability, fault tolerance, and security.',
      },
      {
        icon: EXPERT_KNOWLEDGE,
        title: 'Modern Tech Stack',
        description: 'Deep mastery of cutting-edge frameworks, microservices, and distributed cloud computing.',
      },
      {
        icon: ON_TIME,
        title: 'Agile & On-Time Sprints',
        description: 'Predictable sprint delivery with continuous integration and transparent progress tracking.',
      },
      {
        icon: COST_EFFECTIVE,
        title: 'Cost-Effective Engineering',
        description: 'Optimized development pipelines delivering maximum ROI with zero technical debt.',
      },
      {
        icon: SUPPORT,
        title: '24/7 DevOps & Support',
        description: 'Proactive monitoring, incident management, and continuous maintenance round the clock.',
      },
    ],
  },
  'ai-solutions': {
    title: 'Why Our AI Expertise is Your Ideal Choice',
    markText: 'AI Expertise',
    description: 'Discover how our cutting-edge AI models, predictive algorithms, and custom ML architectures accelerate intelligent automation.',
    cards: [
      {
        icon: PROVEN_SUCCESS,
        title: 'Production-Grade AI',
        description: 'Proven track record of deploying scalable LLMs, computer vision, and NLP systems to production.',
      },
      {
        icon: EXPERT_KNOWLEDGE,
        title: 'Deep Domain Mastery',
        description: 'Specialized expertise in fine-tuning proprietary models, neural networks, and generative AI.',
      },
      {
        icon: ON_TIME,
        title: 'Rapid MVP to Deployment',
        description: 'Fast-tracked data pipeline construction and model training with strict milestone adherence.',
      },
      {
        icon: COST_EFFECTIVE,
        title: 'Optimized Compute Costs',
        description: 'Efficient inference engines and algorithmic optimizations that minimize expensive GPU overhead.',
      },
      {
        icon: SUPPORT,
        title: 'Continuous Model Monitoring',
        description: '24/7 monitoring against model drift, real-time telemetry, and automated retraining pipelines.',
      },
    ],
  },
  'cloud-development': {
    title: 'Why Our Cloud Solutions are Your Ideal Choice',
    markText: 'Cloud Solutions',
    description: 'Explore how our certified cloud architects build secure, resilient, and elastic cloud infrastructure tailored to your needs.',
    cards: [
      {
        icon: PROVEN_SUCCESS,
        title: 'Zero-Downtime Migration',
        description: 'Seamless cloud migrations with guaranteed business continuity and data integrity.',
      },
      {
        icon: EXPERT_KNOWLEDGE,
        title: 'Multi-Cloud Specialists',
        description: 'Advanced proficiency across AWS, Azure, and Google Cloud with Kubernetes containerization.',
      },
      {
        icon: ON_TIME,
        title: 'Fast-Paced CI/CD Pipelines',
        description: 'Automated deployment workflows ensuring rapid, reliable releases on committed schedules.',
      },
      {
        icon: COST_EFFECTIVE,
        title: 'FinOps & Cost Optimization',
        description: 'Resource auto-scaling and infrastructure rightsizing to drastically reduce cloud spend.',
      },
      {
        icon: SUPPORT,
        title: '24/7 SRE & Cloud Support',
        description: 'Dedicated Site Reliability Engineering teams ensuring 99.99% infrastructure uptime.',
      },
    ],
  },
  'custom-app-development': {
    title: 'Why Our Mobile App Mastery is Your Ideal Choice',
    markText: 'Mobile App Mastery',
    description: 'Learn how our iOS, Android, and cross-platform mobile solutions deliver fluid performance and captivating mobile experiences.',
    cards: [
      {
        icon: PROVEN_SUCCESS,
        title: 'High-Rated Store Apps',
        description: 'A rich portfolio of award-winning mobile apps with outstanding store ratings and user retention.',
      },
      {
        icon: EXPERT_KNOWLEDGE,
        title: 'Native & Cross-Platform',
        description: 'Expertise in Swift, Kotlin, React Native, and Flutter for silky-smooth, native-feeling apps.',
      },
      {
        icon: ON_TIME,
        title: 'Streamlined App Store Launch',
        description: 'Punctual release schedules with seamless App Store and Google Play compliance management.',
      },
      {
        icon: COST_EFFECTIVE,
        title: 'Reusable Architecture',
        description: 'Modular codebases that speed up feature releases while maintaining lean development budgets.',
      },
      {
        icon: SUPPORT,
        title: '24/7 Post-Launch Support',
        description: 'Round-the-clock crash tracking, OS update compatibility, and continuous feature enhancements.',
      },
    ],
  },
  'growth-and-marketing': {
    title: 'Why Our Growth Strategy is Your Ideal Choice',
    markText: 'Growth Strategy',
    description: 'Uncover how our data-driven growth marketing, performance funnels, and SEO strategies turn traffic into sustainable revenue.',
    cards: [
      {
        icon: PROVEN_SUCCESS,
        title: 'Measurable ROI Acceleration',
        description: 'Validated success stories scaling conversions, customer acquisition, and market reach.',
      },
      {
        icon: EXPERT_KNOWLEDGE,
        title: 'Omnichannel Expertise',
        description: 'Holistic proficiency spanning technical SEO, high-converting PPC, and content marketing funnels.',
      },
      {
        icon: ON_TIME,
        title: 'Agile Campaign Execution',
        description: 'Rapid sprint-based campaign launches, A/B testing cycles, and real-time conversion optimizations.',
      },
      {
        icon: COST_EFFECTIVE,
        title: 'Optimized CAC & Ad Spend',
        description: 'Precision targeting that drives down customer acquisition cost while maximizing lifetime value.',
      },
      {
        icon: SUPPORT,
        title: '24/7 Analytics & Monitoring',
        description: 'Live performance dashboards and continuous campaign monitoring to safeguard ad efficiency.',
      },
    ],
  },
  'industries-specific-solution': {
    title: 'Why Our Domain Expertise is Your Ideal Choice',
    markText: 'Domain Expertise',
    description: 'Discover how our tailored industry solutions navigate regulatory hurdles and modernize mission-critical operations.',
    cards: [
      {
        icon: PROVEN_SUCCESS,
        title: 'Proven Sector Impact',
        description: 'Established track record solving complex compliance and business hurdles across diverse industries.',
      },
      {
        icon: EXPERT_KNOWLEDGE,
        title: 'Regulatory & Domain Know-How',
        description: 'Deep understanding of healthcare (HIPAA), fintech (PCI-DSS), retail, and supply chain standards.',
      },
      {
        icon: ON_TIME,
        title: 'Predictable Roadmap Delivery',
        description: 'Structured enterprise delivery keeping compliance audits and rollouts precisely on schedule.',
      },
      {
        icon: COST_EFFECTIVE,
        title: 'Tailored Enterprise ROI',
        description: 'Targeted modernization that eliminates expensive legacy overhead and manual operational costs.',
      },
      {
        icon: SUPPORT,
        title: '24/7 Enterprise-Grade SLA',
        description: 'Rigorous SLA guarantees and enterprise incident response teams available round the clock.',
      },
    ],
  },
  'it-and-business-consultation': {
    title: 'Why Our Strategic Advisory is Your Ideal Choice',
    markText: 'Strategic Advisory',
    description: 'See how our strategic IT advisory and technology audits empower leaders to make confident, future-proof decisions.',
    cards: [
      {
        icon: PROVEN_SUCCESS,
        title: 'Transformational Advisory',
        description: 'Proven impact helping enterprises modernize legacy stacks and unlock new digital revenue streams.',
      },
      {
        icon: EXPERT_KNOWLEDGE,
        title: 'C-Level Strategic Vision',
        description: 'Seasoned advisors with deep executive insight into tech debt reduction, security, and scalability.',
      },
      {
        icon: ON_TIME,
        title: 'Punctual Roadmaps & Audits',
        description: 'Clear, actionable architectural roadmaps delivered on precise, committed timeframes.',
      },
      {
        icon: COST_EFFECTIVE,
        title: 'Maximum Strategic ROI',
        description: 'Actionable technology decisions that prevent multimillion-dollar architectural missteps.',
      },
      {
        icon: SUPPORT,
        title: 'Dedicated Advisory Hotline',
        description: 'Continuous strategic guidance and advisory support whenever mission-critical challenges arise.',
      },
    ],
  },
  'it-training-and-workshops': {
    title: 'Why Our Corporate Upskilling is Your Ideal Choice',
    markText: 'Corporate Upskilling',
    description: 'Explore how our practical corporate training and mentoring programs transform engineering teams into high performers.',
    cards: [
      {
        icon: PROVEN_SUCCESS,
        title: 'Proven Team Upskilling',
        description: 'Successfully elevated competencies of engineering teams across high-growth startups and enterprises.',
      },
      {
        icon: EXPERT_KNOWLEDGE,
        title: 'Industry Veteran Mentors',
        description: 'Curriculum designed and taught by senior practitioners working on real production architectures.',
      },
      {
        icon: ON_TIME,
        title: 'Structured Learning Tracks',
        description: 'Time-tested bootcamps and workshop schedules built to integrate seamlessly into work routines.',
      },
      {
        icon: COST_EFFECTIVE,
        title: 'High-Value Talent ROI',
        description: 'Accelerates internal development speed, slashing expensive external hiring requirements.',
      },
      {
        icon: SUPPORT,
        title: 'Ongoing Mentorship & Guidance',
        description: 'Post-workshop office hours, code review sessions, and continuous peer support for learners.',
      },
    ],
  },
  'product-development': {
    title: 'Why Our Product Engineering is Your Ideal Choice',
    markText: 'Product Engineering',
    description: 'Learn how our end-to-end product development model turns early-stage concepts into thriving, market-ready products.',
    cards: [
      {
        icon: PROVEN_SUCCESS,
        title: 'Market-Ready Launches',
        description: 'End-to-end track record taking visionary MVPs from wireframe to multi-million user products.',
      },
      {
        icon: EXPERT_KNOWLEDGE,
        title: 'Full Lifecycle Expertise',
        description: 'Comprehensive mastery of product discovery, user feedback loops, UX validation, and engineering.',
      },
      {
        icon: ON_TIME,
        title: 'Fast Time-to-Market',
        description: 'Disciplined agile sprints ensuring rapid market launch ahead of your competition.',
      },
      {
        icon: COST_EFFECTIVE,
        title: 'Lean MVP Construction',
        description: 'Cost-efficient modular development focusing capital strictly on high-impact user features.',
      },
      {
        icon: SUPPORT,
        title: '24/7 Product Ops & Scale',
        description: 'Continuous performance optimization, feature scaling, and uptime management post-launch.',
      },
    ],
  },
}
