import SmartphoneIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<SmartphoneIcon />', () => {
  it('should render SmartphoneIcon', () => {
    const renderTree = renderWithTheme(
      <SmartphoneIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
