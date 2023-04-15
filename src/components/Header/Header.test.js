import { customTestingRender } from '../../utils/test-utils';
import Header from './Header';

describe('Header component', () => {
  test('Check that header renders the logo', () => {
    const { container } = customTestingRender(
      <Header/>
    );
    const headerLogo = container.querySelector('.header__logo');
    expect(headerLogo).toBeInTheDocument();
  });

  test('Check that header renders links', () => {
    const { container } = customTestingRender(
      <Header/>
    );

    const headerLink = container.querySelector('.header__links');
    expect(headerLink).toBeInTheDocument();
  });

  test('Check that header renders lenguage button', () => {
    const { container } = customTestingRender(
      <Header/>
    );
    const headerLang = container.querySelector('.header__lang');
    expect(headerLang).toBeInTheDocument();
  });
});
