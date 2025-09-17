// src/components/HeroBackground.tsx
export default function HeroBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-300">
      {/* Gradient utama */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-cyan-500 to-blue-700 
          bg-[length:300%_300%] animate-gradientShift blur-2xl opacity-60"
      />

      {/* Gradient layer kedua untuk kedalaman */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-indigo-500 to-emerald-500 
          bg-[length:400%_400%] animate-gradientShiftSlow blur-3xl opacity-40"
      />
    </div>
  );
}
