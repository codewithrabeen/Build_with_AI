import React from 'react';

const LoginLeft = () => {
  return (
    <div className="hidden lg:flex lg:w-2/5 min-h-screen relative overflow-hidden shrink-0 select-none">

      {/* Background */}
      <div className="absolute inset-0 bg-[url('/bg-img.png')] bg-cover bg-center" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/75" />

      {/* Decorative glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between w-full p-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center size-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <img
                src="/logo.svg"
                alt="Build with AI Logo"
                className="size-7"
              />
            </div>

            <span className="text-2xl font-semibold tracking-tight text-white">
              Build with AI
            </span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/80 text-xs font-medium">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI-powered website builder
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-lg">

          <h1 className="text-4xl xl:text-5xl font-semibold tracking-tight text-white leading-tight">
            Turn your ideas into
            <span className="block text-white/60">
              beautiful websites.
            </span>
          </h1>

          <p className="mt-5 text-base leading-7 text-white/70 max-w-md">
            Create stunning websites effortlessly with our AI-powered
            builder. Describe your idea, and let AI transform it into a
            beautiful website.
          </p>

          {/* Feature card */}
          <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 max-w-md">
            <div className="flex items-center justify-center size-10 rounded-xl bg-white/10">
              <span className="text-lg">✦</span>
            </div>

            <div>
              <p className="text-sm font-medium text-white">
                From idea to website
              </p>
              <p className="text-xs text-white/50 mt-0.5">
                No coding required
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-xs mt-10">
            © {new Date().getFullYear()} Build with AI. All rights reserved.
          </p>

        </div>

      </div>
    </div>
  );
};

export default LoginLeft;