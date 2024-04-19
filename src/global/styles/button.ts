export const buttonTheme = {
  variants: {
    primary: {
      color: 'white',
      border: '2px solid transparent',
      display: 'inline-flex',
      fontWeight: 600,
      bg: 'var(--chakra-colors-accentColor)',
      _hover: {
        background: 'transparent',
        border: '2px solid var(--chakra-colors-accentColor)',
        color: 'var(--chakra-colors-accentColor)',
        _disabled: {
          backgroundColor: '2px solid var(--chakra-colors-accentColorTransparent)'
        }
      },
      _focusVisible: {
        background: 'transparent',
        border: '2px solid var(--chakra-colors-accentColor)',
        color: 'var(--chakra-colors-accentColor)',
        boxShadow: 'none'
      },
      cursor: 'pointer'
    },
    secondary: {
      border: '2px solid var(--chakra-colors-accentColor)',
      color: 'var(--chakra-colors-accentColor)',
      _hover: {
        background: 'var(--chakra-colors-accentColor)',
        borderColor: 'transparent',
        color: 'white',
        _disabled: {
          backgroundColor: '2px solid var(--chakra-colors-accentColorTransparent)'
        }
      },
      _focusVisible: {
        boxShadow: 'var(--chakra-shadows-mainShadow)'
      }
    },
    link: {
      _hover: {
        color: 'var(--chakra-colors-accentColor)',
        textDecoration: 'none'
      },
      _focusVisible: {
        boxShadow: 'var(--chakra-shadows-mainShadow)'
      }
    },
    success: {
      border: '2px solid var(--chakra-colors-successColorLight)',
      background: 'var(--chakra-colors-successColorLight)',
      color: 'white',
      _hover: {
        background: 'var(--chakra-colors-successColorLight)',
        borderColor: 'transparent',
        color: 'white'
      },
      _focusVisible: {
        boxShadow: 'var(--chakra-shadows-mainShadow)'
      }
    }
  }
};
