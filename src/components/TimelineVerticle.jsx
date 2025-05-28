import './TimelineVerticle.css'

const TimelineVerticle = ({ details }) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">   
      {details.map((detail, index) => (
        <li className="mb-10 ms-4" key={index}>
          <div
            className={[
              'absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white',
              index === 0
                ? 'dark:bg-white dark:border-white shadow-custom pulse-dot'
                : 'dark:bg-gray-700 dark:border-gray-900'
            ].join(' ')}
          />
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {detail.startDate} to {detail.endDate}
          </time>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            <a
              href={detail.collegeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-inherit cursor-pointer transition-colors duration-200 hover:text-sky-400"
            >
              {detail.college}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </h3>
          <p className="mb-0.5 text-base font-normal text-gray-500 dark:text-gray-400">
            {detail.fullDegreeName}, <b>GPA</b>: {detail.gpa}
          </p>
          <p className="mb-0.5 text-base font-normal text-gray-500 dark:text-gray-400">
            <b>Topics</b>: {detail.subjects}
          </p>
          <p className="mb-0.5 text-base font-normal text-gray-500 dark:text-gray-400">
            <b>Leadership</b>: {detail.responsibilities}
          </p>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {detail.city}, {detail.state}, {detail.country}
          </p>
        </li>
      ))}               
    </ol>
  )
}

export default TimelineVerticle