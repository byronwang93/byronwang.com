// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react'

const theme = {
    breakpoints: {
        base: "0em", // 0px
        almostSm: '430px',
        sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
        md: "48em", // ~768px
        lg: "62em", // ~992px
        xl: "80em", // ~1280px
        "2xl": "96em", // ~1536px
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    colors: {
        light: {
            background: '#eeeff1',
            primary: 'black',
            standoutText: '#ff5970',
            tagColour: '#ffa0ad',
            hoverColour: '#ff5970',
            initialButtonColour: '#ffa0ad',
            tagTextColour: 'white',
            secondaryTextColour: '#4D4D4D',
            formBoxColour: 'white'
        },
        dark: {
            background: '#1a202c',
            primary: 'white',
            standoutText: '#03c0c1',
            tagColour: '#81e6d9',
            hoverColour: '#03c0c1',
            initialButtonColour: '#81e6d9',
            tagTextColour: 'black',
            secondaryTextColour: '#D7D7D7',
            formBoxColour: '#19212D'
        }
        
    },
}

export default extendTheme(theme);