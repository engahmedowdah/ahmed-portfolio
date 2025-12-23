
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();
    const description = t('about.description');

    return (
        <section id="about" className="section" style={{ padding: '4rem 0' }}>
            <div className="container">
                <h2 className="section-title">{t('about.title')}</h2>
                <div className="about-content">
                    {Array.isArray(description) && description.map((paragraph: string, index: number) => (
                        <p key={index} className="about-text">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
            <style>{`
        .about-text {
          margin-bottom: 1rem;
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 800px;
        }
      `}</style>
        </section>
    );
};

export default About;
