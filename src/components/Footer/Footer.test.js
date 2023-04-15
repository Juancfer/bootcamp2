import { customTestingRender } from '../../utils/test-utils';
import Footer from './Footer';

describe('Footer component', () => {
  test('Check that footer renders the logo', () => {
    const { container } = customTestingRender(
      <Footer/>
    );
    const footerLogo = container.querySelector('img');
    expect(footerLogo).toBeInTheDocument();
  });
});
