import styled from 'styled-components';
import TextInputField from './components/joinModal/textInputField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import JoinModal from './components/joinModal';
import { requestLoginUser } from '@api/user';
import AlertModal from './components/alertModal';

interface LoginForm {
    email: string;
    password: string;
}

const Home = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<LoginForm>();
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');

    const onSubmitLoginForm: SubmitHandler<LoginForm> = async (fieldValues) => {
        const { email, password } = fieldValues;
        const res = await requestLoginUser({ email, password });

        if (res.status === 200) navigate('/lobby');
        else if (res.status === 403) setAlertMessage('이미 접속중인 계정입니다.');
        else setAlertMessage('로그인에 실패했습니다. 다시 시도해주세요.');
    };

    const handleClickJoin = () => {
        setIsOpenModal(true);
    };

    const handleCloseJoinModal = () => {
        setIsOpenModal(false);
    };

    const handleCloseAlertModal = () => {
        setAlertMessage('');
    };

    return (
        <>
            <HomeContainer id="root-container">
                <GameTitle>모두의 맞고</GameTitle>
                <LoginForm onSubmit={handleSubmit(onSubmitLoginForm)}>
                    <TextInputField
                        register={register}
                        name="email"
                        id="email"
                        label="이메일"
                        required
                    />
                    <TextInputField
                        register={register}
                        name="password"
                        id="passowrd"
                        type="password"
                        label="비밀번호"
                        required
                    />
                    <LoginButton type="submit" value="로그인" />
                </LoginForm>
                <Buttons>
                    <JoinButton onClick={handleClickJoin}>회원가입</JoinButton>
                </Buttons>
            </HomeContainer>
            {isOpenModal && <JoinModal onClickClose={handleCloseJoinModal} />}
            {alertMessage && (
                <AlertModal message={alertMessage} onClickClose={handleCloseAlertModal} />
            )}
        </>
    );
};

export default Home;

const HomeContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: green;
    gap: 20px;
`;

const GameTitle = styled.h1`
    font-size: 59px;
    margin-bottom: 20px;
`;

const LoginForm = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
`;

const LoginButton = styled.input`
    width: 100px;
    background-color: white;
    padding: 10px;
    border-radius: 2px;
    outline: none;
    border: none;
    cursor: pointer;
`;

const JoinButton = styled.button`
    width: 100px;
    padding: 10px;
    border-radius: 2px;
    outline: none;
    border: none;
    cursor: pointer;
`;
