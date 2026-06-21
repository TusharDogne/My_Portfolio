import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Download, ExternalLink, Mail, Github, Linkedin } from 'lucide-react';

export default function Hero() {
    const scrollToProjects = () => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return ( <
        section id = "home"
        className = "relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-pattern" > { /* Background Elements */ } <
        div className = "absolute inset-0 bg-gradient-to-br from-white via-pearl to-ivory" / >

        { /* Floating shapes */ } <
        motion.div animate = {
            { y: [0, -30, 0], rotate: [0, 5, 0] }
        }
        transition = {
            { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }
        className = "absolute top-20 right-20 w-72 h-72 bg-royal-100/50 rounded-full blur-3xl" /
        >
        <
        motion.div animate = {
            { y: [0, 20, 0], rotate: [0, -5, 0] }
        }
        transition = {
            { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }
        className = "absolute bottom-20 left-20 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl" /
        >
        <
        motion.div animate = {
            { y: [0, -15, 0] }
        }
        transition = {
            { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
        className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl" /
        >

        { /* Grid Pattern */ } <
        div className = "absolute inset-0 bg-[linear-gradient(rgba(30,64,175,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,64,175,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" / >

        <
        div className = "relative z-10 max-w-7xl mx-auto section-padding py-20 lg:py-0" >
        <
        div className = "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" > { /* Left Content */ } <
        div className = "order-2 lg:order-1 text-center lg:text-left" >
        <
        motion.div initial = {
            { opacity: 0, y: 20 }
        }
        animate = {
            { opacity: 1, y: 0 }
        }
        transition = {
            { duration: 0.6 }
        }
        className = "mb-4" >
        <
        span className = "inline-flex items-center gap-2 px-4 py-2 bg-royal-50 border border-royal-200 rounded-full text-royal-800 text-sm font-medium" >
        <
        span className = "w-2 h-2 bg-emerald-500 rounded-full animate-pulse" / >
        Available
        for Opportunities <
        /span> < /
        motion.div >

        <
        motion.h1 initial = {
            { opacity: 0, y: 30 }
        }
        animate = {
            { opacity: 1, y: 0 }
        }
        transition = {
            { duration: 0.6, delay: 0.1 }
        }
        className = "font-poppins text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4" >
        Hi, I 'm <
        span className = "text-gradient" > Tushar < /span> <
        br / >
        <
        span className = "text-gray-800" > Dogne < /span> < /
        motion.h1 >

        <
        motion.div initial = {
            { opacity: 0, y: 20 }
        }
        animate = {
            { opacity: 1, y: 0 }
        }
        transition = {
            { duration: 0.6, delay: 0.2 }
        }
        className = "h-12 sm:h-14 mb-6" >
        <
        TypeAnimation sequence = {
            [
                'AI/ML Engineer',
                2000,
                'Data Scientist',
                2000,
                'Full Stack Developer',
                2000,
                'Freelance Developer',
                2000,
                'Problem Solver',
                2000,
            ]
        }
        wrapper = "span"
        speed = { 50 }
        repeat = { Infinity }
        className = "font-poppins text-xl sm:text-2xl lg:text-3xl font-semibold text-royal-700" /
        >
        <
        /motion.div>

        <
        motion.p initial = {
            { opacity: 0, y: 20 }
        }
        animate = {
            { opacity: 1, y: 0 }
        }
        transition = {
            { duration: 0.6, delay: 0.3 }
        }
        className = "text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0" >
        I build intelligent web applications that merge machine learning with modern full - stack development.From predictive models to scalable MERN apps,
        I turn complex problems into elegant solutions. <
        /motion.p>

        <
        motion.div initial = {
            { opacity: 0, y: 20 }
        }
        animate = {
            { opacity: 1, y: 0 }
        }
        transition = {
            { duration: 0.6, delay: 0.4 }
        }
        className = "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8" >
        <
        a href = "https://drive.google.com/file/d/1CkBDeLrayoEkpa_7tzqEFudC9Kl1anlh/view?usp=sharing"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "btn-primary flex items-center justify-center gap-2" >
        <
        Download className = "w-5 h-5" / >
        Download Resume < /a> <
        button onClick = { scrollToProjects }
        className = "btn-outline flex items-center justify-center gap-2" >
        <
        ExternalLink className = "w-5 h-5" / >
        View Projects <
        /button> <
        button onClick = { scrollToContact }
        className = "btn-gold flex items-center justify-center gap-2" >
        <
        Mail className = "w-5 h-5" / >
        Contact Me <
        /button> < /
        motion.div >

        <
        motion.div initial = {
            { opacity: 0 }
        }
        animate = {
            { opacity: 1 }
        }
        transition = {
            { duration: 0.6, delay: 0.6 }
        }
        className = "flex items-center gap-4 justify-center lg:justify-start" >
        <
        a href = "https://github.com/tushardogne"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "w-10 h-10 bg-gray-100 hover:bg-royal-800 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300" >
        <
        Github className = "w-5 h-5" / >
        <
        /a> <
        a href = "https://linkedin.com/in/tushardogne"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "w-10 h-10 bg-gray-100 hover:bg-royal-800 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300" >
        <
        Linkedin className = "w-5 h-5" / >
        <
        /a> <
        a href = "mailto:tushardogne123@gmail.com"
        className = "w-10 h-10 bg-gray-100 hover:bg-royal-800 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300" >
        <
        Mail className = "w-5 h-5" / >
        <
        /a> < /
        motion.div > <
        /div>

        { /* Right - Profile Image / Visual */ } <
        motion.div initial = {
            { opacity: 0, scale: 0.8 }
        }
        animate = {
            { opacity: 1, scale: 1 }
        }
        transition = {
            { duration: 0.8, delay: 0.3 }
        }
        className = "order-1 lg:order-2 flex justify-center" >
        <
        div className = "w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-royal-800 via-royal-600 to-gold-500 p-1" >
        <
        div className = "w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden" >

        <
        div className = "w-full h-full overflow-hidden rounded-full" >
        <
        img src = "/images/profile.jpeg"
        alt = "Tushar Dogne"
        className = "w-full h-full object-cover" /
        >
        <
        /div>

        <
        /div> <
        /div>

        { /* Floating badges */ } <
        motion.div animate = {
            { y: [0, -10, 0] }
        }
        transition = {
            { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
        className = "absolute -top-4 -right-4 bg-white shadow-lg rounded-xl px-4 py-2 border border-gray-100" >
        <
        div className = "flex items-center gap-2" >
        <
        div className = "w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center" >
        <
        span className = "text-emerald-600 text-xs font-bold" > AI < /span> < /
        div > <
        div >
        <
        p className = "text-xs font-bold text-gray-900" > IBM Certified < /p> <
        p className = "text-[10px] text-gray-500" > Artificial Intelligence < /p> < /
        div > <
        /div> < /
        motion.div >

        <
        motion.div animate = {
            { y: [0, 10, 0] }
        }
        transition = {
            { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
        }
        className = "absolute -bottom-4 -left-4 bg-white shadow-lg rounded-xl px-4 py-2 border border-gray-100" >
        <
        div className = "flex items-center gap-2" >
        <
        div className = "w-8 h-8 bg-royal-100 rounded-lg flex items-center justify-center" >
        <
        span className = "text-royal-700 text-xs font-bold" > 100 + < /span> < /
        div > <
        div >
        <
        p className = "text-xs font-bold text-gray-900" > DSA Problems < /p> <
        p className = "text-[10px] text-gray-500" > Solved & Counting < /p> < /
        div > <
        /div> < /
        motion.div >

        <
        motion.div animate = {
            { y: [0, -8, 0] }
        }
        transition = {
            { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }
        className = "absolute top-1/2 -right-8 sm:-right-12 bg-white shadow-lg rounded-xl px-3 py-2 border border-gray-100" >
        <
        div className = "flex items-center gap-2" >
        <
        div className = "w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center" >
        <
        span className = "text-gold-600 text-xs font-bold" > 2 + < /span> < /
        div > <
        div >
        <
        p className = "text-xs font-bold text-gray-900" > Years < /p> <
        p className = "text-[10px] text-gray-500" > Freelance Experience < /p> < /
        div > <
        /div> < /
        motion.div > <
        /div> < /
        motion.div > <
        /div>

        { /* Scroll indicator */ } <
        motion.div initial = {
            { opacity: 0 }
        }
        animate = {
            { opacity: 1 }
        }
        transition = {
            { delay: 1.5 }
        }
        className = "absolute bottom-8 left-1/2 -translate-x-1/2" >
        <
        motion.div animate = {
            { y: [0, 10, 0] }
        }
        transition = {
            { duration: 2, repeat: Infinity }
        }
        className = "flex flex-col items-center gap-2 text-gray-400" >
        <
        span className = "text-xs font-medium" > Scroll Down < /span> <
        ArrowDown className = "w-4 h-4" / >
        <
        /motion.div> < /
        motion.div > <
        /div> < /
        section >
    );
}