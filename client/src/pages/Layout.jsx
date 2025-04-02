import {Outlet, Link} from 'react-router';

//Components
import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';

const Layout = () => {

    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout