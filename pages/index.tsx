import Image from "next/image";
import { Roboto } from "next/font/google";
import cover from "../public/static/images/cover.jpg";
import { motion } from "framer-motion";
import { reels, actors } from "@/constants";
import { Globe } from "lucide-react";
import Head from "next/head";
const roboto = Roboto({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`  mx-auto ${roboto.className}`}>
      <Head>
        <title>MaiTurn</title>
      </Head>
      <div className=" py-4 px-4 font-bold  text-2xl tracking-widest uppercase ">
        MaiTurn
      </div>
      <div className="px-4 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold py-[3%] text-center"
        >
          &quot;Mai&quot; and &quot;Teng&quot;
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl text-black/60 text-center"
        >
          Mai Teng/Mai Turn is a company specializing in casting in Taiwan, with
          over 20 years of casting experience for TV
          commercials/MVs/series/movies.
        </motion.div>
        <div className="text-xl text-white/90 text-center rounded-full bg-gray-800 py-2 mt-6 lg:w-1/2 mx-auto ">
          <div>Contact us </div>
          ko.benjamine@gmail.com
        </div>
      </div>
      <section className="my-2 p-4 0 lg:w-10/12 mx-auto">
        <div className=" pt-4 pb-2 border-b-0 border-black/10 mb-4">
          <div className=" font-black text-4xl">Actors</div>
          <div className="text-black/60">Excellent talents to work with</div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {actors.map((actor, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center group w-full"
              >
                <div className="flex flex-col items-center">
                  {actor.image && (
                    <div className=" actorlist-image max-w-[317px]">
                      <Image
                        src={`https://pub-2bdb4285afd34c4c84a11cfb4da4f5ad.r2.dev/actors/${actor.image}`}
                        alt={actor.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110 "
                      />
                    </div>
                  )}
                  <div className="text-base font-bold">{actor.englishName}</div>
                  <div className="text-sm font-bold">{actor.name}</div>
                  <a href={actor.imdbUrl} target="_blank ">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="my-2 p-4 lg:w-10/12 mx-auto">
        <div className=" pt-4 pb-2 border-b-0 border-black/10 mb-4">
          <div className=" font-black text-4xl">Showreels</div>
          <div className="text-black/60">Participate in the work</div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {reels.slice(0, 4).map((reel, index) => {
            return (
              <div key={index} className="flex flex-col items-center group">
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center"
                >
                  {reel.image && (
                    <div className=" overflow-hidden aspect-[9/12] rounded-lg  ">
                      <Image
                        src={`https://pub-2bdb4285afd34c4c84a11cfb4da4f5ad.r2.dev/${reel.image}`}
                        alt={reel.title}
                        width={300}
                        height={300}
                        className="w-full object-cover object-center transition-all duration-500 group-hover:scale-110 rounded-lg"
                      />
                    </div>
                  )}
                  <div className="text-base font-bold text-center">
                    <p> {reel.entitle} </p>
                    <p> {reel.title}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col  items-start group mt-3">
          {reels.slice(4, 100).map((reel, index) => {
            return (
              <a
                key={index}
                href={reel.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center"
              >
                <div className="text-base  text-black/80">
                  {reel.title} {reel.entitle} ({reel.type})
                </div>
              </a>
            );
          })}
        </div>
        <div className="text-base  text-black/80">etc...</div>
      </section>
      <section className=" p-4 bg-slate-900 text-white ">
        <div className="lg:w-10/12 mx-auto">
          <div className=" pt-4 pb-2 border-b-0 border-black/10 mb-4">
            <div className=" font-black text-4xl">About</div>
            <div className="text-white/60">About MaiTurn</div>
          </div>
          <div className="text-base">
            The company name was inspired by the Chinese characters
            &quot;Mai&quot; and &quot;Teng&quot;. &quot;Mai (脈)&quot; refers to
            connection, more specifically human connection, which is paramount
            in all industries, while &quot;Teng (騰)&quot; is dedicated to my
            late grandfather.
            <br />
            <br />
            Mai Teng/Mai Turn is a company specializing in casting in Taiwan,
            with over 20 years of casting experience for TV
            commercials/MVs/series/movies. More recently, we have expanded our
            business internationally, collaborating with companies in Japan,
            Singapore, and Malaysia. In addition to casting work, Ben, the CEO
            of Mai Teng/Mai Turn, will be directly involved in production during
            2024, acting as executive producer and a member of co-production.
          </div>
          <br />
          <div className=" pt-4 pb-2 border-b-0 border-black/10 mb-4">
            <div className=" font-black text-4xl">Contact us</div>
          </div>
          <div className="text-base">Email : ko.benjamine@gmail.com</div>
        </div>
      </section>
      <div className="bg-slate-800 text-white p-5">Copyright© 2024 MaiTurn</div>
    </main>
  );
}
