import { MyBuddyData } from 'mock';
import { styled } from 'styled-components';
import Buddy from './buddy';
import { useState } from 'react';
import AddBuddyModal from '../addBuddyModal';

const MyBuddy = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const handleClcikAddBuddy = () => {
        setIsOpenModal(true);
    };

    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    return (
        <>
            <MyBuddyContainer>
                <Header>
                    <Title>친구</Title>
                    <AddBuddy onClick={handleClcikAddBuddy}>친구추가</AddBuddy>
                </Header>
                <BuddyList>
                    {MyBuddyData.map(
                        ({
                            uuid,
                            nickname,
                            rank,
                            rankClass,
                            gamePoint,
                            gameMoney,
                            record,
                            state,
                        }) => (
                            <Buddy
                                key={uuid}
                                uuid={uuid}
                                nickname={nickname}
                                rank={rank}
                                rankClass={rankClass}
                                gamePoint={gamePoint}
                                gameMoney={gameMoney}
                                record={record}
                                state={state}
                            />
                        )
                    )}
                </BuddyList>
            </MyBuddyContainer>
            {isOpenModal && <AddBuddyModal onClickClose={handleCloseModal} />}
        </>
    );
};

export default MyBuddy;

const MyBuddyContainer = styled.div`
    width: 350px;
    border: 8px solid red;
    border-radius: 10px;
    padding: 10px;
    padding: 10px;
    background-color: white;
`;

const Header = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: bisque;
    font-size: 20px;
    padding: 0 10px;
`;

const Title = styled.div``;

const AddBuddy = styled.button`
    cursor: pointer;
`;

const BuddyList = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }
`;
