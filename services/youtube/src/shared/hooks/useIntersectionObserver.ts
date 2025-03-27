"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { IntersectionOptions } from "react-intersection-observer";

export type UseIntersectionObserverProps = {
  callback: () => void;
  intersectionOptions?: IntersectionOptions;
};

export const useIntersectionObserver = ({
  callback,
  intersectionOptions = {
    threshold: 0.3,
  },
}: UseIntersectionObserverProps) => {
  const { ref, inView } = useInView(intersectionOptions);

  useEffect(() => {
    if (inView) {
      callback();
    }
  }, [inView, callback]);

  return {
    ref,
    inView,
  };
};
