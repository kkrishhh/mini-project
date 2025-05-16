import { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  InputAdornment,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

// Mock data for initial display
const mockData = [
  {
    id: 1,
    date: '16/02/2025',
    website: 'example.com',
    data: 'Extracted 150 pages',
    analysis: 'Content-rich website',
    status: 'success',
  },
  {
    id: 2,
    date: '16/02/2025',
    website: 'test-site.com',
    data: 'Extracted 80 pages',
    analysis: 'Blog content',
    status: 'success',
  },
  {
    id: 3,
    date: '16/02/2025',
    website: 'demo.com',
    data: 'Extracted 200 pages',
    analysis: 'E-commerce site',
    status: 'success',
  }
];

function Dashboard() {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(mockData);

  const handleSearch = () => {
    console.log('Searching for:', searchValue);
  };

  return (
    <Box sx={{ height: '100%' }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 4,
      }}>
        <Typography variant="h5" sx={{ 
          fontWeight: 600, 
          color: '#1e293b',
          letterSpacing: '-0.5px',
        }}>
          Dashboard
        </Typography>
      </Box>

      <Paper sx={{ 
        p: 3, 
        mb: 4, 
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        boxShadow: 'none',
      }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            placeholder="Enter website URL to scrape..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#94a3b8' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fff',
                borderRadius: '8px',
                '& fieldset': {
                  borderColor: '#e2e8f0',
                },
                '&:hover fieldset': {
                  borderColor: '#cbd5e1',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#94a3b8',
                },
              },
              '& .MuiInputBase-input': {
                padding: '12px 14px',
                '&::placeholder': {
                  color: '#94a3b8',
                  opacity: 1,
                },
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            startIcon={<LocalFireDepartmentIcon />}
            sx={{
              backgroundColor: '#18181b',
              borderRadius: '8px',
              px: 4,
              textTransform: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#27272a',
              },
            }}
          >
            Scrape
          </Button>
        </Box>
      </Paper>

      <Paper sx={{ 
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        boxShadow: 'none',
        overflow: 'hidden',
      }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f8fafc' }}>
                <TableCell sx={{ 
                  color: '#64748b', 
                  fontWeight: 600, 
                  borderBottom: '1px solid #e2e8f0',
                  py: 2.5,
                  pl: 3,
                }}>Date</TableCell>
                <TableCell sx={{ 
                  color: '#64748b', 
                  fontWeight: 600, 
                  borderBottom: '1px solid #e2e8f0',
                  py: 2.5,
                }}>Website</TableCell>
                <TableCell sx={{ 
                  color: '#64748b', 
                  fontWeight: 600, 
                  borderBottom: '1px solid #e2e8f0',
                  py: 2.5,
                }}>Status</TableCell>
                <TableCell sx={{ 
                  color: '#64748b', 
                  fontWeight: 600, 
                  borderBottom: '1px solid #e2e8f0',
                  py: 2.5,
                }}>Data</TableCell>
                <TableCell sx={{ 
                  color: '#64748b', 
                  fontWeight: 600, 
                  borderBottom: '1px solid #e2e8f0',
                  py: 2.5,
                }}>Analysis</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-child td': { border: 0 },
                    '&:hover': { backgroundColor: '#f8fafc' },
                  }}
                >
                  <TableCell sx={{ py: 2.5, pl: 3, color: '#334155' }}>{row.date}</TableCell>
                  <TableCell sx={{ py: 2.5, color: '#334155' }}>{row.website}</TableCell>
                  <TableCell sx={{ py: 2.5 }}>
                    <Box
                      sx={{
                        display: 'inline-block',
                        px: 2,
                        py: 0.5,
                        borderRadius: '12px',
                        backgroundColor: '#dcfce7',
                        color: '#166534',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                      }}
                    >
                      success
                    </Box>
                  </TableCell>
                  <TableCell sx={{ py: 2.5, color: '#334155' }}>{row.data}</TableCell>
                  <TableCell sx={{ py: 2.5, color: '#334155' }}>{row.analysis}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default Dashboard; 