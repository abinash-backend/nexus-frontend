function Brand() {
  return (
    <div className="flex items-center gap-3 px-4 h-16 border-b border-white/10">
      <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5"  cy="12" r="2.5" fill="white" opacity="0.5"/>
          <circle cx="12" cy="5"  r="2.5" fill="white"/>
          <circle cx="19" cy="12" r="2.5" fill="white" opacity="0.5"/>
          <circle cx="12" cy="19" r="2.5" fill="white" opacity="0.5"/>
          <line x1="7.5"  y1="12" x2="9.5"  y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="14.5" y1="12" x2="16.5" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="12"   y1="7.5" x2="12"  y2="9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="12"   y1="14.5" x2="12" y2="16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="2.5" fill="white"/>
        </svg>
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-lg font-semibold text-white leading-tight">
          Nexus
        </span>
        <span className="text-[10px] text-slate-400 tracking-widest uppercase leading-tight">
          Workflow Execution Platform
        </span>
      </div>
    </div>
  );
}

export default Brand;