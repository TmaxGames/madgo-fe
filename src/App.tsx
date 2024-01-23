import { requestRefreshToken } from '@api/auth';
import { setAccessToken } from '@api/auth/accessToken';
import GlobalStyle from '@styles/globalStyle';
import Home from 'pages/home';
import Lobby from 'pages/lobby';
import Room from 'pages/room';
import { Route, Routes } from 'react-router-dom';

function App() {
    const refreshSession = async () => {
        const res = await requestRefreshToken();
        const { accessToken } = res;
        setAccessToken(accessToken);
    };

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
