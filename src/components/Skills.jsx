import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Languages',
    skillList: 'JavaScript, TypeScript, Java, HTML, CSS',
  },
  {
    category: 'Development Tools',
    skillList: 'React, Next.js, Svelte, Node.js, Tailwind, Figma, Storybook, GraphQL, Apostrophe CMS',
  },
  {
    category: 'Infrastructure Tools',
    skillList: 'Docker, Kubernetes, Kafka, GitHub, Azure, AWS, MongoDB, PostgreSQL',
  },
  {
    category: 'Methodologies',
    skillList: 'Agile, OOP, Micro-frontends, Atomic Design',
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <motion.div
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="min-h-screen relative isolate overflow-hidden bg-gradient-to-r from-gray-950 to-zinc-800 py-24 sm:py-32 flex items-center"
    >
      <div className="flex flex-col items-center mx-auto px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <motion.h1
            variants={itemVariants}
            className="text-white text-center text-5xl font-bold leading-[48px] tracking-widest mb-10"
          >
            Skills
          </motion.h1>
          <motion.div variants={itemVariants} className="w-full">
            <div className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased bg-gray-800 pb-6 rounded-lg leading-normal overflow-hidden">
              <div className="top mb-2 flex">
                <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
              {skills.map((skillCategory, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${index === 0 ? 'mt-4' : 'mt-1'} flex flex-col sm:flex-row`}
                >
                  <span className="text-green-400 text-left">{skillCategory.category}:~$</span>
                  <p className="flex-1 pl-2 text-left">{skillCategory.skillList}<br /></p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
