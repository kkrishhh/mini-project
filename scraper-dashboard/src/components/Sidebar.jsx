import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import HelpIcon from '@mui/icons-material/Help';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

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

      <List sx={{ px: 2 }}>
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
    </Drawer>
  );
}

export default Sidebar; 