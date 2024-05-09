import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { NavLink, Route, Switch } from 'react-router-dom';
import { SideNav, SideNavLink } from './';
import { getStyledPropsArgTypes } from '~components/Box/BaseBox/storybookArgTypes';
import { Box } from '~components/Box';
import {
  ArrowUpRightIcon,
  HomeIcon,
  SettingsIcon,
  SubscriptionsIcon,
  UserIcon,
} from '~components/Icons';
import { Heading } from '~components/Typography';
import { SideNavLevel } from './SideNavLevel';

export default {
  title: 'Components/SideNav',
  component: SideNav,
  tags: ['autodocs'],
  argTypes: {
    ...getStyledPropsArgTypes(),
  },
  // eslint-disable-next-line babel/new-cap
  decorators: [StoryRouter(undefined, { initialEntries: ['/app'] })] as unknown,
} as Meta<typeof SideNav>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = ({ match }: { match: any }): React.ReactElement => (
  <Box>
    <Heading>ID: {JSON.stringify(match)}</Heading>
  </Box>
);

const SideNavTemplate: StoryFn<typeof SideNav> = () => {
  return (
    <Box>
      <SideNav routerLink={NavLink}>
        <SideNavLink icon={HomeIcon} title="Home" href="/payments/dashboard" />
        <SideNavLink icon={ArrowUpRightIcon} title="Payouts" href="/payments/payouts" />
        <SideNavLink icon={ArrowUpRightIcon} title="Nice" href="/payments/nice" />
        <SideNavLink icon={SettingsIcon} title="Settings" href="/payments/settings/user">
          <SideNavLevel>
            <SideNavLink icon={UserIcon} title="User Settings" href="/payments/settings/user" />
            <SideNavLink
              icon={SubscriptionsIcon}
              title="Subscriptions"
              href="/payments/settings/subscriptions"
            />
          </SideNavLevel>
        </SideNavLink>
        <SideNavLink icon={SettingsIcon} title="Accounts" href="/payments/accounts/user">
          <SideNavLevel>
            <SideNavLink icon={UserIcon} title="User Accounts" href="/payments/accounts/user" />
            <SideNavLink
              icon={SubscriptionsIcon}
              title="Subscriptions Accounts"
              href="/payments/accounts/subscriptions"
            />
          </SideNavLevel>
        </SideNavLink>
      </SideNav>

      <Box marginLeft="300px">
        <NavLink
          onChange={(...args) => {
            console.log({ args });
          }}
          to="/app"
        >
          Hi
        </NavLink>
        <NavLink
          onChange={(...args) => {
            console.log({ args });
          }}
          to="/app/payouts"
        >
          Payouts
        </NavLink>
        <Switch>
          <Route path="/app" component={Page} />
          <Route path="/app/payouts" component={Page} />
          <Route path="/nice" component={Page} />
          <Route path="/settings" exact component={Page} />
          <Route path="/settings/user" exact component={Page} />
          <Route path="/settings/subscriptions" exact component={Page} />
        </Switch>
      </Box>
    </Box>
  );
};

export const Default = SideNavTemplate.bind({});
