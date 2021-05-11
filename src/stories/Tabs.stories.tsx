import { Tabs } from '../components/tabs';

export default {
  title: 'UI/Tabs',
  component: Tabs,
};

const Tab1 = (
  <div>
    The Golden State Warriors are an American professional basketball team based in San
    Francisco. The Warriors compete in the National Basketball Association, as a member of the
    league's Western Conference Pacific Division.
  </div>
);

const Tab2 = (
  <div>
    The San Francisco 49ers are a professional American football team based in the San
    Francisco Bay Area. They compete in the National Football League as a member of the
    league's National Football Conference West division.
  </div>
);

const Tab3 = (
  <div>
    The San Francisco Giants are an American professional baseball team based in San Francisco.
    The Giants compete in Major League Baseball as a member club of the National League West
    division.
  </div>
);

const Template = (args) => <Tabs {...args} />;

export const TabsColumn = Template.bind({});
TabsColumn.args = {
  children: [Tab1, Tab2, Tab3],
  defaultTabIndex: 1,
  tabDirection: 'column',
  tabLabels: ['Warriors', '49ers', 'Giants'],
};

export const TabsRow = Template.bind({});
TabsRow.args = {
  children: [Tab1, Tab2, Tab3],
  defaultTabIndex: 2,
  tabDirection: 'row',
  tabLabels: ['Warriors', '49ers', 'Giants'],
};
