"use client";

import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import React, { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  profileUrl: string;
  quote: string;
  title: string;
}

const allTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    profileUrl: "https://via.placeholder.com/100",
    quote: "This service was excellent and beyond my expectations. Highly recommend!",
    title: "CEO, Example Corp",
  },
  {
    id: 2,
    name: "Jane Smith",
    profileUrl: "https://via.placeholder.com/100",
    quote: "A wonderful experience from start to finish. The team was professional and attentive.",
    title: "Marketing Manager, Sample Ltd",
  },
  {
    id: 3,
    name: "Alice Johnson",
    profileUrl: "https://via.placeholder.com/100",
    quote: "Absolutely fantastic! Will use their services again.",
    title: "Product Manager, Tech Solutions",
  },
  {
    id: 4,
    name: "Bob Brown",
    profileUrl: "https://via.placeholder.com/100",
    quote: "Exceptional quality and great customer support.",
    title: "HR, Industrial Corp",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonials(allTestimonials);
  }, []);

  return (
    <section id="testimonials" className="p-10 text-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center">
          Kind words from
          <span className="text-orange-400"> satisfied clients</span>
        </h1>

        <div className="flex flex-col items-center">
          <div className="relative overflow-hidden p-10 rounded-lg shadow-lg  ">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
