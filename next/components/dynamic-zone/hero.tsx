"use client";
import React from "react";
import Link from "next/link";
/* Removed Space Decorations for a cleaner Medical look */
// import ShootingStars from "../decorations/shooting-star";
// import StarBackground from "../decorations/star-background";

import { Heading } from "../elements/heading";
import { Subheading } from "../elements/subheading";
import { Button } from "../elements/button";
// import { Cover } from "../decorations/cover"; // Removed to use standard text highlighting
import { motion } from "framer-motion";

export const Hero = ({ heading, sub_heading, CTAs, locale }: { heading: string; sub_heading: string; CTAs: any[], locale: string }) => {
  return (
    <div className="h-screen overflow-hidden relative flex flex-col items-center justify-center bg-charcoal">
      {/* Deleted the Motion Div wrapping the Stars. 
         This ensures the background is just your clean Navy Blue.
      */}
      
      <Heading
        as="h1"
        /* Added font-primary (Montserrat) and ensured text-white */
        className="text-4xl md:text-5xl lg:text-7xl font-bold font-primary text-white max-w-7xl mx-auto text-center mt-6 relative z-10 py-6"
      >
        {/* Logic: Renders the text, but turns the LAST word Cyan (Afyascope Brand) */}
        {heading.substring(0, heading.lastIndexOf(" "))}{" "}
        <span className="text-lightblack">
          {heading.split(" ").pop()}
        </span>
      </Heading>

      <Subheading 
        /* Added font-secondary (Inter) and text-neutral-200 for readability */
        className="text-center mt-2 md:mt-6 text-base md:text-xl font-secondary text-neutral-200 max-w-3xl mx-auto relative z-10 leading-relaxed"
      >
        {sub_heading}
      </Subheading>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center mt-10 relative z-20">
        {CTAs && CTAs.map((cta, idx) => (
          <Button
            key={cta?.id}
            as={Link}
            href={`/${locale}${cta.URL}`}
            /* CRITICAL FIX: 
               If it's the last button -> Primary (Red).
               If it's the first button -> Outline (White Border).
               This prevents the "invisible dark button" issue.
            */
            variant={idx === CTAs.length - 1 ? "primary" : "outline"}
          >
            {cta.text}
          </Button>
        ))}
      </div>

      {/* Subtle Gradient to blend content into the footer/next section */}
      <div className="absolute inset-x-0 bottom-0 h-80 w-full bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent pointer-events-none" />
    </div>
  );
};