import HeroSection from "@/components/hero-section";
import ProjectCard from "@/components/project-card";
import SkillCard from "@/components/skill-card";
import WorkExperience from "@/components/work-experience";
import skills from "@/mocks/skills";
import works from "@/mocks/works";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />

      <div
        id="skills"
        className="container flex flex-col items-center gap-14 my-20 px-4"
      >
        <h3 className="text-5xl font-semibold uppercase">Minhas Habilidades</h3>

        <div className="flex items-center flex-wrap gap-4">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>
      </div>

      <div
        id="projects"
        className="container flex items-center flex-col gap-8 my-20 px-4"
      >
        <h3 className="text-5xl font-semibold uppercase">Projetos</h3>

        <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
          {works.map((work, idx) => (
            <ProjectCard key={idx} {...work} />
          ))}
        </div>
      </div>

      <div
        id="work-experience"
        className="container my-20 flex items-center flex-col gap-8 px-4 "
      >
        <h3 className="text-5xl font-semibold uppercase">
          Experiência Profissional
        </h3>
        <WorkExperience />
      </div>

      <section
        id="contact"
        className="container my-20 flex items-center flex-col gap-8 px-4"
      >
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center">
            <h3 className="text-5xl font-semibold uppercase">
              Entre em contato
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Email
              </h2>

              <p className="mt-2 text-blue-500 dark:text-blue-400">
                rianherminio2002@gmail.com
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                LinkedIn
              </h2>

              <p className="mt-2 text-blue-500 dark:text-blue-400">
                linkedin.com/in/rian-moraes/
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                WhatsApp
              </h2>

              <p className="mt-2 text-blue-500 dark:text-blue-400">
                +55 21 9 6745-3096
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
