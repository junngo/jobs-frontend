import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from '../components/common/Responsive';
import palette from '../lib/api/styles/palette';

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
	.item {
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
	}
`;

const Home = () => {
	return (
		<HomeBlock>
			<Title>
				<h2>
					Job Opportunities!
				</h2>
			</Title>
			<Board>
				<ListWrapper>
					<div className='item'>
						<div className='detail'>
							<div className='logo'>
								<img src="https://cdn.dribbble.com/userupload/6207257/file/original-4f09df55cc94ca7a65c56784a0290a97.png"/>
							</div>
							<div>
								<h3>Company Name</h3>
								<div className='role'>
									<span>Java Web Developer </span>
									<span> / Full time</span>
								</div>
							</div>
						</div>
						<div className='etc'>
							<div>서울 강남</div>
							<div>1 hour ago</div>
						</div>
					</div>
					<div className='item'>
						<div className='detail'>
							<div className='logo'>
								<img src="https://cdn.dribbble.com/userupload/6207257/file/original-4f09df55cc94ca7a65c56784a0290a97.png"/>
							</div>
							<div>
								<h3>Company Name</h3>
								<div className='role'>
									<span>Java Web Developer </span>
									<span> / Full time</span>
								</div>
							</div>
						</div>
						<div className='etc'>
							<div>서울 강남</div>
							<div>1 hour ago</div>
						</div>
					</div>
					<div className='item'>
						<div className='detail'>
							{/* <div className='logo'>
								<img src="https://cdn.dribbble.com/userupload/6207257/file/original-4f09df55cc94ca7a65c56784a0290a97.png"/>
							</div> */}
							<div>
								<h3>Company Name</h3>
								<div className='role'>
									<span>Java Web Developer </span>
									<span> / Full time</span>
								</div>
							</div>
						</div>
						<div className='etc'>
							<div>서울 강남</div>
							<div>2 hour ago</div>
						</div>
					</div>
				</ListWrapper>
			</Board>
		</HomeBlock>
	);
};

export default Home;
