import { MyBuddyData } from 'mock';
import { styled } from 'styled-components';
import Buddy from './components/buddy';

const MyBuddy = () => {
    return (
        <MyBuddyContainer>
            <Title>친구</Title>
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
`;

const Title = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: bisque;
    font-size: 20px;
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
