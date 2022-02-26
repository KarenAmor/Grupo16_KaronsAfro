import './app.css';
import SideBar from './components/sideBar/siderBar';
import ContentWraper from './components/contentWraper/contentWraper';

function App() {
  return (
    <div id="wrapper">
      <SideBar></SideBar>  
      <ContentWraper></ContentWraper>
    </div>
  );
}

export default App;
