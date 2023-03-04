import { ComponentStory, ComponentMeta } from '@storybook/react';
import Result, { IResult } from './Result';
import { mockResultProps } from './Result.mocks';

export default {
  title: 'templates/Result',
  component: Result,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Result>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Result> = (args) => <Result {...args} />;

export const Base = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockResultProps.base,
} as IResult;
