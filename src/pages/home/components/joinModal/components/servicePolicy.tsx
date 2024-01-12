import { styled } from 'styled-components';
import { useState } from 'react';

interface ServicePolicyProps {
    onClickNext: () => void;
}

const ServicePolicy = ({ onClickNext }: ServicePolicyProps) => {
    const [checkedAgree, setCheckedAgree] = useState<boolean>(false);

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedAgree(event.target.checked);
    };

    return (
        <ServicePolicyContainer>
            <Title>모두의 맞고 이용약관</Title>
            <Description>
                약관을 읽고 동의하실 경우 아래 박스를 체크해 계속 진행해주세요.
            </Description>
            <Contents>
                어쩌구저쩌구 이런들저런들 왈가왈부 갑이니 을이니 니가 잘났니 내가 못났니...
                어쩌구저쩌구 이런들저런들 왈가왈부 갑이니 을이니 니가 잘났니 내가 못났니...
                어쩌구저쩌구 이런들저런들 왈가왈부 갑이니 을이니 니가 잘났니 내가 못났니...
                어쩌구저쩌구 이런들저런들 왈가왈부 갑이니 을이니 니가 잘났니 내가 못났니...
                어쩌구저쩌구 이런들저런들 왈가왈부 갑이니 을이니 니가 잘났니 내가 못났니...
                어쩌구저쩌구 이런들저런들 왈가왈부 갑이니 을이니 니가 잘났니 내가 못났니...
                어쩌구저쩌구 이런들저런들 왈가왈부 갑이니 을이니 니가 잘났니 내가 못났니...
                어쩌구저쩌구 이런들저런들 왈가왈부 갑이니 을이니 니가 잘났니 내가 못났니...
                어쩌구저쩌구 이런들저런들 왈가왈부 갑이니 을이니 니가 잘났니 내가 못났니...
                어쩌구저쩌구 이런들저런들 왈가왈부 갑이니 을이니 니가 잘났니 내가 못났니...
                어쩌구저쩌구 이런들저런들 왈가왈부 갑이니 을이니 니가 잘났니 내가 못났니...
                어쩌구저쩌구 이런들저런들 왈가왈부 갑이니 을이니 니가 잘났니 내가 못났니...
                어쩌구저쩌구 이런들저런들 왈가왈부 갑이니 을이니 니가 잘났니 내가 못났니...
                어쩌구저쩌구 이런들저런들 왈가왈부 갑이니 을이니 니가 잘났니 내가 못났니...
            </Contents>
            <AgreeInputField>
                <AgreeInput type="checkbox" onChange={handleChangeCheckbox} />
                <AgreeText>이용약관을 잘 읽고 이해했으며, 내용에 동의합니다.</AgreeText>
            </AgreeInputField>
            <NextButton onClick={onClickNext} disabled={!checkedAgree}>
                계속 진행
            </NextButton>
        </ServicePolicyContainer>
    );
};

export default ServicePolicy;

const ServicePolicyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 20px;
`;

const Description = styled.div`
    font-size: 12px;
`;

const Contents = styled.div`
    height: 200px;
    font-size: 12px;
    overflow-y: scroll;
    padding: 10px;
`;

const AgreeInputField = styled.div`
    display: flex;
    align-items: center;
`;

const AgreeInput = styled.input`
    cursor: pointer;
`;

const AgreeText = styled.span`
    font-size: 13px;
`;

const NextButton = styled.button`
    width: 200px;
    padding: 10px;
    cursor: pointer;
`;
