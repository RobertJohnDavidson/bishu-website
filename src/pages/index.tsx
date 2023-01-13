import { type NextPage } from "next";
import Header from "../components/Header";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const navigation = [
  { name: "Merch", href: "https://welcome2bishu-shop.fourthwall.com/" },
  { name: "Contact", href: "" },
];
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className=""></div>
      <main className="grid grid-cols-2 place-items-center gap-5 p-20">
        <div className="z-10 flex h-full w-9/12 flex-col items-center justify-start gap-6 rounded-md bg-emerald-500 p-6 shadow-[5px_5px_0px_0px_rgba(28,28,28)]">
          <div className="rounded-lg0 flex p-2 text-center">
            <h2 className="text-4xl font-bold text-zinc-50">Music</h2>
          </div>
          <iframe
            className="rounded-sm"
            src="https://open.spotify.com/embed/artist/1DzQInbDVhE9Lh5s6T0DUL?utm_source=generator&theme=0"
            width="400"
            height="380"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="justify-star z-10 flex h-full  w-9/12 flex-col items-center gap-6 rounded-md bg-rose-500 p-6 shadow-[5px_5px_0px_0px_rgba(28,28,28)]">
          <div className="rounded-lg0 flex p-2 text-center">
            <h2 className="text-4xl font-bold text-zinc-50">Youtube</h2>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VAeGk7IXWxw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
        <div className="z-10 flex h-full w-9/12 flex-col items-center justify-between gap-6 rounded-md bg-violet-500 p-6 shadow-[5px_5px_0px_0px_rgba(28,28,28)]">
          <div className="rounded-lg0 flex p-2 text-center">
            <h2 className="text-4xl font-bold text-zinc-50">Twitch</h2>
          </div>
          <ReactPlayer
            playsinline={true}
            width={560}
            url="https://www.twitch.tv/welcome2bishu"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
