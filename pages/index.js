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
import Button from "../mirsadComponents/Button";

import SvgrMailBox from "../svgrMirsad/SvgrMailBox";
import BoxWithDiscriptions from "../mirsadComponents/BoxWithDiscriptions";
import axios from "axios";
import BlackBoxWithDescription from "../mirsadComponents/BlackBoxWithDescription";
import GreenBackgroundButton from "../mirsadComponents/GreenBackgroundButton";
import BlackBackgroundColor from "../mirsadComponents/BlackBackgroundColor";
import WhyMirsad from "../mirsadComponents/WhyMirsad";
import AttachIconWithDescription from "../mirsadComponents/AttachIconWithDescription";
import WelcomeSignUp from "../mirsadComponents/WelcomeSignUp";
import VerifyPhoneNumber from "../mirsadComponents/VerifyPhoneNumber";
import GettingThere from "../mirsadComponents/GettingThere";
import GladToHaveYou from "../mirsadComponents/GladToHaveYou";
import GladToHaveYou2 from "../mirsadComponents/GladToHaveYou2";
import Mailbox from "../mirsadComponents/Mailbox";
import ReportType from "../mirsadComponents/ReportType";
import DescriptionBox from "../mirsadComponents/DescriptionBox";
import ReportTypeBlack from "../mirsadComponents/ReportTypeBlack";
import TermsCondBox from "../mirsadComponents/TermsCondBox";
import ReportSubmitted from "../mirsadComponents/ReportSubmitted";
import IlligalParking from "../mirsadComponents/IlligalParking";
import TypeOfInfringment from "../mirsadComponents/TypeOfInfringment";
import DescriptionBoxWhite from "../mirsadComponents/DescriptionBoxWhite";
import SvgrLocation from "../svgrMirsad/SvgrLocation";
import SvgrLevel from "../svgrMirsad/SvgrLevel";
import Profile from "../mirsadComponents/Profile";
import RecentMirsads from "../mirsadComponents/RecentMirsads";
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
        {props.box.map((item, idx) => (
          <BoxWithDiscriptions
            key={idx}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>

      <section>
        {props.blackBox.map((item, idx) => (
          <BlackBoxWithDescription
            key={idx}
            title={item.title}
            description={item.description}
          />
        ))}
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
        {props.greenButton.map((item, idx) => (
          <GreenBackgroundButton buttonName={item.buttonName} />
        ))}
      </section>

      <section>
        {props.blackButton.map((item, idx) => (
          <BlackBackgroundColor buttonName={item.buttonName} />
        ))}
      </section>

      <section>
        <p className={cn("text-black")}>choose your</p>
        <p className={cn("text-white")}>language</p>
      </section>

      <section>
        {props.whyMirsad.map((item, idx) => (
          <WhyMirsad
            why={item.why}
            mirsad={item.mirsad}
            description={item.description}
          />
        ))}
      </section>

      <section>
        {props.howitworks.map((item, idx) => (
          <AttachIconWithDescription
            how={item.how}
            itworks={item.itworks}
            pictureDiscription={item.pictureDiscription}
            reportDiscription={item.reportDiscription}
            submitDescription={item.submitDescription}
          />
        ))}
      </section>

      <section>
        {props.WelcomeSignUp.map((item, idx) => (
          <WelcomeSignUp
            greetings={item.greetings}
            futureAgent={item.futureAgent}
            signUp={item.signUp}
            description={item.description}
            buttonName={item.buttonName}
          />
        ))}
      </section>

      <section className='pt-12 pb-12'>
        {props.VerifyPhoneNumber.map((item, idx) => (
          <VerifyPhoneNumber
            verify={item.verify}
            phoneNumber={item.phoneNumber}
            description={item.description}
            didNotReceive={item.didNotReceive}
            resend={item.resend}
            buttonName={item.buttonName}
          />
        ))}
      </section>

      <section className='pt-12 pb-12'>
        {props.gettingThere.map((item, idx) => (
          <GettingThere
            getting={item.getting}
            there={item.there}
            title={item.title}
            description={item.description}
            buttonName={item.buttonName}
            name={item.name}
          />
        ))}
      </section>

      <section className={cn("pt-12 pb-12")}>
        {props.gladToHaveYouHere.map((item, idx) => (
          <GladToHaveYou
            glad={item.glad}
            you={item.you}
            here={item.here}
            title={item.title}
            attachImage={item.attachImage}
            attachRecord={item.attachRecord}
            attachConduct={item.attachConduct}
            buttonName={item.buttonName}
          />
        ))}
      </section>

      <section className={cn("pt-12 pb-12")}>
        {props.gladToHaveYouHere2.map((item, idx) => (
          <GladToHaveYou2
            glad={item.glad}
            you={item.you}
            here={item.here}
            title={item.title}
            chooseDates={item.chooseDates}
            chooseTiming={item.chooseTiming}
            buttonName={item.buttonName}
          />
        ))}
      </section>
      {props.mailBox.map((item, idx) => (
        <Mailbox
          mailBox={item.mailBox}
          notification={item.notification}
          checkMailBox={item.checkMailBox}
          description={item.description}
          buttonName={item.buttonName}
        />
      ))}

      <section className={cn("pt-12 pb-12")}></section>

      <section className='pt-12 pb-12'>
        {props.reportType.map((item, idx) => (
          <ReportType name={item.name} />
        ))}
      </section>

      <section className='pt-12 pb-12'>
        {props.descriptionBox.map((item, idx) => (
          <DescriptionBox text={item.text} />
        ))}
      </section>

      <section className='pt-12 pb-12'>
        {props.reportTypeBlack.map((item, idx) => (
          <ReportTypeBlack text={item.text} />
        ))}
      </section>

      <section>
        {props.TermsCondBox.map((item, idx) => (
          <TermsCondBox
            agree={item.agree}
            terms={item.terms}
            and={item.and}
            privacyPolicy={item.privacyPolicy}
          />
        ))}
      </section>

      <section className='pt-12 pb-12'>
        {props.reportSubmitted.map((item, idx) => (
          <ReportSubmitted
            title={item.title}
            been={item.been}
            submitted={item.submitted}
          />
        ))}
      </section>

      <section className='pt-12 pb-12'>
        {props.IlligalParking.map((item, idx) => (
          <IlligalParking title={item.title} description={item.description} />
        ))}
      </section>

      <section className='pt-12 pb-12'>
        {props.TypeOfInfringment.map((item, idx) => (
          <TypeOfInfringment
            title={item.title}
            description={item.description}
            subTitle={item.subTitle}
            subDescription={item.subDescription}
          />
        ))}
      </section>

      <section className='pt-12 pb-12'>
        {props.DescriptionBoxWhite.map((item, idx) => (
          <DescriptionBoxWhite
            title={item.title}
            description={item.description}
          />
        ))}
      </section>

      <section className='pt-12 pb-12'>
        {props.profile.map((item, idx) => (
          <Profile
            greeting={item.greeting}
            location={item.location}
            level={item.level}
            imageUrl={item.imageUrl}
          />
        ))}
      </section>

      <section className='pt-12 pb-12'>
        {props.recentMirsads.map((item, idx) => (
          <RecentMirsads
            title={item.title}
            category={item.category}
            date={item.date}
            time={item.time}
            buttonName={item.buttonName}
            isPending={item.isPending}
          />
        ))}
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/hello");

  return {
    props: {
      box: response.data.box,
      blackBox: response.data.blackBox,
      greenButton: response.data.greenButton,
      blackButton: response.data.blackButton,
      whyMirsad: response.data.whyMirsad,
      howitworks: response.data.howitworks,
      WelcomeSignUp: response.data.WelcomeSignUp,
      VerifyPhoneNumber: response.data.VerifyPhoneNumber,
      gettingThere: response.data.gettingThere,
      skipOrAnyOtherButton: response.data.skipOrAnyOtherButton,
      gladToHaveYouHere: response.data.gladToHaveYouHere,
      gladToHaveYouHere2: response.data.gladToHaveYouHere2,
      mailBox: response.data.mailBox,
      reportType: response.data.reportType,
      descriptionBox: response.data.descriptionBox,
      reportTypeBlack: response.data.reportTypeBlack,
      TermsCondBox: response.data.TermsCondBox,
      reportSubmitted: response.data.reportSubmitted,
      IlligalParking: response.data.IlligalParking,
      TypeOfInfringment: response.data.TypeOfInfringment,
      DescriptionBoxWhite: response.data.DescriptionBoxWhite,
      profile: response.data.profile,
      recentMirsads: response.data.recentMirsads,
    }, // will be passed to the page component as props
  };
}
