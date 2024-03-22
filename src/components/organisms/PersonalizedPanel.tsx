import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem, GridEventListener, GridRowId, GridRowsProp } from '@mui/x-data-grid';
import { grey } from '@mui/material/colors';
import { theme } from '../../themes/theme';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Button, ButtonBase, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { favoritedCohortState } from '../../recoil';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import _ from 'lodash';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type TabPanelProps = {
    children?: React.ReactNode;
    index: number;
    value: number;
}


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const initialCohortRows: GridRowsProp = [
    {
        "id": "1",
        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "전향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "2",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "후향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "3",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "전향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "4",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "후향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "5",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "후향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "6",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "전향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "7",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "후향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "8",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "후향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "9",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "후향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "10",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "전향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "11",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "후향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "12",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "전향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "13",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "후향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "14",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "전향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "15",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "후향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "16",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "전향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "17",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "전향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "18",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "후향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "19",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "전향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "20",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "후향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "21",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "전향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "22",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "후향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "23",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "전향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "24",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "전향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "25",
        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "후향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "26",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "전향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
    {
        "id": "27",

        "title": "Lung Cancer 1_(공유_이강인, 진료...",
        "type": "후향적",
        "counts": "24,300명",
        "dateCreated": new Date(),
        "dateEdited": new Date()
    },
]

export default function PersonalizedPanel() {
    const [rows, setRows] = useState(initialCohortRows);
    const [favoritedCohort, setFavoritedCohort] = useRecoilState(favoritedCohortState)
    const [favoriteMode, setFavoriteMode] = useState<boolean>(false)
    const router = useRouter()
    const [tabValue, setTabValue] = useState<number>(0)
    const handleEvent: GridEventListener<'rowClick'> = (
        params, // GridRowParams
        event, // MuiEvent<React.MouseEvent<HTMLElement>>
        details, // GridCallbackDetails
    ) => {
        console.log(params, event, details)
        // if (params.row.title === '제목') {
        //   alert('공지사항으로 이동')
        // }
        if (tabValue === 0) {
            router.push(`/user/dashboard`)
        } else {
            router.push(`/faq/${params.id}`)
        }
    };
    const handleClickFavoriteMode = () => {
        setFavoriteMode(prev => !prev)
    }
    const handleClickFavoritedCohort = (id: GridRowId) => () => {
        setFavoritedCohort((prev) => {
            let newPrev = prev
            if (newPrev.includes(`${id}`)) {
                newPrev = _.filter(newPrev, (el) => el !== id)
            } else {
                newPrev = [...newPrev, `${id}`]
            }
            return newPrev
        })
    };
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }
    const handleClickCohort = () => {
        router.push('/user/dashboard')
    }
    const handleClickFAQ = () => {
        router.push('/faq')
    }
    function CustomTabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
                style={{
                    height: '100%',
                }}
            >
                {value === index && (
                    <Box sx={{
                        height: '100%'
                    }}>
                        {children}
                    </Box>
                )}
            </div>
        )
    }
    const columns = [
        {
            "field": "id",
            "headerName": "No",
            "width": 64
        },
        {
            "field": "icon",
            "headerName": "즐겨찾기",
            "width": 80,
            "type": "actions",
            getActions: ({ id }: { id: GridRowId }) => {
                const favorited = favoritedCohort.includes(`${id}`)
                return [<GridActionsCellItem
                    icon={favorited ? <StarIcon /> : <StarOutlineIcon />}
                    label="Edit"
                    className="textPrimary"
                    onClick={handleClickFavoritedCohort(`${id}`)}
                    color="inherit"
                />,]
            },
        },
        {
            "field": "title",
            "headerName": "Cohort 이륾",
            "flex": 1,
            "minWidth": 280,
        },
        {
            "field": "type",
            "headerName": "연구종류",
            "width": 80
        },
        {
            "field": "counts",
            "headerName": "환자수",
            "width": 80
        },
        {
            "field": "dateCreated",
            "headerName": "생성일",
            "type": "date",
            "width": 108
        },
        {
            "field": "dateEdited",
            "headerName": "최근 갱신일",
            "type": "date",
            "width": 108
        },
        // {
        //     "field": "favorited",
        //     "headerName": "즐겨찾기",
        //     "width": 108,
        //     "type": "actions",
        //     getActions: ({ id }: { id: GridRowId }) => {
        //         const favorited = favoritedCohort.includes(`${id}`)
        //         // return [<GridActionsCellItem
        //         //     icon={<EditIcon />}
        //         //     label="Edit"
        //         //     className="textPrimary"
        //         //     onClick={handleClickFavoritedCohort(`${id}`)}
        //         //     color="inherit"
        //         // />,]
        //         return [<Typography
        //             onClick={handleClickFavoritedCohort(`${id}`)}
        //             sx={{
        //                 textDecoration: 'underline',
        //                 fontSize: 14,
        //                 lineHeight: '20px',
        //                 fontWeight: '500'
        //             }}
        //         >{favorited ? "즐겨찾기" : '삭제하기'}</Typography>]
        //     },
        // }
    ]
    const [cohortType, setCohortType] = useState<string>('모든 연구');
    const handleChangeCohortType = (event: SelectChangeEvent) => {
        setCohortType(event.target.value);
    };
    const cohortRows = cohortType === '모든 연구' ? rows : _.filter(rows, el => el.type === cohortType)
    return (
        <Box sx={{
            width: 456,
            height: `calc(1080px - 56px - 48px)`,
            backgroundColor: `#ffffff`,
            border: `1px solid ${grey[500]}`,
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example" sx={{
                borderBottom: `1px solid ${grey[300]}`,
                p: theme.spacing(0, 3),
                overflow: 'initial',
                minHeight: '76px',
                '& .MuiTab-root': {
                    flex: 1,
                    fontSize: 16,
                    lineHeight: '24px',
                    fontWeight: '700',
                    p: theme.spacing(3, 0),
                    // minHeight: 'inherit !important',
                    // minWidth: 'inherit !important',
                    color: '#000000',
                    opacity: 0.4,
                    textTransform: 'none',
                    '&.Mui-selected': {
                        opacity: 1,
                    },
                },
                '& .MuiTabs-indicator': {
                    backgroundColor: '#000000'
                },
                '& .count': {
                    display: 'block',
                    fontWeight: '400 !important',
                    m: theme.spacing(0, 0, 0, 1)
                }
            }}>
                <Tab label={
                    <Box sx={{ display: 'flex' }}>My Cohort<div className='count'>10,323명</div></Box>
                } {...a11yProps(0)} />
                <Tab label={
                    <Box sx={{ display: 'flex' }}>Patient List<div className='count'>33명</div></Box>
                } {...a11yProps(1)} />
            </Tabs>
            <Box sx={{
                flex: 1,
            }}>
                <CustomTabPanel value={tabValue} index={0}>
                    <Box sx={{
                        p: theme.spacing(3, 3, 0, 3),
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        검색바
                    </Box>
                    <Box sx={{
                        p: theme.spacing(3, 3, 0, 3),
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Button disableElevation
                            onClick={handleClickFavoriteMode}
                            sx={{
                                borderRadius: 0,
                                backgroundColor: grey[300],
                                p: theme.spacing(0, 2),
                                minHeight: 44,
                                '& img': {
                                    width: 16,
                                    height: 16,
                                    m: theme.spacing(0, -0.5, 0, 0.5)
                                }
                            }}>
                            <StarIcon sx={{
                                width: 20,
                                height: 20,
                                m: theme.spacing(0, 0.5, 0, -0.5)
                            }} />
                            {favoriteMode ? "모두 보기" : "즐겨찾기만 보기"}
                        </Button>
                        <FormControl sx={{ minWidth: 106 }} size="small">
                            <Select
                                type='default'
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={cohortType}
                                onChange={handleChangeCohortType}
                                defaultValue='모든 연구'
                                sx={{
                                    borderRadius: 0,
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: `none !important`,
                                    },
                                    boxShadow: `none !important`,
                                    backgroundColor: grey[200],
                                    minHeight: 44,
                                    '& .MuiSelect-select': {
                                        lineHeight: `20px`,
                                        p: theme.spacing(1.5, 2)
                                    }
                                }}
                            >
                                <MenuItem value="모든 연구">
                                    모든 연구
                                </MenuItem>
                                <MenuItem value={"전향적"}>전향적 연구</MenuItem>
                                <MenuItem value={"후향적"}>후향적 연구</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{
                        p: theme.spacing(3)
                    }}>
                        <Box sx={{ height: '100%', width: '100%' }}>
                            <DataGridPro
                                rows={favoriteMode ? _.filter(cohortRows, el => favoritedCohort.includes(el.id)) : cohortRows}
                                columns={columns}
                                rowHeight={36}
                                disableRowSelectionOnClick
                                disableColumnMenu={true}
                                sx={{
                                    height: `calc(1080px - 56px - 48px - 76px - 24px - 24px - 44px - 24px)`,
                                    borderRadius: 0,
                                    '& .MuiDataGrid-columnHeaders': {
                                        height: `44px !important`,
                                        minHeight: `44px !important`,
                                        backgroundColor: grey[100],
                                        '& .MuiDataGrid-columnHeaderTitleContainerContent > *': { fontWeight: '700 !important' },
                                        '& .MuiDataGrid-columnHeader': {
                                            p: theme.spacing(0, 1.5),
                                        },
                                        '& .MuiDataGrid-columnHeader:not(:nth-of-type(1))': {
                                            borderLeft: `1px solid ${grey[300]}`,
                                        }
                                    },
                                    '& .MuiDataGrid-iconButtonContainer': {
                                        position: `absolute`,
                                        top: '50%',
                                        right: -12,
                                        transform: 'translateY(-50%)',
                                        '& .MuiButtonBase-root': {
                                            width: 36,
                                            height: 36,
                                        }
                                    },
                                    '& .MuiDataGrid-columnSeparator': {
                                        display: 'none'
                                    },
                                    '& .MuiDataGrid-cell': {
                                        p: theme.spacing(0, 1.5)
                                    },
                                    '& .MuiDataGrid-cell:not(:nth-of-type(1))': {
                                        borderLeft: `1px solid ${grey[300]}`
                                    },
                                    '& *:focus-within': {
                                        outline: `none !important`
                                    },
                                    '& *': {
                                        '&:hover': {
                                            backgroundolor: 'inherit !important'
                                        }
                                    },
                                    '& > * > *:nth-of-type(3)': {
                                        display: 'none !important'
                                    },
                                    '& .MuiDataGrid-cell:nth-of-type(3) > *': {
                                        textDecoration: 'underline',
                                        fontWeight: '500'
                                    }
                                }}
                                onRowClick={handleEvent}
                            />
                        </Box>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
                    <Box sx={{
                        p: theme.spacing(3, 3, 0, 3)
                    }}>
                        <Button disableElevation
                            onClick={handleClickFAQ}
                            sx={{
                                borderRadius: 0,
                                backgroundColor: grey[300],
                                p: theme.spacing(0, 2),
                                minHeight: 44,
                                '& img': {
                                    width: 16,
                                    height: 16,
                                    m: theme.spacing(0, -0.5, 0, 0.5)
                                }
                            }}>
                            전체보기
                            <img src='/icon/arrow.png' />
                        </Button>
                    </Box>
                    <Box sx={{
                        p: theme.spacing(3)
                    }}>
                        <Box sx={{ height: '100%', width: '100%' }}>

                        </Box>
                    </Box>
                </CustomTabPanel>
            </Box>
        </Box>
    );
}