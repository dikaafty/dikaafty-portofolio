import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
}

export const runObserver = (...refs) => {
  const options = {
    root: null,
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const animationClass = entry.target.dataset.animate;

      entry.target.classList.toggle(animationClass, entry.isIntersecting);
    });
  }, options);

  refs.forEach((ref) => {
    if(ref.current.length !== undefined) {
      ref.current.forEach((r) => {
        if(r.current) observer.observe(r.current);
      });
    } else {
      if(ref.current) observer.observe(ref.current);
    }
  });

  return () => observer.disconnect();
}