import { useEffect} from "react";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import AuthViewer from "../../components/auth/AuthViewer";
import { actionCreators, unloadAuth } from '../../modules/auth';


const SignUpContainer = ({ auth, onSubmit, removeAuth }) => {
	const navigate = useNavigate();

	useEffect(() => {
		return () => {
			removeAuth();
		}
	}, [])

	useEffect(() => {
		if (auth.auth) {
			navigate("/signin");
		}
	}, [auth]);

	return (
		<AuthViewer
			type="signup"
			slug="Sign Up"
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
		onSubmit: ({ email, username, password }) => {
			dispatch(actionCreators.signUpAction({ email, username, password }));
		},
		removeAuth: () => {
			dispatch(unloadAuth());
			},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
