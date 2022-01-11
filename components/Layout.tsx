import layoutStyle from '../styles/Layout.module.scss';
import Header from './Header'
import Navbar from './Navbar'

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
