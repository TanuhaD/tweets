import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tweets from './pages/Tweets/Tweets';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Routes>
    </div>
  );
}

export default App;
