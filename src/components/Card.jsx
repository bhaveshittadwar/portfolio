import React from 'react';

const Card = ({ title, description, projectImage, links = [] }) => {
  return (
    <div className="w-full max-w-sm bg-[#1f2937] border border-gray-700 rounded-xl shadow-md p-6 flex flex-col justify-between transition-transform transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(93,188,252,0.25)] duration-300 ease-in-out group">
      {projectImage && (
        <a href={links[0]?.url || '#'} target="_blank" rel="noopener noreferrer">
          <img className="rounded-t-lg mb-4" src={projectImage} alt={title} />
        </a>
      )}
      <div className="flex flex-col gap-3 flex-grow">
        <h5 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h5>
        <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {links.map(({ label, url }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-gray-600 px-3 py-1.5 text-sm text-gray-200 transition-all duration-300 hover:bg-white hover:text-[#1f2937] hover:shadow-md"
          >
            {label}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Card;
