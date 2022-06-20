/* eslint-disable react/style-prop-object */
import React from 'react';
import { DataConsumer } from '../../Context/Context';
import {
	ContactWrapper,
	ContactContainer,
	ContactItems,
	ContactCopyright,
} from './ContactStyles';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from 'react-scroll';
import { scroller } from 'react-scroll';
import { AddressMap } from '../Map/Map';

const Contact = () => {
	//Automatic scroll to an element
	const scrollToElement = (element) => {
		scroller.scrollTo(element, {
			duration: 1500,
			delay: 100,
			smooth: true,
			offset: -80,
		});
	};

	return (
		<DataConsumer>
			{(value) => {
				return (
					<ContactWrapper>
						<ContactContainer>
							<ContactItems>
								<div className='back'>
									<Link to='/' onClick={() => scrollToElement('About')}>
										<ArrowUpwardIcon />
									</Link>
								</div>
								<div className='contact_me'>
									<h2>Coordonnées</h2>
									<div className='place'>
										<AddressMap/>
									</div>
									<div className='phone' style={{marginTop : 40}}>
										<PhoneIcon />
										<a href='tel: +337 64 46 32 76'>07 64 46 32 76</a>
									</div>
								</div>
								<div className='about__me'>
									<h2>Mon histoire</h2>
									<p>
										Diélika Keita cultive une vraie passion pour l’art culinaire
										depuis sa plus tendre enfance. Inspirée par la cuisine
										d’Afrique de l’Ouest, elle s’est lancée depuis octobre 2021
										dans une activité de traiteur africain. Diélika propose une
										carte à son image : généreuse, conviviale et adaptée aux
										goûts européens.
									</p>
									<div className='social_media'>
										<a
											target='_blank'
											rel='noreferrer'
											href='https://www.instagram.com/keitapopote'
										>
											<InstagramIcon />
										</a>
										<a
											target='_blank'
											rel='noreferrer'
											href='https://www.facebook.com/keitaPopote'
										>
											<FacebookIcon />
										</a>
									</div>
								</div>
							</ContactItems>
							<ContactCopyright>
								<p>Keita Popote &copy; {new Date().getFullYear()}</p>
							</ContactCopyright>
						</ContactContainer>
					</ContactWrapper>
				);
			}}
		</DataConsumer>
	);
};

export default Contact;
