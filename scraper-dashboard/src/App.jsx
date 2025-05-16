import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Export from './components/Export';
import Help from './components/Help';
import './App.css';

function App() {
  return (
    <Router>
      <Box sx={{ 
        display: 'flex', 
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
      }}>
        <Sidebar />
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1,
            minHeight: '100vh',
            px: { xs: 2, sm: 4 },
            py: { xs: 2, sm: 3 },
            backgroundColor: '#f8fafc',
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/export" element={<Export />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
