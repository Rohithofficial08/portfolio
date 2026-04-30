import { motion } from 'framer-motion';
import { Mail, Github, Disc as Discord, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import svgPaths from "../imports/svg-ocj0l2ql5l";

// Asset Imports
import imgHero from "figma:asset/54460c6b07a60652048526012507cff338176e45.png";
import imgProject1 from "../assets/myprojectsassets/4sic.png";
import imgProject2 from "../assets/myprojectsassets/transkt.png";
import imgProject3 from "../assets/myprojectsassets/codesphereArena.png";
import imgAbout from "figma:asset/f4d7792241ade353515843fc44bf4f33ac8d48cd.png";

export const Section = ({ id, title, children, link, linkText, className = "" }: any) => (
  <section id={id} className={`py-20 px-4 md:px-8 max-w-6xl mx-auto ${className}`}>
    {title && (
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-medium text-white font-['Fira_Code'] shrink-0">
          <span className="text-[#c778dd]">#</span>{title}
        </h2>
        <div className="h-px bg-[#c778dd] flex-grow opacity-50" />
        {link && (
          <Link to={link} className="text-white hover:text-[#c778dd] transition-colors whitespace-nowrap ml-auto">
            {linkText || "View all ~~>"}
          </Link>
        )}
      </div>
    )}
    {children}
  </section>
);

export const DotsGrid = ({ className = "", rows = 5, cols = 5 }: any) => (
  <div className={`grid gap-4 opacity-40 ${className}`} style={{ gridTemplateColumns: `repeat(${cols}, 4px)` }}>
    {Array.from({ length: rows * cols }).map((_, i) => (
      <div key={i} className="size-1 rounded-full bg-[#ABB2BF]" />
    ))}
  </div>
);

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
      { name: 'home', path: '/' },
      { name: 'works', path: '/works' },
      { name: 'about-me', path: '/about-me' },
      { name: 'contacts', path: '/contacts' },
    ];

    return (
      <nav className="fixed top-0 left-0 right-0 bg-[#282c33]/80 backdrop-blur-md z-40 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
             <svg className="size-6" viewBox="0 0 16 16">
               <path d={svgPaths.p34deb370} fill="white" />
             </svg>
             <span className="text-white font-bold text-xl uppercase tracking-wider">Revanth</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`group flex items-center hover:text-white transition-colors ${location.pathname === item.path ? 'text-white' : 'text-[#abb2bf]'}`}
              >
                <span className="text-[#c778dd] mr-1">#</span>{item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-[#282c33] p-8 h-[calc(100vh-64px)] flex flex-col gap-6 text-2xl border-b border-white/10"
          >
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center"
              >
                <span className="text-[#c778dd] mr-1">#</span>{item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    );
};

export const Footer = () => (
    <footer className="border-t border-[#abb2bf]/20 py-12 mt-20">
         <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
               <div className="flex items-center gap-4 text-white">
                  <span className="font-bold text-lg">Revanth</span>
                  <span className="text-[#abb2bf]">revanthofficial08@gmail.com</span>
               </div>
               <p>FullStack developer & AI-Engineer</p>
            </div>
            <div className="md:text-right space-y-4">
               <h4 className="text-xl text-white font-medium">Media</h4>
               <div className="flex md:justify-end gap-6 h-8 text-[#abb2bf]">
                  <a href="https://github.com/RevanthR08" target="_blank" rel="noopener noreferrer"><Github className="hover:text-white cursor-pointer" /></a>
                  <a href="#"><Discord className="hover:text-white cursor-pointer" /></a>
               </div>
            </div>
         </div>
         <p className="text-center mt-12 text-sm opacity-60">© Copyright 2024. Made by Revanth</p>
    </footer>
);

export const SocialSidebar = () => (
    <div className="hidden lg:flex fixed left-8 top-0 bottom-0 flex-col items-center gap-4 z-50">
        <div className="w-px h-40 bg-[#abb2bf]" />
        <a href="https://github.com/RevanthR08" target="_blank" rel="noopener noreferrer" className="text-[#abb2bf] hover:text-white transition-colors"><Github size={24} /></a>
        <a href="#" className="text-[#abb2bf] hover:text-white transition-colors"><Discord size={24} /></a>
    </div>
);

