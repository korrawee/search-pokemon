import { ComponentStory, ComponentMeta } from '@storybook/react';
import TypeBadge, { ITypeBadge } from './TypeBadge';
import { mockTypeBadgeProps } from './TypeBadge.mocks';

export default {
  title: 'templates/TypeBadge',
  component: TypeBadge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TypeBadge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TypeBadge> = (args) => (
  <TypeBadge {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTypeBadgeProps.base,
} as ITypeBadge;
