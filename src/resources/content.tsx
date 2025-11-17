import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Calvin",
  lastName: "McCormick",
  name: `Calvin McCormick`,
  role: "ML Engineer | Algorithmic Trading Systems",
  avatar: "/images/avatar.jpeg",
  email: "calvinkostmccormick@gmail.com",
  location: "America/Chicago", // San Antonio timezone
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>I occasionally write about algorithmic trading, machine learning, and quantitative finance.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
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
  headline: <>ML Engineer | Algorithmic Trading Systems</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">TradeAI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/tradeai-ai-powered-options-trading-dashboard",
  },
  subline: (
    <>
      Calvin McCormick is a Machine Learning Engineer specializing in algorithmic trading systems and real-time data processing.
      <br />
      With expertise in Python, FastAPI, React, and WebSocket technologies, Calvin builds sophisticated trading infrastructure.
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
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Calvin is a San Antonio-based Machine Learning Engineer with a passion for building intelligent 
        systems for quantitative finance. With a background in New Media and Digital Design, he combines 
        technical expertise with a deep understanding of user experience to create sophisticated trading 
        infrastructure that bridges the gap between complex algorithms and practical application.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Whole Foods Market",
        timeframe: "Present",
        role: "Team Member",
        achievements: [
          <>
            Currently working full-time while developing production-grade trading systems and 
            seeking opportunities in quantitative finance and fintech.
          </>,
        ],
        images: [],
      },
      {
        company: "Independent Development",
        timeframe: "2024 - Present",
        role: "ML Engineer & Trading Systems Developer",
        achievements: [
          <>
            Built multi-agent AI trading system with specialized agents for collaborative market 
            analysis, demonstrating advanced software architecture and AI orchestration.
          </>,
          <>
            Developed production-grade algorithmic trading framework implementing Research-Backtest-Implement 
            (RBI) methodology with comprehensive risk management and backtesting capabilities.
          </>,
          <>
            Created real-time market analysis dashboard with WebSocket streaming, processing 1000+ 
            messages per second with sub-100ms latency.
          </>,
          <>
            Designed and deployed AI-powered trade planning application using Google Gemini API for 
            institutional-grade multi-timeframe analysis.
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
    ],
  },
  studies: {
    display: true, // set to false to hide this section
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
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Machine Learning & AI",
        description: (
          <>Building multi-agent systems, real-time data processing, and AI-powered trading strategies 
          using Python, Pandas, NumPy, and advanced ML frameworks.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "NumPy",
            icon: "numpy",
          },
        ],
        images: [],
      },
      {
        title: "Trading Infrastructure",
        description: (
          <>Algorithmic trading frameworks, backtesting engines, risk management systems, 
          and WebSocket-based real-time market data streaming.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "FastAPI",
            icon: "fastapi",
          },
        ],
        images: [],
      },
      {
        title: "Full-Stack Development",
        description: (
          <>Python (FastAPI, Flask), React, Next.js, WebSocket, Redis, PostgreSQL, 
          Docker, and Vercel deployment.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [],
      },
      {
        title: "Financial Analysis",
        description: (
          <>Technical indicators (RSI, MACD, Bollinger Bands), multi-timeframe analysis, 
          order flow analysis, and quantitative strategy development.</>
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
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Algorithmic trading and ML projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
