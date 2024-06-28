import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Description } from "@headlessui/react";
import bridalensHero from "@/public/bridalens-hero.png";
import classSchedule from "@/public/class_schedule.png";
import tribeMeet from "@/public/tribe_meet.png";
import Image from "next/image";
export default function Projects() {
  const projects = [
    {
      title: "BridaLens",
      description: "QR Code digital gallery",
      image: bridalensHero,
      link: "https://bridalens.com",
    },
    {
      title: "TribeMeet",
      description:
        "A component-based web video conferencing application that integrates with ABetterLife's existing software infrastructure and resolves compatibility issues, elevates the user experience, and delivers a robust API for detailed user analytics.",
      image: tribeMeet,
    },
    {
      title: "CSUS Class Schedule",
      description:
        "In collaboration with a team of developers, designed and executed a React-based class scheduling application, empowering students to effortlessly access and view class offerings for both current and previous semesters.",
      image: classSchedule,
      link: "https://https://www.csus.edu/class-schedule/",
    },
    {
      title: "Robo-Track Videogame",
      description:
        "Developed an immersive Java-based video game utilizing Codename One Framework and adhering to the MVC pattern, where players navigate a robot in a competitive race against NPC robots to reach the final base, all while evading attacks from killer drones.",
      image: bridalensHero,
      link: "https://github.com/VictorSeverin/Robo-Track",
    },
  ];

  return (
    <ScrollArea className="h-2/3 w-1/3 rounded-md ">
      <div className="p-4">
        <h4 className="mb-4 text-xl font-bold leading-none underline text-white">
          Projects
        </h4>
        {projects.map((project, index) => (
          <div
            key={index}
            className=" p-5  border rounded-lg my-5 drop-shadow-lg flex gap-5"
          >
            <Image
              src={project?.image}
              className="rounded-md"
              width="120"
              height="80"
              alt="project showcase image "
            />
            <div className="flex flex-col">
              <span className="font-bold">{project.title}</span>
              <span className="text-sm italic">{project.description}</span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
