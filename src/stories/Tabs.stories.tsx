import { Tabs } from '../components/tabs';

export default {
  title: 'UI/Tabs',
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const TabsColumn = Template.bind({});
TabsColumn.args = {
  tabDirection: 'column',
  tabs: ['Warriors', '49ers', 'Giants'],
};

export const TabsRow = Template.bind({});
TabsRow.args = {
  tabDirection: 'row',
  tabs: ['Warriors', '49ers', 'Giants'],
};
