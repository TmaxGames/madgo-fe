import { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import ServicePolicy from './servicePolicy';
import JoinForm from './joinForm';
import ModalBackDrop from '@components/modalBackDrop';

interface JoinModalProps {
    onClickClose: () => void;
}

const JoinModal = ({ onClickClose }: JoinModalProps) => {
    const rootElement = document.getElementById('root-container') as HTMLElement;
    const [isAgreedPolicy, setIsAgreedPolicy] = useState<boolean>(false);

    const handleClickNext = () => {
        setIsAgreedPolicy(true);
    };

    return createPortal(
        <>
            <JoinModalContainer>
                {!isAgreedPolicy && <ServicePolicy onClickNext={handleClickNext} />}
                {isAgreedPolicy && <JoinForm />}
            </JoinModalContainer>
            <ModalBackDrop onClickClose={onClickClose} />
        </>,
        rootElement
    );
};

export default JoinModal;

const JoinModalContainer = styled.div`
    width: 450px;
    height: 500px;
    position: absolute;
    background-color: white;
    z-index: 1000;
    padding: 30px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;
