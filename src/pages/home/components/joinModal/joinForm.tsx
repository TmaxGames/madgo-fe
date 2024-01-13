import { styled } from 'styled-components';
import TextInputField from './textInputField';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IJoinForm {
    email: string;
    nickname: string;
    password: string;
    confirmPassword: string;
}

const JoinForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IJoinForm>({ mode: 'onChange' });

    const { email: emailValue, nickname: nicknameValue } = watch();

    const onSubmitJoinForm: SubmitHandler<IJoinForm> = () => {
        console.log('join');
    };

    const validatePasswordMatch = (value: string, formValues: IJoinForm) => {
        return value === formValues.password || '비밀번호가 일치하지 않습니다.';
    };

    return (
        <JoinFormContainer>
            <Title>회원가입</Title>
            <Form onSubmit={handleSubmit(onSubmitJoinForm)}>
                <TextInputField
                    register={register}
                    value={emailValue}
                    name="email"
                    label="이메일"
                    required={'이메일은 필수 항목입니다.'}
                    pattern={{
                        // eslint-disable-next-line
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: '올바른 이메일 형식이 아닙니다.',
                    }}
                    errorMessage={errors.email?.message}
                    existCheck
                />

                <TextInputField
                    register={register}
                    value={nicknameValue}
                    name="nickname"
                    label="닉네임"
                    required={'닉네임은 필수 항목입니다.'}
                    errorMessage={errors.nickname?.message}
                    existCheck
                />

                <TextInputField
                    register={register}
                    name="password"
                    label="비밀번호"
                    required={'비밀번호는 필수 항목입니다.'}
                    errorMessage={errors.password?.message}
                />

                <TextInputField
                    register={register}
                    name="confirmPassword"
                    label="비밀번호 확인"
                    validate={validatePasswordMatch}
                    required={'비밀번호를 재입력 해주세요.'}
                    errorMessage={errors.confirmPassword?.message}
                />

                <JoinButton type="submit" value="가입완료" />
            </Form>
        </JoinFormContainer>
    );
};

export default JoinForm;

const JoinFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

const Title = styled.div`
    text-align: center;
    font-size: 20px;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const JoinButton = styled.input`
    width: 100px;
    padding: 10px;
    cursor: pointer;
`;
