import { useEffect} from "react";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import AuthViewer from "../../components/auth/AuthViewer";
import { actionCreators, unloadAuth } from '../../modules/auth';


const SignInContainer = ({ auth, onSubmit, removeAuth }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (auth.user) {
			localStorage.setItem("access", auth.user.token);
			navigate("/");
		}
	}, [auth, navigate]);

	return (
		<AuthViewer 
			type="signin"
			slug="Sign In"
			onSubmit={onSubmit}
		/>
	);
};

const mapStateToProps = (state, ownProps) => {
	const { auth } = state;

	return {
		auth
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: ({ email, password }) => {
			dispatch(actionCreators.signInAction({ email, password }));
		},
		removeAuth: () => {
			dispatch(unloadAuth());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
