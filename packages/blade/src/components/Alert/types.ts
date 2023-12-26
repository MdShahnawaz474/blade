import type { ReactNode } from 'react';

import type { ColorContrast, FeedbackColors } from '~tokens/theme/theme';
import type { StyledPropsBlade } from '~components/Box/styledProps';

export type StyledAlertProps = {
  children: ReactNode;
  contrastType: keyof ColorContrast;
  color: FeedbackColors;
  isFullWidth: boolean;
  isDesktop: boolean;
} & StyledPropsBlade;
