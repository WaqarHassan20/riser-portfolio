"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export default function Team() {
  const team = [
    {
      name: "Haider Basheer Nekokara",
      role: "CEO",
      specialization: "Leadership & Strategy",
      image: "/images/haiderbashir.jpeg",
      imagePosition: "object-center",
      bio: "Leading The Risers Consultancy with vision and dedication to help students achieve their international education dreams.",
    },
    {
      name: "Muhammad Shoaib Rafique",
      role: "Head Consultant",
      specialization: "International Admissions",
      image: "/images/shoaibrafique.jpeg",
      imagePosition: "object-center",
      bio: "Expert consultant specializing in university admissions and student guidance for global education opportunities.",
    },
    {
      name: "Muhammad Haris Kurar",
      role: "International Representative",
      specialization: "Global University Relations",
      image: "/images/hariskurar.jpeg",
      imagePosition: "object-center",
      bio: "Building bridges with international universities and creating opportunities for students worldwide.",
    },
    {
      name: "Rizwan Saleem",
      role: "Senior Consultant",
      specialization: "Student Counseling",
      image: "/images/rizwansaleem.jpeg",
      bio: "Dedicated to providing personalized guidance and support to help students make informed decisions.",
    },
    {
      name: "Malik Ismail Sobhi",
      role: "Branch Manager - Sargodha",
      specialization: "Regional Operations",
      image: "/images/ismailanwar.jpeg",
      bio: "Managing operations and student services at our Sargodha branch with excellence and commitment.",
    },
    {
      name: "Muhammad Hasnat Sial",
      role: "Branch Head - Sargodha",
      specialization: "Branch Leadership",
      image: "/images/hasnatsial.jpeg",
      bio: "Leading the Sargodha team to deliver exceptional consulting services to aspiring international students.",
    },
    {
      name: "Rehan Aslam",
      role: "Branch Manager - Faisalabad",
      specialization: "Student Services",
      image: "/images/rehanaslam.jpeg",
      bio: "Overseeing operations at Faisalabad branch and ensuring quality service delivery to all students.",
    },
    {
      name: "Umm-e-Rubab",
      role: "Travel Guide",
      specialization: "Travel & Documentation",
      image: "/images/female.png",
      imageScale: "scale-100",
      bio: "Providing expert guidance on travel arrangements and documentation for students heading abroad.",
    },
    {
      name: "Sheeza Farooq",
      role: "Digital Media Manager",
      specialization: "Marketing & Communications",
      image: "/images/female.png",
      imageScale: "scale-100",
      bio: "Managing digital presence and creating engaging content to connect with students worldwide.",
    },
    {
      name: "Noor Fatima",
      role: "Head of Marketing",
      specialization: "Marketing Strategy",
      image: "/images/female.png",
      imageScale: "scale-100",
      bio: "Leading marketing initiatives to reach and inspire students pursuing international education.",
    },
    {
      name: "Kinza Falak",
      role: "Branch Manager - Faisalabad",
      specialization: "Branch Operations",
      image: "/images/female.png",
      imageScale: "scale-100",
      bio: "Managing Faisalabad branch operations and delivering exceptional service to aspiring students.",
    },
  ];

  return (
    <section
      id="team"
      className="py-12 md:py-24 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 bg-linear-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#084B73]/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#081F30]/5 rounded-full blur-3xl z-0"></div>

      <div className="mx-auto relative z-10">
        <motion.div
          className="text-center mb-10 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#084B73] mb-4">
            Meet Our Expert Team
          </h2>
          <div className="w-24 h-1 bg-[#084B73] mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our passionate team of consultants is dedicated to making your study
            abroad dreams a reality
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariant}
            >
              {/* Card */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
              >
                {/* Image Circle Container */}
                <div className="relative pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6 bg-linear-to-br from-[#084B73]/5 to-[#081F30]/5">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto relative">
                    {/* Circular Image */}
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl relative bg-linear-to-br from-[#084B73] to-[#081F30]">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className={`object-cover ${
                            member.imageScale || "scale-100"
                          } ${member.imagePosition || "object-center"}`}
                          sizes="160px"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      )}
                    </div>

                    {/* Decorative Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#084B73]/20 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8 text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#084B73] font-semibold text-lg mb-2">
                    {member.role}
                  </p>
                  <div className="inline-block px-4 py-1 bg-[#084B73]/10 rounded-full">
                    <p className="text-sm text-[#084B73] font-medium">
                      {member.specialization}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
