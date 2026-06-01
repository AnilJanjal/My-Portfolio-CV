import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FeaturedWebsite from "@/components/FeaturedWebsite";
import Hero from "@/components/Hero";
import Milestones from "@/components/Milestones";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { resume } from "@/data/resume";

export default function Home() {
  return (
    <>
      <Navbar profile={resume.profile} />
      <main>
        <Hero resume={resume} />
        <Milestones items={resume.milestones} />
        <Skills groups={resume.skills} />
        <Experience items={resume.experience} />
        <FeaturedWebsite website={resume.featuredWebsite} />
        <Projects items={resume.projects} />
        <Contact resume={resume} />
      </main>
    </>
  );
}
