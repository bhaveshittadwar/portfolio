import Timeline from "./Timeline"

const details = [
  {
    company: 'Michelin',
    designation: 'Digital Solutions Developer I',
    role: 'Specialist, Frontend Developer',
    duration: '2.7 years',
    location: 'Pune, India',
    dates: 'December 2020 - July 2023'
  },
  {
    company: 'Michelin',
    designation: 'Intern',
    role: 'Specialist, Frontend Developer',
    duration: '5 Months',
    location: 'Pune, India',
    dates: 'January 2020 - May 2020'
  },
  {
    company: 'BlueCoin IoT Solutions',
    designation: 'Intern',
    role: 'Web Security and Vulnerabilitiees',
    duration: '2 Months',
    location: 'Pune, India',
    dates: 'June 2019 - July 2019'
  }
]

const Experience = () => {
    return <div id="experience" className="min-h-screen relative isolate overflow-hidden bg-gradient-to-r from-gray-950 to-zinc-800 py-24 sm:py-32  flex justify-center items-center">
    <div className="flex flex-col items-center mx-auto">
      <div className="mx-auto lg:mx-0">
        <div className="flex items-center justify-center gap-x-16 md:items-start gap-y-10 gap-x-6 flex-col md:flex-row  md:text-left">
          <div className="ml-4 md:ml-0 flex items-center flex-col gap-y-16">
            <h1 className="text-white text-5xl font-bold leading-[48px] tracking-widest">
              Experience
            </h1>
            <Timeline details={details}/>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Experience