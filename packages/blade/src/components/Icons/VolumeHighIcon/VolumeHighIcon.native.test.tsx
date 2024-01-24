import VolumeHighIcon from '.';
import renderWithTheme from '~utils/testing/renderWithTheme.native';

describe('<VolumeHighIcon />', () => {
  it('should render VolumeHighIcon', () => {
    const renderTree = renderWithTheme(
      <VolumeHighIcon color="feedback.icon.neutral.intense" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
