// src/components/Projects.jsx
import React from 'react'
import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import Card from './Card.jsx'

const projects = [
  {
    title: 'Distributed Kanban Board',
    description:
      'Real-time collaborative board with optimistic concurrency, Google OAuth, and socket-based sync. Deployed on Fly.io.',
    projectImage: '',
    links: [
      { label: 'Live Demo', url: 'https://kanban-ui.fly.dev/' },
      { label: 'GitHub', url: 'https://github.com/bhaveshittadwar/distributed-kanban-board' },
    ],
  },
  {
    title: 'Order Service',
    description:
      'Spring Boot microservice with REST and gRPC endpoints, PostgreSQL persistence, and GitHub Actions-based CI/CD.',
    projectImage: '',
    links: [
      { label: 'GitHub', url: 'https://github.com/bhaveshittadwar/ordersrv' },
    ],
  },
  {
    title: 'HackNCState – Pack The Feed',
    description:
      'Hackathon project to redistribute surplus dining hall food using Next.js, Flask, OpenAI, and MongoDB.',
    projectImage: '',
    links: [
      { label: 'GitHub', url: 'https://github.com/Varad22/hackNCState' },
    ],
  },
  {
    title: 'Serverless Blogging',
    description:
      'Built a blogging platform using Cloudflare Workers (Edge compute), Prisma ORM, and a React-based frontend.',
    projectImage: '',
    links: [
      { label: 'GitHub', url: 'https://github.com/bhaveshittadwar/blog-app' },
    ],
  },
  {
    title: 'Live Streaming Platform',
    description:
      'Architected a global video game streaming platform using Kubernetes and tested pod auto-scaling with Locust and Minikube.',
    projectImage: '',
    links: [
      { label: 'Report PDF', url: 'https://github.com/bhaveshittadwar/live-stream-kubernetes/blob/main/report.pdf' },
    ],
  },
  {
    title: 'BurnOut – Calorie Tracker',
    description:
      'Added UI responsiveness, two-factor authentication, captcha verification, and Dockerized deployment.',
    projectImage: '',
    links: [
      { label: 'GitHub', url: 'https://github.com/anuj672/calorieApp_server' },
    ],
  },
  {
    title: 'Game of Life: John Convoy',
    description:
      'Implemented Conway’s Game of Life using HTML Canvas to explore Turing completeness via cellular automata.',
    projectImage: '',
    links: [
      { label: 'Live Demo', url: 'https://game-of-life-withered-snow-9415.fly.dev/' },
      { label: 'GitHub', url: 'https://github.com/bhaveshittadwar/game-of-life' },
    ],
  },
]

export default function Projects() {
  return (
    <Element name="projects">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="min-h-screen flex items-center bg-gradient-to-r from-gray-950 to-zinc-800 py-24 sm:py-32"
      >
        <div className="mx-auto px-6 lg:px-24 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-white text-5xl font-bold tracking-widest mb-12"
          >
            Projects
          </motion.h1>

          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="w-full sm:w-80"
              >
                <Card
                  title={project.title}
                  description={project.description}
                  projectImage={project.projectImage}
                  links={project.links}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </Element>
  )
}