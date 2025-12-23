import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Languages } from 'lucide-react';

const Navbar = () => {
    const { t, toggleLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { key: 'navbar.about', href: '#about' },
        { key: 'navbar.projects', href: '#projects' },
        { key: 'navbar.skills', href: '#skills' },
    ];

    return (
        <nav className="navbar">
            <div className="container flex justify-between items-center" style={{ height: '80px' }}>
                <a href="#" className="logo">
                    Ahmed<span style={{ color: 'var(--secondary-color)' }}>.Dev</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <a key={link.key} href={link.href} className="nav-link">
                            {t(link.key)}
                        </a>
                    ))}
                    <button onClick={toggleLanguage} className="btn btn-outline">
                        <Languages size={18} />
                        {t('navbar.language')}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={toggleMenu} style={{ color: 'var(--text-color)', background: 'none', border: 'none', cursor: 'pointer' }}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu md:hidden">
                    {navLinks.map((link) => (
                        <a key={link.key} href={link.href} onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-800">
                            {t(link.key)}
                        </a>
                    ))}
                    <button onClick={() => { toggleLanguage(); toggleMenu(); }} className="block w-full text-left py-2 px-4 hover:bg-gray-800">
                        {t('navbar.language')}
                    </button>
                </div>
            )}

            <style>{`
        .navbar {
          background-color: var(--bg-color);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid var(--border-color);
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-color);
          text-decoration: none;
        }
        .nav-link {
          color: var(--text-secondary);
          font-weight: 500;
          margin-left: 1.5rem;
        }
        .nav-link:hover {
          color: var(--text-color);
          text-decoration: none;
        }
        .md\\:flex { display: none; }
        .md\\:hidden { display: block; }
        
        @media (min-width: 768px) {
          .md\\:flex { display: flex; }
          .md\\:hidden { display: none; }
        }
        
        .mobile-menu {
          background-color: var(--card-bg);
          border-bottom: 1px solid var(--border-color);
          padding: 1rem 0;
        }
        body[dir="rtl"] .nav-link {
          margin-left: 0;
          margin-right: 1.5rem;
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
