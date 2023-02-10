import styled from 'styled-components';
import { getBaseActionListStyles } from './getBaseActionListStyles';
import type { StyledActionListProps } from './getBaseActionListStyles';
import { makeSize, isAndroid } from '~utils';
import Box from '~components/Box';

const StyledActionList = styled(Box)<StyledActionListProps>((props) => {
  return {
    ...getBaseActionListStyles(props),
    shadowOpacity: '1',
    shadowColor: isAndroid() ? undefined : props.theme.shadows.color.level[1],
    shadowOffset: `${makeSize(props.theme.shadows.offsetX.level[1])} ${makeSize(0)}`,
  };
});

export { StyledActionList };
