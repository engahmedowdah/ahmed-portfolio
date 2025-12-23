import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer" style={{ padding: '2rem 0', borderTop: '1px solid var(--border-color)', marginTop: '4rem' }}>
            <div className="container text-center">
                <p style={{ color: 'var(--text-secondary)' }}>
                    {t('footer.rights')}
                </p>
            </div>
            <style>{`
        .text-center { text-align: center; }
      `}</style>
        </footer>
    );
};

export default Footer;
