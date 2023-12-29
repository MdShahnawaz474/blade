import VideoIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<VideoIcon />', () => {
  it('should render VideoIcon', () => {
    const { container } = renderWithTheme(
      <VideoIcon color="feedback.icon.neutral.intense" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
