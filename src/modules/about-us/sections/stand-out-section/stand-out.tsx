import Mission from "./assets/mission.svg"
import OurValues from "./assets/our-values.svg"
import Vision from "./assets/vision.svg"

export const standOutList = [
    {
      icon: Mission,
      title: 'Our Mission',
      image: '/about-us/stand-out/strength-people-hands.png',
      description:
        'Our mission is to help you achieve your goals and dreams by providing the best tools and resources. With expert guidance and top-quality support, we are committed to assisting you in personal growth, career success, and business advancement every step of the way.',
    },
    {
      icon: Vision,
      title: 'Our Vision',
      image: '/about-us/stand-out/volunteer-future-expertise.png',
      description:
        'Our vision is to create a world where everyone has access to the knowledge and resources they need to succeed. We strive to empower individuals with the right tools, guidance, and opportunities, fostering growth, innovation, and equal access to success for all.',
    },
    {
      icon: OurValues,
      title: 'Our core values',
      image: '/about-us/stand-out/people-hands.png',
      description:
        'Our core values define our commitment to integrity, accountability, excellence, innovation, inclusivity, and customer-centricity. We uphold ethical standards, and user experiences to empower growth, success, and positive impact for all.',
      coreValues: [
        //only title
        { title: 'Integrity' },
        { title: 'Cutomer Focus' },
        { title: 'Accountability' },
        { title: 'Inclusiveness' },
        { title: 'Collaboration' },
        { title: 'Innovation' },
      ],
    },
  ]
  