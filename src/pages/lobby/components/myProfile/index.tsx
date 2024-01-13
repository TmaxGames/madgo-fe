import { styled } from 'styled-components';
import { MyProfileData } from 'mock';

const MyProfile = () => {
    const { uuid, nickname, rank, rankClass, gamePoint, money, record } = MyProfileData;
    return (
        <MyProfileContainer>
            <UUID>uuid: {uuid}</UUID>
            <ProfileImage />
            <Nickname>{nickname}</Nickname>
            <PlayerInfo>
                <Rank>순위: {rank}위(상위 0.01%)</Rank>
                <Class>
                    점수: {rankClass} {gamePoint}점
                </Class>
                <GameMoney>게임머니: {money}</GameMoney>
                <GameRecord>{record}(승률 100%)</GameRecord>
            </PlayerInfo>
            <Buttons>
                <ChangeNicknameButton>닉네임 변경</ChangeNicknameButton>
                <ChangeProfileImageButton>프로필사진 변경</ChangeProfileImageButton>
            </Buttons>
        </MyProfileContainer>
    );
};

export default MyProfile;

const MyProfileContainer = styled.div`
    width: 300px;
    height: 500px;
    border: 5px solid red;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: beige;
`;

const UUID = styled.div``;

const ProfileImage = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: grey;
`;

const PlayerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Nickname = styled.div``;

const Rank = styled.div``;

const Class = styled.div``;

const GameMoney = styled.div``;

const GameRecord = styled.div``;

const Buttons = styled.div`
    display: flex;
    gap: 5px;
`;

const ChangeProfileImageButton = styled.button`
    cursor: pointer;
`;

const ChangeNicknameButton = styled.button`
    cursor: pointer;
`;
