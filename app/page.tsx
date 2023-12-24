import Card from "@/components/home/card";
import { OMNIND_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";


export default async function Home() {

  return (
    <>
      <div className="w-full py-32 text-center backdrop-blur-xl bg-blue-500 bg-opacity-50">
        <div className="flex flex-row">
        <div className="flex-1 p-10 border-r border-black">
          <p>Our Mission
            <br />
            Our Slogan
          </p>
        </div>
        <div className="flex-1 p-10">
          <p>some Anime</p>
        </div>
        </div>
      </div>
      <div className="my-10  grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-2 xl:px-0">
        {Articles.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
            large={large}
          />
        ))}
      </div>
      <div className="w-full py-16 text-center backdrop-blur-xl bg-white bg-opacity-0 ">
        <a
            href="https://omnind.com"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-0 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
          >
            <p className="text-sm font-semibold text-[#1d9bf0]">
              New at Omnind's blog
            </p>
        </a>
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

const Articles = [

  {
    title: "Article 1",
    description:
      "Our Mission Our Mission Our Mission Our Mission",
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
    large: false,
  },
  {
    title: "",
    description:"",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="pic" src="/home-001.png" layout="fill" objectFit="cover" />
      </div>
    ),
    large: false,
  },
  {
    title: "",
    description:"",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="pic" src="/home-002.png" layout="fill" objectFit="cover" />
      </div>
    ),
    large: false,
  },
  {
    title: "Article 2",
    description:
      "Article Article Article Article Article Article",
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
    large: false,
  },

  {
    title: "Article 3",
    description:
      "Article Article Article Article Article Article",
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
    large: false,
  },
  {
    title: "",
    description:"",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/home-003.png" layout="fill" objectFit="cover" />
      </div>
    ),
    large: false,
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
    large: false,
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
