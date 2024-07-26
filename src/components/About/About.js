import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import hero from '../../images/theb_poisson2.jpg';
import { titleAnim, photoAnim } from '../../Animations/Animation';
import { Hide } from './AboutStyles';

function About() {
	return (
		<Section>
			<div className='background'>
				<img src={hero} alt='hero' />
			</div>
			<div className='content'>
				<div className='info'>
					<Hide>
						<motion.h2 variants={titleAnim}>Keita Popote</motion.h2>
					</Hide>
					<motion.em variants={photoAnim}>Traiteur africain mais pas que. Réouverture septembre 2025</motion.em>
				</div>
			</div>
		</Section>
	);
}

export default  About

const Section = styled.section`
	height: 100vh;
	width: 100vw;
	position: relative;
	.background {
		height: 100%;
		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
			filter: brightness(60%);
		}
	}
	.content {
		position: absolute;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		width: 100%;
		.sale {
			position: relative;
			left: 10%;
			img {
				height: 70vh;
			}
			h1 {
				color: white;
				position: absolute;
				top: 25vh;
				left: 15vh;
				font-size: 4.5rem;
				span {
					display: block;
					font-size: 5vw;
				}
			}
		}
		.info {
			position: absolute;
			top: 40%;
			right: 15%;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			gap: 1rem;
			h2 {
				color: #f9c74f;
				font-size: 4rem;
				letter-spacing: 0.5rem;
				font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
			}
			em {
				color: white;
				width: 60%;
				text-align: end;
				font-size: 2rem;
				line-height: 2rem;
				letter-spacing: 0.1rem;
				font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
			}
			button {
				padding: 1rem 2rem;
				font-size: 1.4rem;
				background-color: #fc4958;
				border: none;
				color: white;
				font-weight: 800;
				letter-spacing: 0.2rem;
				transition: 0.3s ease-in-out;
				cursor: pointer;
				&:hover {
					background-color: #f9c74f;
				}
			}
		}
	}
	@media screen and (min-width: 260px) and (max-width: 1080px) {
		.content {
			flex-direction: column;
			.sale {
				display: none;
			}
			.info {
				top: 25%;
				h2 {
					font-size: 2rem;
				}
				em {
					width: 90%;
				}
			}
		}
	}
`;
