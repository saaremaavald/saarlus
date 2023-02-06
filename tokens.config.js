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
            color: '{typography.color.primary.700}'
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
    },
    font: {
        cursive: 'Fuzzy Bubbles, cursive',
        sans: 'Inter, sans-serif',
        serif: 'Merriweather, ui-serif, Georgia, serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace'
    }
})


