import { Navigate, Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;