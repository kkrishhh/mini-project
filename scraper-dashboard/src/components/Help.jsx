import { Box, Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: 'How does the scraping process work?',
    answer: 'Our scraping engine analyzes the provided website URL, extracts relevant data based on your settings, and presents it in a structured format. The process is fully automated and respects robots.txt guidelines.'
  },
  {
    question: 'What data can be extracted?',
    answer: 'By default, we extract text content, images, links, and basic metadata. With advanced settings enabled, we can also capture dynamic content, structured data, and follow internal links.'
  },
  {
    question: 'Is there a rate limit for scraping?',
    answer: 'Yes, we implement rate limiting to ensure responsible scraping. Free accounts are limited to 100 pages per hour, while premium accounts can scrape up to 1000 pages per hour.'
  },
  {
    question: 'How can I export the scraped data?',
    answer: 'You can export data in multiple formats including CSV, JSON, and PDF. Visit the Export page to download your data in your preferred format.'
  },
];

function Help() {
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
          Help & FAQ
        </Typography>
      </Box>

      <Paper sx={{ 
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        boxShadow: 'none',
        overflow: 'hidden',
      }}>
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            disableGutters
            elevation={0}
            sx={{
              '&:not(:last-child)': {
                borderBottom: '1px solid #e2e8f0',
              },
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#64748b' }} />}
              sx={{
                backgroundColor: '#ffffff',
                '&:hover': {
                  backgroundColor: '#f8fafc',
                },
                '& .MuiAccordionSummary-content': {
                  my: 2,
                },
              }}
            >
              <Typography sx={{ 
                color: '#334155',
                fontWeight: 500,
              }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ 
              backgroundColor: '#f8fafc',
              px: 3,
              py: 2,
            }}>
              <Typography sx={{ color: '#475569' }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Box>
  );
}

export default Help; 