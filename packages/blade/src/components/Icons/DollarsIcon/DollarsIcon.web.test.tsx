import DollarsIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<DollarsIcon />', () => {
  it('should render DollarsIcon', () => {
    const { container } = renderWithTheme(
      <DollarsIcon color="feedback.icon.neutral.intense" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
