import { styled } from 'styled-components';

interface PlayerProps {
    nickname: string;
    rank: string;
    rankClass: string;
    gamePoint: string;
    record: string;
    profileImage?: string;
}

const Player = ({ nickname, rank, rankClass, gamePoint, record }: PlayerProps) => {
    return (
        <PlayerContainer>
            <PlayerInfo>
                <Rank>{rank}위</Rank>
                <Nickname>{nickname}</Nickname>
                <ClassAndPoint>
                    <RankClass>{rankClass}</RankClass>
                    <GamePoint>{gamePoint}</GamePoint>
                </ClassAndPoint>
                <Record>{record}</Record>
            </PlayerInfo>
            <ProfileImage />
        </PlayerContainer>
    );
};

export default Player;

const PlayerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: beige;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
`;

const ProfileImage = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: gray;
`;

const PlayerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const Nickname = styled.div`
    font-size: 15px;
    margin-bottom: 5px;
`;

const Rank = styled.div`
    font-size: 14px;
    margin-bottom: 5px;
`;

const ClassAndPoint = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
`;

const RankClass = styled.div`
    font-size: 14px;
`;

const GamePoint = styled.div`
    font-size: 14px;
`;

const Record = styled.div`
    font-size: 14px;
`;
