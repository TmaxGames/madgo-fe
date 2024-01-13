import { ChangeEvent } from 'react';
import { UseFormRegister, FieldValues, Path, PathValue, Validate } from 'react-hook-form';
import styled from 'styled-components';

interface TextInputFieldProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: Path<T>;
    type?: string;
    id?: string;
    label?: string;
    placeholder?: string;
    required: boolean | string;
    value?: PathValue<T, Path<T>>;
    pattern?: { value: RegExp; message: string };
    validate?:
        | Validate<PathValue<T, Path<T>>, T>
        | Record<string, Validate<PathValue<T, Path<T>>, T>>;
    errorMessage?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    existCheck?: boolean;
}

const TextInputField = <T extends FieldValues>({
    register,
    name,
    type = 'text',
    id,
    label,
    placeholder,
    required = false,
    value,
    pattern,
    validate,
    errorMessage,
    onChange,
    existCheck = false,
}: TextInputFieldProps<T>) => {
    return (
        <TextInputFieldContainer>
            <Field>
                <Label htmlFor={id}>{label}</Label>
                <Input
                    {...register(name, { required, value, onChange, validate, pattern })}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                />
                {existCheck && <ExistCehckButton disabled={!value}>중복확인</ExistCehckButton>}
            </Field>
            <ErrorMessasge>{errorMessage}</ErrorMessasge>
        </TextInputFieldContainer>
    );
};

export default TextInputField;

const TextInputFieldContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Field = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const Label = styled.label`
    min-width: 80px;
    font-size: 12px;
    cursor: pointer;
`;

const Input = styled.input`
    width: 200px;
    padding: 5px;
`;

const ExistCehckButton = styled.button`
    margin-left: 10px;
    font-size: 12px;
    cursor: pointer;
`;

const ErrorMessasge = styled.span`
    height: 10px;
    font-size: 12px;
    color: red;
    margin-bottom: 10px;
`;
