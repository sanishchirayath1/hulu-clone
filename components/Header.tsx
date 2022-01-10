import headerStyle from "../styles/Header.module.scss";
import {
    HomeIcon,
    UserIcon,
    SearchIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";


function Header() {
    return (
        <header className={headerStyle.container}>
            <div className={headerStyle.iconContainer}>
                <HeaderItem title="HOME" Icon={HomeIcon}/>
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
                <HeaderItem title="SEARCH" Icon={SearchIcon}/>
                <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
            </div>
            <Image 
                src="/images/hulu-white.png"
                width={200}
                height={100}
                alt="Hulu clone logo"
                // placeholder="blur"
            />
        </header>
    )
}

export default Header
