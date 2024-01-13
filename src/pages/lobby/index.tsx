import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Ranking from './components/ranking';
import MyProfile from './components/myProfile';
import MyBuddy from './components/myBuddy';

const Lobby = () => {
    const navigate = useNavigate();

    const handleCreateRoom = () => {
        navigate('/room/1');
    };

    const handleEnterRoom = () => {
        navigate('/room/1');
    };

    const handleClickMatching = () => {
        navigate('/room/1');
    };

    return (
        <LobbyContainer id="root-container">
            <Header>
                <ServiceName>로비</ServiceName>
                <HeaderMenu>
                    <TutorialButton>배워보기</TutorialButton>
                    <LogoutButton>로그아웃</LogoutButton>
                </HeaderMenu>
            </Header>
            <Body>
                <Ranking />
                <MyProfile />
                <MyBuddy />
            </Body>
            <Footer>
                <EnterButtons>
                    <CreateRoomButton onClick={handleCreateRoom}>방만들기</CreateRoomButton>
                    <EnterRoomButton onClick={handleEnterRoom}>방입장</EnterRoomButton>
                    <MatchingButtom onClick={handleClickMatching}>빠른입장</MatchingButtom>
                </EnterButtons>
            </Footer>
        </LobbyContainer>
    );
};

export default Lobby;

const LobbyContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    background-color: gainsboro;
`;

const EnterButtons = styled.div`
    display: flex;
    gap: 20px;
`;

const CreateRoomButton = styled.button`
    width: 100px;
    padding: 20px;
    cursor: pointer;
`;

const EnterRoomButton = styled.button`
    width: 100px;
    padding: 20px;
    cursor: pointer;
`;

const MatchingButtom = styled.button`
    width: 100px;
    padding: 20px;
    cursor: pointer;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: green;
    padding: 20px;
`;

const ServiceName = styled.div`
    font-size: 50px;
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

const Footer = styled.div`
    width: 100%;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    padding: 30px;
`;

const HeaderMenu = styled.div`
    display: flex;
    gap: 20px;
`;

const TutorialButton = styled.button`
    width: 100px;
    padding: 10px;
`;

const LogoutButton = styled.button`
    width: 100px;
    padding: 10px;
`;
