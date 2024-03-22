import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import { theme } from "../../themes/theme";
import { comma } from "../../utils";
import { grey } from "@mui/material/colors";
import { Chart } from "react-chartjs-2";
import { Dispatch, SetStateAction, } from "react";
import _ from "lodash";

export type CounterProps = {
    title: string,
    standard: string,
    value: number,
    unit: string
}

export type SummaryProps = {
    counterData: CounterProps[]
}

export type MainDataProps = {
    summaryData: SummaryProps
}

export const summaryData: SummaryProps = {
    counterData: [
        {
            title: '전체 환자 수',
            standard: 'ETL 기준',
            value: 153231,
            unit: '명'
        },
        {
            title: '지식은행 환자 수',
            standard: '정제 승인 기준',
            value: 104503,
            unit: '명'
        }
    ]
}

export type TabProps = {
    label: string, value: string
}

export const graphTabs: TabProps[] = [
    { label: `월별`, value: `monthly` }, {
        label: `일별`, value: `daily`
    }
]

export default function Summary({ data, dateStandard, setDateStandard }: { data: SummaryProps, dateStandard: string, setDateStandard: Dispatch<SetStateAction<string>> }) {
    const { counterData } = data
    function Graph() {
        return <Stack
            spacing={3}
            sx={{
                flex: 1,
                p: theme.spacing(3),
                width: `100%`,
                height: `100%`,
            }}>
            <Box sx={{
                display: `flex`,
                justifyContent: `space-between`,
                alignItems: `flex-start`
            }}>
                <Typography sx={{
                    fontSize: 20,
                    lineHeight: `28px`,
                    fontWeight: `700`
                }}>
                    환자 수 현황
                </Typography>
                <Stack direction={`row`} spacing={1}>
                    {graphTabs.map((item, index) => {
                        const { value, label } = item
                        const active = value === dateStandard
                        const handleClick = () => {
                            setDateStandard(value)
                        }
                        return <ButtonBase key={index} onClick={handleClick} sx={{
                            height: `auto`
                        }}>
                            <Typography sx={{
                                fontSize: 14,
                                lineHeight: `20px`,
                                color: grey[500],
                                opacity: active ? 1 : 0.6,
                                textDecoration: `underline`
                            }}>
                                {label}
                            </Typography>
                        </ButtonBase>
                    })}
                </Stack>
            </Box>
            <Box sx={{
                flex: 1,
                position: 'relative',
            }}>
                <Chart
                    type="line"
                    data={chartDataList[dateStandard]}
                    options={chartOptions}
                />
                <Box sx={{
                    position: `absolute`,
                    top: 0,
                    left: 48,
                }}>
                    {counterData.map((item, index) => {
                        const { title } = item
                        return <Stack key={index}
                            direction={`row`}
                            spacing={0.5}
                            sx={{
                                alignItems: `center`
                            }}
                        >
                            <Box sx={{
                                backgroundColor: index === 0 ? grey[800] : grey[400],
                                height: `2px`,
                                width: `16px`,

                            }} />
                            <Typography sx={{
                                fontSize: 10,
                                lineHeight: `14px`,
                            }}>
                                {title}
                            </Typography>
                        </Stack>
                    })}
                </Box>
            </Box>
        </Stack>
    }
    function Counter({ data }: { data: CounterProps }) {
        const { title, standard, value, unit } = data
        return <Box sx={{
            backgroundColor: `#ffffff`,
            p: theme.spacing(3),
            display: `flex`,
            flexDirection: `column`,
            height: 128,
            border: `1px solid ${grey[500]}`
        }}>
            <Box sx={{
                flex: 1,
                display: `flex`,
                justifyContent: `space-between`
            }}>
                <Typography sx={{
                    fontSize: 20,
                    lineHeight: `28px`,
                    fontWeight: `700`
                }}>
                    {title}
                </Typography>
                <Typography sx={{
                    fontSize: 12,
                    lineHeight: `16px`,
                    color: grey[500]
                }}>
                    {standard}
                </Typography>
            </Box>
            <Typography sx={{
                fontSize: 24,
                lineHeight: `32px`,
                fontWeight: `700`
            }}>
                {comma(value)}{unit}
            </Typography>
        </Box>
    }
    return <Stack
        direction={`row`}
        spacing={3}>
        <Box sx={{
            flex: 1,
            backgroundColor: `#ffffff`,
            border: `1px solid ${grey[500]}`,
            // '@media(min-width: 1921px)': {
            //     width: `calc(((1920px - 456px - 24px - 48px) - 48px) * 2 / 3)`,
            // },
            // '@media(max-width: 1920px)': {
            //     width: `calc(((100vw - 456px - 24px - 48px) - 48px) * 2 / 3)`,
            // },
            // '@media(max-width: 1400px)': {
            //     width: `calc(((1400px - 456px - 24px - 48px) - 48px) * 2 / 3)`,
            // },
        }}>
            <Graph />
        </Box>
        <Stack spacing={3} sx={{
            heigh: `100%`,
            width: `30%`,
            minWidth: 280
            // '@media(min-width: 1921px)': {
            //     width: `calc(((1920px - 456px - 24px - 48px) - 48px) * 1 / 3)`,
            // },
            // '@media(max-width: 1920px)': {
            //     width: `calc(((100vw - 456px - 24px - 48px) - 48px) * 1 / 3)`,
            // },
            // '@media(max-width: 1400px)': {
            //     width: `calc(((1400px - 456px - 24px - 48px) - 48px) * 1 / 3)`,
            // },
        }}>
            {counterData.map((item, index) => { return <Counter key={index} data={item} /> })}
        </Stack>
    </Stack>
}

