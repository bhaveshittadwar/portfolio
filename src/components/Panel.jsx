import photo from '../assets/panelPic.jpeg'

const links = [
    // { name: 'Resume', href: '#' },
    { name: 'Linked In', href: 'https://www.linkedin.com/in/bhavesh-ittadwar/' },
    { name: 'Github', href: 'https://github.com/bhaveshittadwar' },
    // { name: 'Projects', href: '#' },
]
  
export default function Panel() {
    return (
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 to-gray-600 py-24 sm:py-32">
        
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
        
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center gap-y-10 gap-x-6 flex-col sm:flex-row">
            <div className="flex-shrink-0">
                <img
                    style={{ objectPosition: '0% 20%' }}
                    className="h-48 w-48 object-cover rounded-full border-2 border-solid border-slate-300"
                    src={photo}
                    alt="Panel Pic"
                />
            </div>
            <div className="ml-4">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-8xl">
                Hi<span className="font-normal sm:text-6xl">, I'm Bhavesh Ittadwar!</span>
                </h2>
            </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A front-end leaning fullstack developer.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href} target="_blank">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    )
}
  