export default function Home() {
  return (
    <div className="bg-[#282c33] min-h-screen text-[#abb2bf] font-['Fira_Code'] selection:bg-[#c778dd]/30">
      <SocialSidebar />
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <Section id="home" className="flex flex-col md:flex-row items-center justify-between gap-12 mt-10">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Revanth is a <span className="text-[#c778dd]">FullStack developer</span> & <span className="text-[#c778dd]">AI-Engineer</span>
            </h1>
            <p className="text-[#abb2bf] text-lg max-w-[460px]">
              building secure, high-performance systems. Exploring AI, ML, and blockchain through real-world projects.
            </p>
            <a href="#contacts" className="inline-block px-6 py-3 border border-[#c778dd] text-white hover:bg-[#c778dd]/10 transition-all font-medium">
              Contact me!!
            </a>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 w-full max-w-[450px] mx-auto">
               <img src={imgHero} alt="Hero" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
               <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-[#282c33] border border-[#abb2bf] p-3 flex items-center gap-3">
                  <div className="size-4 bg-[#c778dd]" />
                  <span className="text-sm font-medium">Currently focused on <span className="text-white">landing top-tier engineering roles</span></span>
               </div>
            </div>
            {/* Decoration */}
            <DotsGrid className="absolute -left-10 top-20 -z-0" />
            <svg className="absolute -right-10 top-40 size-32 opacity-20" viewBox="0 0 130 115">
               <path d={svgPaths.p1a353800} stroke="#c778dd" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </Section>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto px-4 py-20 text-center relative">
          <div className="relative inline-block border border-[#abb2bf] p-8 md:p-12 mb-px">
            <span className="absolute -top-4 left-4 bg-[#282c33] px-2 text-4xl text-[#abb2bf]">"</span>
            <p className="text-2xl md:text-3xl text-white font-medium">
              With great power comes great electricity bill
            </p>
            <span className="absolute -bottom-6 right-4 bg-[#282c33] px-2 text-4xl text-[#abb2bf]">"</span>
          </div>
          <div className="flex justify-end max-w-[800px] mx-auto">
            <div className="border border-[#abb2bf] border-t-0 p-4">
              <span className="text-xl italic">- Dr. Who</span>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <Section id="projects" title="projects" link="/works">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "4SIC", desc: "A secure infrastructure platform", tech: "React Tailwind Node.js", img: imgProject1 },
              { title: "TransKT", desc: "A high-performance system explorer", tech: "Next.js TypeScript", img: imgProject2 },
              { title: "codesphere Arena", desc: "A platform for DSA practicing where AI will generate questions and check it at the same time", tech: "React Next.js AI", img: imgProject3 },
            ].map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section title="skills" className="relative">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
             <div className="hidden lg:block relative flex-1">
                <DotsGrid className="absolute left-0 top-0" />
                <div className="size-24 border border-[#abb2bf] absolute left-32 top-10" />
                <DotsGrid className="absolute left-40 bottom-0" />
                <div className="size-24 border border-[#abb2bf] absolute right-0 bottom-10" />
             </div>
             <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Languages", items: ["TypeScript", "Lua", "Python", "JavaScript"] },
                  { name: "Databases", items: ["SQLite", "PostgreSQL", "Mongo"] },
                  { name: "Frameworks", items: ["React", "Vue", "Discord.js", "Express.js"] },
                  { name: "Tools", items: ["VSCode", "Neovim", "Linux", "Git", "Figma"] },
                  { name: "Other", items: ["HTML", "CSS", "EJS", "SCSS"] },
                ].map((s, i) => (
                  <div key={i} className="border border-[#abb2bf] h-fit">
                    <div className="p-2 border-b border-[#abb2bf] text-white font-semibold">{s.name}</div>
                    <div className="p-2 flex flex-wrap gap-x-4 gap-y-2 opacity-80 text-sm">
                      {s.items.map(item => <span key={item}>{item}</span>)}
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </Section>

        {/* About Section */}
        <Section id="about-me" title="about-me">
           <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="flex-1 space-y-8">
                  <p className="text-lg leading-relaxed">
                    Hello, I’m Revanth!<br/><br/>
                    Full-stack developer who enjoys turning caffeine into clean code and ideas into real, working products (bugs occasionally included for character). I spend most of my time building scalable web apps, experimenting with AI/ML, and integrating blockchain just to keep things interesting.
                  </p>
                  <Link to="/about-me" className="inline-block px-6 py-2 border border-[#c778dd] text-white hover:bg-[#c778dd]/10">Read more {"~~>"}</Link>
              </div>
              <div className="flex-1 relative">
                  <img src={imgAbout} alt="About" className="w-full max-w-[400px] mx-auto border-b border-[#c778dd]" />
                  <DotsGrid className="absolute left-0 top-1/2 -translate-y-1/2" />
                  <DotsGrid className="absolute bottom-0 right-0" />
              </div>
           </div>
        </Section>

        {/* Contact Section */}
        <Section id="contacts" title="contacts">
           <div className="flex flex-col md:flex-row gap-20">
              <div className="flex-1">
                 <p className="text-xl">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
              </div>
              <div className="flex-none p-6 border border-[#abb2bf] space-y-4">
                 <h4 className="text-white font-bold mb-4">Message me here</h4>
                 <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                    <Discord size={20} className="group-hover:text-[#c778dd]" />
                    <span>Revanth</span>
                 </div>
                 <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                    <Mail size={20} className="group-hover:text-[#c778dd]" />
                    <span>revanthofficial08@gmail.com</span>
                 </div>
              </div>
           </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export const ProjectCard = ({ title, desc, tech, img }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="border border-[#abb2bf] bg-[#282c33] group"
  >
    <div className="relative overflow-hidden aspect-video">
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#abb2bf] group-hover:bg-[#c778dd] transition-colors" />
    </div>
    <div className="p-4 border-b border-[#abb2bf] text-sm opacity-80">{tech}</div>
    <div className="p-4 space-y-4">
      <h3 className="text-2xl font-medium text-white">{title}</h3>
      <p className="text-[#abb2bf]">{desc}</p>
      <div className="flex gap-4">
        <button className="px-4 py-2 border border-[#c778dd] text-white hover:bg-[#c778dd]/10 text-sm">Live {"<~>"}</button>
        <button className="px-4 py-2 border border-[#abb2bf] text-[#abb2bf] hover:text-white text-sm">Cached {"<="}</button>
      </div>
    </div>
  </motion.div>
);