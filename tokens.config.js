import { defineTheme } from 'pinceau'

export default defineTheme({
    typography: {
        // This will change the general line-break size
        letterSpacings: {
            tight: '-0.035em',
            wide: '0.035em'
        },
        font: {
        //     // body : "Merriweather",
        //     // display : "Fuzzy Bubbles"
            body : '{font.serif}',
            display : '{font.cursive}'
        }
    },
    prose: {
        h1: {
            fontSize: '{typography.fontSize.5xl}',
            letterSpacing: '{typography.letterSpacing.tight}',
            lineHeight: '{typography.lead.none}',
            fontWeight: 'normal',
            color: '{typography.color.primary.700}'
        },
        h2: {
            letterSpacing: '{typography.letterSpacing.tight}',
            lineHeight: '{typography.lead.tight}',
            fontWeight: 'normal',
            color: '{typography.color.primary.700}'
        },
        h3: {
            letterSpacing: '{typography.letterSpacing.tight}',
            lineHeight: '{typography.lead.tight}',
            color: '{typography.color.primary.700}'
        },
        h4: {
            letterSpacing: '{typography.letterSpacing.tight}',
            lineHeight: '{typography.lead.tight}',
            color: '{typography.color.primary.700}'
        },
        a: {
            color: '{typography.color.primary.700}',
            wordBreak: 'break-all'
        },
        p: {
            fontSize: '{typography.fontSize.lg}',
            lineHeight: '{typography.lead.relaxed}',
            br: {
                margin: '0 0 0 0'
            }
        },
        li: {
            margin: '0.5em 0',
            listStylePosition: 'outside'
        },
        blockquote: {
            //margin: '{typography.verticalMargin.base} 0',
            //padding: '0 0 0 24px',
            //quotes: "'201C' '201D' '2018' '2019'",
            color: {
                initial: '{typography.color.primary.700}',
                dark: '{typography.color.primary.300}'
            },
            border: {
                width: '4px',
                style: 'solid',
                color: {
                    initial: '{typography.color.secondary.300}',
                    dark: '{typography.color.secondary.700}'
                }
            }
        }
    },
    color: {
        white: '#fafafa',
        black: '#151511',
        primary: {
            50: "#FBFEFB",
            100: "#F7FCF8",
            200: "#E4F4EA",
            300: "#C6E5D5",
            400: "#A0D0BD",
            500: "#76B5A2",
            600: "#509484",
            700: "#316F64",
            800: "#1B4741",
            900: "#0B211E"
        },
        secondary: {
          50: '{color.gray.50}',
          100: '{color.gray.100}',
          200: '{color.gray.200}',
          300: '{color.gray.300}',
          400: '{color.gray.400}',
          500: '{color.gray.500}',
          600: '{color.gray.600}',
          700: '{color.gray.700}',
          800: '{color.gray.800}',
          900: '{color.gray.900}'
        },
        gray: {
            50: "#FEF9F8",
            100: "#FCF8F6",
            200: "#F4EFED",
            300: "#E5E0DE",
            400: "#D0CCC9",
            500: "#B5B1AE",
            600: "#94918F",
            700: "#6F6D6B",
            800: "#474645",
            900: "#212020"
        }
    },
    font: {
        cursive: 'Fuzzy Bubbles, cursive',
        // sans: 'Inter, sans-serif',
        serif: 'Merriweather, ui-serif, Georgia, serif',
        // mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace'
    }
})


