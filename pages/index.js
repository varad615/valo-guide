import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://valorant-api.com/v1/agents/");
  const data = await res.json();

  return {
    props: { mydata: data.data }
  };
};

const Home = ({ mydata }) => {
  return (
    <>
      <header className="text-white bg-[#0F1822] body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="divide-x flex title-font font-medium items-center text-white mb-0 md:mb-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Riot_Games_wordmark.svg"
              className="h-10 pr-4"
              alt="logo"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/1280px-Valorant_logo_-_pink_color_version.svg.png"
              className="h-10 pl-4"
              alt="logo"
            />
          </a>
        </div>
      </header>
      <div className="p-5">
        <Head>
          <title>Velorent Guide</title>
          <link
            rel="shortcut icon"
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/1280px-Valorant_logo_-_pink_color_version.svg.png"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="text-white flex flex-wrap">
          <div className=" border-b-2 border-[#31363F] p-1 w-full">
            <div className="pl-4 pr-4 flex flex-wrap gap-x-4">
              <div className="cursor-pointer transition text-[#FB4554]">
                Home
              </div>
              <Link href="/version" passHref>
                <div className="hover:underline cursor-pointer transition underline-offset-8 decoration-4 decoration-[#FB4554] hover:text-[#FB4554]">
                  Version
                </div>
              </Link>
            </div>
          </div>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            {mydata && (
              <div className="flex flex-wrap -m-4">
                {mydata.map((item) => (
                  <div key={item.uuid} className="p-4 md:w-1/3">
                    <div className="h-full bg-[#0F1822] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="object-cover object-center"
                        src={item.bustPortrait}
                        alt={item.displayName}
                      />

                      <div className="p-6 bg-[#FB4554] rounded-t-lg rounded-b-md transition hover:-translate-y-2">
                        <h1 className="title-font text-2xl font-medium text-[#0F1822] mb-1">
                          {item.displayName}
                        </h1>
                        <p className="leading-relaxed mb-3 text-white">
                          {item.description}
                        </p>
                        <Link
                          href={"/agent/" + item.uuid}
                          className="cursor-pointer"
                        >
                          <button className="bg-[#0F1822] text-white p-2 rounded-lg">
                            More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
