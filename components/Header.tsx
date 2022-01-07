import headerStyle from "../styles/Header.module.scss";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
    return (
        <header className={headerStyle.container}>
            <div>
                <HeaderItem />
            </div>
            <Image 
                src="/images/hulu-white.png"
                width={200}
                height={100}
                alt="Hulu clone logo"
            />
        </header>
    )
}

export default Header
