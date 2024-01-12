import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Room = () => {
    const navigate = useNavigate();

    const handleClickExit = () => {
        navigate('/lobby');
    };

    return (
        <RoomContainer>
            <GameInformation>
                <RoomNumber>41245번방</RoomNumber>
                <Stake>점 50000원</Stake>
                <Crowd>30000명이 관전중</Crowd>
                <ExitButton onClick={handleClickExit}>나가기</ExitButton>
            </GameInformation>
            <CenterCards />
            <Player1P>
                <ProfileImage />
                <NickName>바미의 불씨</NickName>
                <Rank>순위: 1위(상위 0.01%)</Rank>
                <GameMoney>게임머니: 1000000원</GameMoney>
                <GameRecord>전적: 100전 50승 50패(승률 50%)</GameRecord>
                <GamePoint>347000점</GamePoint>
                <EmotionButton>감정표현</EmotionButton>
            </Player1P>
            <Player2P>
                <ProfileImage />
                <NickName>욕쟁이할머니</NickName>
                <Rank>순위: 2위(상위 0.01%)</Rank>
                <GameMoney>게임머니: 1000000원</GameMoney>
                <GameRecord>전적: 100전 50승 50패(승률 50%)</GameRecord>
                <GamePoint>345000점</GamePoint>
                <ReportButton>리폿</ReportButton>
            </Player2P>
            <MyCards>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </MyCards>
            <Player2PCard>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Player2PCard>
            <Player1Chat>할매요 살살 부탁합니데이~</Player1Chat>
            <Player2Chat>아그야 지랄허지말고 스겜혀라</Player2Chat>
        </RoomContainer>
    );
};

export default Room;

const RoomContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: green;
`;

const CenterCards = styled.div`
    width: 80px;
    height: 120px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
    background-color: red;
`;

const Player1P = styled.div`
    width: 400px;
    height: 280px;
    background-color: grey;
    position: absolute;
    border-radius: 10px;
    left: 10px;
    bottom: 10px;
    margin: 0 auto;
    padding: 10px;
`;

const ProfileImage = styled.div`
    width: 150px;
    height: 150px;
    background-color: white;
    border-radius: 50%;
`;

const NickName = styled.div``;

const Rank = styled.div``;

const GameMoney = styled.div``;

const GameRecord = styled.div``;

const GamePoint = styled.div``;

const EmotionButton = styled.button``;

const Player2P = styled.div`
    width: 400px;
    height: 280px;
    background-color: grey;
    position: absolute;
    border-radius: 10px;
    right: 10px;
    top: 10px;
    margin: 0 auto;
    padding: 10px;
`;

const MyCards = styled.div`
    width: fit-content;
    position: absolute;
    bottom: 10px;
    right: 0;
    left: 0;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;
    display: flex;
    gap: 2px;
`;

const Card = styled.div`
    width: 80px;
    height: 120px;
    background-color: red;
`;

const Player2PCard = styled.div`
    width: fit-content;
    position: absolute;
    top: 10px;
    right: 0;
    left: 0;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;
    display: flex;
    gap: 2px;
`;

const GameInformation = styled.div`
    width: 300px;
    height: 100px;
    position: absolute;
    background-color: burlywood;
    left: 10px;
    top: 10px;
    border-radius: 10px;
    padding: 10px;
`;

const RoomNumber = styled.div``;

const Stake = styled.div``;

const Crowd = styled.div``;

const ExitButton = styled.button``;

const ReportButton = styled.button``;

const Player1Chat = styled.div`
    position: absolute;
    width: 400px;
    height: 80px;
    left: 30px;
    bottom: 310px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
        border-top: 10px solid white;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 0px solid transparent;
        content: '';
        position: absolute;
        top: 80px;
        left: 60px;
    }
`;

const Player2Chat = styled.div`
    position: absolute;
    width: 400px;
    height: 80px;
    right: 30px;
    top: 310px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
        border-top: 0px solid transparent;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid white;
        content: '';
        position: absolute;
        top: -10px;
        left: 60px;
    }
`;
