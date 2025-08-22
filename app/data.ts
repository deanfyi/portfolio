type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type CraftPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Try Sprint',
    description:
      'Your AI-Driven Workspace - Plan, chat, build & deploy in one place.',
    link: 'https://trysprint.app/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'ui3',
    description: 'UI kit to make beautiful & functional interfaces for Web3.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Odyssey Finance',
    title: 'Creative Director',
    start: '2023',
    end: 'Present',
    link: 'https://odyssey.finance',
    id: 'work1',
  },
  {
    company: 'ui3',
    title: 'Founder',
    start: '2025',
    end: 'Present',
    link: 'https://ui3.xyz',
    id: 'work2',
  },
  {
    company: 'Tapmydata',
    title: 'Digital Designer',
    start: '2022',
    end: '2023',
    link: 'https://tapmydata.com',
    id: 'work3',
  },
]

export const CRAFT_POSTS: CraftPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/deanfyi',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/deanfyi',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/deannicholascurran/',
  },
  {
    label: 'Instagram',
    link: 'https://www.threads.com/deanfyi',
  },
]

export const EMAIL = 'dean.curran@icloud.com'
