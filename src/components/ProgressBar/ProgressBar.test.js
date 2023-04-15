import { customTestingRender } from '../../utils/test-utils';
import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  test('Check that progressBar render', () => {
    const { container } = customTestingRender(<ProgressBar />);
    const headerLogo = container.querySelector('.progress-bar');
    expect(headerLogo).toBeInTheDocument();
  });

  test('Check that the progressBar has the corresponding color class', () => {
    const { container } = customTestingRender(<ProgressBar color='red' />);

    const button = container.querySelector('.progress-bar__color');
    expect(button).toHaveClass('progress-bar__color--red');
  });

  test('Check that the progressBar render value', () => {
    const { container } = customTestingRender(<ProgressBar value='70%' />);

    const button = container.querySelector('.progress-bar__value');
    expect(button).toHaveTextContent('70%');
  });
});
