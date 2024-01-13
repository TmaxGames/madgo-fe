import { MyBuddyData } from 'mock';
import { styled } from 'styled-components';
import Buddy from './buddy';

const MyBuddy = () => {
    return (
        <MyBuddyContainer>
            <Header>
                <Title>친구</Title>
                <AddBuddy>친구추가</AddBuddy>
            </Header>
            <BuddyList>
                {MyBuddyData.map(({ nickname, state }) => (
                    <Buddy nickname={nickname} state={state} />
                ))}
            </BuddyList>
        </MyBuddyContainer>
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

const AddBuddy = styled.button``;

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
