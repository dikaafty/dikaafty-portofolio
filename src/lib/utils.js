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

export const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "634b5db6-87e8-4aa5-a920-94afac716dd9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };