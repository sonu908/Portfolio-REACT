import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container"></div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I’ve made.
						</div>

						<div className="subtitle projects-subtitle">
							I've been fortunate to complete a valuable
							internship that significantly boosted my skills.
							Alongside that, I actively participated in various
							online communities and frequently turned to
							resources like YouTube to enhance my knowledge.
							During this time, <b>
								I took on several projects, with
								each one building on the lessons from the last. </b>
							During this time,
							These experiences were crucial for my growth and
							taught me invaluable lessons. I cherish each project
							as a testament to my continuous learning journey.
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
