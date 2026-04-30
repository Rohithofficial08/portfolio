import React from 'react';
import { Navbar, Footer, Section, SocialSidebar, DotsGrid } from './Home';
import { Github, Disc as Discord, Mail } from 'lucide-react';

export default function Contacts() {
  return (
    <div className="bg-[#282c33] min-h-screen text-[#abb2bf] font-['Fira_Code']">
      <SocialSidebar />
      <Navbar />

      <main className="pt-32">
        <Section className="pb-0">
          <div className="space-y-4 text-white">
            <h1 className="text-4xl font-semibold">
              <span className="text-[#c778dd]">/</span>contacts
            </h1>
            <p>Who am I?</p>
          </div>
        </Section>

        <Section>
           <div className="flex flex-col md:flex-row gap-20 items-start">
              <div className="flex-1 space-y-6 text-xl">
                 <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
              </div>
              <div className="flex-none p-8 border border-[#abb2bf] space-y-6 bg-[#282c33]/40 backdrop-blur-sm">
                 <h4 className="text-white font-bold mb-4">Message me here</h4>
                 <div className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
                    <Discord size={24} className="group-hover:text-[#c778dd]" />
                    <span>Revanth</span>
                 </div>
                 <div className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
                    <Mail size={24} className="group-hover:text-[#c778dd]" />
                    <span>revanthofficial08@gmail.com</span>
                 </div>
              </div>
           </div>
        </Section>

        <Section title="all-media">
            <div className="flex flex-wrap gap-8 items-center text-xl">
                {[
                    { icon: Github, name: "Github", link: "RevanthR08", url: "https://github.com/RevanthR08" },
                    { icon: Mail, name: "Email", link: "revanthofficial08@gmail.com" },
                ].map((m, i) => (
                    <a key={i} href={m.url || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group cursor-pointer">
                        <m.icon size={28} className="group-hover:text-[#c778dd]" />
                        <span>{m.link}</span>
                    </a>
                ))}
            </div>
            <div className="mt-20 flex justify-between relative h-40">
               <DotsGrid className="absolute left-0 bottom-10" rows={4} cols={5} />
               <div className="size-32 border border-[#abb2bf] absolute right-0 top-0 opacity-10" />
            </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}