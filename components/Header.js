import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItems from "./HeaderItems";
function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItems title='Home' Icon={HomeIcon} />
        <HeaderItems title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderItems title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderItems title='COLLECTION' Icon={CollectionIcon} />
        <HeaderItems title='SEARCH' Icon={SearchIcon} />
        <HeaderItems title='ACCOUNT' Icon={UserIcon} />
      </div>
      <div>
        <a className='font-extrabold  text-xl'>HULU</a>
      </div>
    </header>
  );
}

export default Header;
