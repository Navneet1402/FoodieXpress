const {createTheme}= require("@mui/material");

export const darkTheme=createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#ff2e2e",
        },
        secondary:{
            main:"#111212",
        },
        black:{
            main:"#242B2E"
        },
        background:{
            main:"#0000000",
            default:"#0D0D0D",
            paper:"#0D0D0D"
        },
        textColor:{
            main:"#111111"
        }
    }
})