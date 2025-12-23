
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

const Skills = () => {
    const { t } = useLanguage();
    const skills = t('skills.items');

    return (
        <section id="skills" className="section" style={{ padding: '4rem 0' }}>
            <div className="container">
                <h2 className="section-title">{t('skills.title')}</h2>
                <div className="skills-grid">
                    {Array.isArray(skills) && skills.map((skill: string, index: number) => (
                        <div key={index} className="skill-item">
                            <CheckCircle2 size={20} color="var(--primary-color)" />
                            <span>{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1.5rem;
        }
        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-color: var(--card-bg);
          padding: 1rem;
          border-radius: 6px;
          border: 1px solid var(--border-color);
          font-weight: 500;
          color: var(--text-color);
        }
      `}</style>
        </section>
    );
};

export default Skills;
