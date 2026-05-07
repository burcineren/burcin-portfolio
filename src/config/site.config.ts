// Please note Some data Below are Just Placeholder for now due to active development
import type { Metadata } from 'next';

export type SocialLink = {
  label: string;
  url: string;
  icon?: string; // name for icon library if needed later
};


export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export interface SiteConfig {
  siteName: string;
  domain: string;
  description: string;

  about: string;
  keywords: string[];
  ogImage: string;
  twitterHandle: string;
  author: string;
  author_img:string;

  theme: {
    default: 'light' | 'dark';
    allowSystem: boolean;
  };
  links: {
    website: string;
    github: string;
    linkedin: string;
    tips: string;
    email: string;
  };
  social: SocialLink[];
  navigation: NavItem[];
  seo: {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  image?: string; // default og image
  imageAlt?: string;
  locale?: string;
  type?: string;
  twitterCard?: string;
  robots?: string;
  themeColor?: string;
  };

}

export const siteConfig: SiteConfig = {
  siteName: 'Burçin Eren',
  domain: 'burcineren.dev',
  author: 'Burçin Eren',
  description: 'Software Developer specializing in .NET and modern Frontend technologies like React, Vue.js, and Angular.',
  about:
    'I develop modern and scalable web applications in the Frontend field using React, Angular, and Vue.js technologies. I create strong, sustainable code structures with TypeScript and design reusable UI components. With the experience I have gained in e-commerce platforms and corporate projects, I focus on enhancing user experience and improving performance. I optimize data management with libraries like React Query and pass on clean code and best practice standards to teams. I am a software developer who is open to innovative technologies, loves continuous learning, and prioritizes team success.',
    author_img: '/img/profile.jpeg',
    keywords: [
    'Burçin Eren',
    'Software Developer',
    'Frontend Developer',
    '.NET Developer',
    'Portfolio',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'Angular',
    'React',
    'Vue.js'
  ],
  ogImage: '/og.png',
  twitterHandle: '@burcinereen',

  theme: {
    default: 'dark',
    allowSystem: true,
  },
  links: {
    website: 'https://burcineren.dev',
    github: 'https://github.com/burcineren',
    linkedin: 'https://www.linkedin.com/in/burcin-eren/',
    tips: '#',
    email: 'mailto:burcineren44@gmail.com',
  },
  social: [
    { label: 'GitHub', url: 'https://github.com/burcineren', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/burcin-eren/', icon: 'linkedin' },
    { label: 'Twitter', url: 'https://twitter.com/burcinereen', icon: 'twitter' },
    { label: 'Instagram', url: 'https://www.instagram.com/burcinereen/', icon: 'instagram' },
  ],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' }
  ],

  
  seo: {
    title: 'Burçin Eren | Software Developer',
    description: 'Portfolio of Burçin Eren, a Software Developer specializing in .NET, React, Vue.js, and Angular.',
    keywords: [
      'Burçin Eren',
      'Software Developer',
      'Frontend Developer',
      '.NET Developer',
      'Portfolio',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Angular',
      'React',
      'Vue.js'
    ],
    canonical: 'https://burcineren.dev',
    image: '/og.png',
    imageAlt: "Burçin Eren - Software Developer",
    locale: 'en-US',
    type: 'website',
    twitterCard: 'summary_large_image',
    robots: 'index,follow',
    themeColor: '#0f172a',
  },

};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { seo, siteName, domain } = siteConfig;

  const base: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.links.website }],
    metadataBase: new URL(`https://${domain}`),
    alternates: { canonical: seo.canonical ?? `https://${domain}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical ?? `https://${domain}`,
      siteName,
      images: seo.image ? [seo.image] : [],
      type: seo.type ?? 'website',
      locale: seo.locale,
    },
    twitter: {
      card: seo.twitterCard ?? 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : [],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    other: {
      robots: seo.robots,
      'theme-color': seo.themeColor,
      'og:image:alt': seo.imageAlt,
    },
  } as Metadata;

  return { ...base, ...overrides };
}

export type { Metadata };
