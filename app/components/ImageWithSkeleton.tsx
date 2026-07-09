"use client";

import { useState } from "react";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

export default function ImageWithSkeleton({
  src,
  alt,
  className = "",
  wrapperClassName = "",
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Skeleton screen */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 dark:via-white/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
        </div>
      )}
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
