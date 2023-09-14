import Data from './Data';
import ScrollDown from './ScrollDown';
import Social from './Social';
import './home.css';

type Props = {};

const Home = (props: Props) => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
