export default function Projects() {
  return (
    <section id="projects" className="mt-10 scroll-mt-20 sm:mt-14">
      <h2 className="mb-5 text-lg font-medium text-gray-800 dark:text-neutral-200">
        Software Projects & Entrepreneurship
      </h2>

      <div className="group relative flex gap-x-5">
        <div className="grow pb-8 group-last:pb-0">
          <p className="text-md font-semibold text-gray-800 dark:text-neutral-200">
            Matt's Matcha - E-commerce and Retail Brand
          </p>
          <p className="mt-1 text-sm font-bold italic text-gray-600 dark:text-neutral-400">
            Co-founder/Generalist
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            Launched a direct-to-consumer brand from scratch, handling everything
            from legal setup and supply chain management to branding, packaging,
            customer engagement, and retail operations.
          </p>
          <ul className="ms-6 mt-3 list-disc space-y-1.5">
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Designed and customized a Shopify storefront, led marketing efforts
              (SEO, outreach, social media), and created all product visuals and
              content.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Operated with startup-level speed and adaptability – self-taught
              across functions, iterated quickly, and executed end-to-end with
              limited resources.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              <a
                className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
                href="https://mattsmatcha.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View our site here
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="group relative flex gap-x-5">
        <div className="grow pb-8 group-last:pb-0">
          <p className="text-md font-semibold text-gray-800 dark:text-neutral-200">
            Automated Stock Checker Bot Deployed to AWS
          </p>
          <ul className="ms-6 mt-3 list-disc space-y-1.5">
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Built a Python-based bot using Selenium that automates login flows,
              bypasses reCAPTCHA, and continuously monitors product stock –
              sending real-time Telegram alerts with product details (price,
              size, link).
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Designed with clean OOP architecture (e.g., StockChecker,
              TelegramBot classes) for modularity and extensibility; currently
              deploying to AWS (EC2 + CloudWatch) for 24/7 uptime and production
              monitoring.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              <a
                className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
                href="https://github.com/matthewtognotti/stock-checker-bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="group relative flex gap-x-5">
        <div className="grow pb-8 group-last:pb-0">
          <p className="text-md font-semibold text-gray-800 dark:text-neutral-200">
            LLM Tool-Calling Agent with Retrieval-Augmented Generation
          </p>
          <ul className="ms-6 mt-3 list-disc space-y-1.5">
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Built a GPT-4-powered agent leveraging OpenAI function calling to
              execute real-world tasks (e.g., sending emails), designed as a
              foundation for multi-tool LLM systems.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Currently extending to support Retrieval-Augmented Generation (RAG)
              and model context protocol (MCP), enabling complex task delegation
              and context-aware reasoning.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
