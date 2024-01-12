import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
                <Ranking>
                    <Title>랭킹</Title>
                    <RankerList>
                        <Player>
                            <RankerNickname>1위: 바미의 불씨</RankerNickname>
                            <Class>챌린저 347000점</Class>
                            100전 50승 50패
                        </Player>
                        <Player>
                            <RankerNickname>2위: 욕쟁이할머니</RankerNickname>
                            <Class>챌린저 345000점</Class> 100전 50승 50패
                        </Player>
                        <Player>
                            <RankerNickname>3위: 대연님나가신다</RankerNickname>
                            <Class>챌린저 34220점</Class> 100전 50승 50패
                        </Player>
                        <Player>
                            <Class>챌린저 34010점</Class> 100전 50승 50패
                        </Player>
                        <Player>
                            <RankerNickname>4위: 슈퍼UX짜릿해</RankerNickname>
                            <Class>챌린저 33700점</Class> 100전 50승 50패
                        </Player>
                    </RankerList>
                </Ranking>
                <MyProfile>
                    <ProfileImage />
                    <Nickname>바미의 불씨</Nickname>
                    <PlayerData>
                        <Rank>순위: 1위(상위 0.01%)</Rank>
                        <Class>점수: 챌린저 347000점</Class>
                        <GameMoney>게임머니: 10000000만원</GameMoney>
                        <GameRecord>전적: 100전 50승 50패(승률 50%)</GameRecord>
                    </PlayerData>
                </MyProfile>
                <Notice>
                    <Title>공지사항</Title>
                    <Contents>매너겜합시다^^</Contents>
                </Notice>
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

const MyProfile = styled.div`
    width: 300px;
    height: 500px;
    border: 5px solid red;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const Ranking = styled.div`
    width: 300px;
    height: 500px;
    border: 5px solid red;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

const Title = styled.div`
    text-align: center;
    font-size: 20px;
`;

const RankerList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const RankerNickname = styled.div``;

const Record = styled.div``;

const Player = styled.div`
    border: 1px solid gold;
    padding: 10px;
`;

const EnterButtons = styled.div`
    display: flex;
    gap: 10px;
`;

const ProfileImage = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid red;
`;

const PlayerData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Nickname = styled.div``;

const Rank = styled.div``;

const Class = styled.div``;

const GameMoney = styled.div``;

const GameRecord = styled.div``;

const CreateRoomButton = styled.button``;

const EnterRoomButton = styled.button``;

const MatchingButtom = styled.button``;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const ServiceName = styled.div`
    font-size: 50px;
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

const Notice = styled.div`
    width: 300px;
    height: 500px;
    border: 5px solid red;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

const Contents = styled.div``;

const Footer = styled.div``;

const Tutorial = styled.button`
    width: 100px;
`;
