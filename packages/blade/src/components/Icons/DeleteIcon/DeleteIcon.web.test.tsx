import DeleteIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<DeleteIcon />', () => {
  it('should render DeleteIcon', () => {
    const { container } = renderWithTheme(
      <DeleteIcon color="feedback.icon.neutral.intense" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
