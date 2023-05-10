import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/api/styles/palette';


const JobViewerBlock = styled(Responsive)`
  margin-top: 2rem;
	display: flex;
	align-items: flex-start;
`;
const MainContent = styled.div`
	flex: 1;
	.head {
		margin-bottom: 2rem;
	}
`;
const JobContent = styled.div`
`;
const Sidebar = styled.div`
	max-width: 280px;
	border: 1.3px solid ${palette.gray[4]};
	border-radius: 8px;
	padding: 2.3rem;
	margin-left: 3rem;
	.company-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		.logo {
			width: 72px;
			height: 72px;
			margin-bottom: 0.7rem;
			img {
				width: 100%;
			}
		}
		.company-name {
			font-size: 1.5rem;
			font-weight: 700;
		}
	}
	.divider {
		border-top: 1px solid #e7e7e9;
		margin: 2rem 0;
	}
	.mb-20 {
		margin-bottom: 20px;
		line-height: 2rem;
	}
`;

const JobViewer = ({ job }) => {
	return (
		<JobViewerBlock>
			<MainContent>
				<div className='head'>
					<h1 className='title'>
						{job.jobTitle}
					</h1>
				</div>
				<JobContent dangerouslySetInnerHTML={{ __html: job.description }}/>
			</MainContent>
			<Sidebar>
				<div className='company-info'>
					<div className='logo'>
						<img src="https://cdn.dribbble.com/userupload/6207257/file/original-4f09df55cc94ca7a65c56784a0290a97.png"/>
					</div>
					<div className='company-name'>
						{job.companyName}
					</div>
				</div>
				<div className='divider'></div>
				<div className='mb-20'>
					<div>
						Job Type
					</div>
					<div>
						Full Time
					</div>
				</div>
				<div className='mb-20'>
					<div>
						Location
					</div>
					<div>
						{job.city}
					</div>
				</div>
				<div className='mb-20'>
					<div>
						Apply for the position
					</div>
					<div>
						bookmark
					</div>
				</div>
			</Sidebar>
		</JobViewerBlock>
	);
};

export default JobViewer;
