import React from 'react';
import styled from 'styled-components';
import { FloatingFocusManager, FloatingPortal, useFloating } from '@floating-ui/react';
import { NavLinkContext, useNavLink, useSideNav } from '../SideNavContext';
import type { SideNavLinkProps } from '../types';
import { classes, NAV_ITEM_HEIGHT, useSideNavTransition } from '../tokens';
import { Box } from '~components/Box';
import { size } from '~tokens/global';
import { makeBorderSize, makeSize, makeSpace } from '~utils';
import { BaseText } from '~components/Typography/BaseText';
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from '~components/Icons';
import BaseBox from '~components/Box/BaseBox';
import { useCollapsible } from '~components/Collapsible/CollapsibleContext';
import { Collapsible, CollapsibleBody } from '~components/Collapsible';
import { makeAccessible } from '~utils/makeAccessible';
import { Tooltip } from '~components/Tooltip';
import { useFirstRender } from '~utils/useFirstRender';
import { getFocusRingStyles } from '~utils/getFocusRingStyles';

const { SHOW_ON_LINK_HOVER, COLLAPSED, HIDE_WHEN_COLLAPSED } = classes;

const StyledNavLinkContainer = styled.a((props) => {
  const { notchOpacity, collapseItemPadding } = useSideNavTransition();

  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: makeSize(size['36']),
    width: '100%',
    textDecoration: 'none',
    overflow: 'hidden',
    flexWrap: 'nowrap',
    cursor: 'pointer',
    padding: `${makeSpace(props.theme.spacing[0])} ${makeSpace(props.theme.spacing[4])}`,
    color: props.theme.colors.interactive.text.gray.subtle,
    borderRadius: props.theme.border.radius.medium,
    border: `${makeBorderSize(props.theme.border.width.thinner)} solid ${
      props.theme.colors.transparent
    }`,
    backgroundColor: props.theme.colors.transparent,
    transition: collapseItemPadding,
    [`.${SHOW_ON_LINK_HOVER}`]: {
      opacity: 0,
      '&:focus-within, &:hover, &:focus-visible': {
        opacity: 1,
      },
    },
    ':hover': {
      color: props.theme.colors.interactive.text.gray.normal,
      backgroundColor: props.theme.colors.interactive.background.gray.default,
    },
    '&[aria-current]': {
      color: props.theme.colors.interactive.text.primary.subtle,
      backgroundColor: props.theme.colors.interactive.background.primary.faded,
      border: `${makeBorderSize(props.theme.border.width.thinner)} solid ${
        props.theme.colors.surface.border.primary.muted
      }`,

      '&::before': {
        content: '" "',
        position: 'absolute',
        left: makeSpace(props.theme.spacing[0]),
        top: makeSpace(props.theme.spacing[0]),
        bottom: makeSpace(props.theme.spacing[0]),
        margin: 'auto',
        width: makeSize(size['4']),
        height: makeSize(size['16']),
        backgroundColor: props.theme.colors.interactive.background.primary.default,
        borderRadius: `${makeBorderSize(props.theme.border.radius.none)} ${makeBorderSize(
          props.theme.border.radius.medium,
        )} ${makeBorderSize(props.theme.border.radius.medium)} ${makeBorderSize(
          props.theme.border.radius.none,
        )}`,
      },
    },
    '&[aria-current]:hover': {
      color: props.theme.colors.interactive.text.primary.normal,
      backgroundColor: props.theme.colors.interactive.background.primary.fadedHighlighted,
    },
    '&:focus-visible': {
      ...getFocusRingStyles({ theme: props.theme }),
    },
    [`.${COLLAPSED} &`]: {
      // Using size tokens because the padding here has to match the overall width of 52px in collapsed state
      padding: `${makeSize(size['0'])} ${makeSize(size['10'])}`,
      transition: collapseItemPadding,
      '&[aria-current]': {
        '&::before': {
          opacity: 0,
          transition: notchOpacity,
        },
      },
    },
  };
});

const TooltipifyNavLink = ({
  children,
  tooltip,
}: {
  children: React.ReactElement;
  tooltip: SideNavLinkProps['tooltip'];
}): React.ReactElement => {
  if (!tooltip) {
    return children;
  }

  return (
    <Tooltip {...tooltip} placement="top">
      {children}
    </Tooltip>
  );
};

const NavLinkIconTitle = ({
  icon: Icon,
  title,
  titleSuffix,
  isL1Item,
}: Pick<SideNavLinkProps, 'title' | 'icon' | 'titleSuffix'> & {
  isL1Item: boolean;
}): React.ReactElement => {
  return (
    <Box display="flex" flexDirection="row" gap="spacing.3">
      {Icon ? (
        <BaseBox display="flex" flexDirection="row" alignItems="center" justifyContent="center">
          <Icon size="medium" color="currentColor" />
        </BaseBox>
      ) : null}
      <BaseText
        truncateAfterLines={1}
        color="currentColor"
        fontWeight="medium"
        fontSize={100}
        lineHeight={100}
        as="p"
        className={isL1Item ? HIDE_WHEN_COLLAPSED : ''}
      >
        {title}
      </BaseText>
      {titleSuffix ? <BaseBox>{titleSuffix}</BaseBox> : null}
    </Box>
  );
};

