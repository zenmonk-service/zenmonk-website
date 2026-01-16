import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import JobPosting from '../src/models/job-posting';
import Skill from '../src/models/skills';
import JobSkill from '../src/models/job-skills';
import Contact from '../src/models/contact';
import Subscriber from '../src/models/subscriber';

dotenv.config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env;

// Since we are running this script from the host, we use localhost and the forward port
const DB_HOST = 'localhost';
const DB_PORT = '27018'; // The port we mapped in docker-compose

const MONGODB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

const skillsData = [
  { name: 'React', description: 'A JavaScript library for building user interfaces' },
  { name: 'Node.js', description: 'JavaScript runtime built on Chromes V8 JavaScript engine' },
  { name: 'MongoDB', description: 'The document database for modern applications' },
  { name: 'TypeScript', description: 'Typed superset of JavaScript' },
  { name: 'Next.js', description: 'The React Framework for the Web' },
  { name: 'Figma', description: 'Collaborative interface design tool' },
  { name: 'Project Management', description: 'Leading the work of a team to achieve all project goals' },
  { name: 'Strategic Planning', description: 'Defining organization direction and making decisions on resources' },
  { name: 'Content Marketing', description: 'Creating and distributing valuable, relevant, and consistent content' },
  { name: 'SEO/SEM', description: 'Search Engine Optimization and Search Engine Marketing' },
  { name: 'Leadership', description: 'Ability to lead and influence others towards a goal' },
];

const jobsData = [
  {
    type: 'full-time',
    category: 'development',
    role: 'Senior Frontend Developer',
    description: 'We are looking for an experienced React developer to help us build high-performance web applications. You will work closely with our design team to create intuitive user experiences.',
    status: 'open',
  },
  {
    type: 'full-time',
    category: 'development',
    role: 'Backend Engineer',
    description: 'Looking for a Node.js expert to build scalable backend services. Experience with MongoDB and distributed systems is highly preferred.',
    status: 'open',
  },
  {
    type: 'contract',
    category: 'ui/ux_designer',
    role: 'Product Designer',
    description: 'Help us design the next big thing. You will be responsible for creating user-centric designs for our mobile and web applications.',
    status: 'open',
  },
  {
    type: 'full-time',
    category: 'management',
    role: 'Project Manager',
    description: 'Lead our development teams to success. You will be responsible for planning, executing, and closing projects while maintaining stakeholder relationships.',
    status: 'open',
  },
  {
    type: 'full-time',
    category: 'marketing',
    role: 'Marketing Coordinator',
    description: 'Join our marketing team to boost our brand presence. You will manage content creation, SEO strategies, and social media campaigns.',
    status: 'open',
  },
  {
    type: 'full-time',
    category: 'management',
    role: 'HR Manager',
    description: 'Oversee recruitment and talent development at Zenmonk. You will shape our culture and ensure our team has everything they need to thrive.',
    status: 'open',
  }
];

async function seed() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    console.log('Clearing existing data...');
    await Promise.all([
      JobPosting.deleteMany({}),
      Skill.deleteMany({}),
      JobSkill.deleteMany({}),
      Contact.deleteMany({}),
      Subscriber.deleteMany({}),
    ]);

    // Seed Skills
    console.log('Seeding Skills...');
    const createdSkills = await Skill.insertMany(skillsData);
    console.log(`Created ${createdSkills.length} skills`);

    // Seed Job Postings
    console.log('Seeding Job Postings...');
    const createdJobs = await JobPosting.insertMany(jobsData);
    console.log(`Created ${createdJobs.length} job postings`);
    
    // Link Skills to Jobs
    console.log('Linking Skills to Jobs...');
    const jobSkillLinks: Array<{ job_posting: any; skill: any }> = [];

    // Map skills by name for easy lookup
    const skillMap = createdSkills.reduce((acc, skill) => {
      acc[skill.name] = skill._id;
      return acc;
    }, {} as any);

    const linkSkills = (jobIndex: number, skillNames: string[]) => {
      const job = createdJobs[jobIndex];
      skillNames.forEach(name => {
        if (skillMap[name]) {
          jobSkillLinks.push({ job_posting: job._id, skill: skillMap[name] });
        }
      });
    };

    linkSkills(0, ['React', 'TypeScript', 'Next.js']); // Senior Frontend
    linkSkills(1, ['Node.js', 'MongoDB', 'TypeScript']); // Backend Engineer
    linkSkills(2, ['Figma']); // Product Designer
    linkSkills(3, ['Project Management', 'Leadership', 'Strategic Planning']); // Project Manager
    linkSkills(4, ['Content Marketing', 'SEO/SEM']); // Marketing Coordinator
    linkSkills(5, ['Leadership', 'Strategic Planning']); // HR Manager

    await JobSkill.insertMany(jobSkillLinks);
    console.log(`Created ${jobSkillLinks.length} job-skill links`);

    // Seed some contacts
    console.log('Seeding Contacts...');
    await Contact.create({
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      phone: '1234567890',
      message: 'Hello, I am interested in your services.'
    });

    // Seed some subscribers
    console.log('Seeding Subscribers...');
    await Subscriber.create({
      email: 'news@example.com'
    });

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seed();
