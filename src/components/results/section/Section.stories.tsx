import { ComponentStory, ComponentMeta } from '@storybook/react';
import Section, { ISection } from './Section';
import { mockSectionProps } from './Section.mocks';

export default {
  title: 'templates/Section',
  component: Section,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Section>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSectionProps.base,
} as ISection;
