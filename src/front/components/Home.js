import '../../front/styles/home.css';
import injectContext from '../store/appContext';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar />
      {/* <Footer /> */}
    </div>
  );
};

export default injectContext(Home);
