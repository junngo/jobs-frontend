// import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
	Avatar,
	Box,
	Container,
	CssBaseline,
	Typography,
	Grid,
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
	Link
} from "@mui/material";
import Copyright from "../common/Copyright";


const AuthViewer = ({ type, onSubmit, slug }) => {
	const theme = createTheme();

	const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      username: data.get('userName'),
      email: data.get('email'),
      password: data.get('password'),
      marketing: data.get('allowExtraEmails'),
    };
    onSubmit(userData);
  };

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
					<Avatar sx={{ m: 1, bgcolor: 'info.main' }}>
          	<LockOutlinedIcon />
          </Avatar>
					<Typography component="h1" variant="h5">
            {slug}
          </Typography>
					<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
						<Grid container spacing={2}>
              {type ==="signup" && (
							  <Grid item xs={12} >
                  <TextField
                    autoComplete="user-name"
                    name="userName"
                    required
                    fullWidth
                    id="userName"
                    label="User Name"
                    autoFocus
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {type ==="signup" && (
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox name="allowExtraEmails" value={true} color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              )}
						</Grid>
						<Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {slug}
            </Button>
						<Grid container justifyContent="flex-end">
              <Grid item>
                {type === "signup" ? (
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                ) : (
                  <Link href="/signup" variant="body2">
                    Sign up for an account
                  </Link>
                )}
              </Grid>
            </Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	);
};

export default AuthViewer;
