import type { Theme } from '~components/BladeProvider';
import type { SelectorInputHoverTokens } from '~components/Form/Selector/types';
import type { DotNotationToken } from '~utils/lodashButBetter/get';
import { size } from '~tokens/global';

const radioSizes = {
  group: {
    gap: {
      small: {
        mobile: 'spacing.2',
        desktop: 'spacing.0',
      },
      medium: {
        mobile: 'spacing.3',
        desktop: 'spacing.2',
      },
    },
  },
  icon: {
    small: {
      width: size[12],
      height: size[12],
      dotRadius: size[2],
    },
    medium: {
      width: size[16],
      height: size[16],
      dotRadius: size[3],
    },
  },
} as const;

type ColorTokens = `colors.${DotNotationToken<Theme['colors']>}` | 'transparent';
type Variant = {
  dot: {
    checked: ColorTokens;
    unchecked: ColorTokens;
  };
  border: {
    checked: ColorTokens;
    unchecked: ColorTokens;
  };
  background: {
    checked: ColorTokens;
    unchecked: ColorTokens;
  };
};

type RadioIconColors = {
  variants: {
    default: Variant;
    disabled: Variant;
    negative: Variant;
  };
};

const radioIconColors: RadioIconColors = {
  variants: {
    default: {
      dot: {
        checked: 'colors.interactive.icon.staticWhite.normal',
        unchecked: 'transparent',
      },
      border: {
        checked: 'colors.interactive.border.primary.default',
        unchecked: 'colors.interactive.border.gray.default',
      },
      background: {
        checked: 'colors.interactive.background.primary.default',
        unchecked: 'transparent',
      },
    },
    disabled: {
      dot: {
        checked: 'colors.interactive.icon.staticWhite.normal',
        unchecked: 'colors.interactive.icon.staticWhite.normal',
      },
      border: {
        checked: 'transparent',
        unchecked: 'colors.interactive.border.gray.disabled',
      },
      background: {
        checked: 'colors.interactive.background.primary.disabled',
        unchecked: 'transparent',
      },
    },
    negative: {
      dot: {
        checked: 'colors.interactive.icon.staticWhite.normal',
        unchecked: 'transparent',
      },
      border: {
        checked: 'colors.interactive.border.negative.default',
        unchecked: 'colors.interactive.border.negative.default',
      },
      background: {
        checked: 'colors.interactive.background.negative.default',
        unchecked: 'transparent',
      },
    },
  },
} as const;

const radioHoverTokens: SelectorInputHoverTokens = {
  default: {
    background: {
      checked: 'colors.interactive.background.primary.highlighted',
      unchecked: 'colors.interactive.background.gray.faded',
    },
    border: {
      checked: 'colors.interactive.border.primary.highlighted',
      unchecked: 'colors.interactive.border.gray.default',
    },
  },
};

export { radioSizes, radioIconColors, radioHoverTokens };
