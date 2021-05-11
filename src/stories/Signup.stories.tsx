import { Signup } from '../components/signup';

export default {
  title: 'Form/Signup',
  component: Signup,
};

const Template = (args) => <Signup {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '',
};
