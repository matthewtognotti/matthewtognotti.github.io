export default function Videos() {
  return (
    <section id="videos" className="mt-10 scroll-mt-20 sm:mt-14">
      <div>
        <h2 className="mt-5 mb-5 text-lg font-medium text-gray-800 dark:text-neutral-200">
          Robot Videos
        </h2>

        <p className="mb-5 text-sm text-gray-600 dark:text-neutral-400">
          This first video shows the robot executing a task that it was
          previously taught.
        </p>
        <div className="relative mb-5" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/I1os_-2GVwU?si=Zo00qkrbNGP4eeaP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <p className="mt-10 mb-5 text-sm text-gray-600 dark:text-neutral-400">
          This video shows the robot retrieving a single object for the user.
        </p>
        <div className="relative mb-5" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/7ieUHwGYHr8?si=--A5Z7j5n1CioorE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <p className="mt-10 mb-5 text-sm text-gray-600 dark:text-neutral-400">
          The final video demonstrates how a user can teach the robot a task.
        </p>
        <div className="relative mb-5" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/3ZwdYYUvZRw?si=ALOWJTY5IsqjBWaa"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
