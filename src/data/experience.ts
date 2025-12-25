export interface Experience {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Development Engineer",
    company: "Trade Diary",
    companyUrl: "https://tradediary.in",
    duration: "Jun 2025 - Present",
    location: "Remote",
    description: [
      "Designed and shipped end-to-end AI features for a trade diary platform, transforming raw trade data into actionable insights",
      "Built AI-driven trade analysis to evaluate performance, risk–reward, behavioral patterns, and strategy effectiveness",
      "Integrated multiple broker APIs to ingest real-time and historical trade data with secure, scalable pipelines",
    ],
    skills: ["AI/ML", "Next.js", "TypeScript", "API Integration", "Data Pipelines"],
  },
];

export default experiences;
