export function animation() {
  const animatedText = document.querySelectorAll(".about-text");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          obs.unobserve(entry.target); // запускається лише один раз
        }
      });
    },
    { threshold: 0.3 } // 20% елемента у вʼюпорті
  );

  animatedText.forEach((el) => observer.observe(el));
  console.log("animate added");
}
