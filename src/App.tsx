import GlobalStyle from '@styles/globalStyle';
import Home from 'pages/home';
import Lobby from 'pages/lobby';
import Room from 'pages/room';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lobby" element={<Lobby />} />
                <Route path="/room/:id" element={<Room />} />
            </Routes>
        </>
    );
}

export default App;
