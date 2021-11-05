import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeIcon from "../components/HomeIcon";

import WinsIcon from "../components/WinsIcon";
import GameIcon from "../components/GameIcon";
import cn from "classnames";

export default function Home() {
  return (
    <div>
      <WinsIcon icon= {<HomeIcon />, <GameIcon/> }   width={100} height={100} color="#cd1521" />
      

      <p className= {cn("font-bold")}>asdsadsad</p>
      
    </div>
  );
}
