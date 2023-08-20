const plugin = require('tailwindcss/plugin')

// module.exports = {
//     // ...
//     plugins: [
//         plugin(function ({ addVariant }) {
//             addVariant('optional', '&:optional')
//             addVariant('hocus', ['&:hover', '&:focus'])
//             addVariant('inverted-colors', '@media (inverted-colors: inverted)')
//         })
//     ]
// }
module.exports = {
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }
        }
    }
}
module.exports = {
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                }
            }
        }
    }
}