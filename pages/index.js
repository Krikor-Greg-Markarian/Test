import HomeIcon from "../components/HomeIcon";
import WinsIcon from "../components/WinsIcon";
import GameIcon from "../components/GameIcon";
import EntertainmentIcon from "../components/EntertainmentIcon";
import AccountIcon from "../components/AccountIcon";

export default function Home(props) {
  return (
    <div>
      <WinsIcon
        icon={<HomeIcon />}
        color="text-red-500"
        title="HOME"
        width={12}
        height={10}
      />

      <WinsIcon
        icon={<EntertainmentIcon />}
        color="text-red"
        title="ENTERTAINMENT"
        width={12}
        height={10}
      />

      <WinsIcon
        icon={<GameIcon />}
        color="text-red"
        title="GAME"
        width={12}
        height={10}
      />
      <WinsIcon
        icon={<AccountIcon />}
        title="ACCOUNT"
        color="text-red"
        width={12}
        height={10}
      />
    </div>
  );
}
