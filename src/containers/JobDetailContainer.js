import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import JobViewer from "../components/job/JobViewer";
import { actionCreators, unloadJob } from '../modules/job';


const JobDetailContainer = ({ job, getJob, removeJob }) => {
	const { jobId } = useParams();

	useEffect(() => {
		getJob(jobId);
		return () => {
			removeJob();
		}
	}, [getJob, jobId, removeJob]);

	return (
		<>
			{job.job && <JobViewer job={job.job}/>}
		</>
	);
};

const mapStateToProps = (state, ownProps) => {
	const { job } = state;

	return {
			job
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
			getJob: (jobId) => {
					dispatch(actionCreators.getJob(jobId));
			},
			removeJob: () => {
				dispatch(unloadJob());
			},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDetailContainer);
