import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { RecoilRoot } from 'recoil';
import Participantes from './pages/Participantes';

function AppRouter() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Participantes/>}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default AppRouter;
