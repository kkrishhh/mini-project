import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Tabs,
  Tab,
  TextField,
  Button,
  Switch,
  Container,
  alpha,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
  Chip,
  MenuItem,
} from '@mui/material';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import { keyframes } from '@mui/system';

const buttonHoverScale = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.02);
  }
`;

function TabPanel({ children, value, index }) {
  return (
    <Box role="tabpanel" hidden={value !== index} sx={{ mt: 3 }}>
      {value === index && children}
    </Box>
  );
}

function PlanFeature({ text }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1 }}>
      <CheckCircleOutlineIcon sx={{ color: '#10B981', fontSize: 20 }} />
      <Typography sx={{ color: '#374151', fontSize: '15px', fontWeight: 500 }}>
        {text}
      </Typography>
    </Box>
  );
}

function Settings() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handlePlanChange = (event, newPlan) => {
    if (newPlan !== null) {
      setSelectedPlan(newPlan);
    }
  };

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
        <Typography 
          variant="h4" 
          sx={{ 
            fontSize: '28px',
            fontWeight: 600,
            mb: 4,
            color: '#111',
          }}
        >
          Settings
        </Typography>

        <Box sx={{ width: '100%' }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: '15px',
                fontWeight: 500,
                color: '#444',
                minHeight: 48,
                px: 0,
                mr: 4,
                '&.Mui-selected': {
                  color: '#111',
                  fontWeight: 600,
                },
                '& .MuiSvgIcon-root': {
                  fontSize: 20,
                  mr: 1,
                },
              },
              '& .MuiTabs-indicator': {
                height: 2,
                backgroundColor: '#111',
              },
            }}
          >
            <Tab 
              icon={<CreditCardOutlinedIcon />} 
              iconPosition="start" 
              label="Billing" 
            />
            <Tab 
              icon={<PersonOutlineOutlinedIcon />} 
              iconPosition="start" 
              label="Account" 
            />
            <Tab 
              icon={<CookieOutlinedIcon />} 
              iconPosition="start" 
              label="Cookies" 
            />
          </Tabs>

          <Box sx={{ width: '100%', mt: 2 }}>
            <TabPanel value={activeTab} index={0}>
              <Box sx={{ width: '100%', mb: 8 }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontSize: '32px', 
                    fontWeight: 700, 
                    color: '#111',
                    mb: 2,
                    textAlign: 'center',
                  }}
                >
                  Subscription Plan
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: '16px',
                    color: 'grey.600',
                    maxWidth: '600px',
                    mb: 6,
                    textAlign: 'center',
                    mx: 'auto',
                  }}
                >
                  Choose the plan that best fits your needs. All plans include core features with additional benefits as you scale.
                </Typography>

                <Box sx={{ mb: 6 }}>
                  <ToggleButtonGroup
                    value={selectedPlan}
                    exclusive
                    onChange={handlePlanChange}
                    sx={{
                      bgcolor: '#F9FAFB',
                      p: 0.5,
                      borderRadius: '12px',
                      '& .MuiToggleButton-root': {
                        border: 'none',
                        borderRadius: '8px !important',
                        px: 3,
                        py: 1,
                        fontSize: '14px',
                        fontWeight: 500,
                        textTransform: 'none',
                        color: 'grey.700',
                        '&.Mui-selected': {
                          bgcolor: '#fff',
                          color: '#111',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          '&:hover': {
                            bgcolor: '#fff',
                          },
                        },
                      },
                    }}
                  >
                    <ToggleButton value="free">Free</ToggleButton>
                    <ToggleButton value="pro">Pro</ToggleButton>
                    <ToggleButton value="team">Team</ToggleButton>
                  </ToggleButtonGroup>
                </Box>

                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
                  gap: 6,
                  alignItems: 'start',
                }}>
                  <Box sx={{ 
                    p: { xs: 4, md: 6 },
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: '16px',
                    bgcolor: '#fff',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    },
                  }}>
                    <Box sx={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      mb: 4,
                    }}>
                      <Box>
                        <Typography variant="h4" sx={{ 
                          fontSize: '24px', 
                          fontWeight: 700, 
                          color: '#111',
                          mb: 1,
                        }}>
                          Pro Plan
                        </Typography>
                        <Typography sx={{ 
                          color: 'grey.600',
                          fontSize: '15px',
                        }}>
                          Best for small teams & solo users
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography sx={{ 
                          fontSize: '32px', 
                          fontWeight: 700, 
                          color: '#111',
                          lineHeight: 1,
                          mb: 1,
                        }}>
                          $29
                        </Typography>
                        <Typography sx={{ 
                          color: 'grey.600',
                          fontSize: '14px',
                        }}>
                          per month
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ mb: 4 }} />

                    <Box sx={{ 
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                      gap: { xs: 2, md: 4 },
                      mb: 6,
                    }}>
                      <Box>
                        <Typography sx={{ 
                          fontSize: '14px',
                          fontWeight: 600,
                          color: 'grey.700',
                          mb: 2,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}>
                          Core Features
                        </Typography>
                        <PlanFeature text="Unlimited scrapes" />
                        <PlanFeature text="Priority access to new features" />
                        <PlanFeature text="Full API access" />
                      </Box>
                      <Box>
                        <Typography sx={{ 
                          fontSize: '14px',
                          fontWeight: 600,
                          color: 'grey.700',
                          mb: 2,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}>
                          Support & Tools
                        </Typography>
                        <PlanFeature text="24/7 Email support" />
                        <PlanFeature text="Custom data exports" />
                        <PlanFeature text="Advanced analytics" />
                      </Box>
                    </Box>

                    <Button 
                      variant="contained"
                      fullWidth
                      sx={{
                        bgcolor: '#111',
                        color: '#fff',
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 600,
                        py: 1.5,
                        borderRadius: '10px',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          bgcolor: '#000',
                          animation: `${buttonHoverScale} 0.2s ease-in-out forwards`,
                          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      Manage Subscription
                    </Button>
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
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#111',
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}>
                      <ReceiptOutlinedIcon sx={{ fontSize: 24 }} />
                      Billing Summary
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                      <Box sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 3,
                        p: 2,
                        bgcolor: alpha('#10B981', 0.08),
                        borderRadius: '12px',
                      }}>
                        <CheckCircleOutlineIcon sx={{ color: '#10B981' }} />
                        <Typography sx={{ color: '#065F46', fontSize: '14px', fontWeight: 500 }}>
                          Your subscription is active
                        </Typography>
                      </Box>

                      <Box sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                      }}>
                        <Box sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <CalendarTodayOutlinedIcon sx={{ color: 'grey.600', fontSize: 20 }} />
                            <Typography sx={{ color: 'grey.600', fontSize: '14px' }}>
                              Next billing
                            </Typography>
                          </Box>
                          <Typography sx={{ 
                            fontWeight: 600,
                            color: '#111',
                            fontSize: '14px',
                          }}>
                            Dec 31, 2023
                          </Typography>
                        </Box>

                        <Box sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <CreditScoreOutlinedIcon sx={{ color: 'grey.600', fontSize: 20 }} />
                            <Typography sx={{ color: 'grey.600', fontSize: '14px' }}>
                              Payment method
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Chip
                              label="VISA"
                              size="small"
                              sx={{ 
                                bgcolor: '#EEF2FF',
                                color: '#4F46E5',
                                fontWeight: 600,
                                fontSize: '12px',
                                height: '20px',
                              }}
                            />
                            <Typography sx={{ 
                              fontWeight: 600,
                              color: '#111',
                              fontSize: '14px',
                            }}>
                              •••• 4242
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <ReceiptOutlinedIcon sx={{ color: 'grey.600', fontSize: 20 }} />
                            <Typography sx={{ color: 'grey.600', fontSize: '14px' }}>
                              Monthly amount
                            </Typography>
                          </Box>
                          <Typography sx={{ 
                            fontWeight: 600,
                            color: '#111',
                            fontSize: '14px',
                          }}>
                            $29.00
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Divider sx={{ mb: 3 }} />

                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<CreditCardOutlinedIcon />}
                        sx={{
                          color: '#111',
                          borderColor: 'grey.300',
                          textTransform: 'none',
                          fontSize: '14px',
                          fontWeight: 500,
                          py: 1,
                          '&:hover': {
                            borderColor: '#111',
                            bgcolor: 'transparent',
                          },
                        }}
                      >
                        Update Card
                      </Button>
                      <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<ReceiptOutlinedIcon />}
                        sx={{
                          color: '#111',
                          borderColor: 'grey.300',
                          textTransform: 'none',
                          fontSize: '14px',
                          fontWeight: 500,
                          py: 1,
                          '&:hover': {
                            borderColor: '#111',
                            bgcolor: 'transparent',
                          },
                        }}
                      >
                        View History
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </TabPanel>

            <TabPanel value={activeTab} index={1}>
              <Typography variant="h5" sx={{ 
                fontSize: '24px', 
                fontWeight: 600, 
                mb: 1, 
                color: '#111',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}>
                <PersonOutlineOutlinedIcon sx={{ fontSize: 28 }} />
                Account Information
              </Typography>
              <Typography sx={{ 
                color: 'grey.600', 
                mb: 4, 
                fontSize: '15px',
                maxWidth: '600px',
              }}>
                Manage your account settings and preferences. Keep your information up to date to ensure smooth communication.
              </Typography>

              <Box sx={{ 
                width: '100%',
                display: 'grid',
                gap: 4,
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
              }}>
                <Box sx={{
                  p: 4,
                  border: '1px solid',
                  borderColor: 'grey.200',
                  borderRadius: '16px',
                  bgcolor: '#fff',
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                }}>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mb: 3,
                  }}>
                    <EmailOutlinedIcon sx={{ color: '#111', fontSize: 22 }} />
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#111' }}>
                      Email Address
                    </Typography>
                  </Box>
                  <TextField
                    fullWidth
                    placeholder="your@email.com"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        fontSize: '15px',
                        borderRadius: '10px',
                        bgcolor: alpha('#fff', 0.8),
                        '& fieldset': {
                          borderColor: 'grey.200',
                        },
                        '&:hover fieldset': {
                          borderColor: 'grey.400',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#111',
                        },
                      },
                    }}
                  />
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
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mb: 3,
                  }}>
                    <BadgeOutlinedIcon sx={{ color: '#111', fontSize: 22 }} />
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#111' }}>
                      Display Name
                    </Typography>
                  </Box>
                  <TextField
                    fullWidth
                    placeholder="Your display name"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        fontSize: '15px',
                        borderRadius: '10px',
                        bgcolor: alpha('#fff', 0.8),
                        '& fieldset': {
                          borderColor: 'grey.200',
                        },
                        '&:hover fieldset': {
                          borderColor: 'grey.400',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#111',
                        },
                      },
                    }}
                  />
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
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mb: 3,
                  }}>
                    <LanguageIcon sx={{ color: '#111', fontSize: 22 }} />
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#111' }}>
                      Language
                    </Typography>
                  </Box>
                  <TextField
                    fullWidth
                    select
                    defaultValue="en"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        fontSize: '15px',
                        borderRadius: '10px',
                        bgcolor: alpha('#fff', 0.8),
                        '& fieldset': {
                          borderColor: 'grey.200',
                        },
                        '&:hover fieldset': {
                          borderColor: 'grey.400',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#111',
                        },
                      },
                    }}
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                    <MenuItem value="fr">French</MenuItem>
                    <MenuItem value="de">German</MenuItem>
                  </TextField>
                </Box>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Button 
                  variant="contained"
                  startIcon={<CheckCircleOutlineIcon />}
                  sx={{
                    bgcolor: '#111',
                    color: '#fff',
                    textTransform: 'none',
                    fontSize: '15px',
                    fontWeight: 500,
                    px: 4,
                    py: 1.5,
                    borderRadius: '10px',
                    '&:hover': {
                      bgcolor: '#000',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  Save Changes
                </Button>
              </Box>
            </TabPanel>

            <TabPanel value={activeTab} index={2}>
              <Typography variant="h5" sx={{ 
                fontSize: '24px', 
                fontWeight: 600, 
                mb: 1, 
                color: '#111',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}>
                <CookieOutlinedIcon sx={{ fontSize: 28 }} />
                Cookie Preferences
              </Typography>
              <Typography sx={{ 
                color: 'grey.600', 
                mb: 4, 
                fontSize: '15px',
                maxWidth: '600px',
              }}>
                Control how we use cookies to improve your browsing experience. Your privacy matters to us.
              </Typography>

              <Box sx={{ 
                width: '100%',
                display: 'grid',
                gap: 4,
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
              }}>
                <Box sx={{
                  p: 4,
                  border: '1px solid',
                  borderColor: 'grey.200',
                  borderRadius: '16px',
                  bgcolor: '#fff',
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                }}>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mb: 2,
                  }}>
                    <SecurityOutlinedIcon sx={{ color: '#111', fontSize: 22 }} />
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#111' }}>
                      Essential Cookies
                    </Typography>
                  </Box>
                  <Typography sx={{ color: 'grey.600', fontSize: '14px', mb: 3, lineHeight: 1.6 }}>
                    Required for core website functionality. These cookies ensure basic features and security.
                  </Typography>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}>
                    <Switch 
                      defaultChecked 
                      disabled
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#10B981',
                          '& + .MuiSwitch-track': {
                            backgroundColor: alpha('#10B981', 0.5),
                          },
                        },
                      }}
                    />
                    <Chip
                      label="Required"
                      size="small"
                      sx={{ 
                        bgcolor: alpha('#10B981', 0.1),
                        color: '#10B981',
                        fontWeight: 500,
                        fontSize: '12px',
                      }}
                    />
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
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mb: 2,
                  }}>
                    <AnalyticsOutlinedIcon sx={{ color: '#111', fontSize: 22 }} />
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#111' }}>
                      Analytics Cookies
                    </Typography>
                  </Box>
                  <Typography sx={{ color: 'grey.600', fontSize: '14px', mb: 3, lineHeight: 1.6 }}>
                    Help us understand usage patterns and improve our services based on user data.
                  </Typography>
                  <Switch 
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#111',
                        '& + .MuiSwitch-track': {
                          backgroundColor: alpha('#111', 0.5),
                        },
                      },
                    }}
                  />
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
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mb: 2,
                  }}>
                    <CampaignOutlinedIcon sx={{ color: '#111', fontSize: 22 }} />
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#111' }}>
                      Marketing Cookies
                    </Typography>
                  </Box>
                  <Typography sx={{ color: 'grey.600', fontSize: '14px', mb: 3, lineHeight: 1.6 }}>
                    Enable personalized ads and content based on your browsing behavior.
                  </Typography>
                  <Switch 
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#111',
                        '& + .MuiSwitch-track': {
                          backgroundColor: alpha('#111', 0.5),
                        },
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Button 
                  variant="contained"
                  startIcon={<CheckCircleOutlineIcon />}
                  sx={{
                    bgcolor: '#111',
                    color: '#fff',
                    textTransform: 'none',
                    fontSize: '15px',
                    fontWeight: 500,
                    px: 4,
                    py: 1.5,
                    borderRadius: '10px',
                    '&:hover': {
                      bgcolor: '#000',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  Save Preferences
                </Button>
              </Box>
            </TabPanel>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Settings; 