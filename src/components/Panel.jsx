import photo from '../assets/panelPic.jpeg';

const links = [
  { name: 'Resume', href: '#' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bhavesh-ittadwar/' },
  { name: 'Github', href: 'https://github.com/bhaveshittadwar' },
  { name: 'Projects', href: '#' },
];

export default function Panel() {
  return (
    <div className="min-h-screen relative isolate overflow-hidden bg-black py-24 sm:py-32 flex items-center -mt-20 relative z-0">
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      ></div>
      <div className="flex flex-col items-center mx-auto px-6 lg:px-8 overflow-y-auto">
        <div className="mx-auto lg:mx-0">
          <div className="flex items-center gap-x-16 md:items-start gap-y-10 gap-x-6 flex-col md:flex-row text-center md:text-left">
            <div className="flex-shrink-0">
              <img
                style={{ objectPosition: '0% 20%' }}
                className="h-32 w-32 sm:h-48 sm:w-48 object-cover rounded-full border-2 border-solid border-slate-300"
                src={photo}
                alt="Panel Pic"
              />
            </div>
            <div className="ml-4 md:ml-0 flex flex-col gap-y-8">
              <h2 className="w-full text-sky-400 text-2xl font-medium leading-normal tracking-wide">
                Hi, I'm Bhavesh Ittadwar!
              </h2>
              <p className="text-white max-w-[550px] text-5xl font-bold leading-[48px] tracking-widest">
                A front-end leaning fullstack developer.
              </p>
              <p className="max-w-[550px] text-white text-xl font-medium font-['Inter'] leading-tight tracking-wide">I'm keen about the web from a packet to pixel level.</p>
              <div className="grid grid-cols-1 mt-8 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className='flex justify-center gap-2'>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
