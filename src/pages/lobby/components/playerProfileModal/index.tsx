import ModalBackDrop from '@components/modalBackDrop';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface PlayerProfileProps {
    uuid?: number;
    profileImage?: string;
    nickname: string;
    rank?: string;
    rankClass?: string;
    gameMoney: string;
    gamePoint: string;
    record?: string;
    isBuddy?: boolean;
    // nickname 제외 임시로 optional 처리
    onClickClose: () => void;
}

const PlayerProfileModal = ({
    uuid,
    profileImage,
    nickname,
    rank,
    rankClass,
    gamePoint,
    gameMoney,
    record,
    isBuddy,
    onClickClose,
}: PlayerProfileProps) => {
    const rootElement = document.getElementById('root-container') as HTMLElement;
    return createPortal(
        <>
            <PlayerProfileModalContainer>
                <Nickname>{nickname}</Nickname>
                <ProfileImage />
                <DetailInfo>
                    <Rank>순위: {rank}</Rank>
                    <RankClass>계급: {rankClass}</RankClass>
                    <GamePoint>점수: {gamePoint}</GamePoint>
                    <GameMoney>게임머니: {gameMoney}</GameMoney>
                    <Record>전적: {record}</Record>
                </DetailInfo>
                <Buttons>
                    <BuddyButton>{isBuddy ? '친구삭제' : '친구추가'}</BuddyButton>
                    <SendMessageButton>쪽지보내기</SendMessageButton>
                </Buttons>
            </PlayerProfileModalContainer>
            <ModalBackDrop onClickClose={onClickClose} />
        </>,
        rootElement
    );
};

export default PlayerProfileModal;

const PlayerProfileModalContainer = styled.div`
    width: 400px;
    height: 500px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    z-index: 1000;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 30px;
    gap: 20px;
`;

const ProfileImage = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: grey;
`;

const Nickname = styled.div``;

const DetailInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Rank = styled.div``;

const RankClass = styled.div``;

const GamePoint = styled.div``;

const GameMoney = styled.div``;

const Record = styled.div``;

const Buttons = styled.div`
    display: flex;
    gap: 10px;
`;

const BuddyButton = styled.button`
    cursor: pointer;
`;

const SendMessageButton = styled.button`
    cursor: pointer;
`;
