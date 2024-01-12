import { ChangeEvent } from 'react';
import { UseFormRegister, FieldValues, Path, PathValue } from 'react-hook-form';
import styled from 'styled-components';

interface TextInputFieldProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: Path<T>;
    required: boolean;
    type?: string;
    id?: string;
    label?: string;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: PathValue<T, Path<T>>;
}

const TextInputField = <T extends FieldValues>({
    register,
    name,
    required = false,
    type = 'text',
    id,
    label,
    placeholder,
    value,
    onChange,
}: TextInputFieldProps<T>) => {
    return (
        <TextInputFieldContainer>
            <Label htmlFor={id}>{label}</Label>
            <Input
                {...register(name, { required, value, onChange })}
                type={type}
                placeholder={placeholder}
            />
        </TextInputFieldContainer>
    );
};

export default TextInputField;

const TextInputFieldContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
`;

const Label = styled.label`
    min-width: 80px;
`;

const Input = styled.input`
    width: 100%;
`;
