import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { ListaDeFavoritos } from './pages/ListaDeFavoritos/ListaDeFavoritos';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listaDeFavoritos" element={<ListaDeFavoritos />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
