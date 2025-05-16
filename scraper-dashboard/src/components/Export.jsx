import { Box, Typography, Paper, Button, Grid } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import TableChartIcon from '@mui/icons-material/TableChart';
import CodeIcon from '@mui/icons-material/Code';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function Export() {
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
          Export
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ 
            p: 3,
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: 'none',
            height: '100%',
          }}>
            <Typography variant="h6" sx={{ 
              color: '#334155',
              mb: 3,
              fontWeight: 500,
            }}>
              Export Data
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="outlined"
                startIcon={<TableChartIcon />}
                sx={{
                  color: '#475569',
                  borderColor: '#e2e8f0',
                  justifyContent: 'flex-start',
                  py: 1.5,
                  '&:hover': {
                    borderColor: '#cbd5e1',
                    backgroundColor: '#f8fafc',
                  },
                }}
              >
                Export as CSV
              </Button>
              <Button
                variant="outlined"
                startIcon={<CodeIcon />}
                sx={{
                  color: '#475569',
                  borderColor: '#e2e8f0',
                  justifyContent: 'flex-start',
                  py: 1.5,
                  '&:hover': {
                    borderColor: '#cbd5e1',
                    backgroundColor: '#f8fafc',
                  },
                }}
              >
                Export as JSON
              </Button>
              <Button
                variant="outlined"
                startIcon={<PictureAsPdfIcon />}
                sx={{
                  color: '#475569',
                  borderColor: '#e2e8f0',
                  justifyContent: 'flex-start',
                  py: 1.5,
                  '&:hover': {
                    borderColor: '#cbd5e1',
                    backgroundColor: '#f8fafc',
                  },
                }}
              >
                Export as PDF
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ 
            p: 3,
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: 'none',
            height: '100%',
          }}>
            <Typography variant="h6" sx={{ 
              color: '#334155',
              mb: 3,
              fontWeight: 500,
            }}>
              Bulk Export
            </Typography>
            
            <Button
              variant="contained"
              startIcon={<FileDownloadIcon />}
              fullWidth
              sx={{
                backgroundColor: '#18181b',
                color: '#ffffff',
                py: 1.5,
                '&:hover': {
                  backgroundColor: '#27272a',
                },
              }}
            >
              Download All Data
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Export; 