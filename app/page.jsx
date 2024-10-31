import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello, Im <br /> <span className="text-accent">Dika Arnanda Putra</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I am skilled in a wide variety of programming languages, and excel in interactive and responsive web building experience.
            </p>
          </div>
          {/* photo */}
          <div>fotooo</div>
        </div>
      </div>
    </section>
  )
}

export default Home;