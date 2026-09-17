
type Project = { id: string; category: string; year: string; tags: string[]; description: string; problem: string; solution: string; stack: string[]; timeline: string; };
export default function ProjectModal({ project, onClose, onContact }: { project: Project | null; onClose: () => void; onContact: () => void; }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[70] flex items-end md:items-center justify-center p-0 md:p-6">
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-[8px]" onClick={onClose} />
      <div className="relative w-full md:max-w-[980px] max-h-[92vh] md:max-h-[88vh] overflow-auto rounded-t-[24px] md:rounded-[24px] bg-paper border border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-black/10 bg-paper/90 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#F7F3EE] border text-[11px]">{project.category}</span>
            <span className="font-sans2 text-[12px] text-muted">{project.year}</span>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center" aria-label="Close project details">X</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-0">
          <div className="p-7 md:p-9">
            <h3 className="font-creative text-[22px] md:text-[26px] leading-[1.25] font-semibold">{project.description}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-[#F7F3EE] border">{tag}</span>)}
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-7">
              <div>
                <div className="font-sans2 text-[11px] uppercase tracking-[0.12em] text-muted">Problem</div>
                <div className="mt-2 font-sans2 text-[14px] leading-[1.7] text-[#52525b]">{project.problem}</div>
              </div>
              <div>
                <div className="font-sans2 text-[11px] uppercase tracking-[0.12em] text-muted">Solution</div>
                <div className="mt-2 font-sans2 text-[14px] leading-[1.7] text-[#52525b]">{project.solution}</div>
              </div>
            </div>
            <div className="mt-8">
              <div className="font-sans2 text-[11px] uppercase tracking-[0.12em] text-muted">Stack &amp; Timeline</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((stackItem) => <span key={stackItem} className="text-[11px] px-2.5 py-1 rounded-full bg-ink text-white">{stackItem}</span>)}
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-white border">{project.timeline}</span>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F3EE] border-t lg:border-t-0 lg:border-l border-black/10 p-7 md:p-9">
            <div className="font-sans2 text-[11px] uppercase tracking-[0.12em] text-muted">Screens - CSS mockups</div>
            <div className="mt-5 space-y-4">
              <div className="rounded-[16px] bg-white border p-3.5">
                <div className="h-8 flex items-center gap-2 border-b mb-3">
                  <div className="w-2 h-2 rounded-full bg-black/20" />
                  <div className="w-16 h-2 bg-black/10 rounded" />
                </div>
                <div className="h-24 bg-[#F7F3EE] rounded-lg" />
              </div>
              <div className="rounded-[16px] bg-ink p-2.5">
                <div className="rounded-[12px] bg-white p-3.5">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-ink" />
                    <div className="flex-1 h-8 bg-[#F7F3EE] rounded" />
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => { onClose(); onContact(); }} className="mt-7 w-full h-11 rounded-full bg-ink text-white font-sans2 text-[13px]">Build something like this -&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
