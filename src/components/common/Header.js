import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Responsive from './Responsive';
import palette from '../../lib/api/styles/palette';

const HeaderBlock = styled.div`
	width: 100%;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.logo {
		color: ${palette.gray[8]};
		font-size: 1.125rem;
		font-weight: 800;
		letter-spacing: 2px;
	}
	.menu {
		display: flex;
		align-items: center;
	}
`;

const Spacer = styled.div`
	height: 4rem;
`

const Header = ({ user, onLogout }) => {
	return (
		<>
			<HeaderBlock>
				<Wrapper>
					<div className='logo'>
						<Link to="/">
              Jobs Board
						</Link>
					</div>
					<div className='menu'>
						{ user ? (
							<Button onClick={onLogout} variant="outlined">Logout</Button>	
						) : (
							<>
								<Button component={Link} to="/signin" variant="outlined">Sign In</Button>
								<Button 
									component={Link}
									to="/signup"
									variant="outlined"
									sx={{
										marginLeft: 2,
									}}
								>
									Sign UP
								</Button>
							</>
						)}

					</div>
				</Wrapper>
			</HeaderBlock>
			<Spacer />
		</>
	);
};

export default Header;
