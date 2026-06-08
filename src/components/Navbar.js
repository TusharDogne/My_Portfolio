import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Code2 } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI & DS', href: '#ai-ds' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navLinks.map(link => link.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i]);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return ( <
        >
        <
        motion.nav initial = {
            { y: -100 }
        }
        animate = {
            { y: 0 }
        }
        transition = {
            { duration: 0.6, ease: 'easeOut' }
        }
        className = { `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-royal-900/5'
            : 'bg-transparent'
        }` } >
        <
        div className = "max-w-7xl mx-auto section-padding" >
        <
        div className = "flex items-center justify-between h-16 lg:h-20" > { /* Logo */ } <
        motion.a href = "#home"
        onClick = {
            (e) => {
                e.preventDefault();
                scrollToSection('#home');
            }
        }
        className = "flex items-center gap-2 group"
        whileHover = {
            { scale: 1.02 }
        }
        whileTap = {
            { scale: 0.98 }
        } >
        <
        div className = "w-10 h-10 bg-gradient-to-br from-royal-800 to-royal-600 rounded-lg flex items-center justify-center shadow-lg shadow-royal-800/20" >
        <
        Code2 className = "w-5 h-5 text-white" / >
        <
        /div> <
        div className = "hidden sm:block" >
        <
        span className = "font-poppins font-bold text-lg text-royal-900 leading-tight" >
        Tushar Dogne <
        /span> <
        p className = "text-xs text-gray-500 -mt-0.5" > AI / ML Engineer < /p> < /
        div > <
        /motion.a>

        { /* Desktop Navigation */ } <
        div className = "hidden lg:flex items-center gap-1" > {
            navLinks.map((link) => ( <
                a key = { link.name }
                href = { link.href }
                onClick = {
                    (e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                    }
                }
                className = { `relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-royal-800 bg-royal-50'
                      : 'text-gray-600 hover:text-royal-800 hover:bg-gray-50'
                  }` } > { link.name } {
                    activeSection === link.href.slice(1) && ( <
                        motion.div layoutId = "activeNav"
                        className = "absolute bottom-0 left-3 right-3 h-0.5 bg-royal-800 rounded-full"
                        transition = {
                            { type: 'spring', stiffness: 380, damping: 30 }
                        }
                        />
                    )
                } <
                /a>
            ))
        } <
        /div>

        { /* CTA Buttons */ } <
        div className = "hidden lg:flex items-center gap-3" >
        <
        a href = "https://drive.google.com/file/d/1CkBDeLrayoEkpa_7tzqEFudC9Kl1anlh/view?usp=drive_link"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "btn-primary flex items-center gap-2 text-sm" >
        <
        Download className = "w-4 h-4" / >
        Resume <
        /a> < /
        div >

        { /* Mobile Menu Button */ } <
        button onClick = {
            () => setIsMobileMenuOpen(!isMobileMenuOpen)
        }
        className = "lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" > {
            isMobileMenuOpen ? ( <
                X className = "w-6 h-6 text-royal-800" / >
            ) : ( <
                Menu className = "w-6 h-6 text-royal-800" / >
            )
        } <
        /button> < /
        div > <
        /div> < /
        motion.nav >

        { /* Mobile Menu */ } <
        AnimatePresence > {
            isMobileMenuOpen && ( <
                motion.div initial = {
                    { opacity: 0, y: -20 }
                }
                animate = {
                    { opacity: 1, y: 0 }
                }
                exit = {
                    { opacity: 0, y: -20 }
                }
                transition = {
                    { duration: 0.2 }
                }
                className = "fixed inset-0 z-30 lg:hidden" >
                <
                div className = "absolute inset-0 bg-black/20 backdrop-blur-sm"
                onClick = {
                    () => setIsMobileMenuOpen(false)
                }
                /> <
                motion.div initial = {
                    { x: '100%' }
                }
                animate = {
                    { x: 0 }
                }
                exit = {
                    { x: '100%' }
                }
                transition = {
                    { type: 'spring', damping: 25, stiffness: 200 }
                }
                className = "absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl" >
                <
                div className = "p-6 pt-20" >
                <
                div className = "flex flex-col gap-2" > {
                    navLinks.map((link, index) => ( <
                        motion.a key = { link.name }
                        href = { link.href }
                        onClick = {
                            (e) => {
                                e.preventDefault();
                                scrollToSection(link.href);
                            }
                        }
                        initial = {
                            { opacity: 0, x: 20 }
                        }
                        animate = {
                            { opacity: 1, x: 0 }
                        }
                        transition = {
                            { delay: index * 0.05 }
                        }
                        className = { `px-4 py-3 rounded-lg text-base font-medium transition-all ${
                        activeSection === link.href.slice(1)
                          ? 'bg-royal-50 text-royal-800'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-royal-800'
                      }` } > { link.name } <
                        /motion.a>
                    ))
                } <
                /div> <
                div className = "mt-6 pt-6 border-t border-gray-100" >
                <
                a href = "https://drive.google.com/file/d/1CkBDeLrayoEkpa_7tzqEFudC9Kl1anlh/view?usp=drive_link"
                target = "_blank"
                rel = "noopener noreferrer"
                className = "btn-primary w-full flex items-center justify-center gap-2" >
                <
                Download className = "w-4 h-4" / >
                Download Resume <
                /a> < /
                div > <
                /div> < /
                motion.div > <
                /motion.div>
            )
        } <
        /AnimatePresence> < /
        >
    );
}