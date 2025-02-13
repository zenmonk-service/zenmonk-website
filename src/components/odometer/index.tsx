import { Box, Typography } from "@mui/material";
import "./styles.scss";
const Odometer = () => {
  return (
    <Box className="odometer">
      <Box className="odometer-section">
        <Box className="left-section">
          <Typography className="heading" component="h1" variant="h1">
            Team Across the Globe Run on Atlassian
          </Typography>
          <Typography className="teams-number" component="h4" variant="h4">
            100,000+
          </Typography>
          <Typography className="description" component="h3" variant="h3">
            Companies team power collaboration with Zenmonk
          </Typography>
        </Box>
        <Box className="center-section">
          <Box className="countries-section">
            <Typography
              className="countries-number"
              component="h4"
              variant="h4"
            >
              200+
            </Typography>
            <Typography className="description" component="h3" variant="h3">
              Countries have companies that use Zenmonk
            </Typography>
          </Box>
          <Box className="companies-section">
            <Typography
              className="companies-number"
              component="h4"
              variant="h4"
            >
              80%
            </Typography>
            <Typography className="description" component="h3" variant="h3">
              of Fortune 500 companies use Zenmonk product
            </Typography>
          </Box>
        </Box>
        <Box className="right-section">
          <Box className="countries-section">
            <Typography
              className="countries-number"
              component="h4"
              variant="h4"
            >
              200+
            </Typography>
            <Typography className="description" component="h3" variant="h3">
              Countries have companies that use Zenmonk
            </Typography>
          </Box>
          <Box className="companies-section">
            <Typography
              className="companies-number"
              component="h4"
              variant="h4"
            >
              80%
            </Typography>
            <Typography className="description" component="h3" variant="h3">
              of Fortune 500 companies use Zenmonk product
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Odometer };
