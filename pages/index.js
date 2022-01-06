import HomeIcon from "../components/HomeIcon";
import WinsIcon from "../components/WinsIcon";
import GameIcon from "../components/GameIcon";
import EntertainmentIcon from "../components/EntertainmentIcon";
import AccountIcon from "../components/AccountIcon";
import cn from "classnames";
import WinstonLogo from "../components/icons/WinstonLogo";
import Link from "next/link";
import FacebookIcon from "../components/icons/FacebookIcon";
// import InstagramIcon from "../components/icons/InstagramIcon";
import YoutubeIcon from "../components/icons/YoutubeIcon";
import CigaretteIcon from "../components/icons/CigaretteIcon";
import HorizontalCigarette from "../components/icons/HorizontalCigarette";
import PenIcon from "../components/icons/PenIcon";
import DeleteIcon from "../components/icons/DeleteIcon";
import HeksagonIcon from "../components/icons/HeksagonIcon";
import HerksagonIconWhite from "../components/icons/HerksagonIconWhite";
import XIcon from "../components/icons/XIcon";
import RightArrowIcon from "../components/icons/RightArrowIcon";
import ThreeDotsIcon from "../components/icons/ThreeDotsIcon";
import BlueDeleteIcon from "../components/icons/BlueDeleteIcon";
import ShareIcon from "../components/icons/ShareIcon";
import SaveIcon from "../components/icons/SaveIcon";
import NotInterestedIcon from "../components/icons/NotInterestedIcon";
import RedHeksagonIcon from "../components/icons/RedHeksagonIcon";
import RightArrowIconRed from "../components/icons/RightArrowIconRed";
import WhiteHeksagonIcon from "../components/icons/WhiteHeksagonIcon";
import SvgrMirsadLogo from "../svgrMirsad/SvgrMirsadLogo";
import ShadowBox from "../mirsadComponents/ShadovBox";
import SvgrQuestionMark from "../svgrMirsad/SvgrQuestionMark";
import SvgrCamera from "../svgrMirsad/SvgrCamera";
import SvgrFile from "../svgrMirsad/SvgrFile";
import SvgrSubmit from "../svgrMirsad/SvgrSubmit";
import Button from "../mirsadComponents/Button";
import CardShadow from "../mirsadComponents/CardShadow";
import CardShadowRec from "../mirsadComponents/CardShadowRec";
import BoxWithButton from "../mirsadComponents/BoxWithButton";
import BoxWithShadow from "../mirsadComponents/BoxWithShadow";
import SvgrAttach from "../mirsadComponents/SvgrAttach";
import SvgrCircleNumb from "../mirsadComponents/SvgrCircleNumb";

