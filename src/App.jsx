import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:profession" element={<Quiz />} />
      </Routes>
    </Router>
  );
}
