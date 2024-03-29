import { Button, styled } from "@mui/material";

export const BaseButton = styled(Button)(
    ({ variant, theme }) => ({
        fontFamily: "Poppins",
        fontWeight: 500,
        lineHeight: 1.2,
        padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
        [theme.breakpoints.up("mobile")]: {
            fontSize: "12px"
        },
        [theme.breakpoints.up("tablet")]: {
            fontSize: "14px"
        },
        [theme.breakpoints.up("laptop")]: {
            fontSize: "16px"
        },
        background: (() => {
            switch (variant) {
                case 'text':
                    return 'transparent';
                case 'contained':
                    return 'linear-gradient(180deg, #D070B5 0%, #FF7660 100%)';
                case 'outlined':
                    return 'transparent';
                default:
                    return 'transparent';
            }
        })(),
    })
)