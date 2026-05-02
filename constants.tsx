
import React from 'react';
import { Project, Skill, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'EcoTrack: Urban Sustainability',
    category: 'Mobile App',
    description: 'Gamifying recycling and reducing carbon footprint for city dwellers.',
    image: 'https://picsum.photos/800/600?random=1',
    tags: ['UX Research', 'Mobile UI', 'Sustainability'],
    role: 'Lead Product Designer',
    year: '2023',
    longDescription: 'EcoTrack was designed to address the lack of transparency in local recycling programs. Through iterative prototyping and user interviews, we developed a system that tracks individual impact and community milestones.',
    outcome: 'Increased local recycling participation by 40% in pilot cities.'
  },
  {
    id: '2',
    title: 'NovaBank: Gen Z Fintech',
    category: 'Digital Banking',
    description: 'A revolutionary banking interface focusing on social saving and financial literacy.',
    image: 'https://picsum.photos/800/600?random=2',
    tags: ['Fintech', 'Micro-interactions', 'Brand Design'],
    role: 'Senior UI/UX Designer',
    year: '2023',
    longDescription: 'NovaBank rethinks the traditional ledger view. We replaced boring tables with visual "Buckets" and "Streams", making money management feel intuitive and modern.',
    outcome: 'Acquired 100k users within the first month of beta.'
  },
  {
    id: '3',
    title: 'Aura: Wellness Reimagined',
    category: 'Health & Fitness',
    description: 'An AI-driven mindfulness platform that adapts to your stress levels.',
    image: 'https://picsum.photos/800/600?random=3',
    tags: ['Wellness', 'AI Integration', 'Accessibility'],
    role: 'Founding Designer',
    year: '2022',
    longDescription: 'Aura uses biometric data from wearables to suggest breathing exercises. The design challenge was to keep the UI minimal enough to not cause additional cognitive load.',
    outcome: '4.9 stars on App Store with over 5M downloads.'
  },
  {
    id: '4',
    title: 'SwiftFlow: Enterprise B2B',
    category: 'SaaS Dashboard',
    description: 'Streamlining complex supply chain management for global logistics.',
    image: 'https://picsum.photos/800/600?random=4',
    tags: ['Data Viz', 'Complex Systems', 'User Journeys'],
    role: 'UX Architect',
    year: '2022',
    longDescription: 'Managing logistics for 500+ ships requires massive data density. SwiftFlow uses progressive disclosure and smart filters to make the data manageable for operators.',
    outcome: 'Reduced cargo processing errors by 25%.'
  },
  {
    id: '5',
    title: 'GourmetGuide: AR Dining',
    category: 'Emerging Tech',
    description: 'Enhancing the restaurant experience with interactive AR menus and booking.',
    image: 'https://picsum.photos/800/600?random=5',
    tags: ['AR/VR', 'Product Strategy', 'Interface Design'],
    role: 'Creative Director',
    year: '2021',
    longDescription: 'GourmetGuide allows users to see life-sized 3D models of dishes on their table before ordering, solving the "what does it look like" problem.',
    outcome: 'Partnered with 200+ Michelin-star restaurants.'
  },
  {
    id: '6',
    title: 'SkillShare Pro: LMS Redesign',
    category: 'Education',
    description: 'Modernizing the learning experience for corporate professional development.',
    image: 'https://picsum.photos/800/600?random=6',
    tags: ['EdTech', 'Responsive Web', 'Design Systems'],
    role: 'Senior Product Designer',
    year: '2021',
    longDescription: 'We focused on the "Community" aspect of learning, creating a platform where employees can mentor each other through live video and shared whiteboards.',
    outcome: 'Increased course completion rates by 60%.'
  },
  {
    id: '7',
    title: 'Voyage: Travel Planner',
    category: 'Travel & Tourism',
    description: 'Collaborative itinerary planning for groups and digital nomads.',
    image: 'https://picsum.photos/800/600?random=7',
    tags: ['Collaboration', 'Geolocation', 'Mobile App'],
    role: 'Lead UX Designer',
    year: '2020',
    longDescription: 'Voyage solves the mess of group chats. It provides a shared calendar, budget tracker, and interactive map where everyone can drop pins.',
    outcome: 'Named "Best Travel App 2021" by TechCrunch.'
  },
  {
    id: '8',
    title: 'HealthSync: Medical Portal',
    category: 'Healthcare',
    description: 'Unifying patient records across disparate hospital systems.',
    image: 'https://picsum.photos/800/600?random=8',
    tags: ['Privacy', 'User Research', 'Web App'],
    role: 'UX Researcher',
    year: '2020',
    longDescription: 'A HIPAA-compliant portal that gives patients full ownership of their data. We simplified medical jargon into easy-to-understand visual health markers.',
    outcome: 'Implemented in 5 major hospital networks.'
  },
  {
    id: '9',
    title: 'VibeCheck: Music Streaming',
    category: 'Entertainment',
    description: 'Mood-based playlist discovery using emotional AI analysis.',
    image: 'https://picsum.photos/800/600?random=9',
    tags: ['Audio UI', 'AI Discovery', 'Visual Identity'],
    role: 'Senior UI Designer',
    year: '2019',
    longDescription: 'Instead of searching for genres, users interact with a "Mood Cloud". The UI shifts its color palette based on the vibe of the currently playing music.',
    outcome: 'Featured on the Apple Keynote for its innovative UI.'
  },
  {
    id: '10',
    title: 'PetPals: Adoption Network',
    category: 'Social Impact',
    description: 'A Tinder-style swipe interface for connecting rescue pets with owners.',
    image: 'https://picsum.photos/800/600?random=10',
    tags: ['Pro-bono', 'Interaction Design', 'Mobile'],
    role: 'UX Designer',
    year: '2019',
    longDescription: 'PetPals makes the adoption process less intimidating. We used fun, inviting design patterns and streamlined the 20-page adoption form into a 5-minute chat.',
    outcome: 'Helped 10,000+ pets find forever homes.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'User Research', level: 95, icon: '🔍' },
  { name: 'Interaction Design', level: 90, icon: '🖱️' },
  { name: 'Prototyping', level: 85, icon: '⚡' },
  { name: 'Design Systems', level: 90, icon: '🧩' },
  { name: 'Motion Design', level: 75, icon: '🎞️' },
  { name: 'UX Writing', level: 80, icon: '✍️' },
];
