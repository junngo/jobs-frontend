import { Outlet } from 'react-router-dom'
import HeaderContainer from '../containers/common/HeaderContainer';


const HeaderLayout = () => {
	return (
		<>
			<HeaderContainer />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default HeaderLayout;
