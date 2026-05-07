"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase, ChevronRight } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  type: 'Full-time' | 'Internship' | 'Education' | 'Contract';
  details?: string[];
}

const experiences: Experience[] = [
  {
    company: 'İşin Olacak',
    role: 'Frontend Developer',
    location: 'Istanbul, Turkey',
    period: 'Jan 2026 - Present',
    type: 'Full-time',
    description: [
      'Developed a scalable, SaaS-based employer platform that enables organizations to manage the entire hiring lifecycle end-to-end.',
      'Designed and implemented a flexible Role-Based Access Control (RBAC) system for Employers, Holding/Master Accounts, and Sellers.',
      'Integrated real-time video interview functionality using Janus (WebRTC).',
      'Optimized data fetching and state management with GraphQL and Apollo Client.'
    ],
    details: [
      'Built package selection and payment-based job posting flows.',
      'Developed job creation and recruitment pipeline management.',
      'Created candidate evaluation interfaces and CV viewing systems.',
      'Implemented blog and content management features.'
    ],
    skills: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Pinia', 'GraphQL', 'Apollo Client', 'Janus (WebRTC)', 'GitLab']
  },
  {
    company: 'Qooly',
    role: 'Frontend Engineer',
    location: 'Istanbul, Turkey (Remote)',
    period: 'Aug 2025 - Dec 2025',
    type: 'Full-time',
    description: [
      'Contributed to frontend engineering efforts focusing on CSS, Figma integration, and high-performance web development.'
    ],
    skills: ['CSS', 'Figma', 'JavaScript', 'TypeScript', 'React']
  },
  {
    company: 'Endizoom',
    role: 'Frontend Team Lead',
    location: 'Istanbul, Turkey (Remote)',
    period: 'Apr 2025 - Jul 2025',
    type: 'Full-time',
    description: [
      'Lead the frontend team in building Endizoom’s Next.js/TypeScript e-commerce platform.',
      'Architected reusable UI components with shadcn/ui and integrated .NET services via Swagger/OpenAPI.',
      'Managed data fetching and state with React Query, focusing on performance and UX for key pages.',
      'Oversee sprint planning, Jira task management, and mentored developers with code reviews.'
    ],
    skills: ['Next.js', 'TypeScript', 'shadcn/ui', 'React Query', 'Jira', 'Stakeholder Alignment']
  },
  {
    company: 'Rast Mobile',
    role: 'Frontend Developer',
    location: 'Istanbul, Turkey',
    period: 'Jul 2021 - Sep 2024',
    type: 'Full-time',
    description: [
      'Developed user-friendly interfaces using Angular and TypeScript.',
      'Implemented projects using NGXS, RxJs, Bootstrap, MaterialUI, and DevExtreme.',
      'Contributed to Node.js & Express projects, enhancing the existing codebase.'
    ],
    skills: ['Angular', 'TypeScript', 'NGXS', 'RxJs', 'Bootstrap', 'MaterialUI', 'Node.js', 'Express']
  },
  {
    company: 'Kodluyoruz',
    role: 'Vue.js Bootcamp Student',
    location: 'Istanbul, Turkey',
    period: 'Nov 2020 - Jan 2021',
    type: 'Education',
    description: [
      'Participated in an intensive Vue.js bootcamp, focusing on JavaScript and modern web development practices.'
    ],
    skills: ['JavaScript', 'Vue.js', 'Web Development']
  },
  {
    company: 'Kanyon Bilişim Teknolojileri',
    role: 'Web Designer',
    location: 'Istanbul, Turkey',
    period: 'Nov 2019 - Nov 2020',
    type: 'Full-time',
    description: [
      'Designed and developed web interfaces focusing on HTML and CSS.'
    ],
    skills: ['HTML', 'CSS', 'Web Design']
  },
  {
    company: 'KION',
    role: 'Computer Programming',
    location: 'Turkey',
    period: 'Nov 2018 - Jan 2019',
    type: 'Full-time',
    description: [
      'Worked on computer programming tasks and software modules.'
    ],
    skills: ['Programming', 'Software Development']
  },
  {
    company: 'KION',
    role: 'Intern',
    location: 'Turkey',
    period: 'Jun 2018 - Aug 2018',
    type: 'Internship',
    description: [
      'Completed a summer internship focusing on software development basics.'
    ],
    skills: ['Software Intern', 'Basics']
  }
];

export function ExperienceSection() {
  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</CardTitle>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                    <Badge variant="secondary" className="ml-2">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col text-sm text-muted-foreground gap-2 md:items-end">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-4">
              <div className="space-y-4">
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground leading-relaxed">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {exp.details && (
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 pl-6 border-l-2 border-primary/20">
                      {exp.details.map((detail, i) => (
                        <div key={i} className="text-sm text-muted-foreground/80 flex items-center gap-2">
                           <div className="w-1 h-1 rounded-full bg-primary/40" />
                           {detail}
                        </div>
                      ))}
                   </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-background/50 border-primary/10 hover:border-primary/30 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
