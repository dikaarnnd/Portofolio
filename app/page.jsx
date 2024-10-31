import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="flex flex-col justify-center items-center xl:place-items-start text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello, Im <br /> <span className="text-accent">Dika Arnanda Putra</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I am skilled in a wide variety of programming languages, and excel in interactive and responsive web building experience.
            </p>
            {/* Social media */}
            <div className="mb-8 xl:mb-0">
              <Social containerStyles={"flex gap-6"} iconStyles={"flex justify-center items-center h-9 w-9 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"} />
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;