import { Box, Typography, Paper, Switch, FormGroup, FormControlLabel } from '@mui/material';

function Settings() {
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
          Settings
        </Typography>
      </Box>

      <Paper sx={{ 
        p: 3,
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        boxShadow: 'none',
      }}>
        <Typography variant="h6" sx={{ 
          color: '#334155',
          mb: 3,
          fontWeight: 500,
        }}>
          Scraping Preferences
        </Typography>

        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Enable deep scraping"
            sx={{
              mb: 2,
              '& .MuiFormControlLabel-label': {
                color: '#475569',
              }
            }}
          />
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Save screenshots"
            sx={{
              mb: 2,
              '& .MuiFormControlLabel-label': {
                color: '#475569',
              }
            }}
          />
          <FormControlLabel
            control={<Switch />}
            label="Extract metadata"
            sx={{
              mb: 2,
              '& .MuiFormControlLabel-label': {
                color: '#475569',
              }
            }}
          />
          <FormControlLabel
            control={<Switch />}
            label="Follow external links"
            sx={{
              '& .MuiFormControlLabel-label': {
                color: '#475569',
              }
            }}
          />
        </FormGroup>
      </Paper>
    </Box>
  );
}

export default Settings; 