
"use client";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Estimator from "@/components/Estimator";
import Studio from "@/components/Studio";
import ContactDrawer from "@/components/ContactDrawer";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/constants";

export default function Page() {
  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState("hero");
  const [mobile, setMobile] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [hovering, setHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); }, { threshold: 0.35, rootMargin: "-20% 0px -60% 0px" });
    ["hero","services","work","process","studio","journal","about"].forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => { if (cursorRef.current) cursorRef.current.style.transform = "translate3d(" + e.clientX + "px," + e.clientY + "px,0)"; };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor]")) setHovering(true);
      else setHovering(false);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, []);

  useEffect(() => {
    if (showContact || selectedProject || mobile) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [showContact, selectedProject, mobile]);

  return (
    <div className="bg-paper text-ink antialiased overflow-x-clip selection:bg-accent selection:text-white">
      <div ref={cursorRef} className={"hidden md:flex fixed top-0 left-0 w-6 h-6 rounded-full border border-black/20 bg-black/5 pointer-events-none z-[200] -translate-x-1/2 -translate-y-1/2 transition-[transform,background,border] duration-200 items-center justify-center " + (hovering ? "scale-[2.5] bg-accent/15 border-accent" : "")}>
        <div className="w-1 h-1 rounded-full bg-black/60" />
      </div>

      <Header active={active} scroll={scroll} onContact={() => setShowContact(true)} mobile={mobile} setMobile={setMobile} />
      <Hero onContact={() => setShowContact(true)} />
      <Services />
      <Work onSelect={(p) => setSelectedProject(p)} />
      <Process />
      <Estimator onContact={() => setShowContact(true)} />
      <Studio />

      <footer className="border-t border-black/10 mt-6">
        <div className="mx-auto max-w-[1360px] px-6 md:px-10 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr_0.8fr] gap-12">
            <div><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-[12px] bg-ink text-white flex items-center justify-center font-creative">DD</div><span className="font-creative text-[22px] tracking-[-0.015em]">DreamDeploy</span></div><div className="mt-5 font-display text-[22px] leading-[1.08] tracking-[-0.02em] max-w-[360px]">We Build. We Deploy. Your Dream Goes Live.</div><div className="mt-4 font-sans2 text-[14px] leading-[1.6] text-[#52525b] max-w-[360px]">Full-service technology partner building complete digital products — from first sketch to App Store and production.</div></div>
            <div className="grid grid-cols-2 gap-8 font-sans2 text-[13px]"><div><div className="font-medium mb-4">Explore</div><div className="space-y-3 text-[#52525b]"><a href="#services" className="block hover:text-ink">Services</a><a href="#work" className="block hover:text-ink">Work</a><a href="#process" className="block hover:text-ink">Process</a><a href="#studio" className="block hover:text-ink">Studio</a></div></div><div><div className="font-medium mb-4">Connect</div><div className="space-y-3 text-[#52525b]"><a href="mailto:dreamdeploy.in@gmail.com" className="block hover:text-ink">dreamdeploy.in@gmail.com</a><a href="#" className="block hover:text-ink">LinkedIn</a><a href="#" className="block hover:text-ink">X / Twitter</a></div></div></div>
            <div className="lg:text-right"><div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F3EE] border border-black/5"><span className="w-2 h-2 rounded-full bg-emerald-500" /><span className="font-sans2 text-[11px] uppercase tracking-[0.06em]">Available for new projects</span></div><div className="mt-6 font-sans2 text-[12px] text-muted">No fixed-price fantasy.<br />Ranges, weekly builds, real deploys.</div></div>
          </div>
          <div className="mt-14 pt-6 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4 font-sans2 text-[11px] text-muted"><div>© 2026 DreamDeploy • dreamdeploy.com • We Build. We Deploy. Your Dream Goes Live.</div><div className="flex items-center gap-4"><span>Privacy</span><span>Terms</span><button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:border-black/20">↑</button></div></div>
        </div>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} onContact={() => setShowContact(true)} />
      <ContactDrawer open={showContact} onClose={() => setShowContact(false)} />
    </div>
  );
}
