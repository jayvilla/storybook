import { TabNavigation, TabNavigationProps } from '../components/navigation/tabNavigation';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Nav/Tabs',
  component: TabNavigation,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Careers = () => <div>Careers Page</div>;

const Template = (args: TabNavigationProps) => <TabNavigation {...args} />;

const tabsExample = [
  { path: '/home', component: Home, name: 'Home' },
  { path: '/home/about', component: About, name: 'About' },
  { path: '/home/careers', component: Careers, name: 'Careers' },
];

export const Default = Template.bind({});
Default.args = {
  tabs: tabsExample,
};
