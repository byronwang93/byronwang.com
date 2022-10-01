// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react'

const theme = {
    config: {
        initialColorMode: 'dark',
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
            tagTextColour: 'white'
        },
        dark: {
            background: '#1a202c',
            primary: 'white',
            standoutText: '#03c0c1',
            tagColour: '#81e6d9',
            hoverColour: '#03c0c1',
            initialButtonColour: '#81e6d9',
            tagTextColour: 'black'
        }
        
    },
}

export default extendTheme(theme);