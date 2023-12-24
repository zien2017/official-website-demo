import { Github, Twitter } from "@/components/shared/icons";

export default function Footer() {
  return (
    <div>
      <div className="w-full py-16 text-center backdrop-blur-xl bg-white bg-opacity-0 ">
        <p className="text-gray-500 mb-5">
          how can we help you?
        </p>
        <a
            href="https://omnind.com"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-10 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
          >
            <p className="text-sm font-semibold text-[#1d9bf0]">
              contact us
            </p>
        </a>
      </div>
      <div className="w-full py-16 text-center backdrop-blur-xl bg-white bg-opacity-90">
        <div className="flex flex-row">
        <div className="flex-1 p-10 border-r border-black">
          <p>This is a subscription bar.</p>
        </div>
        <div className="flex-1 p-10">
          <p>There are some links.</p>
        </div>
        </div>
      </div>
    </div>
  );
}
