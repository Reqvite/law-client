import {extendTheme} from '@chakra-ui/react';
import {mode} from '@chakra-ui/theme-tools';
import {buttonTheme} from './button';
import {checkboxTheme} from './checkbox';
import {fonts} from './fonts';

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-35px)'
};

export const getTheme = (colorMode: string) => {
  return extendTheme({
    config: {
      initialColorMode: colorMode,
      useSystemColorMode: false
    },
    fonts: fonts,
    styles: {
      global: (props: any) => ({
        body: {
          fontFamily: 'body',
          color: mode('#3D4D54', '#ffffff')(props),
          bg: mode('#ffffff', '#202023')(props)
        },
        '.swiper-pagination': {
          marginBottom: '20px !important'
        }
      })
    },
    colors: {
      mainBgColorLight: '#ffffff',
      secondaryBgColorLight: '#f5f5f5',
      secondaryBgColorLightTransparent: '#f5f5f560',
      mainBgColorDark: '#202023',
      secondaryBgColorDark: '#282828',
      secondaryBgColorDarkTransparent: '#28282860',
      mainColorLight: '#3D4D54',
      mainColorDark: '#ffffff',
      errorColorLight: '#F56565',
      errorColorDark: '#E53E3E',
      successColorLight: '#48BB78',
      successColorDark: '#2F855A',
      accentColor: '#D9CC6E',
      accentColorTransparent: '#D9CC6E30',
      accentColorTransparentDarker: '#D9CC6E40',
      accentColorTransparentDarkest: '#D9CC6E70'
    },
    layerStyles: {
      primary: {
        bgGradient: 'linear(to-r, #D9CC6E,gray)'
      }
    },
    shadows: {
      mainShadow: '0 0 0 3px var(--chakra-colors-accentColorTransparentDarker)',
      cardShadow: ' rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
    },
    borders: {
      borderMain: '2px solid var(--chakra-colors-accentColor)'
    },
    sizes: {
      headerHeight: '75px',
      drawerFooterHeight: '113px',
      drawerWidth: '380px'
    },
    space: {
      bs: '1.5rem',
      md: '3rem',
      lg: '4rem'
    },
    zIndices: {
      navbar: 100,
      drawer: 101,
      drawerFooter: 102
    },
    components: {
      Button: buttonTheme,
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles
                }
              },
              'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
                {
                  ...activeLabelStyles
                },
              label: {
                top: 0,
                left: 0,
                zIndex: 2,
                position: 'absolute',
                backgroundColor: 'transparent',
                pointerEvents: 'none',
                mx: 3,
                px: 1,
                my: 3,
                transformOrigin: 'left top'
              }
            }
          }
        }
      },
      Input: {
        variants: {
          clear: {
            field: {
              color: 'var(--chakra-colors-accentColor)',
              width: '100%',
              display: 'inline-block',
              my: '0.25rem',
              bg: 'transparent'
            }
          },
          primary: {
            field: {
              color: 'var(--chakra-colors-accentColor)',
              width: '100%',
              display: 'inline-block',
              my: '0.25rem',
              bg: 'transparent',
              border: '2px solid var(--chakra-colors-accentColor)'
            }
          }
        }
      },
      Checkbox: checkboxTheme,
      Tabs: {
        baseStyle: {
          tab: {
            _selected: {
              color: 'var(--chakra-colors-accentColor)',
              borderColor: 'var(--chakra-colors-accentColor)'
            }
          },
          tablist: {
            borderBottom: '2px solid',
            borderColor: 'var(--chakra-colors-accentColor)',
            overflowX: 'auto',
            '::-webkit-scrollbar': {
              height: '8px'
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: 'gray.400',
              borderRadius: '24px'
            },
            '::-webkit-scrollbar-thumb:hover': {
              backgroundColor: 'gray.500'
            },
            '::-webkit-scrollbar-track': {
              backgroundColor: 'gray.200'
            }
          }
        }
      }
    }
  });
};
