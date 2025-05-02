"use client";

import { useState } from "react";
import Image from "next/image";

// Import team images
import TeamMember3 from "@/public/images/badr.png";
import TeamMember2 from "@/public/images/zack.png";
import TeamMember1 from "@/public/images/pere.png";
import TeamMember5 from "@/public/images/khalii.png";

export default function Team() {
  const [focusedMember, setFocusedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Molay Ali Gadi",
      role: "Chief Mining Operations Officer",
      expertise: "Lead and Zinc Extraction",
      bio: "With over 25 years of experience in Moroccan mining operations, Moaly Ali leads our mineral extraction strategies with unparalleled expertise in Morocco's geological formations.",
      image: TeamMember1,
    },
    {
      id: 2,
      name: "Si Mohamed Elgaoui",
      role: "Moroccan Mining Exploration raw materials",
      expertise: "Geological Surveying & New Site Development",
      bio: "Mohamed's deep knowledge of Morocco's geological makeup has led to the discovery of several new high-yield mining locations across Morocco's mineral-rich regions.",
      image: TeamMember5,
    },
    {
      id: 4,
      name: "Zakariae Hamedoun",
      role: "Head of Sustainable Mining",
      expertise: "Environmental Protection & Community Relations",
      bio: "Zakaria ensures our Moroccan mining operations maintain the highest environmental standards while building positive relationships with local Moroccan communities.",
      image: TeamMember2,
    },

    {
      id: 3,
      name: "Badr Gadi",
      role: "Mineral Processing Director",
      expertise: "Copper and Iron Processing",
      bio: "Badr's innovative approaches to mineral processing have revolutionized our Moroccan facilities, maximizing yield while minimizing environmental impact.",
      image: TeamMember3,
    },
    // {
    //   id: 4,
    //   name: "Leila Berrada",
    //   role: "Quality Control Manager",
    //   expertise: "Mineral Purity Standards",
    //   bio: "Leila maintains rigorous quality assurance across all Moroccan minerals we extract, ensuring our products exceed international standards for purity and consistency.",
    //   // image: TeamMember4,
    // },

    // {
    //   id: 6,
    //   name: "Nadia Ouazzani",
    //   role: "International Trade Director",
    //   expertise: "Global Distribution of Moroccan Minerals",
    //   bio: "Nadia has established strong international partnerships that bring Morocco's premium minerals to markets worldwide, ensuring reliable supply chains and customer satisfaction.",
    //   // image: TeamMember6,
    // },
  ];

  return (
    <section className="relative border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">
              Morocco's Mining Experts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our team combines generations of Moroccan mining knowledge with
              modern expertise to deliver exceptional quality minerals from
              Morocco's rich geological deposits.
            </p>
          </div>

          {/* Team members */}
          <div className="max-w-sm sm:max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-16 items-start">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setFocusedMember(member.id)}
                onMouseLeave={() => setFocusedMember(null)}
                data-aos="fade-up"
              >
                <div className="relative rounded-full overflow-hidden mb-4 w-40 h-40">
                  <Image
                    className={`object-cover transition duration-500 ease-in-out ${
                      focusedMember === member.id ? "scale-110" : "scale-100"
                    }`}
                    src={member.image}
                    width={160}
                    height={160}
                    alt={`${member.name} - ${member.role} at The 3 Rocks Moroccan Mining Company`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-500 to-transparent opacity-20"></div>
                </div>
                <div
                  className={`text-center ${
                    focusedMember === member.id
                      ? "scale-105 transition duration-300"
                      : ""
                  }`}
                >
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <div className="text-teal-500 font-medium mb-2">
                    {member.role}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    {member.expertise}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Team values */}
          {/* <div className="max-w-3xl mx-auto text-center pt-12 md:pt-20">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-teal-600 bg-teal-200 rounded-full mb-4">
              Moroccan Mining Values
            </div>
            <h3 className="h3 font-red-hat-display mb-4">
              Committed to Excellence in Morocco's Mining Industry
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our team is dedicated to sustainable mining practices that honor
              Morocco's rich mineral heritage while creating value for
              customers, communities, and the environment. We combine
              traditional Moroccan mining knowledge with cutting-edge technology
              to deliver superior quality minerals from Morocco's legendary
              mining regions.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
