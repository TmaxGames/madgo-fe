import styled from 'styled-components';
import TextInputField from './components/joinModal/textInputField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import JoinModal from './components/joinModal';
import { requestLoginUser } from '@api/auth';
import AlertModal from './components/alertModal';
import { setAccessToken } from '@api/auth/accessToken';

interface LoginForm {
    email: string;
    password: string;
}

const Home = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({ mode: 'onChange' });
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');

    const onSubmitLoginForm: SubmitHandler<LoginForm> = async (fieldValues) => {
        const { email, password } = fieldValues;
        const res = await requestLoginUser({ email, password });
        const { accessToken } = res;

        if (accessToken) {
            setAccessToken(res.accessToken);
            navigate('/lobby');
        } else if (res.status === 403) setAlertMessage('이미 접속중인 계정입니다.');
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

    const handleSuccessJoin = () => {
        setIsOpenModal(false);
        setAlertMessage('가입 성공! 로그인 해주세요!');
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
                        required={'이메일은 필수 항목입니다.'}
                        pattern={{
                            // eslint-disable-next-line
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: '올바른 이메일 형식이 아닙니다.',
                        }}
                        errorMessage={errors.email?.message}
                    />

                    <TextInputField
                        register={register}
                        name="password"
                        id="passowrd"
                        type="password"
                        label="비밀번호"
                        required={'비밀번호는 필수 항목입니다.'}
                        errorMessage={errors.password?.message}
                    />
                    <LoginButton type="submit" value="로그인" />
                </LoginForm>
                <Buttons>
                    <JoinButton onClick={handleClickJoin}>회원가입</JoinButton>
                </Buttons>
            </HomeContainer>
            {isOpenModal && (
                <JoinModal onClickClose={handleCloseJoinModal} onSuccessJoin={handleSuccessJoin} />
            )}
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
