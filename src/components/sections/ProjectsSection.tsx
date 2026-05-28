"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { featuredProjects } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
import { staggerItem } from "@/lib/animations";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title="Proyek Unggulan" />
        <AnimatedSection>
          <motion.div variants={staggerItem} className="w-full max-w-6xl mx-auto">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {featuredProjects.map((project, index) => (
                  <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-4 pb-4">
                    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="h-full">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
                        <Card className="h-full border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900 overflow-hidden rounded-2xl hover:shadow-xl hover:shadow-blue-500/5 transition-shadow duration-300">
                          <div className="relative w-full h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 z-10" />
                            <Image
                              src={project.imageUrl}
                              alt={project.title}
                              fill
                              quality={60}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start gap-2">
                              <CardTitle className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{project.title}</CardTitle>
                              <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors shrink-0 mt-0.5" />
                            </div>
                            <CardDescription className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mt-1">{project.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-1.5">
                              {project.tech.map((t, i) => (
                                <span key={i} className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="left-[-52px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg" />
                <CarouselNext className="right-[-52px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg" />
              </div>
            </Carousel>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
