import styled from 'styled-components';

interface ModalBackDropProps {
    onClickClose: () => void;
}

const ModalBackDrop = ({ onClickClose }: ModalBackDropProps) => {
    return <BackDrop onClick={onClickClose} />;
};

export default ModalBackDrop;

const BackDrop = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
`;
