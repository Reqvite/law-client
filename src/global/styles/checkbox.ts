import {checkboxAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys
);

const baseStyle = definePartsStyle({
  control: {
    padding: 2,
    borderRadius: 0,
    borderColor: 'var(--chakra-colors-accentColor)',
    _checked: {
      bg: 'var(--chakra-colors-accentColor)',
      borderColor: 'var(--chakra-colors-accentColor)',
      //   color: mode("white", "gray.900")(props),

      _hover: {
        bg: 'var(--chakra-colors-accentColor)',
        borderColor: 'var(--chakra-colors-accentColor)'
      }
      // _disabled: {
      //   borderColor: mode("gray.200", "transparent")(props),
      //   bg: mode("gray.200", "whiteAlpha.300")(props),
      //   color: mode("gray.500", "whiteAlpha.500")(props),
      // },
    },
    _focusVisible: {
      boxShadow: 'var(--chakra-shadows-mainShadow)'
    }
  }
});

export const checkboxTheme = defineMultiStyleConfig({baseStyle});
