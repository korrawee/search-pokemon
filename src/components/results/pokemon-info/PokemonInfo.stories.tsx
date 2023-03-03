import { ComponentStory, ComponentMeta } from '@storybook/react';
import PokemonInfo, { IPokemonInfo } from './PokemonInfo';
import { mockPokemonInfoProps } from './PokemonInfo.mocks';

export default {
  title: 'templates/PokemonInfo',
  component: PokemonInfo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PokemonInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PokemonInfo> = (args) => (
  <PokemonInfo {...args} />
);

export const Base = Template.bind({});


// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPokemonInfoProps.base,
} as IPokemonInfo;
