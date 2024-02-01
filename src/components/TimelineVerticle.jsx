import './TimelineVerticle.css'

const TimelineVerticle = ({details}) => {
    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700">   
            {details.map((detail, index) => (
                <li className="mb-10 ms-4" key={index}>
                    <div className={`absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white ${index == 0 ? 'dark:bg-white dark:border-white shadow-custom' : 'dark:bg-gray-700 dark:border-gray-900' }`}></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{detail.startDate} to {detail.endDate}</time>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{detail.college}</h3>
                    <p className="mb-0.5 text-base font-normal text-gray-500 dark:text-gray-400">{detail.fullDegreeName}, <b>GPA</b>: {detail.gpa}</p>
                    <p className="mb-0.5 text-base font-normal text-gray-500 dark:text-gray-400"><b>Topics</b>: {detail.subjects}</p>
                    <p className="mb-0.5 text-base font-normal text-gray-500 dark:text-gray-400"><b>Leadership</b>: {detail.responsibilities}</p>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{detail.city}, {detail.state}, {detail.country}</p>
                    {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg></a> */}
                </li>
            ))}               
        </ol>
    );
};

export default TimelineVerticle;