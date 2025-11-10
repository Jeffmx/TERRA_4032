import { HeaderProvider } from 'context/HeaderContext';
import { Route, Routes, Router } from 'react-router-dom';
import Header from './components/Cabecalho';
import Mechanics from 'components/Mechanics';
import Classes from 'components/Classes';
import Races from 'components/Races';
import Lore from 'components/Lore';
import './App.css';

function App() {
  return (
    <HeaderProvider>
      <Header />
      <Routes>
        <Route path='/Mechanics' element={<Mechanics/>} />
        <Route path='/Classes' element={<Classes/>} />
        <Route path='/Races' element={<Races/>} />
        <Route path='/Lore' element={<Lore/>} />
      </Routes>
    </HeaderProvider>
  );
}

export default App;
