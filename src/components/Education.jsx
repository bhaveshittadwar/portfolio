import { motion } from 'framer-motion';
import TimelineVerticle from './TimelineVerticle';

const details = [
  {
    college: 'North Carolina State University',
    collegeUrl: 'https://www.ncsu.edu/',
    city: 'Raleigh',
    state: 'North Carolina',
    country: 'United States',
    degree: 'Masters',
    course: 'Computer Science',
    fullDegreeName: 'Master of Computer Science',
    startDate: 'August 2023',
    endDate: 'May 2025',
    subjects:
      'Software Security, Human Computer Interaction, Neural Networks, Cloud Computing Architecture, Design and Analysis of Algorithms, Software Engineering',
    gpa: '4/4',
    responsibilities: 'Vice President: User Interface and User Experience Tech Club',
  },
  {
    college: 'Vishwakarma Institute of Technology',
    collegeUrl: 'https://www.vit.edu/',
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    degree: 'Bachelors',
    course: 'Computer Engineering',
    fullDegreeName: 'Bachelors in Technology',
    startDate: 'August 2016',
    endDate: 'October 2020',
    subjects:
      'Web Technologies, Computer Networks, Operating Systems, Advanced Data Structures, Object Oriented Programming, Machine Learning, Compiler Design etc',
    gpa: '8.84/10',
    responsibilities: 'Volunteer Tutor for Atmabodh, a Digital Literacy Initiative',
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Education = () => {
  return (
    <motion.div
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="bg-gradient-to-r from-gray-950 to-zinc-800 min-h-[calc(100vh-4.5rem)] relative isolate overflow-hidden py-24 sm:py-32 sm:px-16 flex items-center"
    >
      <div className="flex flex-col items-center mx-auto px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <div className="flex items-center gap-x-16 md:items-start gap-y-10 gap-x-6 flex-col md:flex-row md:text-left">
            <div className="ml-4 md:ml-0 flex flex-col gap-y-8">
              <motion.h1
                variants={containerVariants}
                className="text-white text-center text-5xl font-bold leading-[48px] tracking-widest"
              >
                Education
              </motion.h1>
              <TimelineVerticle details={details} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;