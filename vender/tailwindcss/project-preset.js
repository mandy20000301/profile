// const defaultTheme = require("tailwindcss/defaultTheme");
const screens = require("./screens.json");
const colors = require("./colors.json");
const fontSize = require("./fontSize.json");

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                body: [
                    "Poppins",
                ],
            },
        },
        screens,
        fontSize,
        colors
    },
}
