import { useState } from 'react';
import styled from 'styled-components';
import ServicePolicy from './components/servicePolicy';
import JoinForm from './components/joinForm';

interface JoinModalProps {
    onClickClose: () => void;
}

const JoinModal = ({ onClickClose }: JoinModalProps) => {
    const [isAgreedPolicy, setIsAgreedPolicy] = useState<boolean>(false);

    const handleClickNext = () => {
        setIsAgreedPolicy(true);
    };

    return (
        <>
            <JoinModalContainer>
                {!isAgreedPolicy && <ServicePolicy onClickNext={handleClickNext} />}
                {isAgreedPolicy && <JoinForm />}
            </JoinModalContainer>
            <BackDrop onClick={onClickClose} />
        </>
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

const BackDrop = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
`;
