import { styled } from 'styled-components';

interface BuddyProps {
    profileImage?: string;
    nickname: string;
    state: string;
    // 'playing' | 'online' | 'offline';
}

const Buddy = ({ nickname, state }: BuddyProps) => {
    return (
        <BuddyContainer>
            <BuddyInfo>
                <ProfileImage />
                <Nickname>{nickname}</Nickname>
            </BuddyInfo>
            <State>
                {state === 'playing' ? 'game' : state === 'online' ? '접속중' : '오프라인'}
            </State>
        </BuddyContainer>
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
