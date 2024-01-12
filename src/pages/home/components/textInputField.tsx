import { ChangeEvent } from 'react';
import { UseFormRegister, FieldValues, Path, PathValue, Validate } from 'react-hook-form';
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
    validate?:
        | Validate<PathValue<T, Path<T>>, T>
        | Record<string, Validate<PathValue<T, Path<T>>, T>>;
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
    validate,
}: TextInputFieldProps<T>) => {
    return (
        <TextInputFieldContainer>
            <Label htmlFor={id}>{label}</Label>
            <Input
                {...register(name, { required, value, onChange, validate })}
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
