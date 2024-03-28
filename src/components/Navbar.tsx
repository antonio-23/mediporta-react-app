import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function ResponsiveAppBar() {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar>
          <Typography
            variant='h5'
            sx={{
              fontWeight: 700,
              letterSpacing: 2.5,
            }}
          >
            react-app
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
