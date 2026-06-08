import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const contactInfo = [{
        icon: Mail,
        label: 'Email',
        value: 'tushardogne123@gmail.com',
        href: 'mailto:tushardogne123@gmail.com',
        color: 'royal',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 93028 58988',
        href: 'tel:+919302858988',
        color: 'emerald',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Indore, Madhya Pradesh, India',
        href: 'https://maps.google.com/?q=Indore',
        color: 'gold',
    },
];

const socialLinks = [{
        icon: Github,
        label: 'GitHub',
        href: 'https://github.com/tushardogne',
        color: 'bg-gray-900 hover:bg-gray-800',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/tushardogne',
        color: 'bg-[#0A66C2] hover:bg-[#0958a8]',
    },
    {
        icon: Mail,
        label: 'Email',
        href: 'mailto:tushardogne123@gmail.com',
        color: 'bg-royal-800 hover:bg-royal-700',
    },
];

export default function Contact() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission - replace with actual Formspree or similar
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => setSubmitStatus(null), 5000);
    };

    return ( <
        section id = "contact"
        className = "relative py-20 lg:py-32 bg-white" >
        <
        div className = "max-w-7xl mx-auto section-padding" >
        <
        SectionHeader subtitle = "Get In Touch"
        title = "Let's Build Something Together"
        description = "Have a project in mind? Looking for an AI/ML engineer or full-stack developer? I'm just a message away." /
        >

        <
        div ref = { ref }
        className = "grid lg:grid-cols-5 gap-8 lg:gap-12" > { /* Contact Info */ } <
        div className = "lg:col-span-2 space-y-6" >
        <
        motion.div initial = {
            { opacity: 0, x: -30 } }
        animate = { inView ? { opacity: 1, x: 0 } : {} }
        transition = {
            { duration: 0.5 } } >
        <
        h3 className = "font-poppins text-xl font-bold text-gray-900 mb-2" >
        Contact Information <
        /h3> <
        p className = "text-gray-600 text-sm leading-relaxed mb-6" >
        I 'm currently open to freelance projects, internships, and full-time opportunities  in AI / ML engineering and full - stack development.Let 's discuss how I can help. <
        /p> <
        /motion.div>

        <
        div className = "space-y-4" > {
            contactInfo.map((info, index) => ( <
                motion.a key = { info.label }
                href = { info.href }
                initial = {
                    { opacity: 0, x: -20 } }
                animate = { inView ? { opacity: 1, x: 0 } : {} }
                transition = {
                    { duration: 0.4, delay: index * 0.1 } }
                whileHover = {
                    { x: 5 } }
                className = "flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-royal-50 hover:border-royal-200 border border-transparent transition-all group" >
                <
                div className = { `w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    info.color === 'royal' ? 'bg-royal-100 text-royal-700' :
                    info.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-gold-100 text-gold-700'
                  }` } >
                <
                info.icon className = "w-5 h-5" / >
                <
                /div> <
                div >
                <
                p className = "text-xs text-gray-500 font-medium" > { info.label } < /p> <
                p className = "text-sm font-semibold text-gray-900 group-hover:text-royal-800 transition-colors" > { info.value } <
                /p> <
                /div> <
                /motion.a>
            ))
        } <
        /div>

        { /* Social Links */ } <
        motion.div initial = {
            { opacity: 0, y: 20 } }
        animate = { inView ? { opacity: 1, y: 0 } : {} }
        transition = {
            { duration: 0.5, delay: 0.4 } }
        className = "pt-4" >
        <
        p className = "text-sm font-semibold text-gray-700 mb-3" > Connect with me < /p> <
        div className = "flex gap-3" > {
            socialLinks.map((social) => ( <
                a key = { social.label }
                href = { social.href }
                target = "_blank"
                rel = "noopener noreferrer"
                className = { `w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white transition-all hover:shadow-lg hover:scale-105` }
                title = { social.label } >
                <
                social.icon className = "w-5 h-5" / >
                <
                /a>
            ))
        } <
        /div> <
        /motion.div> <
        /div>

        { /* Contact Form */ } <
        motion.div initial = {
            { opacity: 0, x: 30 } }
        animate = { inView ? { opacity: 1, x: 0 } : {} }
        transition = {
            { duration: 0.5, delay: 0.2 } }
        className = "lg:col-span-3" >
        <
        div className = "bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6 lg:p-8" >
        <
        h3 className = "font-poppins text-xl font-bold text-gray-900 mb-6" >
        Send a Message <
        /h3>

        <
        form onSubmit = { handleSubmit }
        className = "space-y-5" >
        <
        div className = "grid sm:grid-cols-2 gap-5" >
        <
        div >
        <
        label className = "block text-sm font-medium text-gray-700 mb-1.5" >
        Your Name <
        /label> <
        input type = "text"
        name = "name"
        value = { formData.name }
        onChange = { handleChange }
        required className = "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-royal-500 outline-none transition-all text-sm"
        placeholder = "John Doe" /
        >
        <
        /div> <
        div >
        <
        label className = "block text-sm font-medium text-gray-700 mb-1.5" >
        Email Address <
        /label> <
        input type = "email"
        name = "email"
        value = { formData.email }
        onChange = { handleChange }
        required className = "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-royal-500 outline-none transition-all text-sm"
        placeholder = "john@example.com" /
        >
        <
        /div> <
        /div>

        <
        div >
        <
        label className = "block text-sm font-medium text-gray-700 mb-1.5" >
        Subject <
        /label> <
        input type = "text"
        name = "subject"
        value = { formData.subject }
        onChange = { handleChange }
        required className = "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-royal-500 outline-none transition-all text-sm"
        placeholder = "Project collaboration / Job opportunity" /
        >
        <
        /div>

        <
        div >
        <
        label className = "block text-sm font-medium text-gray-700 mb-1.5" >
        Message <
        /label> <
        textarea name = "message"
        value = { formData.message }
        onChange = { handleChange }
        required rows = { 5 }
        className = "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-royal-500 outline-none transition-all text-sm resize-none"
        placeholder = "Tell me about your project, requirements, or just say hi!" /
        >
        <
        /div>

        <
        button type = "submit"
        disabled = { isSubmitting }
        className = "w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" >
        {
            isSubmitting ? ( <
                >
                <
                div className = "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" / >
                Sending... <
                />
            ) : ( <
                >
                <
                Send className = "w-5 h-5" / >
                Send Message <
                />
            )
        } <
        /button>

        {
            submitStatus === 'success' && ( <
                motion.div initial = {
                    { opacity: 0, y: 10 } }
                animate = {
                    { opacity: 1, y: 0 } }
                className = "flex items-center gap-2 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm" >
                <
                CheckCircle2 className = "w-5 h-5 flex-shrink-0" / >
                Message sent successfully!I 'll get back to you within 24 hours. <
                /motion.div>
            )
        } <
        /form>

        <
        div className = "mt-6 pt-6 border-t border-gray-100" >
        <
        div className = "flex items-center gap-2 text-sm text-gray-500" >
        <
        MessageCircle className = "w-4 h-4" / >
        <
        span >
        Prefer WhatsApp ? { ' ' } <
        a href = "https://wa.me/919302858988"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "text-royal-700 font-semibold hover:underline" >
        Message me directly <
        /a> <
        /span> <
        /div> <
        /div> <
        /div> <
        /motion.div> <
        /div> <
        /div> <
        /section>
    );
}