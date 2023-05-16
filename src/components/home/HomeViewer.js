import styled from 'styled-components';
import Responsive from '../common/Responsive';
import JobListItem from './JobListItem';


const HomeBlock = styled(Responsive)`
`;
const Title = styled.div`
	margin-bottom: 4rem;
`;
const Board = styled.div`
	display: flex;
`;
const ListWrapper = styled.div`
	flex: 1;
`;

const HomeViewer = ({ jobs }) => {
	return (
		<HomeBlock>
			<Title>
				<h2>
					Job Opportunities!
				</h2>
			</Title>
			<Board>
				<ListWrapper>
					{jobs.map(job => (
						<JobListItem job={job} key={job.id} />
					))}
				</ListWrapper>
			</Board>
		</HomeBlock>
	);
};

export default HomeViewer;
