import { styled } from 'styled-components';
import Player from './player';
import { rankingData } from 'mock';

const Ranking = () => {
    return (
        <RankingContainer>
            <Title>랭킹</Title>
            <RankerList>
                {rankingData.map(({ nickname, rank, rankClass, gamePoint, record }) => (
                    <Player
                        nickname={nickname}
                        rank={rank}
                        rankClass={rankClass}
                        gamePoint={gamePoint}
                        record={record}
                    />
                ))}
            </RankerList>
        </RankingContainer>
    );
};

export default Ranking;

const RankingContainer = styled.div`
    width: 350px;
    border: 8px solid red;
    border-radius: 10px;
    padding: 10px;
    background-color: white;
`;

const Title = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    background-color: bisque;
    font-size: 20px;
    padding: 0 10px;
`;

const RankerList = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
    margin-top: 10px;

    &::-webkit-scrollbar {
        width: 0;
    }
`;
