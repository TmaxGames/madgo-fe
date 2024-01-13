import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Ranking from './components/ranking';
import MyProfile from './components/myProfile';
import MyBuddy from './components/buddy';

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
        <LobbyContainer>
            <Header>
                <ServiceName>모두의 맞고</ServiceName>
                <Tutorial>배워보기</Tutorial>
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
    padding: 30px;
`;

const EnterButtons = styled.div`
    display: flex;
    gap: 10px;
`;

const CreateRoomButton = styled.button``;

const EnterRoomButton = styled.button``;

const MatchingButtom = styled.button``;

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

const Footer = styled.div``;

const Tutorial = styled.button`
    width: 100px;
`;
