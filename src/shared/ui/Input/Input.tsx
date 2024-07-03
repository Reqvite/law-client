'use client';
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps
} from '@chakra-ui/react';
import debounce from 'lodash.debounce';
import {ChangeEvent, forwardRef, ReactNode} from 'react';

type InputProps = ChakraInputProps & {
  label?: string;
  helperText?: string;
  error?: string;
  isRequired?: boolean;
  leftIcon?: ReactNode;
  readOnly?: boolean;
  debounceTime?: number;
  withError?: boolean;
  inputType?: InputProps['type'];
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      readOnly,
      helperText,
      error,
      isRequired = false,
      withError = true,
      leftIcon,
      debounceTime,
      onChange,
      inputType,
      ...otherProps
    },
    ref
  ) => {
    const onChangeValue = debounceTime
      ? debounce((event: ChangeEvent<HTMLInputElement>): void => {
          if (onChange) {
            onChange(event);
          }
        }, debounceTime)
      : onChange;

    return (
      <FormControl isInvalid={Boolean(error)}>
        {label && (
          <FormLabel>
            {label}
            {isRequired && (
              <Box as="span" color="errorColorLight" ml="3px">
                *
              </Box>
            )}
          </FormLabel>
        )}
        <InputGroup>
          {leftIcon && <InputLeftElement pointerEvents="none" children={leftIcon} />}
          <ChakraInput
            readOnly={readOnly}
            autoComplete="off"
            onChange={onChangeValue}
            type={inputType || 'text'}
            ref={ref}
            {...otherProps}
          />
        </InputGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {withError && (
          <Box height="5px" marginTop={2}>
            <FormErrorMessage margin={0}>{error}</FormErrorMessage>
          </Box>
        )}
      </FormControl>
    );
  }
);
