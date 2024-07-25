"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils"; // Ensure this utility function is correctly implemented
import Image from "next/image";

interface MovingCardProps {
  items: {
    quote: string;
    name: string;
    title: string;
    profileUrl: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<MovingCardProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse");
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const durationMap: Record<string, string> = {
        fast: "20s",
        normal: "40s",
        slow: "80s",
      };
      containerRef.current.style.setProperty("--animation-duration", durationMap[speed]);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_100%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0  p-5 md:p-16 md:w-[60vw] bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600"
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-semibold">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex items-center">
                <img src={item.profileUrl} alt="profile" className="h-14 w-14 rounded-full me-4" />
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold leading-[1.6] text-white">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-white font-semibold">
                      {item.title}
                    </span>
                  </div>
                  <div className="mt-2">
                    <Image src="/logo.png" alt="" width={130} height={100} />
                  </div>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
