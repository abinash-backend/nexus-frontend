function WelcomeBanner() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-[#0F172A] p-8 shadow-lg">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
          Welcome back 👋
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-slate-400">
          Here's what's happening across your workflows today. Monitor executions,
          track performance, and keep your automation running smoothly.
        </p>
      </div>
    </section>
  );
}

export default WelcomeBanner;