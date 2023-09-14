import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch
						</div>

						<div className="subtitle contact-subtitle">
						Thank you for your interest in reaching out to me. <br /> I'm genuinely excited that you've taken the step to connect, and I'm more than happy to hear from you.

Please don't hesitate to send your feedback, questions, or suggestions my way. I may not have extensive experience, as I'm just starting my journey as a fresher in the field, but I'm eager to learn and grow.

If you have something specific on your mind, you can drop me an email directly at <a href="mailto:your_email@example.com" style={{ textDecoration: 'none', fontWeight: 'bold' ,color:'black'}}>sonusureshofficial8@gmail.com</a>. <br />
Once again, I appreciate your interest and look forward to connecting with you. <br /> Let's take this step together!

						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
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

export default Contact;
