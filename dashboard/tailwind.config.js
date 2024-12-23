/** @type {import('tailwindcss').Config} */
module.exports = {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], //unused css remove here
    theme: {
        extend: {
            fontFamily: {
                nunitoRegular: ['Nunito Regular'],
                nunitoMedium: ['Nunito Medium'],
                nunitoBold: ['Nunito Bold'],
                nunitoBlack: ['Nunito Black'],
                nunitoLight: ['Nunito Light'],
            },
            colors: {
                primary:'#1e223d',
                navGrey:"#bbbdc5",
                Geyser: '#D6DEE7',
                WaterBlue: '#0C8EC7',
                SpaceCadet: '#141C4C',
                Kimberly: '#5B6082',
                PictonBlue: '#3DADE0',
                ElectricBlue: '#8CF5FF',
                SpaceStation: '#6A6A78',
                Sailboat: '#2F486F',
                LimeGreen: '#3AC430',
                deemLimeGreen: 'rgba(58, 196, 48, 0.15)',
                YellowOrange: '#FE9705',
                deemYellowOrange: 'rgba(254, 151, 5, 0.15);',
                CalmWaters: '#F1F4F8',
                // CalmWaters: '#8CF5FF',
                DreamyCloud: '#E7E8ED',
                GlowingBrakeDisc: '#EF4949',
                Comet: '#5B6082',
                lightSpaceCadet: 'rgba(20, 28, 76, 0.7)',
                Mirage: '#151929',
                Azure: '#0085FF',
                StatusGray: '#9EA7AD',
                GhostWhite: '#F5FBFD',
                lightGray: 'rgba(100, 208, 239, 0.2);',
            },
        },
    },
    plugins: [],
}
