import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import ExplorePage from './pages/ExplorePage';
import AccountPage from './pages/AccountPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
