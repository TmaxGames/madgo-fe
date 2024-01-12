import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import TextInputField from './textInputField';

interface JoinModalProps {
    onClickClose: () => void;
}

interface JoinForm {
    email: string;
    nickname: string;
    password: string;
    confirmPassword: string;
}

const JoinModal = ({ onClickClose }: JoinModalProps) => {
    const [isAgreed, setIsAgreed] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<JoinForm>({ mode: 'onChange' });

    const { email, nickname, password, confirmPassword, setError } = watch();

    const onSubmitJoinForm: SubmitHandler<JoinForm> = () => {
        console.log('join');
    };

    const handleClickNext = () => {
        setIsAgreed(true);
    };

    const validatePasswordMatch = (value: string) => {
        const passwordFieldValue = watch('password');
        return value === passwordFieldValue || 'Passwords do not match';
    };

    return (
        <>
            <JoinModalContainer>
                {!isAgreed && (
                    <ServicePolicy>
                        <Title>모두의 맞고 이용약관</Title>
                        <Contents>어쩌구저쩌구</Contents>
                        <AgreePolicy>
                            <AgreeInput type="checkbox" />
                            <AgreeText>이용약관을 잘 읽고 이해했으며, 내용에 동의합니다.</AgreeText>
                        </AgreePolicy>
                        <NextButton onClick={handleClickNext}>계속 진행</NextButton>
                    </ServicePolicy>
                )}
                {isAgreed && (
                    <JoinForm onSubmit={handleSubmit(onSubmitJoinForm)}>
                        <TextInputField register={register} name="email" label="이메일" required />
                        <ValidateEmailButton>중복확인</ValidateEmailButton>
                        <TextInputField
                            register={register}
                            name="nickname"
                            label="닉네임"
                            required
                        />
                        <ValidateNicknameButton>중복확인</ValidateNicknameButton>
                        <TextInputField
                            register={register}
                            name="password"
                            label="비밀번호"
                            required
                        />
                        <TextInputField
                            register={register}
                            name="confirmPassword"
                            label="비밀번호 확인"
                            validate={validatePasswordMatch}
                            required
                        />
                        <JoinButton type="submit" value="가입완료" />
                    </JoinForm>
                )}
            </JoinModalContainer>
            <BackDrop onClick={onClickClose} />
        </>
    );
};

export default JoinModal;

const JoinModalContainer = styled.div`
    width: 400px;
    height: 500px;
    position: absolute;
    background-color: white;
    z-index: 1000;
    padding: 30px;
    border-radius: 20px;
`;

const ServicePolicy = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Title = styled.h1``;

const Contents = styled.div``;

const AgreePolicy = styled.div``;

const AgreeInput = styled.input``;

const AgreeText = styled.span``;

const BackDrop = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
`;

const NextButton = styled.button`
    width: 200px;
`;

const JoinForm = styled.form``;

const JoinButton = styled.input``;

const ValidateEmailButton = styled.button``;

const ValidateNicknameButton = styled.button``;
