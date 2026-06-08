import React from 'react';
import { Heart, Code2, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const socialLinks = [
    { icon: Github, href: 'https://github.com/tushardogne', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/tushardogne', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:tushardogne123@gmail.com', label: 'Email' },
];

export default function Footer() {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return ( <
        footer className = "relative bg-gradient-to-b from-gray-900 to-gray-950 text-white" > { /* Top wave decoration */ } <
        div className = "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-royal-600 via-gold-500 to-emerald-500" / >

        <
        div className = "max-w-7xl mx-auto section-padding py-16 lg:py-20" >
        <
        div className = "grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8" > { /* Brand */ } <
        div className = "lg:col-span-2" >
        <
        div className = "flex items-center gap-3 mb-4" >
        <
        div className = "w-10 h-10 bg-gradient-to-br from-royal-600 to-royal-800 rounded-lg flex items-center justify-center" >
        <
        Code2 className = "w-5 h-5 text-white" / >
        <
        /div> <
        div >
        <
        h3 className = "font-poppins font-bold text-lg" > Tushar Dogne < /h3> <
        p className = "text-xs text-gray-400" > AI / ML Engineer & Full Stack Developer < /p> <
        /div> <
        /div> <
        p className = "text-gray-400 text-sm leading-relaxed max-w-md mb-6" >
        Building intelligent web applications that merge machine learning with modern full - stack development.Available
        for freelance projects, internships, and full - time opportunities. <
        /p> <
        div className = "flex gap-3" > {
            socialLinks.map((social) => ( <
                a key = { social.label }
                href = { social.href }
                target = "_blank"
                rel = "noopener noreferrer"
                className = "w-10 h-10 bg-white/5 hover:bg-royal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                title = { social.label } >
                <
                social.icon className = "w-4 h-4" / >
                <
                /a>
            ))
        } <
        /div> <
        /div>

        { /* Quick Links */ } <
        div >
        <
        h4 className = "font-poppins font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4" >
        Quick Links <
        /h4> <
        ul className = "space-y-3" > {
            quickLinks.map((link) => ( <
                li key = { link.name } >
                <
                a href = { link.href }
                onClick = {
                    (e) => { e.preventDefault();
                        scrollToSection(link.href); } }
                className = "text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group" >
                { link.name } <
                ArrowUpRight className = "w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" / >
                <
                /a> <
                /li>
            ))
        } <
        /ul> <
        /div>

        { /* Contact Info */ } <
        div >
        <
        h4 className = "font-poppins font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4" >
        Contact <
        /h4> <
        ul className = "space-y-3 text-sm" >
        <
        li >
        <
        a href = "mailto:tushardogne123@gmail.com"
        className = "text-gray-400 hover:text-white transition-colors" >
        tushardogne123 @gmail.com <
        /a> <
        /li> <
        li >
        <
        a href = "tel:+919302858988"
        className = "text-gray-400 hover:text-white transition-colors" >
        +91 93028 58988 <
        /a> <
        /li> <
        li className = "text-gray-400" >
        Indore, Madhya Pradesh < br / > India <
        /li> <
        /ul> <
        /div> <
        /div>

        { /* Bottom bar */ } <
        div className = "mt-12 pt-8 border-t border-gray-800" >
        <
        div className = "flex flex-col sm:flex-row items-center justify-between gap-4" >
        <
        p className = "text-gray-500 text-sm flex items-center gap-1" >
        Made with < Heart className = "w-4 h-4 text-red-500 fill-red-500" / > by Tushar Dogne <
        /p> <
        p className = "text-gray-600 text-sm" > ©{ new Date().getFullYear() }
        All rights reserved. <
        /p> <
        /div> <
        /div> <
        /div> <
        /footer>
    );
}