"use client";

import React, { useRef, useState, useId } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * TextHoverEffect
 * Interactive SVG text outline that animates a drawing stroke on load,
 * and reveals a luxury AES champagne/gold sand gradient mask with ambient glow
 * following the user's cursor on hover.
 */
export const TextHoverEffect = ({
  text = "AES",
  duration = 0.15,
  className,
}) => {
  const uniqueId = useId().replace(/:/g, "");
  const gradientId = `textGradient-${uniqueId}`;
  const maskId = `textMask-${uniqueId}`;
  const revealMaskId = `revealMask-${uniqueId}`;

  const svgRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  const handleMouseMove = (e) => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((e.clientX - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((e.clientY - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage.toFixed(2)}%`,
        cy: `${cyPercentage.toFixed(2)}%`,
      });
    }
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        {/* AES Brand Metallic Gradient: Warm Sand, Champagne, and Gold */}
        <linearGradient
          id={gradientId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#E5D9C5" />
          <stop offset="25%" stopColor="#F4EFEA" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="75%" stopColor="#E5D9C5" />
          <stop offset="100%" stopColor="#B09B8C" />
        </linearGradient>

        <motion.radialGradient
          id={revealMaskId}
          gradientUnits="userSpaceOnUse"
          r="25%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id={maskId}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${revealMaskId})`}
          />
        </mask>
      </defs>

      {/* Base outline text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="76"
        fontWeight="900"
        letterSpacing="0.04em"
        strokeWidth="0.5"
        className="fill-transparent stroke-[#52433D]/50 font-sans transition-all duration-300"
        style={{ opacity: hovered ? 0.8 : 0.25 }}
      >
        {text}
      </text>

      {/* Animated draw-in stroke on mount using AES brand sand accent */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="76"
        fontWeight="900"
        letterSpacing="0.04em"
        strokeWidth="0.5"
        className="fill-transparent stroke-[#E5D9C5] font-sans"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      {/* Dynamic Flashlight Reveal: Revealed wherever cursor hovers */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="76"
        fontWeight="900"
        letterSpacing="0.04em"
        stroke={`url(#${gradientId})`}
        strokeWidth="0.6"
        mask={`url(#${maskId})`}
        className="fill-transparent font-sans transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          filter: hovered ? 'drop-shadow(0 0 18px rgba(229, 217, 197, 0.5))' : 'none',
        }}
      >
        {text}
      </text>
    </svg>
  );
};

/**
 * FooterBackgroundGradient
 * Rich dark espresso & warm sand radial gradient strictly aligning with DESIGN-RULES.md
 */
export const FooterBackgroundGradient = ({ className }) => {
  return (
    <div
      className={cn("absolute inset-0 z-0 pointer-events-none", className)}
      style={{
        background:
          "radial-gradient(ellipse at 50% 100%, rgba(56, 37, 29, 0.45) 0%, rgba(26, 16, 11, 0.6) 50%, rgba(13, 7, 4, 0.95) 100%)",
      }}
    />
  );
};