const chartDataList: { [key in string]: any } = {
    'monthly': {
        labels: ["23-05", "23-06", "23-07", "23-08", "23-09", "23-10", "23-11", "23-12", "23-01", "23-02", "23-03", "24-04"],
        datasets: [
            {
                type: "line" as const,
                label: "전체 환자 수",
                data: [4000, 4500, 4700, 5200, 5100, 5500, 6000, 5500, 5600, 5200, 7000, 8000],
                pointRadius: 0,
                pointBorderWidth: 0,
                borderWidth: 2,
                curve: 0,
                backgroundColor: grey[800],
                borderColor: grey[800],
            },
            {
                type: "line" as const,
                label: "지식은행 환자 수",
                data: [3000, 2500, 4500, 4300, 4900, 4700, 5300, 5000, 5100, 4300, 6000, 7500],
                pointRadius: 0,
                pointBorderWidth: 0,
                borderWidth: 2,
                curve: 0,
                backgroundColor: grey[400],
                borderColor: grey[400],
            },
        ],
    },
    'daily': {
        labels: ["04/01", "04/02", "04/03", "04/04", "04/05", "04/06", "04/07"],
        datasets: [
            {
                type: "line" as const,
                label: "전체 환자 수",
                data: [100, 150, 200, 400, 350, 500, 300],
                pointRadius: 0,
                pointBorderWidth: 0,
                borderWidth: 2,
                curve: 0,
                backgroundColor: grey[800],
                borderColor: grey[800],
            },
            {
                type: "line" as const,
                label: "지식은행 환자 수",
                data: [50, 100, 80, 300, 150, 400, 200],
                pointRadius: 0,
                pointBorderWidth: 0,
                borderWidth: 2,
                curve: 0,
                backgroundColor: grey[400],
                borderColor: grey[400],
            },
        ],
    }
};
const chartOptions = {
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            ticks: {
                font: {
                    size: 12,
                    family: `Pretendard`,
                    weight: `500`
                },
                color: grey[400],
            },
            grid: {
                // display: false,
                drawBorder: false,
            },
        },
        x: {
            ticks: {
                font: {
                    size: 12,
                    family: `Pretendard`,
                    weight: `500`
                },
                color: grey[400],
            },
            grid: {
                display: false,
                // drawBorder: false,
            },
        },
    },
    maintainAspectRatio: false,
};