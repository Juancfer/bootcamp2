import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import Card from '../../Card/Card';
import { setFetch } from '../../../utils/utils';
import { usePagination } from '../../../hooks/usePagination';
import './Filter.scss';

const Filter = ({ title, values }) => {
  const navigate = useNavigate();
  const [apiValues, setApiValues] = useState([]);
  const [firstItems, showMore, theAreMore] = usePagination(apiValues, 4);

  const getFetch = async (apiUrl, filter) => {
    const movies = await setFetch(apiUrl, filter);
    setApiValues(movies.results);
  };

  useEffect(() => {
    getFetch(values[0].value);
  }, []);

  return (
    <div className='filter'>
      <div className='filter__info'>
        <p>{title}</p>
        {values &&
          values.map((item) => {
            return (
              <Button
                key={`button-${item.key}`}
                active={item.active}
                text={item.key}
                onClick={() => getFetch(item.value, item.filter)}
              ></Button>
            );
          })}
      </div>
      <div className='filter__cards'>
        {firstItems.length > 0 &&
          firstItems.map((item) => {
            return (
              <Card
                circleInfo
                key={item.id}
                item={item}
                onClick={() =>
                  navigate(
                    `${item.media_type ? item.media_type : 'movie'}/${item.id}`
                  )
                }
              ></Card>
            );
          })}
      </div>
      <div className='filter__button'>
        <Button
          type='secondary'
          text='+ More'
          onClick={() => (theAreMore ? showMore() : false)}
        />
      </div>
    </div>
  );
};

export default Filter;
