import Users from './components/Users/index';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import UserInfo from './components/UserInfoAndPosts';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path=":id" element={<UserInfo />} />
        <Route path=":id/:post" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
