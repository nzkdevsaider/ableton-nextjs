import Head from "next/head";
import Header from "./components/Header";
import Image from "next/image";
import FuturaFont from "@next/font/local";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const font = FuturaFont({ src: "../public/fonts/FuturaPTMedium.otf" });

export default function Home() {
  const { data } = useSWR("/api/readImages", fetcher);

  return (
    <>
      <Head>
        <title>Ableton by sebasmorant</title>
      </Head>
      <Header />
      <main className={font.className}>
        <div className="container mx-auto mb-16">
          <div className="grid-cols-3 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-full h-96 col-span-2 row-span-2 relative">
              <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <a className="text-ableton-turquoise">
                  <h1 className="text-5xl">
                    Sit in ut in eu aliqua velit exercitation veniam velit amet
                    tempor labore dolore.
                  </h1>
                  <p className="text-2xl">Nulla id incididunt.</p>
                </a>
              </article>
            </div>
            {data &&
              data.map((image) => (
                <div className="w-full relative">
                  <Image
                    alt="image"
                    src={`/images/${image}`}
                    fill
                    className="object-cover"
                  />
                  <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <a className="text-ableton-turquoise">
                      <h1 className="text-2xl">
                        Cillum sit officia qui et exercitation incididunt Lorem
                        nostrud.
                      </h1>
                      <p className="text-xl">Description</p>
                    </a>
                  </article>
                </div>
              ))}
          </div>
        </div>
        <section className="container mx-auto mb-16 pr-14 pl-14">
          <div class="flex justify-between p-4 mt-4">
            <h1 className="flex text-4xl">The latest from Ableton</h1>
            <div className="flex items-center">
              <ul className="flex text-2xl text-ableton-blue space-x-5">
                <li>All posts</li>
                <li>Artists</li>
                <li>News</li>
                <li>Downloads</li>
                <li>Tutorials</li>
                <li>Videos</li>
                <li>Loop</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-red-800 to-orange-800 w-full h-96 relative">
              <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <a className="text-ableton-turquoise">
                  <h3 className="text-sm">Videos</h3>
                  <h2 className="text-2xl">
                    Experimental Sound Design with Feedback Loops
                  </h2>
                </a>
              </article>
            </div>
            <div className="bg-gradient-to-r from-gray-700 to-slate-500 w-full h-96 relative">
              <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <a className="text-ableton-turquoise">
                  <h3 className="text-sm">Artists</h3>
                  <h2 className="text-2xl">
                    ANTI-MASS: From Uganda Into The Unknown
                  </h2>
                </a>
              </article>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 w-full h-96 relative">
              <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <a className="text-ableton-turquoise">
                  <h3 className="text-sm">Artists</h3>
                  <h2 className="text-2xl">
                    Ropes, Fields and Waves: Celia Hollander Sculpts Time with
                    Sound
                  </h2>
                </a>
              </article>
            </div>
          </div>
        </section>
        <section className="bg-gray-200 mx-auto mb-16 p-14">
          <div className="flex justify-center">
            <ul className="flex text-xl text-ableton-blue space-x-5">
              <li className="text-black">More:</li>
              <li>All posts</li>
              <li>Artists</li>
              <li>News</li>
              <li>Downloads</li>
              <li>Tutorials</li>
              <li>Videos</li>
              <li>Loop</li>
            </ul>
          </div>
        </section>
      </main>
      <footer className={font.className}>
        <div className="text-xl p-10">
          <p>Ableton theme made by devsaider.</p>
        </div>
      </footer>
    </>
  );
}
