import { requestRefreshToken } from '@api/auth';
import { setAccessToken } from '@api/auth/accessToken';
import GlobalStyle from '@styles/globalStyle';
import Home from 'pages/home';
import Lobby from 'pages/lobby';
import Room from 'pages/room';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from 'store/auth';

function App() {
    const isLoggedIn = useRecoilValue(authState);

    useEffect(() => {
        if (isLoggedIn) {
            const refreshToken = async () => {
                const res = await requestRefreshToken();
                const { accessToken } = res.data;
                console.log(accessToken);
                setAccessToken(accessToken);
            };
            refreshToken();
        }
    }, []);
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
