export default function Marquee() {
  const highlights = [
    "AWS Certified Cloud Practitioner",
    "75+ LeetCode Problems Solved",
    "Rajya Puraskar Awardee",
    "National Service Scheme Volunteer",
  ];

  return (
    
    <section className="bg-[#FFDE03] border-y-[1.5px] border-black py-1.5 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-scroll">
        {}
        {[...highlights, ...highlights].map((text, i) => (
          <div key={i} className="flex items-center">
            {}
            <span className="text-black font-black uppercase text-[10px] tracking-widest font-mono mx-8">
              {text}
            </span>
            <span className="text-black text-[12px] opacity-50">✦</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}