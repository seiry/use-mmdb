import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { IpBoxWebworker } from '../ipBox';

export default {
  title: 'IpBoxWebworker',
  component: IpBoxWebworker,
  argTypes: {},
} as Meta<typeof IpBoxWebworker>;

const Template: StoryFn<typeof IpBoxWebworker> = (args) => (
  <IpBoxWebworker {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  ip: '1.1.1.1',
};
