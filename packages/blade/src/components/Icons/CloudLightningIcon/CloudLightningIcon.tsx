import { Svg, G, Path, Defs, ClipPath, Rect } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const CloudLightningIcon: IconComponent = ({ size, color }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_60_391)">
        <Path
          d="M0.587786 5.78596C1.9865 2.12799 5.59012 -0.205596 9.50019 0.0145815C13.1473 0.219954 16.2801 2.60323 17.4796 6.00006H18.0013C20.8397 6.0034 23.2875 7.99532 23.8676 10.7739C24.4476 13.5524 23.0013 16.3573 20.4013 17.4961C19.8954 17.7176 19.3056 17.4871 19.0841 16.9812C18.8625 16.4753 19.093 15.8856 19.5989 15.6641C21.3323 14.9049 22.2965 13.035 21.9098 11.1826C21.5231 9.33036 19.8914 8.00247 17.9993 8.00006H16.7401C16.2841 8.00006 15.8859 7.69159 15.7718 7.25009C15.0102 4.30086 12.4289 2.18267 9.38774 2.01142C6.34658 1.84017 3.54376 3.65518 2.45588 6.50026C1.36799 9.34535 2.24479 12.5673 4.62435 14.4688C5.0558 14.8136 5.12607 15.4429 4.7813 15.8743C4.43653 16.3058 3.80727 16.376 3.37582 16.0313C0.316386 13.5865 -0.810924 9.44392 0.587786 5.78596Z"
          fill={iconColor}
        />
        <Path
          d="M13.8321 11.5547C14.1384 11.0952 14.0142 10.4743 13.5547 10.168C13.0952 9.86164 12.4743 9.98582 12.168 10.4453L8.16795 16.4453C7.96338 16.7522 7.94431 17.1467 8.11833 17.4719C8.29235 17.7971 8.63121 18 9 18H13.1315L10.168 22.4453C9.8616 22.9049 9.98577 23.5257 10.4453 23.8321C10.9048 24.1384 11.5257 24.0143 11.8321 23.5547L15.8321 17.5547C16.0366 17.2479 16.0557 16.8533 15.8817 16.5282C15.7077 16.203 15.3688 16 15 16H10.8685L13.8321 11.5547Z"
          fill={iconColor}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_60_391">
          <Rect width="24" height="24" fill={iconColor} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CloudLightningIcon;
