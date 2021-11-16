const colors = require('tailwindcss/colors');

module.exports = {
    purge: [],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            colors : {
                'emerald' : colors.emerald,
                'teal' : colors.teal,
                'amber' : colors.amber,
                'rose' : colors.rose
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}