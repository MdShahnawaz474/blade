import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const SubscriptionsIcon: IconComponent = ({ size, color }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.3766 4.97811C12.8324 4.43243 15.4017 5.16223 17.1817 6.91113C17.1884 6.91778 17.1953 6.92433 17.2023 6.93077L19.8153 9.29939H16.5833C16.0771 9.29939 15.6667 9.70243 15.6667 10.1996C15.6667 10.6968 16.0771 11.0998 16.5833 11.0998H22.0833C22.5896 11.0998 23 10.6968 23 10.1996V4.79841C23 4.30125 22.5896 3.89822 22.0833 3.89822C21.5771 3.89822 21.1667 4.30125 21.1667 4.79841V8.0744L18.4679 5.62814C16.2433 3.4494 13.037 2.54107 9.97198 3.22211C6.90215 3.90422 4.40333 6.08529 3.35336 8.99911C3.18447 9.46779 3.43445 9.98219 3.91172 10.148C4.38898 10.3139 4.91278 10.0684 5.08167 9.59971C5.92165 7.26866 7.9207 5.5238 10.3766 4.97811Z"
        fill={iconColor}
      />
      <Path
        d="M2.83333 15.9256V19.2015C2.83333 19.6987 2.42293 20.1017 1.91667 20.1017C1.41041 20.1017 1 19.6987 1 19.2015V13.8004C1 13.3032 1.41041 12.9002 1.91667 12.9002H7.41667C7.92293 12.9002 8.33333 13.3032 8.33333 13.8004C8.33333 14.2975 7.92293 14.7006 7.41667 14.7006H4.18472L6.79771 17.0692C6.8047 17.0757 6.81157 17.0822 6.81835 17.0889C8.59836 18.8378 11.1676 19.5676 13.6234 19.0219C16.0793 18.4762 18.0784 16.7313 18.9183 14.4003C19.0872 13.9316 19.611 13.6861 20.0883 13.852C20.5656 14.0178 20.8155 14.5322 20.6467 15.0009C19.5967 17.9147 17.0979 20.0958 14.028 20.7779C10.963 21.4589 7.75671 20.5506 5.5321 18.3719L2.83333 15.9256Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default SubscriptionsIcon;
