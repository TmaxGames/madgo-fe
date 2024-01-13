import styled from 'styled-components';
import { createPortal } from 'react-dom';
import ModalBackDrop from '@components/modalBackDrop';

interface AddBuddyModalProps {
    onClickClose: () => void;
}

const AddBuddyModal = ({ onClickClose }: AddBuddyModalProps) => {
    const rootElement = document.getElementById('root-container') as HTMLElement;
    return createPortal(
        <>
            <AddBuddyModalContainer>
                <Header>
                    <Title>친구 찾기</Title>
                </Header>
                <Description>uuid나 닉네임으로 친구를 찾을 수 있어요.</Description>
                <Form>
                    <InputField type="text" />
                    <SearchButton type="submit" value="검색" />
                </Form>
                <SearchResult></SearchResult>
            </AddBuddyModalContainer>
            <ModalBackDrop onClickClose={onClickClose} />
        </>,
        rootElement
    );
};

export default AddBuddyModal;

const AddBuddyModalContainer = styled.div`
    width: 400px;
    height: 400px;
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

const Header = styled.div``;

const Title = styled.div`
    font-size: 20px;
`;

const Description = styled.div``;

const Form = styled.form`
    display: flex;
    gap: 10px;
`;

const InputField = styled.input``;

const SearchButton = styled.input``;

const SearchResult = styled.div``;
