import React from 'react';
import './Timeline.css'

const Timeline = ({details}) => {
  return (
    
    <ol className="items-center md:flex">
        {details.map((detail, index) => (
            <li key={index} className="relative mb-6 md:mb-0">
                <div className="flex items-center">
                    <div className="shadow-custom z-10 flex items-center justify-center w-6 h-6 bg-zinc-900 rounded-full ring-0 ring-white dark:bg-zink-900 md:ring-8 dark:ring-gray-900 shrink-0">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-zinc-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="hidden md:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className={`mt-3 ${index == details.length-1 ? '' : 'md:pe-36'}`}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{detail.company} - {detail.location}</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{detail.dates}</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">{detail.duration}</p>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">{detail.designation}</p>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">{detail.role}</p>
                </div>
            </li>
        ))}  
    </ol>
  );
};

export default Timeline;