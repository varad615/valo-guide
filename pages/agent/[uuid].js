import Head from "next/head";
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";

export const getStaticPaths = async () => {
  const res = await fetch("https://valorant-api.com/v1/agents/");
  const data = await res.json();
  const paths = data.data.map((item) => ({
    params: { uuid: item.uuid }
  }));
  return {
    paths,
    fallback: false
  };
};
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://valorant-api.com/v1/agents/${context.params.uuid}`
  );
  const data = await res.json();
  return {
    props: { mydata: data.data }
  };
};
const Details = ({ mydata }) => {
  console.log(mydata);
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
      <div className="text-white">
        <Head>
          <title>Agent | {mydata.displayName}</title>
          <link rel="shortcut icon" href={mydata.displayIcon} />

          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div>
          <div>
            <section class="text-[#0F1822] body-font overflow-hidden">
              <div class="container px-5 py-10 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    class="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded"
                    src={mydata.fullPortrait}
                  />
                  <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:mt-0">
                    <div className="bg-[#FF4654] rounded-lg p-5">
                      <h1 class="text-[#0F1822] text-3xl title-font font-medium mb-1 flex flex-row">
                        <img src={mydata.displayIcon} className="h-10" /> &nbsp;{" "}
                        {mydata.displayName}
                      </h1>
                      <p className="text-[#0F1822] font-semibold mb-4">
                        <div>Role</div>
                        <div className="flex flex-row">
                          <img src={mydata.role.displayIcon} className="h-7" />{" "}
                          &nbsp; {mydata.role.displayName}
                        </div>
                      </p>
                      <p class="leading-relaxed text-white">
                        {mydata.description}
                      </p>
                    </div>
                    <div className="text-[#979797] p-5">
                      Special Abilities:
                      <div className="flex flex-row mt-3">
                        <div className="border-2 rounded-md mr-3 p-2 transition hover:border-[#FF4654] hover:bg-[#FF4654]">
                          <img
                            src={mydata.abilities[0].displayIcon}
                            className="h-10"
                          />
                        </div>
                        <div className="border-2 rounded-md mr-3 p-2 transition hover:border-[#FF4654] hover:bg-[#FF4654]">
                          <img
                            src={mydata.abilities[1].displayIcon}
                            className="h-10"
                          />
                        </div>
                        <div className="border-2 rounded-md mr-3 p-2 transition hover:border-[#FF4654] hover:bg-[#FF4654]">
                          <img
                            src={mydata.abilities[2].displayIcon}
                            className="h-10"
                          />
                        </div>
                        <div className="border-2 rounded-md mr-3 p-2 transition hover:border-[#FF4654] hover:bg-[#FF4654]">
                          <img
                            src={mydata.abilities[3].displayIcon}
                            className="h-10"
                          />
                        </div>
                      </div>
                    </div>
                    <Link href="/">
                      <button className="bg-[#ff4654] text-[#0F1822] font-bold p-1 rounded flex items-center">
                        <MdOutlineArrowBackIos /> &nbsp; Back &nbsp;
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
