import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Footer from '../Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
}

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};