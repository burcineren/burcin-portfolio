"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star, Code2, Rocket, Layout } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const featuredProjects = [
  {
    title: "Adminix",
    description: "A comprehensive administrative dashboard system built with Next.js and better-auth. Features a full authentication flow and role-based access control.",
    link: "https://github.com/burcineren/adminix",
    tags: ["Next.js", "Better-Auth", "TypeScript", "Tailwind CSS"],
    stars: 6,
    icon: <Rocket className="w-5 h-5 text-primary" />,
    image: "https://opengraph.githubassets.com/1/burcineren/adminix"
  },
  {
    title: "Up Enerji Case",
    description: "Balance Management Application based on React 19 and TypeScript. Designed with Clean Architecture principles and premium UI using Tailwind CSS v4.",
    link: "https://github.com/burcineren/up-enerji-case",
    tags: ["React 19", "Redux Toolkit", "Tailwind v4", "Firebase"],
    icon: <Layout className="w-5 h-5 text-primary" />,
    image: "https://opengraph.githubassets.com/1/burcineren/up-enerji-case"
  },
  {
    title: "Orphex Support Dashboard",
    description: "Responsive dashboard to track and manage support tickets. Implements automated 'Needs Attention' logic and real-time data visualization.",
    link: "https://github.com/burcineren/orphex-support-dashboard",
    tags: ["Vue 3", "Pinia", "Highcharts", "Vitest"],
    icon: <Code2 className="w-5 h-5 text-primary" />,
    image: "https://opengraph.githubassets.com/1/burcineren/orphex-support-dashboard"
  }
];

export function FeaturedProjects() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-8">
        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group h-full flex flex-col overflow-hidden border-0 bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge variant="default" className="bg-primary/90">Featured</Badge>
                </div>
              </div>
              
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2">
                  {project.icon}
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </div>
                <CardDescription className="line-clamp-3 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-3">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <Link href={project.link} target="_blank" className="gap-2">
                      <Github className="w-4 h-4" /> Code
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <Link href={project.link} target="_blank" className="gap-2">
                      <ExternalLink className="w-4 h-4" /> Live
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
