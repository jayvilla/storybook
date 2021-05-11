import './App.css';
import { Button } from './components/button';
import { Tooltip } from './components/tooltip';
import { ModalExample } from './components/modal';
import { TabNavigation } from './components/navigation/tabNavigation';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Careers = () => <div>Careers Page</div>;

function App() {
  const tabsExample = [
    { path: '/home', component: Home, name: 'Home' },
    { path: '/home/about', component: About, name: 'About' },
    { path: '/home/careers', component: Careers, name: 'Careers' },
  ];

  return (
    <div className='App'>
      <h1 className='text-3xl'>Storybook</h1>
      <TabNavigation tabs={tabsExample} />
    </div>
  );
}

export default App;
