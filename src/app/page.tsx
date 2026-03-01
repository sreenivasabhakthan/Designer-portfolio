import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export default function Home() {
  let realPosters: string[] = [];
  try {
    const postersDir = path.join(process.cwd(), 'public', 'posters');
    if (fs.existsSync(postersDir)) {
      realPosters = fs.readdirSync(postersDir).filter(file => /\.(png|jpe?g|webp|gif)$/i.test(file));
    }
  } catch (e) {
    console.error("Error reading posters directory:", e);
  }

  return (
    <>
      <nav className="fixed w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="h-10 w-10 bg-primary rounded flex items-center justify-center text-white font-display text-xl font-bold">B</div>
              <div className="hidden md:block">
                <span className="font-display text-2xl font-bold text-gray-900 dark:text-white tracking-wider block leading-none">Bhakthan</span>
                <span className="text-[0.6rem] font-bold text-primary tracking-[0.2em] uppercase block">Designs</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">WHO I AM</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">SERVICES</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#portfolio">PORTFOLIO</a>
              <a className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded hover:bg-primary-hover transition-transform transform hover:scale-105 shadow-lg shadow-primary/30" href="#contact">
                GET IN TOUCH
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button className="text-gray-800 dark:text-white hover:text-primary focus:outline-none">
                <span className="material-icons-round text-3xl">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-dark text-white pt-20">
        <div className="absolute inset-0 z-0">
          <img alt="Dark textured abstract background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmG6uupE3VA6-XnlWlUzYoBYgj05YqgH9CXBnXUwm0Zlm93bgIL3iFVW0jVSWcggRj9q3qGd7SzO2EDsr1ehMVcdMj1cx6vE1QnPuGm28b-94558uFDWWD7dgYXXEhKkK-7dzk9XMMfqUfdYsvEDxHa5sl98k1NrZ0rD9QxrDzfe6OqAAlKaOmoIDOmSU3akJLimwAJL3pVoaAGos9ManK2vII6K60BbsF1ZdClRojT_xPuA4TJd9jMDUBTMlQWhz0PvjCay_Lnr-2" />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-6">
            <svg className="w-24 h-24 text-primary fill-current" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 C30 10 15 25 15 45 C15 65 30 80 50 80 C70 80 85 65 85 45 C85 25 70 10 50 10 Z M50 70 C35 70 25 60 25 45 C25 30 35 20 50 20 C65 20 75 30 75 45 C75 60 65 70 50 70 Z"></path>
              <circle cx="50" cy="45" r="10"></circle>
            </svg>
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-2 tracking-tight">
            Bhakthan
          </h1>
          <h2 className="text-xl md:text-3xl font-bold text-primary tracking-[0.3em] uppercase mb-8">
            Designs
          </h2>
          <div className="flex items-center justify-center space-x-4 text-xs tracking-widest text-gray-400 mb-12">
            <span>KL</span>
            <span className="w-1 h-1 bg-primary rounded-full"></span>
            <span>IND</span>
            <span className="w-1 h-1 bg-primary rounded-full"></span>
            <span>ESTD 2025</span>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Bridging ancient wisdom with modern design. We craft meaningful identities that echo through generations.
          </p>
          <div className="mt-12">
            <a className="text-white hover:text-primary transition-colors" href="#about">
              <span className="material-icons-round text-4xl">keyboard_arrow_down</span>
            </a>
          </div>
        </div>
      </header>

      <section className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden" id="about">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">who am i?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-3 border-4 border-white dark:border-gray-800">
                <img alt="Abstract artistic statue or representation" className="w-full h-full object-cover" src="sreenivas.png" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white shadow-xl z-20 hidden md:flex">
                <span className="material-icons-round text-5xl">brush</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
              <p>
                I work in contrasts — light and shadow, silence and intensity. Each poster begins as a thought and evolves into a visual moment shaped by space, rhythm, and restraint. This archive is not just a collection of designs, but a reflection of exploration — where ideas are distilled into form and emotion is translated into composition.
              </p>
              <div className="pt-6 border-l-4 border-primary pl-6 italic text-gray-800 dark:text-gray-100 font-medium">
                "Distilling ideas into form, and translating emotion into composition."
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-dark border-y border-white/5 relative overflow-hidden" id="services">
        {/* Subtle background glow for dark aesthetic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Premium Offerings</span>
            <h2 className="font-display text-4xl md:text-6xl text-white mt-2">My Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                desc: "Building responsive, aesthetic and performance-focused websites using modern web technologies."
              },
              {
                title: "Brand Identity",
                desc: "Creating clean, minimal and meaningful visual identities for personal and student projects."
              },
              {
                title: "Poster Designing",
                desc: "Designing impactful, modern posters for tech events, communities and digital campaigns."
              },
              {
                title: "UI & Visual Design",
                desc: "Crafting elegant interfaces and digital visuals using Figma and Canva."
              },
              {
                title: "Teaching Design",
                desc: "Helping beginners understand design fundamentals, layout structure and visual storytelling."
              },
              {
                title: "Tech Community & Leadership",
                desc: "Organizing impactful tech events and leading student-driven innovation initiatives."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-10 bg-white/[0.02] backdrop-blur-md border border-white/10 shadow-lg hover:shadow-[0_0_40px_rgba(255,116,38,0.15)] hover:border-primary/40 hover:bg-gradient-to-b hover:from-white/10 hover:to-transparent transition-all duration-400 ease-in-out cursor-default flex flex-col items-center justify-center text-center min-h-[280px]"
              >
                {/* Text Content Wrapper for Hover Translation */}
                <div className="transform transition-transform duration-400 ease-in-out group-hover:-translate-y-2 flex flex-col items-center">
                  <h3 className="text-white font-display text-2xl font-bold mb-4 tracking-wide relative">
                    {service.title}
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-400 group-hover:w-12"></span>
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base px-2 mt-2">
                    {service.desc}
                  </p>
                </div>
                {/* Subtle bottom glowing edge line on hover */}
                <div className="absolute inset-x-4 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">The Archive</span>
            <h2 className="font-display text-4xl md:text-6xl text-gray-900 dark:text-white mt-2">50+ Poster Designs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mt-6"></div>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {realPosters.length > 0 ? (
              realPosters.map((filename, i) => (
                <div key={i} className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 break-inside-avoid mb-4 inline-block w-full">
                  <span className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-1 rounded">No. {(i + 1).toString().padStart(3, '0')}</span>
                  <img
                    src={`/posters/${filename}`}
                    alt={`Poster Design ${i + 1}`}
                    className="w-full h-auto block transform group-hover:scale-105 transition-all duration-700 hover:mix-blend-normal"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <p className="font-bold text-white text-sm">{filename.replace(/\.[^/.]+$/, "")}</p>
                    <p className="text-xs text-primary font-mono mt-1">Archive Issue</p>
                  </div>
                </div>
              ))
            ) : (
              // Fallback placeholders when no posters are present
              Array.from({ length: 52 }, (_, i) => {
                const heightMultiplier = [1.2, 1.5, 1.3, 1.6, 1.1, 1.4][i % 6];
                const width = 400;
                const height = Math.floor(width * heightMultiplier);
                return (
                  <div key={i} className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 break-inside-avoid mb-4 inline-block w-full">
                    <span className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-1 rounded">No. {(i + 1).toString().padStart(3, '0')}</span>
                    <img
                      src={`https://picsum.photos/seed/bhakthandesigns${i}/${width}/${height}?grayscale`}
                      alt={`Poster Placeholder ${i + 1}`}
                      className="w-full h-auto block transform group-hover:scale-105 group-hover:contrast-125 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <p className="font-bold text-white text-sm">Add Posters Setup!</p>
                      <p className="text-xs text-primary font-mono mt-1">Experimental Canvas</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="mt-16 flex justify-center">
            <button className="px-8 py-3 bg-transparent border-2 border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors duration-300 rounded">
              Load More Archives
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="flex items-center space-x-8 animate-marquee w-max">
          <div className="flex items-center space-x-4 opacity-50 grayscale hover:grayscale-[0] transition-all duration-300">
            <span className="text-4xl font-display font-bold text-gray-300 dark:text-gray-700">BRANDING</span>
            <span className="material-icons-round text-primary">star</span>
          </div>
          <div className="flex items-center space-x-4 opacity-50 grayscale hover:grayscale-[0] transition-all duration-300">
            <span className="text-4xl font-display font-bold text-gray-300 dark:text-gray-700">DESIGN</span>
            <span className="material-icons-round text-primary">star</span>
          </div>
          <div className="flex items-center space-x-4 opacity-50 grayscale hover:grayscale-[0] transition-all duration-300">
            <span className="text-4xl font-display font-bold text-gray-300 dark:text-gray-700">STRATEGY</span>
            <span className="material-icons-round text-primary">star</span>
          </div>
          <div className="flex items-center space-x-4 opacity-50 grayscale hover:grayscale-[0] transition-all duration-300">
            <span className="text-4xl font-display font-bold text-gray-300 dark:text-gray-700">PACKAGING</span>
            <span className="material-icons-round text-primary">star</span>
          </div>
          <div className="flex items-center space-x-4 opacity-50 grayscale hover:grayscale-[0] transition-all duration-300">
            <span className="text-4xl font-display font-bold text-gray-300 dark:text-gray-700">MARKETING</span>
            <span className="material-icons-round text-primary">star</span>
          </div>
          <div className="flex items-center space-x-4 opacity-50 grayscale hover:grayscale-[0] transition-all duration-300">
            <span className="text-4xl font-display font-bold text-gray-300 dark:text-gray-700">BRANDING</span>
            <span className="material-icons-round text-primary">star</span>
          </div>
          <div className="flex items-center space-x-4 opacity-50 grayscale hover:grayscale-[0] transition-all duration-300">
            <span className="text-4xl font-display font-bold text-gray-300 dark:text-gray-700">DESIGN</span>
            <span className="material-icons-round text-primary">star</span>
          </div>
        </div>
      </section>

      <footer className="bg-accent dark:bg-[#151515] pt-24 pb-12 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-primary mb-6">get in touch</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Ready to make your mark? Let's build something legendary together.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 max-w-2xl mx-auto">
            <a
              className="flex items-center justify-center space-x-3 py-4 bg-white dark:bg-gray-800 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm border border-transparent hover:border-white/20"
              href="https://www.linkedin.com/in/sreenivasabhakthan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[#0077B5] group-hover:text-white transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </span>
              <span className="font-bold text-sm">sreenivasabhakthan</span>
            </a>
            <a
              className="flex items-center justify-center space-x-3 py-4 bg-white dark:bg-gray-800 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm border border-transparent hover:border-white/20"
              href="mailto:bhakthanvvasudeva@gmail.com"
            >
              <span className="text-[#EA4335] group-hover:text-white transition-colors material-icons-round text-2xl">
                mail
              </span>
              <span className="font-bold text-sm">bhakthanvvasudeva@gmail.com</span>
            </a>
          </div>
          <div className="border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-6 w-6 bg-primary rounded-sm flex items-center justify-center text-white font-display text-xs">B</div>
              <span>© 2024 Bhakthan Designs. All Rights Reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <div className="border border-gray-400 dark:border-gray-600 px-4 py-1 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-default">
              END
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
