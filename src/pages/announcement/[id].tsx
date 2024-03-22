import { Box, Typography } from "@mui/material";

export default function Page() {
    return <Box sx={{
        width: '100%',
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Typography sx={{
            fontSize: 24,
            fontWeight: '700'
        }}>공지사항 상세</Typography>
    </Box>
}