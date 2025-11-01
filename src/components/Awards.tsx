export default function Awards() {
  return (
    <section id="awards" className="mt-10 scroll-mt-20 sm:mt-14">
      <div>
        <h2 className="mb-5 text-lg font-medium text-gray-800 dark:text-neutral-200">
          Awards, Skills, & Interests
        </h2>

        <div className="space-y-3">
          <dl className="flex flex-col gap-1 sm:flex-row">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">
                Awards:
              </span>
            </dt>
            <dd>
              <ul className="flex flex-wrap">
                <li className="me-1 inline-flex items-center pr-2 text-sm text-gray-800 after:content-[','] last:after:content-none dark:text-neutral-200">
                  <img
                    className="me-1 size-4 shrink-0 dark:invert dark:opacity-80"
                    src="/images/award.svg"
                    alt="Award icon"
                  />
                  Robotics Kuehler Research Award (2024)
                </li>
                <li className="me-1 inline-flex items-center text-sm text-gray-800 last:after:content-none dark:text-neutral-200">
                  <img
                    className="me-1 size-4 shrink-0 dark:invert dark:opacity-80"
                    src="/images/first.svg"
                    alt="First place icon"
                  />
                  First Place in Senior Design Conference for Robotics (2024)
                </li>
              </ul>
            </dd>
          </dl>

          <dl className="flex flex-col gap-1 sm:flex-row">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">
                Skills:
              </span>
            </dt>
            <dd>
              <ul className="flex flex-wrap">
                {[
                  'Python',
                  'C++',
                  'Docker',
                  'Linux',
                  'Context Engineering',
                  'RAG Pipelines',
                  'Agent Tooling',
                  'React',
                  'Selenium',
                  'Automated Testing',
                  'Shell Scripting',
                  'ROS',
                  'MoveIt',
                  'Kinematics',
                  'Embedded Systems',
                  'STM32',
                  'ARM Assembly',
                  'Simulation',
                ].map((skill, index, arr) => (
                  <li
                    key={skill}
                    className={`me-1 inline-flex items-center ${index < arr.length - 1 ? 'pr-2' : ''} text-sm text-gray-800 ${index < arr.length - 1 ? "after:content-[',']" : ''} last:after:content-none dark:text-neutral-200`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </dl>

          <dl className="flex flex-col gap-1 sm:flex-row">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">
                Interests:
              </span>
            </dt>
            <dd>
              <ul className="flex flex-wrap">
                <li className="me-1 inline-flex items-center pr-2 text-sm text-gray-800 after:content-[','] last:after:content-none dark:text-neutral-200">
                  <img
                    className="me-1 size-4 shrink-0 dark:invert dark:opacity-80"
                    src="/images/gi.svg"
                    alt="Brazilian Jiu-Jitsu icon"
                  />
                  Brazilian Jiu-Jitsu
                </li>
                <li className="me-1 inline-flex items-center pr-2 text-sm text-gray-800 after:content-[','] last:after:content-none dark:text-neutral-200">
                  <img
                    className="me-1 size-4 shrink-0 dark:invert dark:opacity-80"
                    src="/images/guitar.svg"
                    alt="Guitar icon"
                  />
                  Guitar
                </li>
                <li className="me-1 inline-flex items-center pr-2 text-sm text-gray-800 after:content-[','] last:after:content-none dark:text-neutral-200">
                  <img
                    className="me-1 size-4 shrink-0 dark:invert dark:opacity-80"
                    src="/images/reading.svg"
                    alt="Reading icon"
                  />
                  Reading
                </li>
                <li className="me-1 inline-flex items-center pr-2 text-sm text-gray-800 after:content-[','] last:after:content-none dark:text-neutral-200">
                  <img
                    className="me-1 size-4 shrink-0 dark:invert dark:opacity-80"
                    src="/images/cooking.svg"
                    alt="Cooking icon"
                  />
                  Cooking
                </li>
                <li className="me-1 inline-flex items-center text-sm text-gray-800 last:after:content-none dark:text-neutral-200">
                  <img
                    className="me-1 size-4 shrink-0 dark:invert dark:opacity-80"
                    src="/images/camping.svg"
                    alt="Camping icon"
                  />
                  Camping
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
