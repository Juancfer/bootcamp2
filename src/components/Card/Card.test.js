import { customTestingRender } from '../../utils/test-utils';
import Card from './Card';

describe('Card component', () => {
  const item = {
    original_title: 'title',
    release_date: '31/02/2023'
  };

  test('Check that card render', () => {
    const { container } = customTestingRender(<Card item={item} />);

    const card = container.querySelector('.card');
    expect(card).toBeInTheDocument();
  });

  test('Check that the card has the class corresponding to the type property', () => {
    const { container } = customTestingRender(<Card item={item} type='horizontal'/>);

    const card = container.querySelector('.card');
    expect(card).toHaveClass('card--horizontal');
  });

  test('Check that the card has the default type class', () => {
    const { container } = customTestingRender(<Card item={item}/>);

    const card = container.querySelector('.card');
    expect(card).toHaveClass('card--vertical');
  });

  test('Check that card render title', () => {
    const { container } = customTestingRender(<Card item={item} />);

    const card = container.querySelector('.card__title');
    expect(card).toHaveTextContent(item.original_title);
  });

  test('Check that card render description', () => {
    const { container } = customTestingRender(<Card item={item} />);

    const card = container.querySelector('.card__description');
    expect(card).toHaveTextContent(item.release_date);
  });
});
