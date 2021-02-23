import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { getThemeColors } from '../../_helpers/theme';
import colors from '../../tokens/colors';

function User({ width, height, fill }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7Z"
        fill={fill}
      />
      <Path
        d="M8 14C5.23858 14 3 16.2386 3 19V21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21V19C5 17.3431 6.34315 16 8 16H16C17.6569 16 19 17.3431 19 19V21C19 21.5523 19.4477 22 20 22C20.5523 22 21 21.5523 21 21V19C21 16.2386 18.7614 14 16 14H8Z"
        fill={fill}
      />
    </Svg>
  );
}

User.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.oneOf(getThemeColors()),
};

User.defaultProps = {
  width: 24,
  height: 24,
  fill: colors.sapphire[800],
};

export default User;
