import Users from './components/Users/index';
import { Route, Routes, useParams } from 'react-router-dom';
import UserInfo from './components/Users/UserInfo';
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:id" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
