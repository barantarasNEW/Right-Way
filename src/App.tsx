import { Navigate, Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Top from './pages/Top/Top';
import Random from './pages/Random/Random';
import Quiz from './pages/Quiz/Quiz';
import User from './pages/User/User';
import Auth from './pages/Auth/Auth';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/top" element={<Top />} />
        <Route path="/random" element={<Random />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/user" element={<User />} />
        <Route path="/signUp" element={<Auth />} />
        <Route path="/signIn" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;