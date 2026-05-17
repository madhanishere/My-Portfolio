import {GitHubCalendar} from "react-github-calendar";

export default function GithubChart() {
  const username = "madhanishere";

  const theme = {
    dark: [
      "#2A3145",
      "#C8DE8A",
      "#9BE564",
      "#26A641",
      "#39D353",
    ],
  };

  return (
    <section
      id="github"
      className="max-w-3xl mx-auto px-6 py-4 "
    >
      <h2 className="text-2xl font-black text-[#E5E7EB] mb-8 tracking-tight font-mono">
        GitHub Activity
      </h2>
<br />
      <div className="overflow-hidden">
        <GitHubCalendar
          username={username}
          year={new Date().getFullYear()}
          colorScheme="dark"
          theme={theme}
          fontSize={12}
          blockSize={12}
          blockMargin={3}
          showWeekdayLabels={true}
        />
      </div>
      <br />
              <br />
         <p className="w-full text-[#FF7A1A] overflow-hidden whitespace-nowrap text-sm md:text-base">
  --------------------------------------------------------------------------------------------------------------------------------
</p>
    </section>
  );
}