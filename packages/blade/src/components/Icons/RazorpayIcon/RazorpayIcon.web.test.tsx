import RazorpayIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<RazorpayIcon />', () => {
  it('should render RazorpayIcon', () => {
    const { container } = renderWithTheme(
      <RazorpayIcon color="feedback.icon.neutral.intense" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
