const colors = require('tailwindcss/colors')
module.exports = {
    // purge: {
    //   enabled: true,
    //   content:['./*.html']
    // },
    purge: ['./*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'opensans': 'Open Sans'
            },
            
            fontSize: {
                'sm': '15px',
                'xs': '13px',
                '2xs': '12px',
                'md': '14px'
            },

            colors: {
                primary: '#7e7e7e',
                secondary: '#c7c7c7',
                titleColor: '#656565',
                bgPrimary: '#f9f9f9',
                bgSecondary: '#fbfbfb'
            },

            container: {
                center: true,
                padding: "1rem",
                screens: {
                lg: "1320px",
                xl: "1320px",
                "2xl": "1320px"
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}