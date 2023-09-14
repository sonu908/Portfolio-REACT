import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container"></div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
									<br />
									a passionate and skilled software developer with a strong foundation in full-stack web development. I hold a <b>Bachelor of Computer Applications </b>from Sree Narayana Guru College, where I graduated with an impressive 78.2% score in 2022.

During my academic journey, I was determined to gain hands-on experience and practical knowledge, which led me to undertake an enriching training program at Luminar Technolab as a MERN/MEAN Intern/Trainee in Ernakulam from November 2022 to April 2023. This invaluable training allowed me to work extensively with both the<b> MEAN and MERN technology stacks </b>while contributing to various projects.

My skills encompass a wide range of technologies, including <b>HTML, CSS, JavaScript, React JS, Angular, and Node JS, along with a deep understanding of web APIs.</b> I am fluent in English, Malayalam (native), and Tamil, enabling effective communication and collaboration across diverse teams.

With a strong educational background and practical training experience, L<b>et's connect and create something amazing together!</b>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpeg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
