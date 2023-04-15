import Filter from '../../components/Home/Filter/Filter';
import imageHero from '../../assets/home-hero.png';
import imageHero2 from '../../assets/home-hreo-2.png';
import LastMovies from '../../components/Home/LastMovies/LastMovies';
import './Home.scss'

const API_FILTER = process.env.REACT_APP_API_FILTER;

const Home = () => {
  return (
    <div className='home'>
      <div className='home__img'>
        <div className='home__text'>
          <h2>Bienvenidos</h2>
          <p>
            Millones de películas, programas de televisión y personas por
            descubrir. Explora ahora.
          </p>
        </div>
        <img className='home__img-hero' src={imageHero} alt='Bienvenidos' />
      </div>
      <Filter
        title='Tendencias'
        values={[
          { key: 'Hoy', value: 'trending/all/day', active: true },
          { key: 'Esta semana', value: 'trending/all/week', active: false },
        ]}
      ></Filter>
      <div className='home__last-movies'>
        <h2>Últimos avances de películas</h2>
        <LastMovies></LastMovies>
      </div>
      <Filter
        title='Lo más popular'
        values={[
          { key: 'Películas', value: '/movie/popular' },
          { key: 'Televisión', value: '/tv/popular' },
        ]}
      ></Filter>
      <div className='home__hero'>
        <img src={imageHero2} />
        <div className='home__hero-info'>
          <label>Únete hoy</label>
          <p>Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, Disney Plus, fuboTV y Apple TV Plus.</p>
        </div>
      </div>
      <Filter
        title='Ver gratis'
        values={[
          { key: 'Películas', value: '/discover/movie', filter: API_FILTER },
          { key: 'Televisión', value: '/discover/tv', filter: API_FILTER },
        ]}
      ></Filter>
    </div>
  );
};

export default Home;
