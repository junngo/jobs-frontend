import { connect } from 'react-redux';
import Header from "../../components/common/Header";
import { actionCreators } from '../../modules/auth';


const HeaderContainer = ({ auth, logout }) => {
	const onLogout = () => {
		logout();
	}
	return <Header user={auth.user} onLogout={onLogout}/>;
};

const mapStateToProps = (state, ownProps) => {
	const { auth } = state;

	return {
		auth
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		logout: () => {
			dispatch(actionCreators.logoutAction());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
