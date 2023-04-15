import { customTestingRender } from '../../utils/test-utils';
import Button from './Button';

describe('Button component', () => {
  test('Check that button render text', () => {
    const { container } = customTestingRender(<Button text='Text button' />);

    const button = container.querySelector('button');
    expect(button).toHaveTextContent('Text button');
  });

  test('Check that button has class "button"', () => {
    const { container } = customTestingRender(<Button text='' />);

    const button = container.querySelector('button');
    expect(button).toHaveClass('button');
  });

  test('Check that button has default class "button--primary"', () => {
    const { container } = customTestingRender(<Button text='' />);

    const button = container.querySelector('button');
    expect(button).toHaveClass('button--primary');
  });

  test('Check that the button does not have the class "button--active" when the active property is false', () => {
    const { container } = customTestingRender(<Button text='' />);

    const button = container.querySelector('button');
    expect(button).not.toHaveClass('button--active');
  });

  test('Check that the button has the class "button--active" when the active property is true', () => {
    const { container } = customTestingRender(<Button text='' active/>);

    const button = container.querySelector('button');
    expect(button).toHaveClass('button--active');
  });
});
