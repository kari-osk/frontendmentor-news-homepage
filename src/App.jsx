import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' component={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
