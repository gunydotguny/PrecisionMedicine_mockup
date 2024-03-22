import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { theme } from "../../themes/theme";
import Link from 'next/link'
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import { UserProps, authLabel } from "../../datas/user";
import Navigation from "../molecules/Navigation";
import { useEffect, useState } from "react";

export default function GlobalNavigation() {
    const [user, setUser] = useRecoilState<UserProps | null>(userState)
    const [mounted, setMounted] = useState<boolean>(false)
    const handleClickLogout = () => {
        alert('로그아웃 다이얼로그')
    }
    useEffect(() => {
        setMounted(true)
    }, [])
    return mounted ? <><Box sx={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: grey[900],
        zIndex: 999
    }}>
        <Box sx={{
            display: 'flex',
            height: `56px`,
            p: theme.spacing(0, 3),
            m: theme.spacing(0, 'auto'),
            alignItems: 'center',
            width: '100%',
            minWidth: 1280,
            // maxWidth: 1920,
        }}>
            <Stack
                direction={`row`}
                spacing={2}
                sx={{
                    flex: 1,
                    '& img': {
                        width: `auto`,
                        height: 16,
                    }
                }}>
                <Link href={``} passHref>
                    <img src='/logo/SNUH.png' />
                </Link>
                <Link href={``} passHref>
                    <img src='/logo/POLARIS.png' />
                </Link>
            </Stack>
            <Navigation />
            <Stack
                direction={'row'}
                justifyContent={'flex-end'}
                sx={{
                    flex: 1,
                }}>
                {user && <Stack direction={`row`} spacing={2} alignItems={`center`} sx={{
                    p: theme.spacing(0, 3)
                }}>
                    <Stack direction={`row`} spacing={1} alignItems={`center`}>
                        <Typography sx={{
                            fontSize: 14,
                            lineHeight: `20px`,
                            fontWeight: `700`,
                            color: `#ffffff`
                        }}>
                            {user.name}
                        </Typography>
                        <Typography sx={{
                            fontSize: 14,
                            lineHeight: `20px`,
                            fontWeight: `700`,
                            color: `#ffffff`
                        }}>
                            {user.id}
                        </Typography>
                        <Typography sx={{
                            fontSize: 14,
                            lineHeight: `20px`,
                            fontWeight: `700`,
                            color: `#ffffff`
                        }}>
                            {user.title}
                        </Typography>
                    </Stack>
                    <Typography sx={{
                        fontSize: 14,
                        lineHeight: `20px`,
                        color: `#ffffff`
                    }}>
                        {authLabel[user.auth ?? 'user']}
                        {user.admin && `/ 관리자`}
                    </Typography>
                </Stack>}
                <ButtonBase sx={{
                    width: 56,
                    height: 56,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '& img': {
                        width: 24,
                        height: 'auto'
                    },
                    borderLeft: `1px solid ${grey[600]}`,
                    m: theme.spacing(0, -3, 0, 0)
                }}
                    onClick={handleClickLogout}
                >
                    <img src='/icon/ic_24_logout.png' />
                </ButtonBase>
            </Stack>
        </Box>
    </Box >
    </> : <></>
}
