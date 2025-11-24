import React from 'react';

const BackgroundMesh = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-200/40 blur-[120px] mix-blend-multiply animate-blob" />
    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-200/40 blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
    <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-lime-100/60 blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />
    {/* Grid Overlay */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
  </div>
);

export default BackgroundMesh;

