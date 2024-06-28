import Image from "next/image";
import { BackgroundBeams } from "../components/ui/background-beams";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    //<main className="flex min-h-screen flex-col items-center justify-between p-24">

    <div className="h-screen w-full text-white rounded-md bg-neutral-800  flex flex-col items-center antialiased ">
      <div className="flex flex-col md:flex-row py-20 md:py-32 justify-between w-full max-w-7xl  h-full ">
        <div className=" flex flex-col gap-20  h-full ">
          <h1 className="max-w-xl text-wrap">
            <span className="text-md md:text-3xl">
              I&apos;m a{" "}
              <span className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                Full Stack Developer{" "}
              </span>
              based out of Sacramento, California
            </span>
          </h1>
          <div>
            <h2 className="font-bold underline">Work Experience</h2>
            <ul className="list-disc pl-7 text-lg">
              <li className="">
                Software Engineering Intern at{" "}
                <span className="italic">
                  Employment Development Department
                </span>
              </li>
              <li className="">
                Web Developement Intern at{" "}
                <span className="italic">IRT Web&Mobile</span>
              </li>
              <li className="">
                Web Development and IT Staff at{" "}
                <span className="italic">Emanuel Calvary Chapel</span>
              </li>
            </ul>
          </div>
          <div className="text-lg">
            <h2 className="font-bold underline">Education</h2>
            <p>B.S. in Computer Science</p>
          </div>
        </div>
        <Projects />
      </div>
      {/* <BackgroundBeams /> */}
    </div>
    //</main>
  );
}
