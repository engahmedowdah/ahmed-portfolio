import { useLanguage } from '../context/LanguageContext';
import { Folder } from 'lucide-react';

const Projects = () => {
    const { t } = useLanguage();
    const projects = t('projects.items');

    return (
        <section id="projects" className="section" style={{ padding: '4rem 0' }}>
            <div className="container">
                <h2 className="section-title">{t('projects.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Array.isArray(projects) && projects.map((project: any, index: number) => (
                        <div key={index} className="project-card">
                            <div className="card-header flex justify-between items-center">
                                <Folder size={40} color="var(--primary-color)" />
                                <div className="flex gap-2">
                                    {/* Placeholder for links if available later */}
                                    {/* <a href="#" aria-label="Github"><ExternalLink size={20} /></a> */}
                                </div>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tech flex flex-wrap">
                                {project.tech.map((tech: string, i: number) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .project-card {
          background-color: var(--card-bg);
          padding: 2rem;
          border-radius: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid var(--border-color);
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          border-color: var(--text-secondary);
        }
        .card-header {
          margin-bottom: 1.5rem;
        }
        .project-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-color);
        }
        .project-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          height: 3rem; /* Limit height roughly */
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .project-tech {
          gap: 0.5rem;
          display: flex;
          flex-wrap: wrap;
        }
        .tech-tag {
          font-size: 0.85rem;
          font-family: monospace;
          color: var(--primary-color);
          background-color: rgba(88, 166, 255, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }
      `}</style>
        </section>
    );
};

export default Projects;
