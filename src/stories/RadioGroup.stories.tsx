import { RadioGroup } from '../components/radioGroup';

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '50px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <RadioGroup {...args} />;

export const Column = Template.bind({});
Column.args = {
  layout: 'column',
};

export const Row = Template.bind({});
Row.args = {
  layout: 'row',
};
