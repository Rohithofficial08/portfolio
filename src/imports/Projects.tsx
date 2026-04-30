import React from 'react';
import { Navbar, Footer, Section, SocialSidebar, ProjectCard, DotsGrid } from './Home';
import imgProject1 from "../assets/myprojectsassets/4sic.png";
import imgProject2 from "../assets/myprojectsassets/transkt.png";
import imgProject3 from "../assets/myprojectsassets/codesphereArena.png";
import imgProject4 from "../assets/myprojectsassets/alumnisearch.png";
import imgProject5 from "../assets/myprojectsassets/hrms.png";

export default function Projects() {
  const completeApps = [
    { title: "4SIC", desc: "A secure infrastructure platform", tech: "React Tailwind Node.js", img: imgProject1 },
    { title: "TransKT", desc: "A high-performance system explorer", tech: "Next.js TypeScript", img: imgProject2 },
    { title: "codesphere Arena", desc: "A platform for DSA practicing where AI will generate questions and check it at the same time", tech: "React Next.js AI", img: imgProject3 },
    { title: "alumniSearch", desc: "Search and connect with college alumni", tech: "React Node.js MongoDB", img: imgProject4 },
    { title: "HRMS", desc: "A comprehensive Human Resource Management System for tracking employee performance, payroll, and recruitment", tech: "React Tailwind Node.js MongoDB", img: imgProject5 },
  ];

  const smallProjects = [
    { title: "Bot page", desc: "Landing page for discord bot", tech: "HTML CSS", link: "#" },
    { title: "My blog", desc: "Personal blog website", tech: "Vue Nuxt", link: "#" },
    { title: "Chess bot", desc: "Simple chess AI in python", tech: "Python Flask", link: "#" },
    { title: "Weather app", desc: "Live weather status", tech: "React API", link: "#" },
  ];

  return (
    <div className="bg-[#282c33] min-h-screen text-[#abb2bf] font-['Fira_Code']">
      <SocialSidebar />
      <Navbar />

      <main className="pt-32">
        <Section className="pb-0">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-white">
              <span className="text-[#c778dd]">/</span>projects
            </h1>
            <p className="text-white">List of my projects</p>
          </div>
        </Section>

        <Section title="complete-apps">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completeApps.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </Section>

        <Section title="small-projects" className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smallProjects.map((p, i) => (
              <div key={i} className="border border-[#abb2bf] p-4 space-y-4 hover:border-white transition-colors group">
                <div className="text-sm opacity-60 border-b border-[#abb2bf] pb-2">{p.tech}</div>
                <h3 className="text-2xl font-medium text-white group-hover:text-[#c778dd] transition-colors">{p.title}</h3>
                <p className="opacity-80">{p.desc}</p>
                <button className="px-4 py-2 border border-[#abb2bf] text-[#abb2bf] hover:text-white text-sm">
                   Cached {"<="}
                </button>
              </div>
            ))}
          </div>
        </Section>

        <div className="max-w-6xl mx-auto px-4 flex justify-between relative h-40">
           <DotsGrid className="absolute left-0 bottom-10" rows={4} cols={5} />
           <div className="size-32 border border-[#abb2bf] absolute right-0 top-0 opacity-20" />
        </div>
      </main>

      <Footer />
    </div>
  );
}