const L3Trigger = ({
  title,
  icon,
  as,
  href,
  titleSuffix,
  tooltip,
}: Pick<
  SideNavLinkProps,
  'title' | 'icon' | 'as' | 'href' | 'titleSuffix' | 'tooltip'
>): React.ReactElement => {
  const { onExpandChange, isExpanded, collapsibleBodyId } = useCollapsible();

  const toggleCollapse = (): void => onExpandChange(!isExpanded);
  const iconProps = {
    size: 'medium',
    color: 'currentColor',
  } as const;

  return (
    <TooltipifyNavLink tooltip={tooltip}>
      <StyledNavLinkContainer
        as={href ? as : 'button'}
        to={href}
        onClick={toggleCollapse}
        {...makeAccessible({ expanded: isExpanded, controls: collapsibleBodyId })}
      >
        <NavLinkIconTitle title={title} icon={icon} isL1Item={false} titleSuffix={titleSuffix} />
        <BaseBox display="flex" alignItems="center">
          {isExpanded ? <ChevronUpIcon {...iconProps} /> : <ChevronDownIcon {...iconProps} />}
        </BaseBox>
      </StyledNavLinkContainer>
    </TooltipifyNavLink>
  );
};

const CurvedVerticalLine = styled(BaseBox)((props) => {
  const { colors, border, spacing } = props.theme;
  return {
    borderWidth: makeBorderSize(props.theme.border.width.thin),
    borderColor: `${colors.transparent} ${colors.transparent} ${colors.surface.border.primary.muted} ${colors.surface.border.primary.muted}`,
    borderStyle: 'solid',
    borderRadius: `${makeBorderSize(border.radius.none)} ${makeBorderSize(
      border.radius.none,
    )} ${makeBorderSize(border.radius.none)} ${makeBorderSize(border.radius.medium)}`,
    height: '100vh',
    position: 'absolute',
    top: `calc(-100vh + ${makeSize(NAV_ITEM_HEIGHT / 2)})`,
    width: makeSpace(spacing[3]),
    left: makeSpace(-spacing[3]),
  };
});

const SideNavLink = ({
  title,
  href,
  children,
  titleSuffix,
  trailing,
  isActive,
  icon,
  tooltip,
  as,
}: SideNavLinkProps): React.ReactElement => {
  const {
    l2PortalContainerRef,
    onLinkActiveChange,
    closeMobileNav,
    isL1Collapsed,
    setIsL1Collapsed,
  } = useSideNav();
  const { level: _prevLevel } = useNavLink();
  const prevLevel = _prevLevel ?? 0;
  const currentLevel = prevLevel + 1;
  const isL2Trigger = Boolean(children) && currentLevel === 1;
  const isL3Trigger = Boolean(children) && currentLevel === 2;

  console.count('SideNavLink');

  const isFirstRender = useFirstRender();

  const { refs, context } = useFloating({
    open: isActive,
  });

  React.useLayoutEffect(() => {
    onLinkActiveChange?.({
      level: currentLevel,
      title,
      isActive: Boolean(isActive),
      isL2Trigger,
      isFirstRender,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <NavLinkContext.Provider value={{ level: currentLevel, title }}>
      {isL3Trigger ? (
        <Collapsible
          defaultIsExpanded={isActive}
          _dangerouslyDisableValidations={true}
          _shouldApplyWidthRestrictions={false}
        >
          <L3Trigger title={title} icon={icon} as={as} href={href} titleSuffix={titleSuffix} />
          <CollapsibleBody width="100%" _hasMargin={false}>
            <Box position="relative">{children}</Box>
          </CollapsibleBody>
        </Collapsible>
      ) : (
        <>
          <Box position="relative">
            <TooltipifyNavLink tooltip={tooltip}>
              <StyledNavLinkContainer
                as={as}
                to={href}
                ref={refs.setReference}
                onClick={() => {
                  // Close the mobile nav when item is clicked and its not trigger for next menu
                  if (!isL2Trigger) {
                    closeMobileNav?.();
                  }

                  if (isActive && isL2Trigger) {
                    onLinkActiveChange?.({
                      level: currentLevel,
                      title,
                      isActive: Boolean(isActive),
                      isL2Trigger,
                      isFirstRender: false,
                    });
                  }
                }}
                onFocus={() => {
                  if (isL1Collapsed && currentLevel === 1) {
                    setIsL1Collapsed?.(false);
                  }
                }}
                aria-current={isActive ? 'page' : undefined}
                data-level={currentLevel}
                data-l2trigger={isL2Trigger}
              >
                <NavLinkIconTitle
                  icon={icon}
                  title={title}
                  isL1Item={currentLevel === 1}
                  titleSuffix={titleSuffix}
                />
                {isL2Trigger ? (
                  <BaseBox className={HIDE_WHEN_COLLAPSED}>
                    <ChevronRightIcon size="medium" color="currentColor" />
                  </BaseBox>
                ) : null}
                {trailing && !isL2Trigger ? (
                  <BaseBox className={`${HIDE_WHEN_COLLAPSED} ${SHOW_ON_LINK_HOVER}`}>
                    {trailing}
                  </BaseBox>
                ) : null}
              </StyledNavLinkContainer>
            </TooltipifyNavLink>
            {currentLevel === 3 && isActive ? <CurvedVerticalLine /> : null}
          </Box>

          {children ? (
            <FloatingPortal root={l2PortalContainerRef}>
              {isActive && isL1Collapsed ? (
                <FloatingFocusManager modal={false} context={context} initialFocus={-1}>
                  <BaseBox ref={refs.setFloating}>{children}</BaseBox>
                </FloatingFocusManager>
              ) : null}
            </FloatingPortal>
          ) : null}
        </>
      )}
    </NavLinkContext.Provider>
  );
};

export { SideNavLink };
