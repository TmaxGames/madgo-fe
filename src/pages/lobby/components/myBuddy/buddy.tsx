import { styled } from 'styled-components';
import PlayerProfileModal from '../playerProfileModal';
import { useState } from 'react';

interface BuddyProps {
    uuid: number;
    profileImage?: string;
    nickname: string;
    rank?: string;
    rankClass?: string;
    gameMoney: string;
    gamePoint: string;
    record?: string;
    state: string;
    // 'playing' | 'online' | 'offline';
}

const Buddy = ({
    uuid,
    nickname,
    rank,
    rankClass,
    gameMoney,
    gamePoint,
    record,
    state,
}: BuddyProps) => {
    const [isOpenPlayerProfile, setIsOpenPlayerProfile] = useState<boolean>(false);

    const handleClickPlayer = () => {
        setIsOpenPlayerProfile(true);
    };

    const handleClosePlayerModal = () => {
        setIsOpenPlayerProfile(false);
    };
    return (
        <>
            <BuddyContainer onClick={handleClickPlayer}>
                <BuddyInfo>
                    <ProfileImage />
                    <Nickname>{nickname}</Nickname>
                </BuddyInfo>
                <State>
                    {state === 'playing' ? '게임중' : state === 'online' ? '접속중' : '오프라인'}
                </State>
            </BuddyContainer>
            {isOpenPlayerProfile && (
                <PlayerProfileModal
                    nickname={nickname}
                    rank={rank}
                    rankClass={rankClass}
                    gameMoney={gameMoney}
                    gamePoint={gamePoint}
                    record={record}
                    onClickClose={handleClosePlayerModal}
                />
            )}
        </>
    );
};

export default Buddy;

const BuddyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid beige;
    padding: 5px;
    cursor: pointer;
`;

const BuddyInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const ProfileImage = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: grey;
`;

const Nickname = styled.div`
    font-size: 14px;
`;

const State = styled.div`
    font-size: 14px;
`;
