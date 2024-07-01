import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps
} from '@chakra-ui/react';
import debounce from 'lodash.debounce';
import {ChangeEvent, forwardRef} from 'react';

type TextareaProps = ChakraTextareaProps & {
  label?: string;
  helperText?: string;
  error?: string;
  isRequired?: boolean;
  readOnly?: boolean;
  debounceTime?: number;
  withError?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      readOnly,
      helperText,
      error,
      isRequired = false,
      withError = true,
      debounceTime,
      onChange,
      ...otherProps
    },
    ref
  ) => {
    const onChangeValue = debounceTime
      ? debounce((event: ChangeEvent<HTMLTextAreaElement>): void => {
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
        <ChakraTextarea
          readOnly={readOnly}
          autoComplete="off"
          onChange={onChangeValue}
          {...otherProps}
          ref={ref}
        />
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
