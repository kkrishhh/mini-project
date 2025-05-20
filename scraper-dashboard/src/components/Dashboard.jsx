import { useState, useEffect } from 'react';
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

// Mock data for new users
const mockData = [
  {
    id: 1,
    domain: 'example.com',
    scraped_at: new Date().toISOString(),
    scraped_data: {
      title: 'Example Website',
      content: 'This is an example of scraped content from a website. When you scrape a real website, you\'ll see the actual content here.',
      metadata: {
        description: 'Example website showing how scraped data will appear',
        keywords: ['example', 'demo', 'scraping'],
        author: 'Demo Team'
      }
    },
    analytics: {
      pagesScraped: 150,
      contentType: 'E-commerce',
      totalWords: 15000,
      imagesFound: 45,
      linksExtracted: 230
    }
  },
  {
    id: 2,
    domain: 'techblog.com',
    scraped_at: new Date().toISOString(),
    scraped_data: {
      title: 'Tech Blog',
      content: 'Sample tech blog content. Your scraped website content will be displayed in a similar format.',
      metadata: {
        description: 'Technology blog example',
        keywords: ['tech', 'blog', 'example'],
        author: 'Tech Team'
      }
    },
    analytics: {
      pagesScraped: 80,
      contentType: 'Blog',
      totalWords: 12000,
      imagesFound: 25,
      linksExtracted: 120
    }
  }
];

function Dashboard() {
  const { user } = useAuth();
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUserScrapes();
  }, [user]);

  const fetchUserScrapes = async () => {
    try {
      const { data: scrapes, error } = await supabase
        .from('user_scrapes')
        .select('*')
        .order('scraped_at', { ascending: false });

      if (error) throw error;
      
      // If user has no scrapes, show mock data
      setData(scrapes?.length ? scrapes : mockData);
    } catch (error) {
      console.error('Error fetching scrapes:', error.message);
      // Show mock data on error
      setData(mockData);
    }
  };

  const handleSearch = async () => {
    if (!searchValue.trim()) return;

    try {
      setLoading(true);
      const mockScrapedData = {
        title: `${searchValue}`,
        content: 'This is a placeholder for the scraped content. Real scraping functionality will be implemented with Firecrawl.',
        metadata: {
          description: 'Placeholder description',
          scrapedUrl: searchValue,
          timestamp: new Date().toISOString()
        }
      };

      const mockAnalytics = {
        pagesScraped: Math.floor(Math.random() * 100) + 50,
        contentType: 'Website',
        totalWords: Math.floor(Math.random() * 10000) + 5000,
        imagesFound: Math.floor(Math.random() * 30) + 10,
        linksExtracted: Math.floor(Math.random() * 150) + 50
      };

      const { error } = await supabase
        .from('user_scrapes')
        .insert({
          user_id: user.id,
          domain: searchValue,
          scraped_data: mockScrapedData,
          analytics: mockAnalytics
        });

      if (error) throw error;
      
      await fetchUserScrapes();
      setSearchValue('');
    } catch (error) {
      console.error('Error saving scrape:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleViewData = (scrapedData) => {
    setSelectedData(scrapedData);
    setDialogOpen(true);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Box sx={{ 
      height: '100%', 
      maxWidth: 1400, 
      mx: 'auto',
      px: { xs: 2, sm: 3, md: 4 },
      pb: 4 
    }}>
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
            disabled={loading}
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
            {loading ? 'Processing...' : 'Scrape'}
          </Button>
        </Box>
      </Paper>

      <Paper sx={{ 
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        boxShadow: 'none',
        overflow: 'auto',
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
                  whiteSpace: 'nowrap',
                }}>Date & Time</TableCell>
                <TableCell sx={{ 
                  color: '#64748b', 
                  fontWeight: 600, 
                  borderBottom: '1px solid #e2e8f0',
                  py: 2.5,
                  whiteSpace: 'nowrap',
                }}>Website</TableCell>
                <TableCell sx={{ 
                  color: '#64748b', 
                  fontWeight: 600, 
                  borderBottom: '1px solid #e2e8f0',
                  py: 2.5,
                  whiteSpace: 'nowrap',
                }}>Status</TableCell>
                <TableCell sx={{ 
                  color: '#64748b', 
                  fontWeight: 600, 
                  borderBottom: '1px solid #e2e8f0',
                  py: 2.5,
                  whiteSpace: 'nowrap',
                }}>Pages Scraped</TableCell>
                <TableCell sx={{ 
                  color: '#64748b', 
                  fontWeight: 600, 
                  borderBottom: '1px solid #e2e8f0',
                  py: 2.5,
                  whiteSpace: 'nowrap',
                }}>Content Type</TableCell>
                <TableCell sx={{ 
                  color: '#64748b', 
                  fontWeight: 600, 
                  borderBottom: '1px solid #e2e8f0',
                  py: 2.5,
                  whiteSpace: 'nowrap',
                }}>Total Words</TableCell>
                <TableCell sx={{ 
                  color: '#64748b', 
                  fontWeight: 600, 
                  borderBottom: '1px solid #e2e8f0',
                  py: 2.5,
                  width: '160px',
                  whiteSpace: 'nowrap',
                }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-child td': { border: 0 },
                    '&:hover': { backgroundColor: '#ff' },
                  }}
                >
                  <TableCell sx={{ py: 2.5, pl: 3, color: '#334155', whiteSpace: 'nowrap' }}>
                    {formatDate(row.scraped_at)}
                  </TableCell>
                  <TableCell sx={{ py: 2.5, color: '#334155' }}>{row.domain}</TableCell>
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
                  <TableCell sx={{ py: 2.5, color: '#334155' }}>
                    {row.analytics?.pagesScraped || '-'}
                  </TableCell>
                  <TableCell sx={{ py: 2.5, color: '#334155' }}>
                    {row.analytics?.contentType || '-'}
                  </TableCell>
                  <TableCell sx={{ py: 2.5, color: '#334155' }}>
                    {row.analytics?.totalWords?.toLocaleString() || '-'}
                  </TableCell>
                  <TableCell sx={{ py: 2.5, whiteSpace: 'nowrap' }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<VisibilityOutlinedIcon />}
                      onClick={() => handleViewData({
                        ...row.scraped_data,
                        analytics: row.analytics
                      })}
                      sx={{
                        borderColor: '#e2e8f0',
                        color: '#475569',
                        textTransform: 'none',
                        '&:hover': {
                          borderColor: '#cbd5e1',
                          backgroundColor: '#f8fafc',
                        }
                      }}
                    >
                      View Data
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Dialog 
        open={dialogOpen} 
        onClose={() => setDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ 
          borderBottom: '1px solid #e2e8f0',
          px: 3,
          py: 2,
        }}>
          Scraped Data
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          {selectedData ? (
            <pre style={{ 
              margin: 0,
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              fontFamily: 'monospace',
              fontSize: '14px',
              backgroundColor: '#f8fafc',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
            }}>
              {JSON.stringify(selectedData, null, 2)}
            </pre>
          ) : (
            <Typography color="text.secondary">No data available</Typography>
          )}
        </DialogContent>
        <DialogActions sx={{ 
          borderTop: '1px solid #e2e8f0',
          px: 3,
          py: 2,
        }}>
          <Button 
            onClick={() => setDialogOpen(false)}
            sx={{
              color: '#475569',
              '&:hover': {
                backgroundColor: '#f8fafc',
              }
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Dashboard; 