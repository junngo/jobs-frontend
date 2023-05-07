import { useEffect } from 'react';
import { connect } from 'react-redux';
import HomeViewer from '../components/home/HomeViewer';
import { actionCreators } from '../modules/job';


const HomeContainer = ({ job, getJobs }) => {
    useEffect(() => {
        getJobs();
    }, [getJobs]);

    return (
        <>
            {job.jobs && <HomeViewer jobs={job.jobs} />}
        </>
    )
};

const mapStateToProps = (state, ownProps) => {
    const { job } = state;

    return {
        job
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getJobs: () => {
            dispatch(actionCreators.getJobs());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
