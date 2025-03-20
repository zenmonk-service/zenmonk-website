import { Department } from '../../types'

export const positionsList: Department[] = [
  {
    department: 'Development',
    id: 1,
    positions: [
      {
        title: 'UI-UX Designer',
        heading: 'Experienced UI-UX Designer',
        isOpening: true,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        skills: [
          {
            title: 'Figma',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            title: 'Problem Solving',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            title: 'Adobe XD',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
        ],
      },
      {
        title: 'Frontend Developer',
        heading: 'React.js Frontend Developer',
        isOpening: false,
        description:
          'Seeking a skilled React.js developer to build and maintain user-facing applications with modern UI frameworks.',
        skills: [
          {
            title: 'React.js',
            description:
              'Experience with hooks, state management, and component lifecycle.',
          },
          {
            title: 'JavaScript/TypeScript',
            description:
              'Strong understanding of ES6+ features and TypeScript.',
          },
          {
            title: 'CSS & Material-UI',
            description:
              'Expertise in styling libraries like Tailwind or Material-UI.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    department: 'Management',
    positions: [
      {
        title: 'Project Manager',
        heading: 'Agile Project Manager',
        isOpening: false,
        description:
          'We are looking for a detail-oriented Project Manager to oversee software development projects using Agile methodologies.',
        skills: [
          {
            title: 'Agile & Scrum',
            description:
              'Experience managing projects using Agile and Scrum methodologies.',
          },
          {
            title: 'Leadership',
            description:
              'Strong ability to lead and motivate teams effectively.',
          },
          {
            title: 'Communication',
            description: 'Excellent verbal and written communication skills.',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    department: 'Sales',
    positions: [
      {
        title: 'Sales Executive',
        heading: 'B2B Sales Executive',
        isOpening: false,
        description:
          'Join our sales team to drive business growth by acquiring new clients and maintaining strong relationships.',
        skills: [
          {
            title: 'Negotiation',
            description:
              'Ability to close deals effectively and build long-term partnerships.',
          },
          {
            title: 'CRM Tools',
            description:
              'Experience using CRM tools for tracking leads and sales activities.',
          },
          {
            title: 'Market Research',
            description:
              'Understanding of market trends and competitor analysis.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    department: 'Admin',
    positions: [
      {
        title: 'Administrative Assistant',
        heading: 'Office Administrative Assistant',
        isOpening: true,
        description:
          'Seeking an organized and detail-oriented individual to handle office administration and support tasks.',
        skills: [
          {
            title: 'Time Management',
            description:
              'Ability to manage schedules and prioritize tasks effectively.',
          },
          {
            title: 'Microsoft Office',
            description: 'Proficiency in Word, Excel, and PowerPoint.',
          },
          {
            title: 'Data Entry',
            description:
              'Experience handling and organizing documents and records.',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    department: 'Marketing',
    positions: [
      {
        title: 'Digital Marketing Specialist',
        heading: 'SEO & Social Media Marketing Specialist',
        isOpening: false,
        description:
          'Looking for a digital marketing expert to manage SEO, content marketing, and social media strategies.',
        skills: [
          {
            title: 'SEO & SEM',
            description:
              'Expertise in optimizing websites for search engines and running ad campaigns.',
          },
          {
            title: 'Content Marketing',
            description:
              'Experience in creating engaging blog posts and digital content.',
          },
          {
            title: 'Social Media',
            description:
              'Ability to manage and grow social media platforms effectively.',
          },
        ],
      },
    ],
  },
]
