import type React from 'react';
import type { DrawerProps } from '~components/Drawer';
import type { IconComponent } from '~components/Icons';

type SideNavProps = {
  children: React.ReactNode;
  /**
   * **Only applicable in mobile**
   *
   * State for opening / closing the SideNav in mobile
   */
  isOpen?: DrawerProps['isOpen'];
  /**
   * **Only applicable in mobile**
   *
   * Callback when SideNav is closed
   */
  onDismiss?: DrawerProps['onDismiss'];
};

type SideNavLinkProps = {
  title: string;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as: React.ComponentType<any>;
  isCurrentPage?: boolean;
  icon: IconComponent;
  children?: React.ReactElement;
};

type SideNavSectionProps = {
  title: string;
  /**
   * Number of items after which the items are collapsed into `+x more`
   */
  maxVisibleItems?: number;
  /**
   * Callback when `+x more is clicked`
   */
  onToggleVisibleItems?: (isExpanded: boolean) => void;

  children: React.ReactElement[];
};

type OnLinkActiveChangeArgs = {
  id: string;
  level: number;
  isActive: boolean;
  isL2Trigger: boolean;
};

type SideNavContextType = {
  l2PortalContainerRef?: React.RefObject<HTMLDivElement>;
  onLinkActiveChange?: (args: OnLinkActiveChangeArgs) => void;
  closeMobileNav?: () => void;
};

type NavLinkContextType = {
  level?: number;
};

export type {
  SideNavProps,
  SideNavContextType,
  NavLinkContextType,
  SideNavLinkProps,
  SideNavSectionProps,
};
