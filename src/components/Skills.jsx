const skills = [
  {
    category: 'Languages',
    skillList: 'JavaScript, Java, C, C++, HTML, CSS'
  },
  {
    category: 'Frameworks/Runtime(s)',
    skillList: 'ReactJS, NodeJS, MongoDB, Sass, Express, Tailwind, Bootstrap'
  },
  {
    category: 'Databases',
    skillList: 'MongoDB'
  },
  {
    category: 'Tools',
    skillList: 'Apostrophe CMS, Docker, Kubernetes, WebPack, Kafka, GitHub, Gitlab'
  },
  {
    category: 'Security',
    skillList: 'OWASP ZAP, SonarQube, Penetration Testing'
  }
];


const Skills = () => {
    return <div id="skills" className="min-h-screen relative isolate overflow-hidden bg-gradient-to-r from-gray-950 to-zinc-800 py-24 sm:py-32 flex items-center">
    <div
      className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true"
    ></div>
    <div className="flex flex-col items-center mx-auto px-6 lg:px-8">
      <div className="mx-auto lg:mx-0">
        <div className="flex items-center gap-x-16 md:items-start gap-y-10 gap-x-6 flex-col md:flex-row text-center md:text-left">
          <div className="ml-4 md:ml-0 flex flex-col gap-y-8">
            <h1 className="text-white text-center text-5xl font-bold leading-[48px] tracking-widest">
              Skills
            </h1>
            <div className="w-full">
              <div className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
                          bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
                  <div className="top mb-2 flex">
                      <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                      <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                      <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  {skills.map((skillCategory, index) => (
                    <div className={`${index == 0 ? 'mt-4' : 'mt-1'} flex flex-col sm:flex-row`} key={index}>
                        <span className="text-green-400 text-left">{skillCategory.category}:~$</span>
                        <p className="flex-1 typing items-center pl-2 text-left">
                          {skillCategory.skillList}
                            <br />
                        </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Skills