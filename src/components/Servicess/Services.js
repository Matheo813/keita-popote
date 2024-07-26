import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import Services1 from '../../images/Services1.png';
import Services2 from '../../images/Services2.png';
import logo from '../../images/service3.png';
import { Section } from './ServicesStyles';

export default function Services() {
	return (
		<Section id='services'>
			<div className='title'>
				<h1>
					Une cuisine <span> familiale</span> et de{' '}
					<span> qualité</span>
				</h1>
			</div>
			<div className='services'>
				<div className='service'>
					<img src={logo} alt='service' />
					<p>
					Choisissez vos plats (portions pour une personne) et boissons dans la carte 
					<br />ci-dessous
						
						
						
					</p>
				</div>
				<div className='service'>
					<img src={Services2} alt='service' />
					<p>
					Contactez-nous du Lundi au Jeudi pour passer votre commande au
					</p>
					<div className='phone'>
						<PhoneIcon />
						<a href='tel: +337 64 46 32 76'>07 64 46 32 76</a>
					</div>
				</div>
				<div className='service yellow'>
					<img src={Services1} alt='service' />
					<p>Fermeture temporaire.</p>
				</div>
			</div>
		</Section>
	);
} 

