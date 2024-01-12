import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    isOpen: boolean;
}

const ModalPortal = ({ children, isOpen }: PortalProps) => {
    const element = document.getElementById('root-container') as HTMLElement;
    return isOpen && createPortal(children, element);
};

export default ModalPortal;
