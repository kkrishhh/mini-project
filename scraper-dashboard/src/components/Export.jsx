import { 
  Box, 
  Typography, 
  Paper, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Chip,
  Container,
  MenuItem,
  TextField,
  Divider,
  alpha,
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import { keyframes } from '@mui/system';

const buttonHoverScale = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.02);
  }
`;

const recentExports = [
  {
    id: 1,
    date: '26 Feb 2024',
    time: '14:30',
    name: 'E-commerce Data Export',
    leads: 1250,
    status: 'Complete'
  },
  {
    id: 2,
    date: '25 Feb 2024',
    time: '09:15',
    name: 'Blog Scrape Results',
    leads: 450,
    status: 'Complete'
  },
  {
    id: 3,
    date: '24 Feb 2024',
    time: '18:45',
    name: 'Product Catalog Export',
    leads: 3200,
    status: 'Complete'
  },
  {
    id: 4,
    date: '23 Feb 2024',
    time: '11:20',
    name: 'Website Analysis Data',
    leads: 780,
    status: 'Complete'
  }
];

function Export() {
  return (
    <Box 
      sx={{ 
        width: '100%',
        height: '100%',
        bgcolor: '#fff',
      }}
    >
      <Container 
        maxWidth={false} 
        disableGutters
        sx={{ 
          height: '100%',
          maxWidth: 1400,
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 3, md: 4 },
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ 
            fontSize: '28px',
            fontWeight: 600,
            color: '#111',
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            mb: 1,
          }}>
            <StorageOutlinedIcon sx={{ fontSize: 32 }} />
            Data Exports
          </Typography>
          <Typography sx={{ 
            color: 'grey.600',
            fontSize: '15px',
            maxWidth: '600px',
          }}>
            Download your scraped data in various formats. Recent exports are automatically saved for 30 days.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Box sx={{ 
            p: 4,
            border: '1px solid',
            borderColor: 'grey.200',
            borderRadius: '16px',
            bgcolor: '#fff',
            background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
            mb: 4,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <Box sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '30%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(248, 250, 252, 0.8))',
              zIndex: 0,
            }} />
            
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography sx={{ 
                fontSize: '18px',
                fontWeight: 600,
                color: '#111',
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}>
                <DataObjectOutlinedIcon sx={{ fontSize: 22 }} />
                Export Settings
              </Typography>

              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr auto' },
                gap: 3,
                alignItems: 'flex-start',
              }}>
                <TextField
                  select
                  fullWidth
                  label="Format"
                  defaultValue="csv"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                      bgcolor: alpha('#fff', 0.8),
                    }
                  }}
                >
                  <MenuItem value="csv">CSV</MenuItem>
                  <MenuItem value="json">JSON</MenuItem>
                  <MenuItem value="xlsx">Excel (XLSX)</MenuItem>
                  <MenuItem value="pdf">PDF</MenuItem>
                </TextField>

                <TextField
                  select
                  fullWidth
                  label="Data Range"
                  defaultValue="all"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                      bgcolor: alpha('#fff', 0.8),
                    }
                  }}
                >
                  <MenuItem value="all">All Data</MenuItem>
                  <MenuItem value="today">Today</MenuItem>
                  <MenuItem value="week">Last 7 Days</MenuItem>
                  <MenuItem value="month">Last 30 Days</MenuItem>
                </TextField>

                <TextField
                  select
                  fullWidth
                  label="Include Fields"
                  defaultValue="all"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                      bgcolor: alpha('#fff', 0.8),
                    }
                  }}
                >
                  <MenuItem value="all">All Fields</MenuItem>
                  <MenuItem value="basic">Basic Info</MenuItem>
                  <MenuItem value="detailed">Detailed Data</MenuItem>
                  <MenuItem value="custom">Custom Selection</MenuItem>
                </TextField>

                <Button
                  variant="contained"
                  startIcon={<DownloadForOfflineOutlinedIcon />}
                  sx={{
                    bgcolor: '#111',
                    color: '#fff',
                    px: 4,
                    height: '56px',
                    textTransform: 'none',
                    fontSize: '15px',
                    fontWeight: 500,
                    borderRadius: '10px',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      bgcolor: '#000',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  Create Export
                </Button>
              </Box>
            </Box>
          </Box>

          <Box sx={{ 
            p: 4,
            border: '1px solid',
            borderColor: 'grey.200',
            borderRadius: '16px',
            bgcolor: '#fff',
            background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
          }}>
            <Typography sx={{ 
              fontSize: '18px',
              fontWeight: 600,
              color: '#111',
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}>
              <FileDownloadIcon sx={{ fontSize: 22 }} />
              Recent Exports
            </Typography>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ 
                      color: 'grey.600',
                      fontSize: '13px',
                      fontWeight: 600,
                      borderBottom: '1px solid',
                      borderBottomColor: 'grey.200',
                      py: 2,
                    }}>
                      DATE & TIME
                    </TableCell>
                    <TableCell sx={{ 
                      color: 'grey.600',
                      fontSize: '13px',
                      fontWeight: 600,
                      borderBottom: '1px solid',
                      borderBottomColor: 'grey.200',
                      py: 2,
                    }}>
                      EXPORT NAME
                    </TableCell>
                    <TableCell sx={{ 
                      color: 'grey.600',
                      fontSize: '13px',
                      fontWeight: 600,
                      borderBottom: '1px solid',
                      borderBottomColor: 'grey.200',
                      py: 2,
                    }}>
                      RECORDS
                    </TableCell>
                    <TableCell sx={{ 
                      color: 'grey.600',
                      fontSize: '13px',
                      fontWeight: 600,
                      borderBottom: '1px solid',
                      borderBottomColor: 'grey.200',
                      py: 2,
                    }}>
                      STATUS
                    </TableCell>
                    <TableCell sx={{ 
                      color: 'grey.600',
                      fontSize: '13px',
                      fontWeight: 600,
                      borderBottom: '1px solid',
                      borderBottomColor: 'grey.200',
                      py: 2,
                    }}>
                      ACTION
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentExports.map((row) => (
                    <TableRow 
                      key={row.id}
                      sx={{
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          bgcolor: alpha('#f8fafc', 0.5),
                        },
                      }}
                    >
                      <TableCell sx={{ 
                        borderBottom: '1px solid',
                        borderBottomColor: 'grey.100',
                        py: 2,
                      }}>
                        <Box>
                          <Box sx={{ 
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            color: '#111',
                            fontWeight: 500,
                            fontSize: '14px',
                            mb: 0.5,
                          }}>
                            <CalendarTodayOutlinedIcon sx={{ fontSize: 16 }} />
                            {row.date}
                          </Box>
                          <Box sx={{ 
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            color: 'grey.500',
                            fontSize: '13px',
                          }}>
                            <AccessTimeOutlinedIcon sx={{ fontSize: 16 }} />
                            {row.time}
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ 
                        borderBottom: '1px solid',
                        borderBottomColor: 'grey.100',
                        py: 2,
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#111',
                      }}>
                        {row.name}
                      </TableCell>
                      <TableCell sx={{ 
                        borderBottom: '1px solid',
                        borderBottomColor: 'grey.100',
                        py: 2,
                      }}>
                        <Typography sx={{ 
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#111',
                        }}>
                          {row.leads.toLocaleString()}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ 
                        borderBottom: '1px solid',
                        borderBottomColor: 'grey.100',
                        py: 2,
                      }}>
                        <Chip
                          icon={<CheckCircleIcon sx={{ fontSize: 16 }} />}
                          label={row.status}
                          size="small"
                          sx={{ 
                            bgcolor: alpha('#10B981', 0.1),
                            color: '#10B981',
                            fontWeight: 500,
                            fontSize: '12px',
                            '& .MuiChip-icon': {
                              color: '#10B981',
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ 
                        borderBottom: '1px solid',
                        borderBottomColor: 'grey.100',
                        py: 2,
                      }}>
                        <Button
                          variant="outlined"
                          startIcon={<FileDownloadIcon />}
                          size="small"
                          sx={{
                            color: '#111',
                            borderColor: 'grey.300',
                            textTransform: 'none',
                            fontSize: '13px',
                            fontWeight: 500,
                            '&:hover': {
                              borderColor: '#111',
                              bgcolor: 'transparent',
                            },
                          }}
                        >
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Export; 