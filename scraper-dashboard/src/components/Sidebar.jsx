import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../contexts/AuthContext';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  { text: 'Export', icon: <FileDownloadIcon />, path: '/export' },
  { text: 'Help', icon: <HelpIcon />, path: '/help' },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box sx={{ p: 3, mb: 1 }}>
        <Typography 
          sx={{ 
            color: '#64748b',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.5px',
          }}
        >
          MENU
        </Typography>
      </Box>

      <List sx={{ px: 2, flex: 1 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
            sx={{
              mb: 0.5,
              borderRadius: '6px',
              backgroundColor: location.pathname === item.path ? '#f8fafc' : 'transparent',
              '&:hover': {
                backgroundColor: '#f8fafc',
              },
              height: '40px',
            }}
          >
            <ListItemIcon 
              sx={{ 
                color: location.pathname === item.path ? '#334155' : '#94a3b8',
                minWidth: '32px',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                '& .MuiListItemText-primary': {
                  color: location.pathname === item.path ? '#334155' : '#64748b',
                  fontSize: '0.875rem',
                  fontWeight: location.pathname === item.path ? 500 : 400,
                },
              }}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ p: 2, mt: 'auto' }}>
        <ListItem
          button
          onClick={handleSignOut}
          sx={{
            borderRadius: '8px',
            backgroundColor: '#fef2f2',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: '#fee2e2',
              transform: 'translateY(-1px)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          }}
        >
          <ListItemIcon 
            sx={{ 
              color: '#ef4444',
              minWidth: '32px',
            }}
          >
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Sign Out"
            sx={{
              '& .MuiListItemText-primary': {
                color: '#ef4444',
                fontSize: '0.875rem',
                fontWeight: 500,
              },
            }}
          />
        </ListItem>
      </Box>
    </Drawer>
  );
}

export default Sidebar; 