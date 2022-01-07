import layoutStyle from '../styles/Layout.module.scss';
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function Layout({ children }) {
    return (
        <div className={layoutStyle.container}>
            <Header />
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
