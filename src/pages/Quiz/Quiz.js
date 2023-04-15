import { useEffect, useRef, useState } from 'react';
import { setFetch } from '../../utils/utils';
import Button from '../../components/Button/Button';
import defaultImage from '../../assets/default-image.png';
import './Quiz.scss';

const API_IMAGE = process.env.REACT_APP_API_IMAGE;

const Quiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [movieDetail, setMovieDetail] = useState(null);
  const [movieResponse, setMovieResponse] = useState({
    title: '???',
    img: defaultImage
  });
  const [message, setMessage] = useState({
    type: '',
    message: ''
  });
  const responseRef = useRef(null);
  const genres = movieDetail
    ? movieDetail.genres.map((item) => item.name).toString()
    : '';

  const getPage = () => Math.floor(Math.random() * (100 - 1 + 1) + 1);

  const getQuiz = async () => {
    const movies = await setFetch('/movie/top_rated', `page=${getPage()}`);
    return movies.results.slice(0, 4);
  };

  const getMovieDetail = async (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[randomIndex];
    const response = await setFetch(`/movie/${movie.id}`);
    return response;
  };

  const resetQuiz = async () => {
    const movies = await getQuiz();
    const movieDetail = await getMovieDetail(movies);
    setQuiz(movies);
    setMovieDetail(movieDetail);
    setMovieResponse({
      title: '???',
      img: defaultImage
    })
    setMessage({
      type: '',
      message: ''
    });
    responseRef.current = null;
  };

  const resolveQuiz = () => {
    const title = movieDetail.original_title;
    setMovieResponse({
      title,
      img: `${API_IMAGE}${movieDetail.poster_path}`
    })
    setMessage({
      type: responseRef.current === title ? 'quiz__message--success' : 'quiz__message--error',
      message: responseRef.current === title ? 'Ganaste' : 'Perdiste'
    });
  };

  useEffect(() => {
    const getValues = async () => {
      const movies = await getQuiz();
      const movieDetail = await getMovieDetail(movies);
      setQuiz(movies);
      setMovieDetail(movieDetail);
    };

    getValues();
  }, []);

  console.log(movieDetail)

  return (
    <div className='quiz'>
      <div className='quiz__info'>
        {movieDetail && (
          <>
            <img src={movieResponse.img}></img>
            <p className='quiz__title'>{movieResponse.title}</p>
            <p className='quiz__date'>
              {movieDetail.release_date} ({movieDetail.original_language}) |{' '}
              {genres} | {movieDetail.runtime}
            </p>
            <div className='quiz__sinopsis'>
              <label>Sinopsis</label>
              <p>{movieDetail.overview}</p>
            </div>
          </>
        )}
      </div>
      <div className='quiz__response'>
        <label>Opciones</label>
        <div className='quiz__response-wrapper'>
          {quiz &&
            quiz.map((item) => {
              return (
                <div
                  className='quiz__reponse-button'
                  key={item.id}
                  onClick={() => (responseRef.current = item.original_title)}
                >
                  {item.original_title}
                </div>
              );
            })}
        </div>
      </div>
      <p className={`quiz__message ${message.type}`}>{message.message}</p>
      <div className='quiz__button'>
        <Button text='Reiniciar' onClick={() => resetQuiz()}></Button>
        <Button text='Resolver' onClick={() => resolveQuiz()}></Button>
      </div>
    </div>
  );
};

export default Quiz;
