import navbarStyles from '../styles/Navbar.module.scss';
import requests from '../utils/requests';
import { useRouter } from 'next/router';

function Navbar() {
    const router = useRouter();
    return (
        <nav className={navbarStyles.container}>
            <div>
                {Object.entries(requests).map(([key, {title, url}]) => (
                    <h2 
                    key={key}
                    onClick={() => router.push(url)}
                    >
                        {title}
                    </h2>
                ))}
            </div>
            <div className={navbarStyles.fade}></div>
        </nav>
    )
}

export default Navbar
