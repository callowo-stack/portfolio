import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Calvin",
  lastName: "McCormick",
  name: `Calvin McCormick`,
  role: "Quantitative Developer | ML Engineer",
  avatar: "/images/profile-avatar.jpg",
  email: "calvinkostmccormick@gmail.com",
  location: "America/Chicago",
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>I occasionally write about algorithmic trading, machine learning, and quantitative finance.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/callowo-stack",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/calvinm9/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/cal__mccormick/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Quantitative Developer | ML Engineer</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Multi-Agent Trading System</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/multi-agent-trading-system",
  },
  subline: (
    <>
      Calvin McCormick builds quantitative trading systems and financial models in Python —
      multi-agent AI frameworks, backtesting engines, and real-time risk tools processing
      1000+ market events per second with sub-100ms latency.
      <br />
      Focused on converting complex financial logic into scalable, production-grade infrastructure.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/cal-mccormick",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Calvin is a San Antonio-based Quantitative Developer and ML Engineer who builds
        production-grade financial systems — algorithmic trading frameworks, multi-agent AI models,
        performance attribution tools, and real-time risk infrastructure. He specializes in Python-based
        quantitative development, translating complex financial logic into scalable, maintainable code
        across Pandas, NumPy, SciPy, and scikit-learn. His work spans systematic strategy development,
        backtesting, and live market data pipelines, with a focus on bridging the gap between
        quantitative research and reliable implementation.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Independent Development",
        timeframe: "2024 - Present",
        role: "Quantitative Developer & ML Engineer",
        achievements: [
          <>
            Architected a multi-agent AI trading system with specialized agents for technical analysis,
            sentiment processing, and risk management — processing 1000+ real-time market events per
            second with sub-100ms latency.
          </>,
          <>
            Built a production-grade algorithmic trading framework implementing Research-Backtest-Implement
            (RBI) methodology, with modular risk management, position sizing, and performance attribution
            across multiple strategy types.
          </>,
          <>
            Developed a real-time market analysis dashboard using WebSocket streaming and technical
            indicators (RSI, MACD, Bollinger Bands) with a React frontend and FastAPI backend.
          </>,
          <>
            Designed an AI-powered trade planning tool using Google Gemini API for multi-timeframe
            quantitative analysis, generating institutional-grade signals from live market data.
          </>,
        ],
        images: [],
      },
      {
        company: "Blue Nine Systems",
        timeframe: "2022 - 2024",
        role: "Web Designer & CSS Specialist",
        achievements: [
          <>
            Redesigned client websites with focus on modern responsive design and user experience optimization.
          </>,
        ],
        images: [],
      },
      {
        company: "Whole Foods Market",
        timeframe: "2021 - Present",
        role: "Team Member",
        achievements: [
          <>
            Full-time employment while independently developing quantitative trading systems and
            pursuing opportunities in quantitative finance and fintech.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of North Carolina Asheville",
        description: <>Bachelor of Arts in New Media with emphasis on Interactive Media and Web Design.</>,
      },
      {
        name: "Asheville-Buncombe Technical Community College",
        description: <>Associate of Arts and Sciences in Graphic Design and Digital Media.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Quantitative Development",
        description: (
          <>
            Financial modeling, performance attribution, valuation frameworks, and algorithmic strategy
            development using Python, Pandas, NumPy, SciPy, and scikit-learn across liquid and
            illiquid asset classes.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "NumPy", icon: "numpy" },
        ],
        images: [],
      },
      {
        title: "Trading Infrastructure",
        description: (
          <>
            End-to-end trading system architecture — backtesting engines, real-time risk tools,
            WebSocket-based market data pipelines, and multi-agent AI frameworks for signal generation
            and execution.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "FastAPI", icon: "fastapi" },
        ],
        images: [],
      },
      {
        title: "Full-Stack Development",
        description: (
          <>
            Python (FastAPI, Flask), React, Next.js, WebSocket, Redis, PostgreSQL,
            Docker, and Vercel deployment. Comfortable converting complex Excel-based financial
            logic into scalable Python solutions.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
        ],
        images: [],
      },
      {
        title: "Financial Analysis",
        description: (
          <>
            Technical indicators, multi-timeframe analysis, order flow, quantitative risk modeling,
            and systematic strategy research. Focused on building tools that translate analytical
            frameworks into actionable, auditable output.
          </>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about trading and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Quantitative trading and ML engineering projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
