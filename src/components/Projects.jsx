import Card from './Card.jsx'
const projects = [
  {
    title: 'Serverless Blogging',
    description: 'Built a blogging platform with Cloudflare Workers, Prisma, and React',
    projectImage: '', 
    link: 'https://github.com/bhaveshittadwar/blog-app',
  },
  {
    title: 'Live Streaming Platform',
    description: 'Architected a global video game streaming platform, leveraging cloud technologies and incorporating multi-stage designs. Conducted experiments using Locust and Minikube to assess pod auto-scaling.',
    projectImage: '', 
    link: 'https://github.com/bhaveshittadwar/live-stream-kubernetes/blob/main/report.pdf', 
  },
  {
    title: 'BurnOut',
    description: 'Instilled UI responsiveness in a calorie tracker, implemented two-factor authentication, captcha verification, and Dockerized the application.',
    projectImage: '',
    link: 'https://github.com/anuj672/calorieApp_server',
  },
  {
    title: 'Game of Life: John Convoy',
    description: 'Playing around with canvas and implementing a zero player game to understand turing completelness.',
    projectImage: '',
    link: 'https://game-of-life-ktce.onrender.com/'
  }
];


const Projects = () => {
    return <div id="projects" className="min-h-screen relative isolate overflow-hidden bg-gradient-to-r from-gray-950 to-zinc-800 py-24 sm:py-32 flex items-center">
    <div className="flex flex-col items-center mx-auto px-6 lg:px-8">
      <div className="mx-auto lg:mx-0">
        <div className="flex items-center gap-x-16 md:items-start gap-y-10 gap-x-6 flex-col md:flex-row text-center md:text-left">
          <div className="ml-4 md:ml-0 flex flex-col gap-y-8">
            <h1 className="justify-self-center text-white text-5xl font-bold leading-[48px] tracking-widest text-center">
              Projects
            </h1>

            <div className="flex flex-col md:flex-row gap-8">
              {projects.map(({title, description, projectImage, link}, index) => (
                <Card key={index} title={title} description={description} projectImage={projectImage} link={link} />
              ))}
            </div>
              
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Projects