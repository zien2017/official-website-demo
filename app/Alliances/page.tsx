import Card from "@/components/home/card";
import { OMNIND_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";


export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Alliances
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Omnind
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-2 xl:px-0">
        {articals.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
            large={large}
          />
        ))}
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {cases.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
            large={large}
          />
        ))}
      </div>
    </>
  );
}

const articals = [

  {
    title: "Our Mission",
    description:
      "Our Mission Our Mission Our Mission Our Mission",
    demo: <WebVitals />,
  },
  {
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="pic" src="/home-001.png" layout="fill" objectFit="cover" />
      </div>
    ),
  },
  {
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="pic" src="/home-002.png" layout="fill" objectFit="cover" />
      </div>
    ),
  },
  {
    title: "Artical 1",
    description:
      "Artical Artical Artical Artical Artical Artical",
    demo: (
      <a href={OMNIND_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },

  {
    title: "Artical 2",
    description:
      "Artical Artical Artical Artical Artical Artical",
    demo: (
      <a href={OMNIND_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/home-003.png" layout="fill" objectFit="cover" />
      </div>
    ),
  },
];

const cases = [

  {
    title: "Case 1",
    description:
      "case case case case case case",
    demo: (
      <a href={OMNIND_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },

  {
    title: "Case 2",
    description:
      "case case case case case case",
    demo: (
      <a href={OMNIND_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Case 3",
    description:
      "case case case case case case",
    demo: (
      <a href={OMNIND_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
]
