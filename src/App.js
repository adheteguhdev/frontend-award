import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SingIn from './components/sign-in-page';
import "bootstrap/dist/css/bootstrap.css"
import FeedPage from './components/feed-page';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route exact path='/' element={<SingIn />} />
            <Route path='/feed' element={<FeedPage />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
