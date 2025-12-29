'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import NeonCard from '@/components/ui/NeonCard';
import SectionTitle from '@/components/ui/SectionTitle';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { projectsMetadata } from '@/data/projects';
import { siteConfig } from '@/data/config';
import type { GitHubRepo } from '@/types/github';

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/github/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch repos:', err);
        setLoading(false);
      });
  }, []);

  const featuredProjects = projectsMetadata.filter((p) => p.featured);

  return (
    <section id="projects" className="section bg-[var(--color-cyber-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionTitle>Featured Projects</SectionTitle>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {featuredProjects.map((project, index) => {
              const repoData = repos.find((r) => r.name === project.repoName);

              return (
                <motion.div
                  key={project.repoName}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NeonCard
                    title={project.title}
                    description={project.description}
                    image={project.thumbnail}
                    tech={project.tech}
                    githubUrl={repoData?.html_url}
                    demoUrl={project.demoUrl || repoData?.homepage || undefined}
                    stars={repoData?.stargazers_count}
                  />
                </motion.div>
              );
            })}
          </div>
        )}

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <a
            href={`https://github.com/${siteConfig.githubUsername}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-neon-cyan)] hover:text-[var(--color-neon-pink)] transition-colors"
          >
            <span className="text-lg font-mono">View All Projects</span>
            <Icon icon="mdi:arrow-right" className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
