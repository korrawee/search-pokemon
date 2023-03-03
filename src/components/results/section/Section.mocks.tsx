import { ISection } from './Section';

function ChildComponent(): JSX.Element {
  return <h1>Hello</h1>;
}

const base: ISection = {
  children: ChildComponent(),
};

export const mockSectionProps = {
  base,
};
