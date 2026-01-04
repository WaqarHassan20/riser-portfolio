"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    ringText: "EDUCATION PARTNER",
    image: "/images/britishcouncil.png",
  },
  {
    ringText: "CERTIFIED AGENCY",
    image: "/images/certified.png",
  },
  {
    ringText: "TEST PARTNER",
    image: "/images/duolingo.png",
  },
  {
    ringText: "LANGUAGE PARTNER",
    image: "/images/languagecert.png",
  },
];

export default function AccreditationCircles() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {items.map((item, index) => {
            const words = item.ringText.split(" ");
            const halfLength = Math.ceil(words.length / 2);
            const topText = words.slice(0, halfLength).join(" ");
            const bottomText = words.slice(halfLength).join(" ");

            return (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.09,
                  filter: "drop-shadow(0 20px 35px rgba(59,130,246,0.35))",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-56 h-52 flex items-center justify-center cursor-pointer"
              >
                {/* SVG Ring with Circular Text - Top Half */}
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Ring */}
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#C7D9FF"
                    strokeWidth="12"
                  />

                  {/* Circular Text Path - Top Half */}
                  <defs>
                    <path
                      id={`topPath-${index}`}
                      d="M 30,100 A 70,70 0 0,1 170,100"
                      fill="none"
                    />
                    <path
                      id={`bottomPath-${index}`}
                      d="M 170,100 A 70,70 0 0,1 30,100"
                      fill="none"
                    />
                  </defs>

                  {/* Top text */}
                  <text
                    fill="#2563EB"
                    fontSize="10"
                    fontWeight="600"
                    letterSpacing="1.5"
                  >
                    <textPath
                      href={`#topPath-${index}`}
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      {topText}
                    </textPath>
                  </text>

                  {/* Bottom text */}
                  <text
                    fill="#2563EB"
                    fontSize="10"
                    fontWeight="600"
                    letterSpacing="1.5"
                  >
                    <textPath
                      href={`#bottomPath-${index}`}
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      {bottomText}
                    </textPath>
                  </text>
                </svg>

                {/* Center Logo */}
                <div className="relative z-10 w-24 h-24 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.ringText}
                    width={index === 1 ? 90 : 120}
                    height={index === 1 ? 90 : 120}
                    className="object-contain "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
