import { motion } from 'framer-motion';
import Timeline from './Timeline';

const details = [
  {
    company: 'Michelin',
    role: 'Specialist - Software Engineer',
    duration: '2.7 years',
    dates: 'December 2020 - July 2023',
  },
  {
    company: 'Michelin',
    designation: 'Software Engineer Intern',
    duration: '5 Months',
    dates: 'January 2020 - May 2020',
  },
  {
    company: 'BlueCoin IoT Solutions',
    role: 'Software Engineer Intern',
    duration: '2 Months',
    dates: 'June 2019 - July 2019',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-[calc(100vh-4.5rem)] relative isolate overflow-hidden bg-gradient-to-r from-gray-950 to-zinc-800 py-24 sm:py-32 flex items-center justify-center"
    >
      <motion.div
        className="flex flex-col items-center px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-white text-5xl font-bold tracking-wide mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h1>
        <Timeline details={details} />
      </motion.div>
    </section>
  );
};

export default Experience;