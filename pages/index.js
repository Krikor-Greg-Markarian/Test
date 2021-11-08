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

export default function Home(props) {
  return (
    <div>
      <section>
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
      </section>

      <section className={cn("mt-20")}>
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
              <Link href="">
                <a href="">Radio</a>
              </Link>
            </li>
            <li className={cn("text-gray-500 list-none")}>
              <Link href="">
                <a href="">Events</a>
              </Link>
            </li>
            <li className={cn("text-gray-500 list-none")}>
              <Link href="">
                <a href="">Academy</a>
              </Link>
            </li>
            <div className={cn("flex")}>
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
              <Link href="">
                <a href="">Game Name</a>
              </Link>
            </li>
            <li className={cn("text-gray-500 list-none")}>
              <Link href="">
                <a href="">Long Game Name</a>
              </Link>
            </li>
            <li className={cn("text-gray-500 list-none")}>
              <Link href="">
                <a href="">Game Name</a>
              </Link>
            </li>
            <div className={cn("flex")}>
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

        <div className={cn("flex border-2")}>
          <div className={cn("flex-shrink flex border-2")}>
            <img
              className={cn("rounded-lg w-20 h-20")}
              src="https://cdn.pixabay.com/photo/2019/10/23/06/30/hamburg-4570577__340.jpg"
              alt=""
            />
          </div>
          <div className={cn("flex-shrink mt-4 border-2")}>
            <p
              className={cn("font-bold ")}
              style={{ fontFamily: "Winston-Medium" }}
            >
              TECH
            </p>

            <p>10 Songs</p>
          </div>
        </div>
      </section>

      <section>
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
        <div className={cn("flex")}>
          <div className={cn(" flex-shrink-0")}>
            <img
              className={cn("w-40 h-40 rounded-lg")}
              src="https://cdn.pixabay.com/photo/2019/10/23/06/30/hamburg-4570577__340.jpg"
              alt=""
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
              src="https://cdn.pixabay.com/photo/2019/10/23/06/30/hamburg-4570577__340.jpg"
              alt=""
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
          src="https://cdn.pixabay.com/photo/2019/10/23/06/30/hamburg-4570577__340.jpg"
          alt=""
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

      <section></section>
    </div>
  );
}