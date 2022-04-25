import React from 'react';
import Tasks from './Tasks';

import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
	Button,
	Heading,
	Flex,
	Text,
	Image,
	Divider,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	SimpleGrid,
} from '@chakra-ui/react';
import {
	AiOutlineAppstore,
	AiOutlineBank,
	AiOutlineBook,
	AiOutlineBlock,
	AiOutlineBorderlessTable,
	AiFillCodepenSquare,
	AiFillSetting,
} from 'react-icons/ai';
import { GrLinkNext } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineLogout } from 'react-icons/ai';

class App extends Tasks {
	state = {
		events: [],
		notices: [],
		date: new Date(),
	};
	onChange = (date) => this.setState({ date });

	render() {
		const { events } = this.state;
		const { notices } = this.state;
		console.log(events);
		return (
			<>
				<Flex align={'flex-start'} bg='gray.100'>
					<Flex w='5%' h='full' bg='white' flexDirection='column'>
						<Flex mx='auto'>
							<AiFillCodepenSquare size={48} />
						</Flex>
						<Flex flexDirection={'column'} mb='350px' mx='auto'>
							<Flex mt={'32px'}>
								<AiOutlineBank size={24} />
							</Flex>
							<Flex my='8px'>
								<AiOutlineBook size={24} />
							</Flex>
							<Flex my='8px'>
								<AiOutlineBlock size={24} />
							</Flex>
							<Flex my='8px'>
								<AiOutlineAppstore size={24} />
							</Flex>
							<Flex my='8px'>
								<AiOutlineBorderlessTable size={24} />
							</Flex>
						</Flex>
						<Flex w='full' h='full' backgroundColor='#EF53A0'>
							<Flex my='16px' mx='auto'>
								{' '}
								<GrLinkNext />
							</Flex>
						</Flex>
					</Flex>
					<Flex flexDirection={'column'}>
						<Flex m='16px'>
							<Flex>
								<Heading size='lg' ml='16px'>
									Dashboard
								</Heading>
							</Flex>
							<Flex my='auto' ml='980px'>
								<Text color='#EF53A0' mx='8px'>
									{' '}
									Hi, Clark
								</Text>
								<Flex h='32px' mx='8px'>
									<Image
										borderRadius={25}
										src='https://www.computerhope.com/jargon/r/random-dice.jpg'
									></Image>
								</Flex>
								<Menu>
									<MenuButton>
										<FiSettings size='32px' />
									</MenuButton>
									<MenuList minWidth='148px'>
										<MenuItem>
											{' '}
											<Flex mr='4px'>
												{' '}
												<CgProfile />
											</Flex>{' '}
											Profile
										</MenuItem>
										<MenuItem>
											{' '}
											<Flex mr='4px'>
												{' '}
												<AiFillSetting />
											</Flex>{' '}
											Setting
										</MenuItem>
										<MenuItem>
											{' '}
											<Flex mr='4px'>
												{' '}
												<AiOutlineLogout />
											</Flex>{' '}
											Log Out
										</MenuItem>
									</MenuList>
								</Menu>
							</Flex>
						</Flex>

						<Flex>
							<Flex
								backgroundColor='white'
								h='320px'
								w='900px'
								minWidth={'900px'}
								mx='32px'
								borderRadius={'4px'}
								flexDir={'column'}
							>
								<Heading size='md' m='8px'>
									{' '}
									Notices{' '}
								</Heading>
								<SimpleGrid columns={2} flexDirection='row'>
									{notices.map((notice) => (
										<Flex
											width={'420px'}
											minWidth={'420px'}
											mr='12px'
											ml='16px'
											mb='16px'
										>
											<Flex flexDirection={'column'}>
												<Flex>
													<Text>{notice.title}</Text>
												</Flex>
												<Flex>
													<Text color={'#EF53A0'}>{notice.date}</Text>
													<Button
														bg={notice.color}
														color='white'
														h='24px'
														width='140px'
														ml='4px'
														fontSize='16px'
														borderRadius={'25'}
													>
														{notice.cat}
													</Button>
												</Flex>
												{notice.desc}
												<Flex mt='8px'>
													<Divider />
												</Flex>
											</Flex>
										</Flex>
									))}
								</SimpleGrid>
								<Text mx='auto' mt='-8px' color={'#EF53A0'}>
									See All Notices
								</Text>
							</Flex>
							<Flex>
								<Calendar onChange={this.onChange} value={this.state.date} />
							</Flex>
						</Flex>
						<Flex
							backgroundColor='white'
							h='250px'
							w='1280px'
							m='32px'
							borderRadius={'4px'}
							flexDirection='column'
						>
							<Flex justifyContent={'space-between'} mb='8xpx'>
								<Heading size='md' m='8px'>
									{' '}
									Important Events{' '}
								</Heading>
								<Text my='auto' color={'#EF53A0'} mr='16px'>
									{' '}
									See All Events{' '}
								</Text>
							</Flex>
							<SimpleGrid columns={6}>
								{events.map((event) => (
									<Flex ml='8px'>
										<Flex flexDirection={'column'}>
											<Image
												src={event.img}
												h='200px'
												w='200px'
												borderRadius={'5px'}
											/>
											<Flex>
												<Flex
													// width='40px'
													// height='40px'

													mt='-48px'
												>
													<Heading
														width={'40px'}
														height={'40px'}
														size='sm'
														m='4px'
														color={'#EF53A0'}
														backgroundColor={'white'}
														borderRadius={'3px'}
														pl='4px'
													>
														{event.date}
													</Heading>
													<Flex flexDirection={'column'} mt='4px'>
														<Text fontSize={'14px'} color='white'>
															{event.title}
														</Text>
														<Text fontSize={'12px'} color='white'>
															{event.desc}
														</Text>
													</Flex>
												</Flex>
											</Flex>
										</Flex>
									</Flex>
								))}
							</SimpleGrid>
						</Flex>
					</Flex>
				</Flex>
			</>
		);
	}
}

export default App;
