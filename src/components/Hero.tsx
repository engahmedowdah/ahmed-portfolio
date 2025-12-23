
import { useLanguage } from '../context/LanguageContext';
import { Download, Mail, Github, Linkedin, BookOpen } from 'lucide-react';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="hero">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 items-center" style={{ minHeight: '80vh' }}>
                <div className="hero-content">
                    <span className="greeting">{t('hero.greeting')}</span>
                    <h1 className="name">{t('hero.name')}</h1>
                    <h2 className="role">{t('hero.role')}</h2>
                    <p className="intro">{t('hero.intro')}</p>

                    <div className="cta-group flex gap-4" style={{ marginTop: '2rem' }}>
                        <a href="#" className="btn btn-primary">
                            <Download size={20} />
                            {t('hero.downloadCv')}
                        </a>
                        <a href="mailto:contact@ahmedoudah.com" className="btn btn-outline">
                            <Mail size={20} />
                            {t('hero.contactMe')}
                        </a>
                    </div>

                    <div className="social-links flex gap-4" style={{ marginTop: '2rem' }}>
                        <a href="#" aria-label="Github"><Github /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin /></a>
                        <a href="#" aria-label="Blog"><BookOpen /></a>
                    </div>
                </div>

                <div className="hero-visual flex items-center justify-center">
                    <div className="abstract-shape"></div>
                </div>
            </div>

            <style>{`
        .greeting {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 1.2rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .name {
          font-size: 3rem;
          line-height: 1.1;
          margin-bottom: 0.5rem;
          background: linear-gradient(to right, var(--text-color), var(--text-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .role {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }
        .intro {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 500px;
        }
        .social-links a {
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .social-links a:hover {
          color: var(--primary-color);
        }
        
        .abstract-shape {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, var(--secondary-color), var(--primary-color));
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: morph 8s ease-in-out infinite;
          opacity: 0.8;
          filter: blur(40px);
        }
        
        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 30% 30% 70% 70% / 50% 30% 70% 60%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
