import styled from 'styled-components';
import { createPortal } from 'react-dom';
import ModalBackDrop from '@components/modalBackDrop';

interface AlertModalProps {
    message: string;
    onClickClose: () => void;
}

const AlertModal = ({ message, onClickClose }: AlertModalProps) => {
    const rootElement = document.getElementById('root-container') as HTMLElement;

    return createPortal(
        <>
            <AlertModalContainer>
                <Message>{message}</Message>
                <CloseButton onClick={onClickClose}>확인</CloseButton>
            </AlertModalContainer>
            <ModalBackDrop onClickClose={onClickClose} />
        </>,
        rootElement
    );
};

export default AlertModal;

const AlertModalContainer = styled.div`
    width: 400px;
    height: 200px;
    position: absolute;
    z-index: 1000;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 30px;
`;

const Message = styled.div``;

const CloseButton = styled.button`
    width: 100px;
    padding: 10px;
    cursor: pointer;
    margin-top: 50px;
    align-self: end;
`;
