export default function Experience() {
  return (
    <section id="experience" className="mt-10 scroll-mt-20 sm:mt-14">
      <div>
        <div className="grow">
          <h2 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
            Work Experience
          </h2>
          <p className="mb-5 text-sm text-gray-600 dark:text-neutral-400">
            Human-Machine Interaction and Innovation Robotics Lab
          </p>
        </div>

        <div>
          <div className="group relative flex gap-x-5">
            <div className="relative after:absolute after:start-3 after:top-8 after:bottom-2 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700">
              <div className="relative z-10 flex size-9 items-center justify-center">
                <img src="/images/smart-robot.png" alt="Smart Robot Icon" className="dark:brightness-0 dark:invert dark:opacity-80" />
              </div>
            </div>
            <div className="grow pb-8 group-last:pb-0">
              <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                Sept. 2023 - Sept. 2024
              </h3>

              <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                Software Engineer & Researcher
              </p>

              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                Led a project funded by the National Science Foundation's
                Research Experience for Undergraduates to develop a robot
                learning system for a mobile manipulator to learn and execute
                user-taught pick-and-place tasks.
              </p>

              <ul className="ms-6 mt-3 list-disc space-y-1.5">
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Improved system performance by 67% through iterative design
                  optimization and user feedback integration, delivering
                  reliable automation that met real-world operational needs.
                </li>
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Authored and presented a conference publication at IEEE
                  RO-MAN, cited in [1].
                </li>
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Videos of the robot and the learning system are available{' '}
                  <a
                    className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
                    href="#videos"
                  >
                    here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="group relative flex gap-x-5">
            <div className="relative after:absolute after:start-3 after:top-8 after:bottom-2 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700">
              <div className="relative z-10 flex size-8 items-center justify-center">
                <img
                  src="/images/software-development.svg"
                  alt="Software Development Icon"
                  className="dark:invert dark:opacity-80"
                />
              </div>
            </div>
            <div className="grow pb-8 group-last:pb-0">
              <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                June, 2023 - Sept., 2023
              </h3>

              <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                Kuehler Award Researcher
              </p>

              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                Collaborated with PhD students to develop a speech-to-action
                robotic system, enabling a mobile manipulator to identify, pick,
                and place items based on speech commands using Robot Operating
                System (ROS), Google Speech-to-Text, GPT-Neo, and Intel RealSense
                RGBD Cameras.
              </p>

              <ul className="ms-6 mt-3 list-disc space-y-1.5">
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Earned the Kuehler Research Award for novel contributions to
                  robotic human interaction and co-authored three peer-reviewed
                  publications listed below.
                </li>
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Designed and conducted user studies to evaluate system
                  effectiveness and usability, incorporating stakeholder feedback
                  to optimize solution performance.
                </li>
              </ul>
            </div>
          </div>

          <div className="group relative flex gap-x-5">
            <div className="relative after:absolute after:start-3 after:top-8 after:bottom-2 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700">
              <div className="relative z-10 flex size-8 items-center justify-center">
                <img src="/images/robot-arm.svg" alt="Robot Arm Icon" className="dark:invert dark:opacity-80" />
              </div>
            </div>
            <div className="grow pb-8 group-last:pb-0">
              <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                Jan, 2023 - June, 2023
              </h3>

              <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                Research Assistant
              </p>

              <ul className="ms-6 mt-3 list-disc space-y-1.5">
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Developed an API in Python and ROS to create seamless
                  integrations between hardware and software systems.
                </li>
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Created kinesthetic teaching capabilities using MoveIt and
                  teleoperation for a manipulator.
                </li>
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Built a virtual lab in RViz with simulated obstacles and 3D
                  meshes to test autonomous path planning.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-14">
        <h2 className="mb-5 text-lg font-medium text-gray-800 dark:text-neutral-200">
          Education
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-4 dark:border-neutral-700">
            <img
              className="mb-3 size-10 shrink-0"
              src="/images/scu.png"
              alt="Santa Clara University Logo"
            />

            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Santa Clara University
            </p>

            <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
              B.S., Electrical & Computer Engineering
            </p>

            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              September 2024
            </h3>
          </div>

          <div className="rounded-lg border border-gray-200 p-4 dark:border-neutral-700">
            <img
              className="mb-3 size-10 shrink-0 dark:brightness-0 dark:invert dark:opacity-80"
              src="/images/education.png"
              alt="Education Icon"
            />

            <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
              GPA: 3.65/4.0; Cum Laude
            </p>

            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              <strong>Coursework:</strong> Robotics, Data Structures &
              Algorithms, Real-time Embedded Systems, Computer Architecture, OS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
