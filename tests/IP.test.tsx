import React from 'react';
import renderer from 'react-test-renderer';
import { expect, it } from 'vitest';
import { IpBox } from '../src/ipBox';

it('renders 1.1.1. correctly', () => {
  const tree = renderer.create(<IpBox ip="1.1.1.1" />).toJSON();
  expect(tree).toMatchSnapshot();
});
