import { Navigate, Route, Routes } from 'react-router';
import { lazy } from 'react';
import Country from './pages/Country/Country';

const Home = lazy(() => import('./pages/Home/Home'));
const Layout = lazy(() => import('./components/Layout/Layout'));
const Top = lazy(() => import('./pages/Top/Top'));
const Random = lazy(() => import('./pages/Random/Random'));
const Quiz = lazy(() => import('./pages/Quiz/Quiz'));
const User = lazy(() => import('./pages/User/User'));
const Auth = lazy(() => import('./pages/Auth/Auth'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home">
          <Route index element={<Navigate to="/" replace />} />
          <Route path=":id" element={<Country />} />
        </Route>
        <Route path="/top">
          <Route index element={<Top />} />
          <Route path=":id" element={<Country />} />
        </Route>
        <Route path="/random">
          <Route index element={<Random />} />
          <Route path=":id" element={<Country />} />
        </Route>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/user" element={<User />} />
        <Route path="/signUp" element={<Auth />} />
        <Route path="/signIn" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;