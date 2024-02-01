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
            <h1 className="text-white max-w-[550px] text-5xl font-bold leading-[48px] tracking-widest">
              Skills
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Skills