import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Card from '../../components/Card/Card';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { roundedToFixed, generateColor } from '../../utils/utils';
import { usePagination } from '../../hooks/usePagination';
import Button from '../../components/Button/Button';
import './MovieDetail.scss';

const API_IMAGE = process.env.REACT_APP_API_IMAGE;

const MovieDetail = () => {
  const { category, id } = useParams();
  const [detailValues] = useFetch(`${category}/${id}`);
  const [mainCast] = useFetch(`${category}/${id}/credits`);
  const [recommendations] = useFetch(`${category}/${id}/recommendations`);
  const genres = detailValues
    ? detailValues.genres.map((item) => item.name).toString()
    : '';
  const porcentVote = roundedToFixed(detailValues?.vote_average) * 10;
  const colorVote = generateColor(porcentVote);

  const [castValues, showMoreCast, theAreMoreCast] = usePagination(
    mainCast?.cast,
    4
  );
  const [
    recommendationsValues,
    showMoreRecommendations,
    theAreMoreRecommendations,
  ] = usePagination(recommendations?.results, 4);

  const selectedJobs = [
    'Editor',
    'Director',
    'Screenplay',
    'Story',
    'Screenplay',
    'Characters',
  ];

  const jobs = mainCast?.crew?.filter((crewMember) => {
    return selectedJobs.some((job) => crewMember.job === job);
  });

  const crew = jobs
    ?.reduce((acc, curr) => {
      const index = acc.findIndex((obj) => obj.name === curr.name);
      if (index === -1) {
        acc.push({ id: curr.id, name: curr.name, jobs: [curr.job] });
      } else {
        acc[index].jobs.push(curr.job);
      }
      return acc;
    }, [])
    .sort((a, b) => b.jobs.length - a.jobs.length);

  return (
    <div className='movie-detail'>
      {detailValues && (
        <div className='movie-detail__wrapper'>
          <img src={`${API_IMAGE}${detailValues.poster_path}`} />
          <p className='movie-detail__title'>{detailValues.original_title}</p>
          <p className='movie-detail__date'>
            {detailValues.release_date} ({detailValues.original_language}) |{' '}
            {genres} | {detailValues.runtime}
          </p>
          <div className='movie-detail__average'>
            <ProgressBar
              value={`${porcentVote}%`}
              color={colorVote}
            ></ProgressBar>
            <p>Puntuacion de usuario</p>
          </div>
          <div className='movie-detail__sinopsis'>
            <label>Vista general</label>
            <p>{detailValues.overview}</p>
          </div>
          <div className='movie-detail__info'>
            {crew &&
              crew.map((item) => {
                return (
                  <>
                    <label>{item.name}</label>
                    <p>{item.jobs.toString()}</p>
                  </>
                );
              })}
          </div>
        </div>
      )}
      <div className='movie-detail__cast-recommendations'>
        <label>Reparto principal</label>
        <div className='movie-detail__cast-wrapper'>
          {castValues &&
            castValues.map((item) => {
              return (
                <Card
                  circleInfo
                  key={item.id}
                  item={item}
                  onClick={() => false}
                ></Card>
              );
            })}
        </div>
        <div className='movie-detail__button'>
          <Button
            type='secondary'
            text='+ More'
            onClick={() => (theAreMoreCast ? showMoreCast() : false)}
          />
        </div>
      </div>
      <div className='movie-detail__cast-recommendations'>
        <label>Recomendaciones</label>
        <div className='movie-detail__cast-wrapper'>
          {recommendationsValues &&
            recommendationsValues.map((item) => {
              return (
                <Card
                  key={item.id}
                  item={item}
                  type='horizontal'
                  onClick={() => false}
                ></Card>
              );
            })}
        </div>
        <div className='movie-detail__button'>
          <Button
            type='secondary'
            text='+ More'
            onClick={() => (theAreMoreRecommendations ? showMoreRecommendations() : false)}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
