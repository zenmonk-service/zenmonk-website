export interface FAQItem {
  question: string
  answer: string
}

export const defaultFAQs: FAQItem[] = [
  {
    question: 'How can I get started with Zenmonk for my project?',
    answer:
      'You can reach out via our contact form or schedule a discovery call. We analyze your requirements and provide a tailored project roadmap within 48 hours.',
  },
  {
    question: 'What development methodologies and engagement models do you offer?',
    answer:
      'We support dedicated engineering teams, time-and-materials, and fixed-price models using agile sprints with bi-weekly deliverables.',
  },
  {
    question: 'How do you ensure code quality and IP protection?',
    answer:
      'We enforce strict NDA agreements, automated CI/CD testing pipelines, peer code reviews, and complete IP transfer upon project delivery.',
  },
  {
    question: 'Can Zenmonk scale or take over an existing codebase?',
    answer:
      'Yes, we perform comprehensive architectural audits, refactor legacy code, and seamlessly onboard engineers to scale your existing platform.',
  },
  {
    question: 'How do you handle post-launch maintenance and support?',
    answer:
      'We offer SLA-backed 24/7 maintenance, performance monitoring, security patches, and continuous feature enhancements post-deployment.',
  },
  {
    question: 'How do you ensure data security and compliance in your solutions?',
    answer:
      'We implement industry-standard encryption, secure coding guidelines, regular security audits, and strict compliance measures such as GDPR and HIPAA.',
  },
  {
    question: 'What is your typical project delivery and communication timeline?',
    answer:
      'We operate in agile 2-week sprint cycles with transparent milestone reporting, weekly progress demos, and dedicated project manager communication.',
  },
]

