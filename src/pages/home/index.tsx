import styled from 'styled-components';
import TextInputField from './components/textInputField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export interface LoginForm {
    email: string;
    password: string;
}

const Home = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<LoginForm>();

    const onSubmitLoginForm: SubmitHandler<LoginForm> = () => {
        console.log('submit');
        navigate('/lobby');
    };

    return (
        <HomeContainer>
            <GameTitle>모두의 맞고</GameTitle>
            <LoginForm onSubmit={handleSubmit(onSubmitLoginForm)}>
                <TextInputField register={register} name="email" label="이메일" required />
                <TextInputField register={register} name="password" label="비밀번호" required />
                <LoginButton type="submit" value="로그인" />
            </LoginForm>
            <Buttons>
                <JoinButton>회원가입</JoinButton>
            </Buttons>
        </HomeContainer>
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
    background-color: white;
    padding: 10px;
    width: 100%;
    border-radius: 2px;
    cursor: pointer;
    outline: none;
    border: none;
`;

const JoinButton = styled.button``;
