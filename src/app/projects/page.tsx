import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Automation & ML Projects | Nachiket Shinde',
  description: 'Explore practical AI systems, prompt engineering applications, and reliable API automation solutions built by Nachiket Shinde.',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