export const faqDataByService: Record<string, FAQItem[]> = {
  home: defaultFAQs,
  careers: [
    {
      question: 'What is the hiring and interview process at Zenmonk?',
      answer:
        'Our process includes an initial screening, a practical technical assessment, an architectural discussion, and a cultural fit interview.',
    },
    {
      question: 'Do you offer remote or hybrid work opportunities?',
      answer:
        'Yes, we offer flexible hybrid and remote working models with core collaboration hours and modern digital workplace tools.',
    },
    {
      question: 'How does Zenmonk support professional growth and learning?',
      answer:
        'We provide dedicated learning budgets, mentorship programs, tech hackathons, and sponsored certifications for skill enhancement.',
    },
    {
      question: 'What technologies and stacks will I work on?',
      answer:
        'You will work on cutting-edge stacks including React, Next.js, Node.js, Python, Cloud Native architectures, AI/ML, and DevOps.',
    },
    {
      question: 'What benefits and perks are provided to team members?',
      answer:
        'We offer competitive compensation, comprehensive health insurance, annual performance bonuses, wellness programs, and team retreats.',
    },
    {
      question: 'Can fresh graduates or interns apply for open roles?',
      answer:
        'Yes, we run structured internship and graduate trainee programs with dedicated senior engineer mentorship and full-time hiring paths.',
    },
    {
      question: 'How can I track the status of my job application?',
      answer:
        'You can track your application status in real time using your unique Tracking ID on our dedicated Track Application portal.',
    },
  ],
  'ai-solutions': [
    {
      question: 'What types of AI and Machine Learning models do you build?',
      answer:
        'We build predictive models, LLM-powered applications, NLP systems, computer vision algorithms, and intelligent automation workflows.',
    },
    {
      question: 'How do you handle data privacy and model security?',
      answer:
        'We use isolated VPC environments, strict data anonymization, on-premise or private cloud model hosting, and zero-retention policies.',
    },
    {
      question: 'Can you integrate AI capabilities into our existing software?',
      answer:
        'Yes, we connect custom AI agents, OpenAI, Claude, or open-source LLMs into your existing legacy systems via robust REST and GraphQL APIs.',
    },
    {
      question: 'How do you prepare and clean datasets for training?',
      answer:
        'We build automated data pipelines for extraction, deduplication, labeling, normalization, and synthetic data generation.',
    },
    {
      question: 'What frameworks do you use for AI/ML engineering?',
      answer:
        'We leverage PyTorch, TensorFlow, LangChain, Hugging Face, LlamaIndex, and OpenAI APIs with scalable vector databases like Pinecone.',
    },
    {
      question: 'How do you prevent hallucinations in AI applications?',
      answer:
        'We implement Retrieval-Augmented Generation (RAG), strict context window management, guardrails, and validation layers.',
    },
    {
      question: 'What are the ongoing costs and infrastructure needs for AI models?',
      answer:
        'We optimize inference costs through model quantization, caching strategies, serverless endpoints, and dynamic GPU provisioning.',
    },
  ],
  'cloud-development': [
    {
      question: 'Which cloud platforms and architectures do you support?',
      answer:
        'We specialize in AWS, Google Cloud Platform (GCP), and Microsoft Azure using microservices, containerization, and serverless architectures.',
    },
    {
      question: 'How do you execute seamless legacy-to-cloud migrations?',
      answer:
        'We follow a phased migration framework (rehost, refactor, or rearchitect) with zero downtime and automated fallback strategies.',
    },
    {
      question: 'How do you help reduce and optimize monthly cloud costs?',
      answer:
        'We implement FinOps best practices, auto-scaling policies, right-sizing of instances, reserved capacity planning, and spot fleet management.',
    },
    {
      question: 'What CI/CD and DevOps automation tools do you utilize?',
      answer:
        'We utilize Terraform, Docker, Kubernetes, GitHub Actions, GitLab CI, and AWS CloudFormation for automated infrastructure as code.',
    },
    {
      question: 'How do you ensure high availability and disaster recovery?',
      answer:
        'We configure multi-region replication, automated failovers, continuous database backups, and strict RPO/RTO disaster recovery plans.',
    },
    {
      question: 'How is cloud security and compliance managed?',
      answer:
        'We implement IAM least privilege access, automated vulnerability scans, secret management, SOC2 compliance, and DDoS protection.',
    },
    {
      question: 'Do you provide 24/7 cloud monitoring and incident response?',
      answer:
        'Yes, we set up Prometheus, Grafana, Datadog, and AWS CloudWatch with automated alerting and rapid-response incident workflows.',
    },
  ],
  'custom-app-development': [
    {
      question: 'Do you build native or cross-platform mobile applications?',
      answer:
        'We build cross-platform apps using React Native and Flutter, as well as high-performance native apps for iOS (Swift) and Android (Kotlin).',
    },
    {
      question: 'How do you ensure high performance and smooth 60fps animations?',
      answer:
        'We optimize UI render cycles, implement efficient state management, compress assets, and use native thread bridge acceleration.',
    },
    {
      question: 'How do you handle offline mode and local data synchronization?',
      answer:
        'We implement local SQLite/Realm storage with background synchronization workers to ensure flawless offline app usability.',
    },
    {
      question: 'Do you assist with App Store and Google Play Store publishing?',
      answer:
        'Yes, we handle the complete store submission process, guideline compliance, metadata optimization, and test flight distributions.',
    },
    {
      question: 'How do you integrate third-party payment gateways and push notifications?',
      answer:
        'We integrate Stripe, Razorpay, Apple Pay, Google Pay, and Firebase Cloud Messaging (FCM) for secure payments and real-time alerts.',
    },
    {
      question: 'How do you ensure app security on mobile devices?',
      answer:
        'We enforce SSL pinning, biometric authentication, encrypted local storage, jailbreak/root detection, and obfuscated builds.',
    },
    {
      question: 'What is the typical timeframe for developing a mobile app MVP?',
      answer:
        'An initial functional MVP typically takes 6 to 10 weeks, depending on feature complexity, third-party integrations, and design scope.',
    },
  ],
  'growth-and-marketing': [
    {
      question: 'What growth marketing services does Zenmonk provide?',
      answer:
        'We offer technical SEO, conversion rate optimization (CRO), paid search/social advertising, content marketing, and growth analytics.',
    },
    {
      question: 'How do you improve organic search rankings and core web vitals?',
      answer:
        'We optimize page speed, structured schema markup, technical site architecture, keyword relevance, and high-authority link acquisition.',
    },
    {
      question: 'How do you measure and report marketing campaign ROI?',
      answer:
        'We build real-time analytics dashboards tracking CAC, LTV, conversion funnels, attribution channels, and monthly growth metrics.',
    },
    {
      question: 'How does Conversion Rate Optimization (CRO) work?',
      answer:
        'We conduct user behavior analysis, heatmapping, and A/B testing on landing pages to systematically increase user conversion rates.',
    },
    {
      question: 'Which ad platforms and analytics tools do you manage?',
      answer:
        'We manage Google Ads, Meta Ads, LinkedIn Campaign Manager, Google Analytics 4 (GA4), Mixpanel, and HubSpot CRM integrations.',
    },
    {
      question: 'Can you help launch a new product to market?',
      answer:
        'Yes, we formulate go-to-market (GTM) strategies, build high-converting landing pages, and run targeted multi-channel launch campaigns.',
    },
    {
      question: 'What is the recommended timeline to see tangible marketing results?',
      answer:
        'Paid acquisition delivers immediate traffic and leads, while organic SEO and content compounding show strong ROI within 3 to 6 months.',
    },
  ],
  'industries-specific-solution': [
    {
      question: 'Which industries and vertical domains do you serve?',
      answer:
        'We build specialized solutions for FinTech, Healthcare, E-commerce, Logistics, EdTech, Real Estate, and SaaS enterprises.',
    },
    {
      question: 'How do you ensure industry regulatory and compliance standards?',
      answer:
        'We adhere strictly to HIPAA (Healthcare), PCI-DSS (FinTech/Payments), GDPR (Data Privacy), and SOC2 regulatory frameworks.',
    },
    {
      question: 'Can you integrate with proprietary or legacy industry software?',
      answer:
        'Yes, we build custom middleware and secure API connectors to integrate with legacy ERPs, CRMs, EHR systems, and banking cores.',
    },
    {
      question: 'How do you customize solutions for unique business workflows?',
      answer:
        'We begin with deep domain discovery sessions, map exact operational workflows, and engineer custom modular software architectures.',
    },
    {
      question: 'How do you handle high transaction volumes and concurrency?',
      answer:
        'We architect distributed microservices with horizontal autoscaling, Redis caching, and robust message queuing (Kafka, RabbitMQ).',
    },
    {
      question: 'Do you provide multi-tenant SaaS architecture for industry products?',
      answer:
        'Yes, we design scalable multi-tenant databases, isolated schema partitioning, role-based access control, and customizable client portals.',
    },
    {
      question: 'What level of post-deployment domain support do you provide?',
      answer:
        'We provide dedicated technical account managers, SLA-backed issue resolution, user training, and continuous feature iterations.',
    },
  ],
  'it-and-business-consultation': [
    {
      question: 'What is included in your IT & Business Consultation services?',
      answer:
        'We provide digital transformation roadmaps, tech stack evaluation, cloud strategy, IT cost audits, and workflow modernization.',
    },
    {
      question: 'How do you assess our current technology infrastructure?',
      answer:
        'We conduct comprehensive architecture reviews, security vulnerability assessments, and performance benchmarks to identify bottlenecks.',
    },
    {
      question: 'Can you help modernize our legacy software applications?',
      answer:
        'Yes, we create step-by-step legacy modernization strategies, transitioning monolithic applications to modular microservices.',
    },
    {
      question: 'How do you align technology investments with business goals?',
      answer:
        'We evaluate your revenue targets, operational hurdles, and market opportunities to recommend tech solutions with measurable ROI.',
    },
    {
      question: 'Do you provide virtual CTO or IT leadership services?',
      answer:
        'Yes, our seasoned tech leads provide fractional CTO guidance, engineering team governance, and technology vendor selection.',
    },
    {
      question: 'How do you manage risks and change during digital transformation?',
      answer:
        'We design phased rollout plans, disaster recovery protocols, employee change management training, and continuous progress audits.',
    },
    {
      question: 'How long does a typical IT consulting engagement last?',
      answer:
        'Engagements range from 2-week strategic technology audits to ongoing quarterly advisory partnerships for enterprise growth.',
    },
  ],
  'it-training-and-workshops': [
    {
      question: 'Who are the IT training programs and workshops designed for?',
      answer:
        'Our programs cater to corporate engineering teams, individual developers, career switchers, and organizations upskilling their workforce.',
    },
    {
      question: 'What core technology domains do your workshops cover?',
      answer:
        'We cover Full-Stack Web Development, Cloud Architecture, DevOps & Kubernetes, AI/ML Engineering, and Modern UI/UX Practices.',
    },
    {
      question: 'Are the training sessions theoretical or hands-on?',
      answer:
        'Our curriculum is 80% practical and project-based, featuring real-world coding challenges, live code reviews, and capstone projects.',
    },
    {
      question: 'Can workshops be customized for corporate engineering teams?',
      answer:
        'Yes, we assess your team\'s existing skill baseline and tailor syllabus, pacing, and tech stacks to match your internal projects.',
    },
    {
      question: 'What certifications or credentials do participants receive?',
      answer:
        'Participants receive verified Zenmonk Certificates of Completion, portfolio-ready projects, and ongoing access to course resources.',
    },
    {
      question: 'Are the workshops conducted online, in-person, or hybrid?',
      answer:
        'We offer flexible delivery models including live interactive virtual classrooms, on-premise corporate sessions, and hybrid bootcamps.',
    },
    {
      question: 'Do you offer post-workshop mentoring and doubt-clearing sessions?',
      answer:
        'Yes, instructors provide dedicated 1-on-1 office hours, project review sessions, and community support channels for 30 days post-training.',
    },
  ],
  'product-development': [
    {
      question: 'What is your end-to-end product development lifecycle?',
      answer:
        'We handle product discovery, UI/UX prototyping, agile sprint development, automated QA testing, cloud deployment, and product launch.',
    },
    {
      question: 'How quickly can you build and launch a Minimum Viable Product (MVP)?',
      answer:
        'We typically deliver a market-ready, scalable MVP within 6 to 10 weeks using rapid prototyping and reusable architectural components.',
    },
    {
      question: 'How do you validate product ideas before writing code?',
      answer:
        'We conduct competitive benchmarking, user persona mapping, interactive Figma prototyping, and feasibility testing with target users.',
    },
    {
      question: 'Can you take over and scale an unfinished product?',
      answer:
        'Yes, we audit existing code, resolve technical debt, optimize database schemas, and accelerate feature development to reach launch.',
    },
    {
      question: 'How do you ensure product scalability for rapid user growth?',
      answer:
        'We build modular cloud-native architectures, stateless API microservices, efficient database indexing, and CDN edge caching.',
    },
    {
      question: 'Who owns the intellectual property (IP) and code of the product?',
      answer:
        'You maintain 100% full ownership of all source code, design assets, databases, and IP rights upon milestone completion.',
    },
    {
      question: 'How do you prioritize feature roadmaps after initial launch?',
      answer:
        'We analyze product analytics, user feedback, and conversion metrics to prioritize high-impact features in iterative 2-week sprints.',
    },
  ],
  'software-development': [
    {
      question: 'What software development methodologies do you follow?',
      answer:
        'We follow Agile Scrum methodology with bi-weekly sprint planning, daily standups, sprint reviews, and continuous CI/CD integration.',
    },
    {
      question: 'Which programming languages and backend frameworks do you use?',
      answer:
        'We utilize TypeScript, Node.js, Python, Go, Java, Next.js, and PostgreSQL/MongoDB to engineer high-throughput backend services.',
    },
    {
      question: 'How do you guarantee high code quality and test coverage?',
      answer:
        'We enforce automated unit testing, integration tests, strict TypeScript linting, peer code reviews, and automated SonarQube scans.',
    },
    {
      question: 'Can you build custom enterprise software that integrates with our APIs?',
      answer:
        'Yes, we engineer custom enterprise software with robust RESTful, gRPC, and GraphQL APIs for seamless third-party software integration.',
    },
    {
      question: 'How do you handle requirement changes during the development cycle?',
      answer:
        'Our agile process accommodates backlog re-prioritization at the start of each sprint without disrupting ongoing deliverables.',
    },
    {
      question: 'How do you manage data security and vulnerability testing?',
      answer:
        'We implement OWASP security guidelines, end-to-end payload encryption, secure token authentication, and routine penetration testing.',
    },
    {
      question: 'What documentation do you deliver alongside the software?',
      answer:
        'We provide complete API documentation (Swagger/OpenAPI), system architecture diagrams, setup guides, and deployment runbooks.',
    },
  ],
  'ui-ux-design': [
    {
      question: 'What is your UI/UX design and research process?',
      answer:
        'Our process encompasses user research, wireframing, interactive prototyping, usability testing, and pixel-perfect design system creation.',
    },
    {
      question: 'Which design tools and collaboration platforms do you use?',
      answer:
        'We primarily design in Figma, creating component libraries, interactive prototypes, auto-layout tokens, and design tokens for developers.',
    },
    {
      question: 'How do you ensure designs are accessible and responsive?',
      answer:
        'We follow WCAG 2.1 AA accessibility guidelines, test contrast ratios, and design responsive layouts across mobile, tablet, and desktop.',
    },
    {
      question: 'Do you provide comprehensive design systems and component libraries?',
      answer:
        'Yes, we build scalable design systems with reusable typography, color palettes, spacing variables, and documented UI component states.',
    },
    {
      question: 'Can you redesign and modernize our existing web or mobile app?',
      answer:
        'Yes, we perform UX heuristic audits, analyze user drop-offs, and redesign interfaces to boost engagement and modern aesthetic appeal.',
    },
    {
      question: 'How do you facilitate seamless design-to-developer handoff?',
      answer:
        'We provide developer-ready Figma files with precise design tokens, CSS specs, responsive breakpoints, and exportable vector assets.',
    },
    {
      question: 'How do you test prototypes with actual end users?',
      answer:
        'We run moderated usability testing sessions, collect user feedback on clickable prototypes, and refine user flows before coding begins.',
    },
  ],
}
