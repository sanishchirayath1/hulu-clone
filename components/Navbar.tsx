import navbarStyles from '../styles/Navbar.module.scss';
import requests from '../utils/requests';
import { useRouter } from 'next/router';

function Navbar() {
    const router = useRouter();
    return (
        <nav className={navbarStyles.container}>
            <ul>
                {Object.entries(requests).map(([key, {title, url}]) => (
                    <li 
                    key={key}
                    onClick={() => router.push(`?genre=${key}`)}
                    >
                        {title}
                    </li>
                ))}
            </ul>
            <div className={navbarStyles.fade}></div>
        </nav>
    )
}

export default Navbar
