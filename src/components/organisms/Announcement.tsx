import Box from '@mui/material/Box';
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import { announcementColumns, announcementRows } from '../../datas/announcement';
import { grey } from '@mui/material/colors';
import { theme } from '../../themes/theme';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Button, ButtonBase } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { faqColumns, faqRows } from '../../datas/faq';

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

export default function Announcement() {
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
      router.push(`/announcement/${params.id}`)
    } else {
      router.push(`/faq/${params.id}`)
    }
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }
  const handleClickAnnouncement = () => {
    router.push('/announcement')
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
      >
        {value === index && (
          <Box>
            {children}
          </Box>
        )}
      </div>
    )
  }
  return (
    <Box sx={{ height: '100%', width: '100%', backgroundColor: '#ffffff', border: `1px solid ${grey[500]}` }}>
      <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example" sx={{
        borderBottom: `1px solid ${grey[300]}`,
        p: theme.spacing(0, 3),
        '& .MuiTab-root': {
          fontSize: 20,
          lineHeight: '28px',
          fontWeight: '700',
          p: theme.spacing(3, 0),
          minHeight: 'inherit !important',
          minWidth: 'inherit !important',
          m: theme.spacing(0, 3, 0, 0),
          color: '#000000 !important',
          opacity: 0.4,
          '&.Mui-selected': {
            opacity: 1,
          },
        },
        '& .MuiTabs-indicator': {
          backgroundColor: '#000000'
        }
      }}>
        <Tab label="공지사항" {...a11yProps(0)} />
        <Tab label="FAQ" {...a11yProps(1)} />
      </Tabs>
      <CustomTabPanel value={tabValue} index={0}>
        <Box sx={{
          p: theme.spacing(3, 3, 0, 3)
        }}>
          <Button disableElevation
            onClick={handleClickAnnouncement}
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
            <DataGridPro
              rows={announcementRows}
              columns={announcementColumns}
              rowHeight={36}
              disableRowSelectionOnClick
              disableColumnMenu={true}
              sx={{
                height: `calc(1080px - 56px - 24px - 24px - 24px - 278px - 76px - 24px - 24px - 24px - 44px - 24px - 278px)`,
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
                '& .MuiDataGrid-row:nth-of-type(1) > .MuiDataGrid-cell:nth-of-type(2) > *': {
                  position: 'relative',
                  overflow: 'visible',
                  '&::after': {
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: -32,
                    content: '"NEW"',
                    fontSize: 12,
                    lineHeight: '16px',
                    fontWeight: '500',
                    color: grey[500],
                  }
                }
              }}
              onRowClick={handleEvent}
              hideFooter
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
            <DataGridPro
              rows={faqRows}
              columns={faqColumns}
              rowHeight={36}
              disableRowSelectionOnClick
              disableColumnMenu={true}
              sx={{
                height: `calc(1080px - 56px - 24px - 24px - 24px - 278px - 76px - 24px - 24px - 24px - 44px - 24px - 278px)`,
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
                '& .MuiDataGrid-row:nth-of-type(1) > .MuiDataGrid-cell:nth-of-type(2) > *': {
                  position: 'relative',
                  overflow: 'visible',
                  '&::after': {
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: -32,
                    content: '"NEW"',
                    fontSize: 12,
                    lineHeight: '16px',
                    fontWeight: '500',
                    color: grey[500],
                  }
                }
              }}
              onRowClick={handleEvent}
              hideFooter
            />
          </Box>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}