"use client";

import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe2, 
  Github, 
  Linkedin, 
  Mail,
  Layers,
  Database,
  Cloud
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export function BentoGrid() {
  const items = [
    {
      title: "Tech Stack",
      description: "My primary tools for building modern applications.",
      className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/10 via-transparent to-primary/5",
      icon: <Code2 className="w-8 h-8 text-primary" />,
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
          {[
            { name: ".NET", icon: <Cpu className="w-4 h-4" /> },
            { name: "React", icon: <Layers className="w-4 h-4" /> },
            { name: "Vue.js", icon: <Layers className="w-4 h-4" /> },
            { name: "Angular", icon: <Layers className="w-4 h-4" /> },
            { name: "TypeScript", icon: <Terminal className="w-4 h-4" /> },
            { name: "SQL Server", icon: <Database className="w-4 h-4" /> },
          ].map((tech) => (
            <Badge key={tech.name} variant="outline" className="flex items-center gap-2 py-2 px-3 bg-background/50 backdrop-blur-sm border-primary/20">
              {tech.icon}
              {tech.name}
            </Badge>
          ))}
        </div>
      )
    },
    {
      title: "Location",
      description: "Based in Istanbul, Turkey.",
      className: "md:col-span-1 md:row-span-1 bg-secondary/5",
      icon: <Globe2 className="w-6 h-6 text-secondary" />,
      content: (
        <div className="mt-4 flex items-center justify-center">
          <div className="relative w-full h-24 rounded-lg bg-muted/50 overflow-hidden flex items-center justify-center border border-border/50">
             <span className="text-4xl">🇹🇷</span>
             <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
             <span className="absolute bottom-2 left-3 font-semibold text-sm">Istanbul</span>
          </div>
        </div>
      )
    },
    {
      title: "Connect",
      description: "Let's build something together.",
      className: "md:col-span-1 md:row-span-2 bg-primary/5",
      icon: <Mail className="w-6 h-6 text-primary" />,
      content: (
        <div className="flex flex-col gap-3 mt-4">
          <a href={siteConfig.links.github} target="_blank" className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors border border-border/50 group">
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a href={siteConfig.links.linkedin} target="_blank" className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors border border-border/50 group">
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a href={siteConfig.links.email} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors border border-border/50 group">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Email</span>
          </a>
        </div>
      )
    },
    {
      title: "Current Focus",
      description: "Modernizing enterprise systems at BilgeAdam.",
      className: "md:col-span-1 md:row-span-1 bg-secondary/5",
      icon: <Cloud className="w-6 h-6 text-secondary" />,
      content: (
        <div className="mt-4">
          <Badge variant="secondary" className="w-full justify-center py-2">
            .NET Ecosystem
          </Badge>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Snapshot</h2>
            <p className="text-muted-foreground max-w-xl">
              A quick look at my technical expertise, focus, and ways to connect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[180px]">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={item.className}
              >
                <Card className="h-full p-6 border-border/40 bg-background/50 backdrop-blur-sm flex flex-col justify-between overflow-hidden relative group">
                  <div className="relative z-10">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold mb-1 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.content}
                  </div>
                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
