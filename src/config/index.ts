import { ICON_NAMES } from "@/components/icons";

import { Config } from "@/types/config";

const config: Config = {
  avatar: "/images/profile.svg",
  title: "Lucas Santos",
  description:
    "Desenvolvedor mobile com foco em React Native, atuando no desenvolvimento e manutenção de aplicativos corporativos. Experiência com TypeScript, integração de APIs REST e React/Next.js.",
  author: "Lucas Santos",
  keywords: [
    "Lucas Santos",
    "Mobile Developer",
    "React Native",
    "React.js",
    "Next.js",
    "TypeScript",
  ],
  status: "Building mobile apps 📱",
  siteURL: "https://lucas-santos.github.io",
  contacts: [
    {
      icon: ICON_NAMES.MAP_PIN_LU,
      title: "Location",
      content: "Natal, Rio Grande do Norte, Brazil 🇧🇷",
    },
    {
      icon: ICON_NAMES.MAIL_LU,
      title: "Email",
      link: "mailto:lucassantos_dev@outlook.com",
      content: "lucassantos_dev@outlook.com",
    },
    {
      icon: ICON_NAMES.GITHUB_LU,
      title: "GitHub",
      link: "https://github.com/lucas-santos",
      content: "@lucas-santos",
    },
    {
      icon: ICON_NAMES.LINKEDIN_LU,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/lucas-santosengsoft",
      content: "in/lucas-santosengsoft",
    },
  ],
  homeMetaData: {
    metadataBase: new URL(
      process.env.NODE_ENV === "production"
        ? "https://lucas-santos.github.io"
        : "http://localhost:3000",
    ),
    title: "Lucas Santos",
    description:
      "Desenvolvedor mobile com foco em React Native, atuando no desenvolvimento e manutenção de aplicativos corporativos. Experiência com TypeScript, integração de APIs REST e React/Next.js.",
    authors: [{ name: "Lucas Santos" }],
    creator: "Lucas Santos",
    keywords: [
      "Lucas Santos",
      "Mobile Developer",
      "React Native",
      "React.js",
      "Next.js",
      "TypeScript",
    ],
    openGraph: {
      url: "https://lucas-santos.github.io/",
      type: "website",
      siteName: "Lucas Santos",
      title: "Lucas Santos",
      locale: "pt_BR",
      description:
        "Desenvolvedor mobile com foco em React Native, atuando no desenvolvimento e manutenção de aplicativos corporativos.",
      images: [
        {
          url: "/opengraph-image",
          width: 1920,
          height: 1080,
          alt: "Lucas Santos",
        },
      ],
    },
    manifest: "/manifest.json",
    twitter: {
      site: "@lucas-santos",
      card: "summary_large_image",
      title: "Lucas Santos",
      description:
        "Desenvolvedor mobile com foco em React Native, atuando no desenvolvimento e manutenção de aplicativos corporativos.",
      images: [
        {
          url: "/twitter-image",
          width: 1920,
          height: 1080,
          alt: "Lucas Santos",
        },
      ],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: [
        {
          url: "/favicon.ico",
          sizes: "192x192",
          type: "image/x-icon",
        },
      ],
    },
  },
  about: {
    firstName: "Lucas",
    lastName: "Santos",
    middleName: "",
    preferredName: "Lucas",
    pronouns: "",
    githubUsername: "lucas-santos",
    lifestyles: [],
    techStacks: {
      programmingLanguages: [
        { name: "TypeScript", icon: ICON_NAMES.TYPESCRIPT },
        { name: "JavaScript", icon: ICON_NAMES.JAVASCRIPT },
      ],
      frameworks: [
        { name: "React", icon: ICON_NAMES.REACT },
        { name: "Next.js", icon: ICON_NAMES.NEXTJS },
      ],
    },
  },
  shikiTheme: {
    defaultColor: "dark",
    light: "github-dark",
    dark: "github-dark",
  },
  jsonLdPerson: {
    "@context": "http://schema.org",
    "@type": "Person",
    "@id": "https://lucas-santos.github.io/#person",
    name: "Lucas Santos",
    givenName: "Lucas",
    familyName: "Santos",
    additionalName: "",
    gender: "male",
    birthPlace: "",
    nationality: {
      "@type": "Country",
      name: "Brazil",
      alternateName: "BR",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
        sameAs: "https://portal.ifrn.edu.br/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Trybe",
        sameAs: "https://www.betrybe.com/",
      },
    ],
    jobTitle: "Mobile Developer",
    skills: "React Native, React.js, Next.js, TypeScript, JavaScript",
    image: "https://lucas-santos.github.io/images/profile.svg",
    url: "https://lucas-santos.github.io",
    sameAs: [
      "https://www.linkedin.com/in/lucas-santosengsoft",
      "https://github.com/lucas-santos",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Natal",
      addressRegion: "RN",
      addressCountry: "Brazil",
    },
  },
  giscusConfig: {
    id: "comments",
    repo: "lucas-santos/lucas-santos.github.io",
    repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "",
    category: "General",
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CONFIG_CATEGORY_ID || "",
    mapping: "pathname",
    term: "Welcome to @giscus/react component!",
    reactionsEnabled: "1",
    emitMetadata: "1",
    inputPosition: "bottom",
    theme: "dark_tritanopia",
    lang: "en",
    loading: "lazy",
  },
  web3formsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
  analytics: {
    googleAnalyticId: process.env.NEXT_PUBLIC_GA_ID || "",
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || "",
    umamiWebsiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "",
    umamiUrl: process.env.NEXT_PUBLIC_UMAMI_URL || "",
  },
  robots: {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: "https://lucas-santos.github.io/sitemap.xml",
    host: "https://lucas-santos.github.io",
  },
  llmsTxtContent: `# Lucas Santos

## Section Name

- [About](https://lucas-santos.github.io): A brief introduction to Lucas Santos, mobile developer.
- [Resume](https://lucas-santos.github.io/resume): A detailed resume highlighting professional experience, education, and skills.

## Optional

- [Source Code](https://github.com/lucas-santos/lucas-santos.github.io): The source code for this website is available on GitHub.
`,
  llmsFullTxtContent: `# Lucas Santos

## Section Name

- [About](https://lucas-santos.github.io): A brief introduction to Lucas Santos, mobile developer.
- [Resume](https://lucas-santos.github.io/resume): A detailed resume highlighting professional experience, education, and skills.

## Optional

- [Source Code](https://github.com/lucas-santos/lucas-santos.github.io): The source code for this website is available on GitHub.
`,
  techStacks: {
    frontend: ["typescript", "javascript", "react", "nextjs"],
    tools: ["github", "git"],
  },
  rssOptions: {
    title: "Lucas Santos",
    description:
      "Desenvolvedor mobile com foco em React Native, atuando no desenvolvimento e manutenção de aplicativos corporativos.",
    site_url: "https://lucas-santos.github.io",
    feed_url: "https://lucas-santos.github.io/rss.xml",
    language: "pt-BR",
    docs: "https://lucas-santos.github.io",
    image_url: "https://lucas-santos.github.io/images/opengraph-image.png",
    managingEditor: "lucassantos_dev@outlook.com (Lucas Santos)",
    webMaster: "lucassantos_dev@outlook.com (Lucas Santos)",
    copyright: "© 2026 Lucas Santos",
    categories: ["Technology", "Mobile Development", "Software Development"],
  },
};

export default config;
