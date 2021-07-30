import {BrowserRouter} from 'react-router-dom';
import RouterApp from './component/RouterApp';
import NavBar from './component/nav/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <RouterApp />
    </BrowserRouter>
  );
}

export default App;
