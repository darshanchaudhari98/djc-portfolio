const config = {
  title: "Darshan Chaudhari | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Darshan, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Darshan, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Darshan",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Darshan Chaudhari",
  email: "darshanchaudhari9898@gmail.com",
  site: "https://darshanchaudhari.dev",

  // for github stars button
  githubUsername: "darshanchaudhari98",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    instagram: "https://www.instagram.com/djchaudhari98?igsh=a3N5eGNkZGtibW55",
    linkedin: "https://www.linkedin.com/in/darshan-chaudhari-8076b1200",
    github: "https://github.com/darshanchaudhari98",
  },
};
export { config };
