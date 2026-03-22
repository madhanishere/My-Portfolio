import { GitHubCalendar } from 'react-github-calendar';

export default function GithubChart() {
  const username = "madhanishere";

  const yellowTheme = {
    dark: [
      '#1A1A1A', 
      '#4D4301', 
      '#998502', 
      '#CCB102', 
      '#FFDE03'  
    ],
  };

  return (
<section id="github" className="max-w-4xl mx-auto px-6 pt-12 pb-4 mb-4 font-mono">      
    <h2 className="text-xl font-black  mb-12 text-white">
        Contributions 
      </h2>

      <div className="border border-white/10 bg-[#0A0A0A]/50 p-6 md:p-8 rounded-xl shadow-[0_0_25px_rgba(255,222,3,0.05)]">
        <div className="flex justify-center items-center overflow-x-auto custom-scrollbar">
          <GitHubCalendar 
            username={username}
            year={2026} 
            colorScheme="dark"
            theme={yellowTheme}
            fontSize={12}
            blockSize={10}
            blockMargin={4}
            showWeekdayLabels={true}
          />
        </div>
      </div>
      
      <div className="mt-6 flex justify-between items-center text-[10px] text-gray-600 uppercase tracking-[0.3em]">
        <div className="flex items-center gap-2">


        </div>
        <a 
          href={`https:
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors border-b border-[#FFDE03]/20"
        >

        </a>
      </div>
    </section>
  );
}