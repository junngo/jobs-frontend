import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/api/styles/palette';


const ItemBlock = styled.div`
  display: flex;
	justify-content: space-between;
	padding: 2rem 0;
	border-bottom: 1px solid ${palette.gray[2]};
	.detail {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.logo {
			width: 56px;
			height: 56px;
			margin-right: 24px;
			img {
				object-fit: fill;
				width: 56px;
				height: 56px;
				border-radius: 10px;
			}
		}
		h3 {
			margin: 0;
			font-size: 1.5rem;
		}
	}
	.etc {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		flex-direction: column;
	}
`;

const JobListItem = ({ job }) => {
    return (
			<Link to={`/job/${job.id}`}>
				<ItemBlock>
					<div className='detail'>
						{job.storedLogoName &&
							<div className='logo'>
								<img src={job.storedLogoName} alt="logo" />
							</div>
						}
						<div>
							<h3>{job.jobTitle}</h3>
							<div className='role'>
								<span>
									{job.companyName}
								</span>
								{job.subDescList.map((subDesc, index) => (
									<span key={index}>{subDesc} </span>
								))}
							</div>
						</div>
					</div>
					<div className='etc'>
						<div>{job.city}</div>
						<div>{job.createdAt}</div>
					</div>
        </ItemBlock>
			</Link>
    );
};

export default JobListItem;
