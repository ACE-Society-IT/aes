"use client";

import React, { useRef, useState, useId } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * TextHoverEffect
 * Interactive SVG text outline that animates a drawing stroke on load,
 * and reveals a luxury Imperial Gold gradient mask with ambient glow
 * following the user's cursor on hover.
 * Adheres strictly to DESIGN-RULES.md.
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
        {/* Brand Metallic Gradient: Imperial Gold, Alabaster Cream, Warm Parchment */}
        <linearGradient
          id={gradientId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#f1ca7e" />
          <stop offset="25%" stopColor="#f8eee1" />
          <stop offset="50%" stopColor="#f1ca7e" />
          <stop offset="75%" stopColor="#e8dcc6" />
          <stop offset="100%" stopColor="#f1ca7e" />
        </linearGradient>

        <motion.radialGradient
          id={revealMaskId}
          gradientUnits="userSpaceOnUse"
          r="25%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="#f8eee1" stopOpacity="1" />
          <stop offset="100%" stopColor="#5a0d1b" stopOpacity="0" />
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
        className="fill-transparent stroke-[#89192c]/50 font-sans transition-all duration-300"
        style={{ opacity: hovered ? 0.8 : 0.25 }}
      >
        {text}
      </text>

      {/* Animated draw-in stroke on mount using Imperial Gold accent */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="76"
        fontWeight="900"
        letterSpacing="0.04em"
        strokeWidth="0.5"
        className="fill-transparent stroke-[#f1ca7e] font-sans"
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
          filter: hovered ? 'drop-shadow(0 0 18px rgba(241, 202, 126, 0.5))' : 'none',
        }}
      >
        {text}
      </text>
    </svg>
  );
};

/**
 * FooterBackgroundGradient
 * Rich dark crimson & abyssal oxblood radial gradient strictly aligning with DESIGN-RULES.md
 */
export const FooterBackgroundGradient = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_100%,rgba(137,25,44,0.45)_0%,rgba(112,16,32,0.6)_50%,rgba(90,13,27,0.98)_100%)]",
        className
      )}
    />
  );
};