export default function Home(props) {
  return (
    <div>
      {/* <section>
        <WinsIcon
          icon={<HomeIcon />}
          color="text-red-500"
          title="HOME"
          width={8}
          height={8}
        />

        <WinsIcon
          icon={<EntertainmentIcon />}
          color="text-red"
          title="ENTERTAINMENT"
          width={8}
          height={8}
        />

        <WinsIcon
          icon={<GameIcon />}
          color="text-red"
          title="GAME"
          width={8}
          height={8}
        />
        <WinsIcon
          icon={<AccountIcon />}
          title="ACCOUNT"
          color="text-red"
          width={8}
          height={8}
        />
      </section> */}

      <section className={cn("mt-20")}>
        <div className={cn("w-4/12")}>
          <WinstonLogo />
          <p
            className={cn("font-bold w-3/12 mt-4 mb-6 uppercase")}
            style={{ fontFamily: "Winston-Medium" }}
          >
            My rewards Winston Products Terms &amp; privacy
          </p>
          <div
            className={cn(
              "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
            )}
          >
            <div className={cn("col-span-1 mt-6")}>
              <p
                className={cn("font-bold")}
                style={{ fontFamily: "Winston-Medium" }}
              >
                MUSIC
              </p>
              <li className={cn("text-gray-500 list-none")}>
                <Link href=''>
                  <a href=''>Radio</a>
                </Link>
              </li>
              <li className={cn("text-gray-500 list-none")}>
                <Link href=''>
                  <a href=''>Events</a>
                </Link>
              </li>
              <li className={cn("text-gray-500 list-none")}>
                <Link href=''>
                  <a href=''>Academy</a>
                </Link>
              </li>
              <div className={cn("flex pt-4")}>
                <div className={cn("flex-shrink")}>
                  <FacebookIcon />
                </div>
                <div className={cn("flex-shrink mt-1 ml-2")}>
                  <YoutubeIcon />
                </div>
                <div className={cn("flex-shrink")}></div>
              </div>
              <p
                className={cn("text-blue-900 font-bold mt-12")}
                style={{ fontFamily: "Winston-Medium" }}
              >
                CONTACT US
              </p>
              <CigaretteIcon />
            </div>
            <div className={cn("col-span-1 mt-6")}>
              <p
                className={cn("font-bold")}
                style={{ fontFamily: "Winston-Medium" }}
              >
                GAMES
              </p>
              <li className={cn("text-gray-500 list-none")}>
                <Link href=''>
                  <a href=''>Game Name</a>
                </Link>
              </li>
              <li className={cn("text-gray-500 list-none")}>
                <Link href=''>
                  <a href=''>Long Game Name</a>
                </Link>
              </li>
              <li className={cn("text-gray-500 list-none")}>
                <Link href=''>
                  <a href=''>Game Name</a>
                </Link>
              </li>
              <div className={cn("flex pt-4")}>
                <div className={cn("flex-shrink")}>
                  <FacebookIcon />
                </div>
                <div className={cn("flex-shrink mt-1 ml-2")}>
                  <YoutubeIcon />
                </div>
                <div className={cn("flex-shrink")}></div>
              </div>
              <p
                className={cn("text-blue-900 font-bold mt-12 p-0")}
                style={{ fontFamily: "Winston-Medium" }}
              >
                ABOUT US
              </p>
              <CigaretteIcon />
            </div>
          </div>
        </div>
      </section>

      <section className={cn("mt-10")}>
        <div className={cn("flex")}>
          <div className={cn("flex-shrink")}>
            <HorizontalCigarette />
          </div>
          <div className={cn("flex-shrink mt-1")}>
            <p
              className={cn("font-bold text-3xl")}
              style={{ fontFamily: "Winston-Medium" }}
            >
              W-<div>PLAYLISTS</div>
            </p>
          </div>
        </div>
      </section>

      <section className={cn("mt-10 w-2/12")}>
        <div className={cn("flex ")}>
          <div className={cn("flex-shrink-0")}>
            <img
              className={cn("w-20 h-20 rounded-lg")}
              src='https://cdn.pixabay.com/photo/2019/10/23/06/30/hamburg-4570577__340.jpg'
              alt=''
            />
          </div>
          <div className={cn("flex-grow ml-3 mt-4")}>
            <p className={cn(" font-bold w-auto")}>NAME OF FRIEND </p>

            <p className={cn("text-sm text-gray-400")}>ID NUMBER</p>
          </div>
          <div className={cn("flex justify-end items-center ")}>
            <BlueDeleteIcon />
          </div>
        </div>
      </section>

      <section className={cn("mt-10 w-2/12")}>
        <div className={cn("flex ")}>
          <div className={cn("flex-shrink-0")}>
            <img
              className={cn("w-20 h-20 rounded-lg")}
              src='https://cdn.pixabay.com/photo/2019/10/23/06/30/hamburg-4570577__340.jpg'
              alt=''
            />
          </div>
          <div className={cn("flex-grow ml-3 mt-4")}>
            <p className={cn(" font-bold w-auto")}>TECH </p>

            <p className={cn("text-sm text-gray-400")}>10 Songs</p>
          </div>
          <div className={cn("flex justify-end items-center ")}>
            <ThreeDotsIcon />
          </div>
        </div>
      </section>

      <section className={cn("mt-10")}>
        <div className={cn("bg-black w-40 h-20 rounded-lg")}>
          <div className={cn("flex ml-3")}>
            <div className={cn("flex-shrink mt-3")}>
              <PenIcon />
            </div>
            <div className={cn("flex-shrink ml-3")}>
              <p className={cn("text-white mt-2")}>Edit</p>
            </div>
          </div>
          <div className={cn("flex ml-3")}>
            <div className={cn("flex-shrink mt-3")}>
              <DeleteIcon />
            </div>
            <div className={cn("flex-shrink ml-3")}>
              <p className={cn("text-white mt-3")}>Delete</p>
            </div>
          </div>
        </div>
      </section>

      <section className={cn("mt-10")}>
        <div className={cn("bg-black w-40 h-32 rounded-lg")}>
          <div className={cn("flex ml-3 ")}>
            <div className={cn("flex-shrink mt-6")}>
              <ShareIcon />
            </div>
            <div className={cn("flex-shrink ml-3 mt-2")}>
              <p className={cn("text-white mt-2")}>Share</p>
            </div>
          </div>
          <div className={cn("flex ml-3")}>
            <div className={cn("flex-shrink mt-3")}>
              <SaveIcon />
            </div>
            <div className={cn("flex-shrink ml-3")}>
              <p className={cn("text-white mt-2")}>Save</p>
            </div>
          </div>
          <div className={cn("flex ml-3")}>
            <div className={cn("flex-shrink mt-3")}>
              <NotInterestedIcon />
            </div>
            <div className={cn("flex-shrink ml-3")}>
              <p className={cn("text-white mt-2")}>Not interested</p>
            </div>
          </div>
        </div>
      </section>

      <section className={cn("mt-10")}>
        <div className={cn("flex")}>
          <div className={cn(" flex-shrink-0")}>
            <img
              className={cn("w-40 h-40 rounded-lg")}
              src='https://cdn.pixabay.com/photo/2019/10/23/06/30/hamburg-4570577__340.jpg'
              alt=''
            />
          </div>
          <div className={cn("flex-shrink ml-4")}>
            <p
              className={cn("font-bold")}
              style={{ fontFamily: "Winston-Medium" }}
            >
              LONG PLAYLIST NAME GOES HERE…
            </p>
            <div className={cn("flex-shrink")}>
              <p className={cn("text-gray-400 text-sm")}>Number of songs</p>
              <p className={cn("text-gray-400 text-sm")}>Hours</p>
              <p className={cn("text-gray-400 text-sm")}>Minutes</p>
            </div>
          </div>
        </div>
      </section>

      <section className={cn("mt-10")}>
        <div className={cn("flex")}>
          <div className={cn("flex-shrink-0")}>
            <img
              className={cn("w-20 h-20 rounded-lg")}
              src='https://cdn.pixabay.com/photo/2019/10/23/06/30/hamburg-4570577__340.jpg'
              alt=''
            />
          </div>
          <div className={cn("flex-shrink ml-3")}>
            <p className={cn("text-gray-400 text-sm")}>Name of the artist</p>
            <div className={cn("float-right")}>
              <div className={cn("relative")}>
                <HeksagonIcon />
                <div className={cn("absolute top-1")}>
                  <p className={cn("text-white text-xs")}>+50</p>
                </div>
              </div>
              <div className={cn("bg-black px-1 rounded-l-full")}>
                <p className={cn("text-white text-sm")}>1:02:30</p>
              </div>
            </div>
            <p
              className={cn("font-bold text-xl")}
              style={{ fontFamily: "Winston-Medium" }}
            >
              LONG SONG NAME GOES HERE...
            </p>
          </div>
          <div className={cn("flex-shrink")}></div>
        </div>
      </section>

      <section className={cn("mt-10")}>
        <img
          className={cn("w-40 h-40 rounded-lg")}
          src='https://cdn.pixabay.com/photo/2019/10/23/06/30/hamburg-4570577__340.jpg'
          alt=''
        />

        <p className={cn("text-gray-500 mt-2")}>Name of artist...</p>
        <p
          className={cn("font-bold mt-2 mb-2")}
          style={{ fontFamily: "Winston-Medium" }}
        >
          LONG SONG NAME GOES HERE...
        </p>
        <p className={cn("text-gray-500 mt-2 mb-1")}>Music genre</p>
        <p>1.2k Views / 2 Weeks ago</p>
      </section>

      <section className={cn("mt-10")}>
        <div
          className={cn("relative")}
          style={{ backgroundImage: `url(${props.imageUrl})` }}
        >
          <img
            className={cn("w-60 h-60 rounded-lg")}
            src='https://cdn.pixabay.com/photo/2021/11/06/17/21/bird-6773865__340.jpg'
            alt=''
          />

          <div className={cn("absolute top-3 left-3")}>
            <HerksagonIconWhite />
          </div>
        </div>
      </section>

      <section className={cn("mt-10")}>
        <div className={cn("bg-blue-900 rounded-lg w-2/12 p-4")}>
          <div className={cn("float-right")}>
            <XIcon />
          </div>
          <p
            style={{ fontFamily: "Winston-Bold" }}
            className={cn("text-white font-bold")}
          >
            EXPAND DOUBLE APPLE
          </p>
          <p className={cn("text-gray-500")}>The Double Apple One</p>
          <p className={cn("text-gray-400 pt-2 pb-2 text-sm")}>
            A one-of-a-kind capsule cigarette, the Summer Mix offers smokers
            Winston’s original smooth experience, mixed with the unique Double
            Apple taste just one click away.
          </p>
          <li className={cn("text-white list-none")}>
            <div className={cn("relative")}>
              <a href=''>READ MORE</a>
              <div className={cn("absolute top-0 left-24")}>
                <RightArrowIcon />
              </div>
            </div>
          </li>
        </div>
      </section>

      <section className={cn("mt-10")}>
        <div className={cn("flex")}>
          <div className={cn("flex-shrink-0")}>
            <img
              className={cn("w-20 h-20 rounded-lg")}
              src='https://cdn.pixabay.com/photo/2019/10/23/06/30/hamburg-4570577__340.jpg'
              alt=''
            />
          </div>
          <div className={cn("flex-shrink ml-3 ")}>
            <p className={cn(" font-bold w-auto")}>NAME OF GAME ON TWO LINES</p>
            <div className={cn("float-right")}>
              <div className={cn("relative")}>
                <HeksagonIcon />
                <div className={cn("absolute top-1 ")}>
                  <p className={cn("text-white text-xs")}>+50 </p>
                </div>
              </div>
            </div>
            <p className={cn("font-bold text-sm text-gray-600")}>
              Type of game
            </p>
          </div>
          <div className={cn("flex-shrink mt-7 ml-3 ")}>
            <button
              className={cn(
                "bg-red-600 px-1 py-1 rounded-lg text-center text-white text-sm"
              )}
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      </section>
      <section className={cn("mt-10")}>
        <div className={cn("relative")}>
          <RedHeksagonIcon />
          <div className={cn("absolute bottom-0 left-1 text-center")}>
            <p className={cn("text-white text-sm")}>w</p>
          </div>
        </div>
      </section>

      <section className={cn("mt-10")}>
        <div>
          <div className={cn("relative")}>
            <HeksagonIcon />
            <div className={cn("absolute top-1")}>
              <p className={cn("text-white text-xs")}>+50</p>
            </div>
          </div>
        </div>
      </section>

      <section className={cn("mt-10")}>
        <div>
          <div className={cn("relative")}>
            <WhiteHeksagonIcon />
            <div className={cn("absolute top-2 left-1.5")}>
              <p className={cn("text-red-500 font-bold text-xs")}>+50</p>
              <p
                className={cn(
                  "text-red-500 font-bold text-xs absolute left-2 -bottom-2"
                )}
              >
                W
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={cn("mt-10")}>
        <div className={cn("flex ")}>
          <div className={cn("flex-shrink")}>
            <img
              className={cn("w-38 h-32 rounded-lg")}
              src='https://cdn.pixabay.com/photo/2019/10/23/06/30/hamburg-4570577__340.jpg'
              alt=''
            />
          </div>
          <div className={cn("flex-shrink ml-3 mt-3")}>
            <HorizontalCigarette />
          </div>
          <div className={cn("flex-shrink ml-1 mt-3")}>
            <p
              className={cn("font-bold text-3xl")}
              style={{ fontFamily: "Winston-Medium" }}
            >
              NAME OF<div>USER</div>
            </p>

            <div className={cn("flex")}>
              <div className={cn("flex-shrink mt-1 mr-1")}>
                <div className={cn("relative")}>
                  <RedHeksagonIcon />
                  <div className={cn("absolute bottom-0 left-1 text-center")}>
                    <p className={cn("text-white text-sm")}>w</p>
                  </div>
                </div>
              </div>
              <div className={cn("flex-shrink")}>
                <p>5071</p>
                <p>ID#8197391798</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cn("mt-10")}>
        <div className={cn("flex")}>
          <div className={cn("flex-shrink")}>
            <HorizontalCigarette />
          </div>
          <div className={cn("flex-shrink mt-1")}>
            <p
              className={cn("font-bold text-3xl")}
              style={{ fontFamily: "Winston-Medium" }}
            >
              SONGS TO LET<div>OFF STEAM</div>
            </p>
            <p className={cn("w-4/12 text-gray-500")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      <section className={cn("mt-10")}>
        <li className={cn("text-red-600 list-none font-bold text-sm")}>
          <div className={cn("relative")}>
            <a href=''>VIEW ALL</a>
            <div className={cn("absolute top-0 left-16")}>
              <RightArrowIconRed />
            </div>
          </div>
        </li>
      </section>

      <section className={cn("mt-10")}>
        <div className={cn("flex flex-row ")}>
          <div className={cn("bg-white shadow-xl px-12 py-5")}>
            <div className={cn("flex flex-row")}>
              <div className={cn("mt-1")}>
                <WinsIcon
                  icon={<HomeIcon />}
                  color='text-red-500'
                  title='HOME'
                  width={5}
                  height={5}
                />
              </div>

              <div className={cn("ml-12 mt-2")}>
                <WinsIcon
                  icon={<EntertainmentIcon />}
                  color='text-red'
                  title='ENTERTAINMENT'
                  width={6}
                  height={6}
                />
              </div>
              <div className={cn("ml-24 mt-1.5")}>
                <WinsIcon
                  icon={<GameIcon />}
                  color='text-red'
                  title='GAME'
                  width={6}
                  height={6}
                />
              </div>
              <div className={cn("ml-12 mt-1")}>
                <WinsIcon
                  icon={<AccountIcon />}
                  color='text-red'
                  title='PROFILE'
                  width={5}
                  height={5}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cn("mt-10")}>
        <div className={cn("bg-black w-3/12 p-6")}>
          <p className={cn("text-white pb-2")}>Choose language</p>
          <button className={cn(" bg-white w-3/12 rounded")}>English</button>
          <button className={cn("bg-white w-3/12 rounded ml-2")}>
            العربيّة
          </button>
        </div>
      </section>

      <section>
        <div className={cn()}></div>
      </section>

      <script src='script.js'></script>
      <section className={cn("pt-12")}>
        <div className={cn("grid grid-cols-4")}>
          <div className={cn("col-span-3")}>
            <div className={cn("border-2 border-black p-4")}>
              <div className={cn("flex")}>
                <div className={cn("flex-shrink")}>
                  <img
                    className={cn("h-40 w-60")}
                    src='https://cdn.pixabay.com/photo/2021/12/07/14/00/river-6853339__480.jpg'
                    alt=''
                  />
                </div>
                <div className={cn("flex-shrink")}>
                  <div>title:</div>
                  <div className={cn("pt-28")}>description:</div>
                </div>
                <div className={cn("flex-shrink")}>
                  <div>price:</div>
                </div>
              </div>
            </div>
          </div>
          <button className={cn("border-2 border-black")}>3D</button>
        </div>
      </section>

      <button className={cn("border-2")}>asdsadsadsadsad</button>

      <section className={cn("pt-12 pb-12")}>
        <div>
          <p className={cn("bg-black text-white text-center p-16")}>MERSAD</p>
        </div>
      </section>

      <section>
        <div className={cn("border-2 border-green-200 rounded-xl p-4 w-60")}>
          <div className={cn("text-2xl")}>Header Aa Bb Cc 38PX</div>
          <div className={cn("text-xs")}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod Lorem ipsum dolor sit amet, consetetur
          </div>
        </div>
      </section>

      <section>
        <div
          className={cn(
            "border-2 border-green-200 rounded-xl p-4 w-60 bg-black"
          )}
        >
          <div className={cn("text-2xl text-green-400")}>
            Header Aa Bb Cc 38PX
          </div>
          <div className={cn("text-xs text-white")}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod Lorem ipsum dolor sit amet, consetetur
          </div>
        </div>
      </section>

      <section>
        <div className={cn("border-2 p-2")}>
          <div className={cn("grid grid-cols-3")}>
            <div className={cn("col-span-1")}>
              <p className={cn("text-blue-500 text-sm")}>Action</p>
            </div>
            <div className={cn("col-span-1")}>
              <p>Title</p>
            </div>
            <div className={cn("col-span-1")}>
              <p className={cn("text-blue-500 text-sm")}>Action</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <button className={cn("bg-green-200 rounded-full p-2")}>
          <p className={cn("text-sm text-black")}>primary button</p>
        </button>
      </section>

      <section>
        <button className={cn("bg-black rounded-full p-2")}>
          <p className={cn("text-sm text-green-200")}>secondary</p>
        </button>
      </section>

      <section>
        <div
          className={cn("bg-black flex justify-center justify-items-center")}
        >
          <SvgrMirsadLogo />
        </div>
      </section>

      <section>
        <p className={cn("text-black")}>choose your</p>
        <p className={cn("text-white")}>language</p>
      </section>

      <section>
        <div className={cn("bg-gray-100")}>
          <div className={cn("text-center")}>why</div>
          <div className={cn("text-green-300 text-center text-xl font-bold")}>
            mirsad
          </div>

          <div className={cn("relative")}>
            <div className={cn("bg-white p-4 rounded-lg pt-20 pb-20")}>
              <p className={cn("text-sm")}>
                With Mirsad, you’re an agent of justice keeping your city safe,
                an actor of progress from the simple convenience of your phone!
                Each one of your reports helps shape the world into a better
                place and earns you a reward.
              </p>
            </div>
            <div className={cn("absolute -top-16")}></div>
          </div>
        </div>
      </section>

      <section>
        <div className={cn("bg-gray-100")}>
          <div className={cn("text-center")}>how</div>
          <div className={cn("text-green-300 text-center text-xl font-bold")}>
            it works
          </div>

          <div className={cn("bg-white p-4 rounded-lg pt-20 pb-20")}>
            <div className={cn("flex")}>
              <div className={cn("flex-shrink cursor-pointer")}>
                <SvgrCamera />
              </div>
              <div className={cn("flex-shrink")}>
                <p className={cn("text-center ml-2")}>
                  Take a picture, film a video, or record an audio file.
                </p>
              </div>
            </div>
            <div className={cn("flex mt-4")}>
              <div className={cn("flex-shrink cursor-pointer")}>
                <SvgrFile />
              </div>
              <div className={cn("flex-shrink")}>
                <p className={cn("text-center ml-2")}>
                  Fill a report with your information.
                </p>
              </div>
            </div>
            <div className={cn("flex mt-4")}>
              <div className={cn("flex-shrink cursor-pointer")}>
                <SvgrSubmit />
              </div>
              <div className={cn("flex-shrink")}>
                <p className={cn("text-center ml-2")}>
                  Submit your report and wait to claim your reward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={cn("bg-gray-100")}>
          <div className={cn("text-center text-2xl")}>welcome on board</div>
          <div className={cn("text-green-300 text-center text-xl font-bold")}>
            future agent!
          </div>

          <div className={cn("relative")}>
            <div className={cn("bg-white p-4 rounded-lg pt-20 pb-20")}>
              <div className={cn("pb-3.5")}>
                <p className={cn("text-sm text-center font-bold")}>sign up</p>
                <p className={cn("text-sm text-center text-gray-500")}>
                  sign-up, your city needs you
                </p>
              </div>
              <div className={cn("pt-2 pb-2 flex justify-center items-center")}>
                <input
                  placeholder='Phone number'
                  className={cn(
                    "w-full rounded-xl p-1.5 border-2 border-gray-100"
                  )}
                  type='text'
                  name=''
                  id=''
                />
              </div>
              <div className={cn("pt-2 pb-2 flex justify-center items-center")}>
                <input
                  placeholder='password'
                  className={cn(
                    "w-full rounded-xl p-1.5 border-2 border-gray-100"
                  )}
                  type='text'
                  name=''
                  id=''
                />
              </div>
            </div>
            <div className={cn("flex justify-center items-center")}>
              <div className={cn("absolute -bottom-4")}>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={cn("bg-gray-100")}>
          <div className={cn("text-center text-2xl")}>verify your</div>
          <div className={cn("text-green-300 text-center text-xl font-bold")}>
            phone number
          </div>

          <div className={cn("relative")}>
            <div
              className={cn("bg-gray-50 container p-4 rounded-lg pt-20 pb-20")}
            >
              <div className={cn("pb-3.5")}>
                <p className={cn("text-sm text-center text-gray-500")}>
                  Verify your number with the code sent
                </p>
                <div className={cn("flex justify-center items-center pt-6")}>
                  <div className={cn("flex-shrink-0 ")}>
                    <div
                      className={cn(
                        " flex justify-center shadow-2xl items-center w-12 h-12 rounded-lg bg-white"
                      )}
                    >
                      5
                    </div>
                  </div>
                  <div className={cn("flex-shrink-0 ml-4")}>
                    <div
                      className={cn(
                        " flex justify-center items-center w-12 h-12 rounded-lg shadow-2xl bg-white"
                      )}
                    ></div>
                  </div>
                  <div className={cn("flex-shrink-0 ml-4")}>
                    <div
                      className={cn(
                        " flex justify-center items-center w-12 h-12 rounded-lg shadow-2xl bg-white"
                      )}
                    ></div>
                  </div>
                  <div className={cn("flex-shrink-0 ml-4")}>
                    <div
                      className={cn(
                        " flex justify-center items-center w-12 h-12 rounded-lg shadow-2xl bg-white"
                      )}
                    ></div>
                  </div>
                </div>
                <p className={cn("text-sm text-center text-gray-500 pt-6")}>
                  i did not receive a code
                </p>
                <p
                  className={cn(
                    "underline text-center text-black cursor-pointer "
                  )}
                >
                  resend
                </p>
              </div>
            </div>
            <div className={cn("flex justify-center items-center")}>
              <div className={cn("absolute -bottom-4")}>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={cn("bg-gray-100")}>
          <div className={cn("text-center")}>you're getting</div>
          <div className={cn("text-green-300 text-center text-xl font-bold")}>
            there
          </div>

          <div className={cn("relative")}>
            <div className={cn("bg-white p-4 rounded-lg pt-20 pb-20")}>
              <p className={cn("font-bold text-center")}>
                one step closer to become a mirsad agent
              </p>
              <p className={cn("text-center text-sm text-gray-400")}>
                All you have to do is book an appointment with us and help the
                Mirsad community grow faster.
              </p>
            </div>
            <div className={cn("flex justify-center items-center")}>
              {" "}
              <div className={cn("absolute -bottom-4")}>
                <Button />
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "underline flex justify-center items-center pt-6 cursor-pointer"
          )}
        >
          skip
        </div>
      </section>

      <section>
        <div className={cn("bg-gray-100")}>
          <div className={cn("text-center text-2xl")}>we're glad to have </div>
          <div className={cn("text-green-300 text-center text-xl font-bold")}>
            you <span className={cn("text-black font-normal")}>here</span>
          </div>
          <div className={cn("flex justify-center items-center pt-8 pb-8")}>
            <SvgrCircleNumb />
          </div>
          <div className={cn("relative")}>
            <div className={cn("bg-white p-4 rounded-lg pt-20 pb-20")}>
              <div className={cn("pb-3.5")}>
                <p className={cn("text-sm text-center font-bold")}>
                  please fill in the registration form to become a mirsad agent
                </p>
              </div>
              <div className={cn("pt-2 pb-2 flex justify-center items-center")}>
                <input
                  placeholder='full name'
                  className={cn(
                    "w-full rounded-xl p-1.5 border-2 border-gray-100"
                  )}
                  type='text'
                  name=''
                  id=''
                />
              </div>
              <div className={cn("pt-2 pb-2 flex justify-center items-center")}>
                <input
                  placeholder='email'
                  className={cn(
                    "w-full rounded-xl p-1.5 border-2 border-gray-100"
                  )}
                  type='text'
                  name=''
                  id=''
                />
              </div>

              <form action=''>
                <select
                  className={cn(
                    "w-full rounded-xl p-2 bg-white border-2 text-gray-400 border-gray-100"
                  )}
                  name=''
                  id=''
                >
                  <option value=''>choose the location of the quiz</option>
                </select>
              </form>
              <form className={cn("pt-2 pb-2")} action=''>
                <select
                  className={cn(
                    "w-full rounded-xl p-2 bg-white border-2 text-gray-400 border-gray-100"
                  )}
                  name=''
                  id=''
                >
                  <option value=''>choose the category</option>
                </select>
              </form>
              <div className={cn("flex mt-2")}>
                <div className={cn("flex-shrink-0 mt-1")}>
                  <SvgrAttach />
                </div>
                <div className={cn("flex-shrink-0 ml-2")}>
                  <p>attach an image of yourself</p>
                </div>
              </div>
              <div className={cn("flex mt-2")}>
                <div className={cn("flex-shrink-0 mt-1")}>
                  <SvgrAttach />
                </div>
                <div className={cn("flex-shrink-0 ml-2")}>
                  <p>attach criminal record paper</p>
                </div>
              </div>
              <div className={cn("flex mt-2")}>
                <div className={cn("flex-shrink-0 mt-1")}>
                  <SvgrAttach />
                </div>
                <div className={cn("flex-shrink-0 ml-2")}>
                  <p>attach good conduct and behavior</p>
                </div>
              </div>
            </div>
            <div className={cn("flex justify-center items-center")}>
              <div className={cn("absolute -bottom-4")}>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SvgrCircleNumb />
      </section>
    </div>
  );
}
