import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Target, Lightbulb, Users, Clock } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const highlights = [{
        icon: GraduationCap,
        title: 'Education',
        value: 'B.Tech CSE',
        desc: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore',
    },
    {
        icon: Briefcase,
        title: 'Experience',
        value: '2+ Years',
        desc: 'Freelance Development & Project Coordination',
    },
    {
        icon: Target,
        title: 'Projects',
        value: '8+',
        desc: 'Across ML, MERN, Java, WordPress & Figma',
    },
    {
        icon: Lightbulb,
        title: 'DSA',
        value: '100+',
        desc: 'Problems solved across coding platforms',
    },
];

const storyPoints = [{
        icon: Users,
        title: 'Started with Teaching',
        description: 'At 16, I began tutoring students in mathematics and science. This taught me how to break complex concepts into simple, digestible pieces - a skill that directly translates to writing clean, maintainable code.',
    },
    {
        icon: Briefcase,
        title: 'Built for Real Clients',
        description: 'By 18, I was managing end-to-end web development for local businesses. From requirement gathering to deployment, I learned that great software is about solving real problems, not just writing elegant algorithms.',
    },
    {
        icon: Target,
        title: 'Merged AI with Engineering',
        description: 'My IBM AI certification and hands-on ML projects showed me the power of data-driven decision making. Now I build applications that dont just work - they learn, predict, and improve.',
    },
];

export default function About() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return ( <
        section id = "about"
        className = "relative py-20 lg:py-32 bg-white" >
        <
        div className = "max-w-7xl mx-auto section-padding" >
        <
        SectionHeader subtitle = "About Me"
        title = "The Story Behind the Code"
        description = "Not your typical CS student journey. I started with clients, not classrooms." /
        >

        <
        div ref = { ref }
        className = "grid lg:grid-cols-2 gap-12 lg:gap-20 items-start" > { /* Left - Story */ } <
        div className = "space-y-8" > {
            storyPoints.map((point, index) => ( <
                motion.div key = { point.title }
                initial = {
                    { opacity: 0, x: -30 } }
                animate = { inView ? { opacity: 1, x: 0 } : {} }
                transition = {
                    { duration: 0.5, delay: index * 0.15 } }
                className = "flex gap-4 group" >
                <
                div className = "flex-shrink-0 w-12 h-12 bg-gradient-to-br from-royal-100 to-royal-50 rounded-xl flex items-center justify-center group-hover:from-royal-800 group-hover:to-royal-600 transition-all duration-300" >
                <
                point.icon className = "w-5 h-5 text-royal-700 group-hover:text-white transition-colors" / >
                <
                /div> <
                div >
                <
                h3 className = "font-poppins font-semibold text-lg text-gray-900 mb-2" > { point.title } <
                /h3> <
                p className = "text-gray-600 leading-relaxed" > { point.description } <
                /p> <
                /div> <
                /motion.div>
            ))
        }

        <
        motion.div initial = {
            { opacity: 0, y: 20 } }
        animate = { inView ? { opacity: 1, y: 0 } : {} }
        transition = {
            { duration: 0.5, delay: 0.6 } }
        className = "pt-4 border-t border-gray-100" >
        <
        p className = "text-gray-700 leading-relaxed italic" >
        "I don't just write code - I solve problems, manage deadlines, and deliver results. 
        Whether it 's a neural network for price prediction or a MERN stack trip planner, I ship." <
        /p> <
        /motion.div> <
        /div>

        { /* Right - Stats Cards */ } <
        div className = "grid grid-cols-2 gap-4" > {
            highlights.map((item, index) => ( <
                motion.div key = { item.title }
                initial = {
                    { opacity: 0, y: 30 } }
                animate = { inView ? { opacity: 1, y: 0 } : {} }
                transition = {
                    { duration: 0.5, delay: index * 0.1 } }
                whileHover = {
                    { y: -5, transition: { duration: 0.2 } } }
                className = "bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-royal-200 transition-all duration-300" >
                <
                div className = "w-10 h-10 bg-royal-50 rounded-lg flex items-center justify-center mb-4" >
                <
                item.icon className = "w-5 h-5 text-royal-700" / >
                <
                /div> <
                h3 className = "font-poppins font-bold text-2xl text-gray-900 mb-1" > { item.value } <
                /h3> <
                p className = "font-semibold text-sm text-royal-800 mb-1" > { item.title } <
                /p> <
                p className = "text-xs text-gray-500" > { item.desc } <
                /p> <
                /motion.div>
            ))
        } <
        /div> <
        /div>

        { /* Future Goals */ } <
        motion.div initial = {
            { opacity: 0, y: 30 } }
        animate = { inView ? { opacity: 1, y: 0 } : {} }
        transition = {
            { duration: 0.6, delay: 0.8 } }
        className = "mt-16 bg-gradient-to-r from-royal-800 to-royal-900 rounded-2xl p-8 lg:p-12 text-white" >
        <
        div className = "flex flex-col lg:flex-row items-center gap-8" >
        <
        div className = "flex-shrink-0 w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center" >
        <
        Clock className = "w-8 h-8 text-gold-400" / >
        <
        /div> <
        div className = "text-center lg:text-left" >
        <
        h3 className = "font-poppins text-2xl font-bold mb-2" > What I 'm Building Toward</h3> <
        p className = "text-royal-100 leading-relaxed max-w-3xl" >
        I 'm actively seeking AI/ML engineering roles and internships where I can apply my 
        machine learning expertise to real - world problems.My goal is to work on projects that combine predictive modeling with scalable web architectures - turning raw data into intelligent, user - facing applications.I 'm also open to freelance collaborations 
        where I can bring both technical depth and project management experience. <
        /p> <
        /div> <
        /div> <
        /motion.div> <
        /div> <
        /section>
    );
}