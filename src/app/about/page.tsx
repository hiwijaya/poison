import RedirectButton from "@/components/RedirectButton";


export default function About() {
  return (
    <div className="mt-12">
      <h1 className="font-heading text-primary text-2xl mb-6">A venomous template</h1>
      <p className="mb-4">
        <b>Poison</b> is a developer portfolio and blog template designed for creators who value clarity, performance, and character. 
        It embraces a minimal yet expressive design language—clean layouts, sharp typography, and intentional details—so your work stays front and center 
        without unnecessary distractions. Every section is crafted to feel lightweight, focused, and purposeful.
      </p>
      <p className="mb-4">
        Built with <a className="text-primary" href="https://nextjs.org" rel="noopener noreferrer" target="_blank">Next.js</a>, 
        Poison takes advantage of modern web capabilities like fast routing, server components, 
        and optimized rendering to deliver a smooth and scalable experience. Styling is powered 
        by <a className="text-primary" href="https://tailwindcss.com/" rel="noopener noreferrer" target="_blank">Tailwind CSS</a>, enabling a flexible design system 
        that's easy to customize while keeping the codebase clean and consistent. The result is a template that feels fast, modern, and developer-friendly.
      </p>
      <p className="mb-8">
        Poison isn't trying to be loud. It's precise. It's for developers who prefer elegance over excess, structure over clutter, and performance over gimmicks. 
        A venomous template—subtle at first glance, but powerful once it hits.
      </p>
      
      <RedirectButton href="https://github.com/hiwijaya/poison">START NOW</RedirectButton>

    </div>
  );
}