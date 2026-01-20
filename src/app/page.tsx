import RedirectButton from "@/components/RedirectButton";

export default function Home() {
  return (
    <div className="mt-12">
      <h1 className="font-heading text-primary text-xl mb-6">A venomous template</h1>
      <p className="mb-4">
        Crafted for those who write code with intent. Clean, fast, and unapologetically sharp, 
        it blends minimal design with bold personality—letting your work speak louder than the noise. 
        Built for developers who don't just build products, but leave a lasting bite.
      </p>
      <RedirectButton href="https://github.com/hiwijaya/poison">
        START NOW
      </RedirectButton>
    </div>
  );
}
