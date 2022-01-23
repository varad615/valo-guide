import Link from "next/link";
import Head from "next/head";
export const getStaticProps = async () => {
  const res = await fetch("https://valorant-api.com/v1/version/");
  const data = await res.json();

  return {
    props: { mydata: data.data }
  };
};
const version = ({ mydata }) => {
  return (
    <div>
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
          <title>Velorent Version</title>
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
              <Link href="/">
                <div className="hover:underline cursor-pointer transition underline-offset-8 decoration-4 decoration-[#FB4554] hover:text-[#FB4554]">
                  Home
                </div>
              </Link>
              <div className="cursor-pointer transition text-[#FB4554]">
                Version
              </div>
            </div>
          </div>
        </div>
        <div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
              <div class="flex flex-wrap w-full">
                <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                  <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#FB4554] hover:bg-[#0F1822] transition hover:border-2 hover:border-[#FB4554] inline-flex items-center justify-center relative z-10"></div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                        Version
                      </h2>
                      <p class="leading-relaxed">{mydata.version}</p>
                    </div>
                  </div>
                  <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#FB4554] hover:bg-[#0F1822] transition hover:border-2 hover:border-[#FB4554] inline-flex items-center justify-center text-white relative z-10"></div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                        Build Version
                      </h2>
                      <p class="leading-relaxed">{mydata.buildVersion}</p>
                    </div>
                  </div>
                  <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#FB4554] hover:bg-[#0F1822] transition hover:border-2 hover:border-[#FB4554] inline-flex items-center justify-center text-white relative z-10"></div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                        Riot Client Version
                      </h2>
                      <p class="leading-relaxed">{mydata.riotClientVersion}</p>
                    </div>
                  </div>
                  <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center"></div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#FB4554] hover:bg-[#0F1822] transition hover:border-2 hover:border-[#FB4554] inline-flex items-center justify-center text-white relative z-10"></div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                        Build Date
                      </h2>
                      <p class="leading-relaxed">{mydata.buildDate}</p>
                    </div>
                  </div>
                </div>
                <img
                  class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                  src="https://media.valorant-api.com/bundles/d958b181-4e7b-dc60-7c3c-e3a3a376a8d2/displayicon.png"
                  alt="step"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default version;
