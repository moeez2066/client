import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import './App.css';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default App;