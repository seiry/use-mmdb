import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { IpBox } from '../ipBox';

export default {
  title: 'IpBox',
  component: IpBox,
  argTypes: {},
} as Meta<typeof IpBox>;

const Template: StoryFn<typeof IpBox> = (args) => <IpBox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ip: '1.1.1.1',
};
