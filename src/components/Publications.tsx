export default function Publications() {
  return (
    <section id="publications" className="mt-10 scroll-mt-20 sm:mt-14">
      <div>
        <h2 className="mb-5 text-lg font-medium text-gray-800 dark:text-neutral-200">
          Publications
        </h2>

        <img
          className="mb-6 w-20"
          src="/images/nsf.png"
          alt="National Science Foundation Logo"
        />

        <ul className="space-y-10">
          <li>
            <h5 className="text-sm font-medium text-gray-800 dark:text-neutral-200">
              International Conference on Robotic Computing (IRC)
            </h5>
            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
              <span className="text-gray-800 dark:text-neutral-200">
                [1] Tognotti M.
              </span>{' '}
              and Kyrarini M., 2024. Are you Ready? an Intelligent Robotic
              Assistant for Instrumental Activities of Daily Living. In 2024
              Eighth IEEE International Conference on Robotic Computing (IRC),
              pp. 249-252, doi:{' '}
              <a
                className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
                href="https://doi.org/10.1109/IRC63610.2024.00038"
                target="_blank"
                rel="noopener noreferrer"
              >
                10.1109/IRC63610.2024.00038
              </a>
            </p>
          </li>

          <li>
            <h5 className="text-sm font-medium text-gray-800 dark:text-neutral-200">
              International Conference on Automation, Robotics and Applications
              (ICARA)
            </h5>
            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
              <span className="text-gray-800 dark:text-neutral-200">[2]</span>{' '}
              Kodur K., Zand M.,{' '}
              <span className="text-gray-800 dark:text-neutral-200">
                Tognotti M.
              </span>{' '}
              and Kyrarini M., 2024. Translucent Object Grasping Using Robot
              Vision. In 10th International Conference on Automation, Robotics
              and Applications (ICARA), pp. 107-111, IEEE. doi:{' '}
              <a
                className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
                href="https://doi.org/10.1109/ICARA60736.2024.10552988"
                target="_blank"
                rel="noopener noreferrer"
              >
                10.1109/ICARA60736.2024.10552988
              </a>
            </p>
          </li>

          <li>
            <h5 className="text-sm font-medium text-gray-800 dark:text-neutral-200">
              A User Study
            </h5>
            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
              <span className="text-gray-800 dark:text-neutral-200">[3]</span>{' '}
              Kodur K., Zand M.,{' '}
              <span className="text-gray-800 dark:text-neutral-200">
                Tognotti M.
              </span>
              , Jauregui C. and Kyrarini M., 2023. Structured and Unstructured
              Speech2Action Frameworks for Human-Robot Collaboration: A User
              Study. doi:{' '}
              <a
                className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
                href="https://doi.org/10.36227/techrxiv.24022452"
                target="_blank"
                rel="noopener noreferrer"
              >
                10.36227/techrxiv.24022452
              </a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
