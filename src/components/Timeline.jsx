// src/components/Timeline.jsx
import { motion } from 'framer-motion'

export default function Timeline({ details }) {
  return (
    <ol className="items-center md:flex">
      {details.map((detail, idx) => (
        <li
          key={idx}
          className="relative mb-6 md:mb-0"
        >
          <div className="flex items-center">
            {/* Dot: keep your existing look, add blur‑glow on hover */}
            <motion.div
              className="z-10 flex items-center justify-center w-6 h-6 bg-zinc-900 rounded-full border border-white shrink-0"
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-zinc-200"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </motion.div>

            {/* Connector (desktop only) */}
            <div className="hidden md:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
          </div>

          <div className={`mt-3 ${idx === details.length - 1 ? '' : 'md:pr-8 lg:pr-40'}`}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {detail.company}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {detail.dates}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {detail.duration}
            </p>
            {detail.designation && (
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {detail.designation}
              </p>
            )}
            {detail.role && (
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {detail.role}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}