import React from 'react';
import { Navbar, Footer, Section, SocialSidebar, DotsGrid } from './Home';
import imgAbout from "figma:asset/f4d7792241ade353515843fc44bf4f33ac8d48cd.png";

export default function About() {
  return (
    <div className="bg-[#282c33] min-h-screen text-[#abb2bf] font-['Fira_Code']">
      <SocialSidebar />
      <Navbar />

      <main className="pt-32">
        <Section className="pb-0">
          <div className="space-y-4 text-white">
            <h1 className="text-4xl font-semibold">
              <span className="text-[#c778dd]">/</span>about-me
            </h1>
            <p>Who am I?</p>
          </div>
        </Section>

        <Section>
           <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="flex-1 space-y-6 text-lg">
                 <p>Hello, I’m Revanth!</p>
                 <p>
                    Full-stack developer & AI-Engineer who enjoys turning caffeine into clean code and ideas into real, working products (bugs occasionally included for character). I spend most of my time building scalable web apps, experimenting with AI/ML, and integrating blockchain just to keep things interesting.
                 </p>
                 <p>
                    I like writing code that actually survives production, designing systems that don’t fall apart at 2 AM, and learning fast enough to keep up with how quickly tech changes. I’ve worked across frontend, backend, and a bit of everything in between—basically wherever the problem is, I’ll go.
                 </p>
                 <p>
                    Outside of coding, I’m usually optimizing something—performance, workflows, or my chances of landing a top-tier engineering role. Professional when it matters, funny when it helps, and always focused on building things that actually make an impact.
                 </p>
              </div>
              <div className="flex-1 relative">
                  <img src={imgAbout} alt="About" className="w-full max-w-[400px] mx-auto" />
                  <DotsGrid className="absolute left-0 top-1/2 -translate-y-1/2" rows={4} cols={5} />
                  <DotsGrid className="absolute bottom-10 right-0" rows={5} cols={5} />
              </div>
           </div>
        </Section>

        <Section title="skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Languages", items: ["TypeScript", "Python", "JavaScript"] },
                  { name: "Databases", items: ["SQLite", "PostgreSQL", "Mongo"] },
                  { name: "Frameworks", items: ["React", "Vue", "Discord.js", "Express.js"] },
                  { name: "Tools", items: ["VSCode", "Neovim", "Linux", "Git", "Figma"] },
                ].map((s, i) => (
                  <div key={i} className="border border-[#abb2bf] h-fit hover:border-white transition-colors">
                    <div className="p-2 border-b border-[#abb2bf] text-white font-semibold">{s.name}</div>
                    <div className="p-2 flex flex-wrap gap-x-4 gap-y-2 opacity-80 text-sm">
                      {s.items.map(item => <span key={item}>{item}</span>)}
                    </div>
                  </div>
                ))}
            </div>
        </Section>

        <Section title="my-fun-facts">
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1 flex flex-wrap gap-4">
                    {[
                        "I like winter more than summer",
                        "I often bike with my friends",
                        "I like briyani and Non-veg",
                        "I was in my House last summer",
                        "I’m in college",
                        "I have a dog named Sherkhan"
                    ].map((f, i) => (
                        <div key={i} className="border border-[#abb2bf] p-4 text-white hover:bg-white/5 transition-colors">
                            {f}
                        </div>
                    ))}
                </div>
                <div className="flex-none relative size-40 md:size-60">
                    <DotsGrid className="absolute left-0 top-0" rows={5} cols={5} />
                    <div className="absolute right-0 bottom-0 size-20 md:size-32 border border-[#abb2bf] opacity-30" />
                </div>
            </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}