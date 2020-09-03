import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";

const onMouseEnter = (event, color) => {
	const el = event.target;
	el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
	const el = event.target;
	el.style.backgroundColor = "transparent";
};

class Header extends Component {
	render() {
		const theme = this.props.theme;
		console.log(theme);
		const link = settings.isSplash ? "/splash" : "home";
		return (
			<Fade top duration={1000} distance="20px">
				<div>
					<header className="header">
						<NavLink to={link} tag={Link} className="logo">
							<span style={{ color: theme.text }}> &lt;</span>
							<span className="logo-name" style={{ color: theme.text }}>
								{greeting.logo_name}
							</span>
							<span style={{ color: theme.text }}>/&gt;</span>
						</NavLink>
						<input className="menu-btn" type="checkbox" id="menu-btn" />
						<label className="menu-icon" htmlFor="menu-btn">
							<span className="navicon"></span>
						</label>
						<ul className="menu" style={{ backgroundColor: theme.body }}>
							<li>
								<NavLink
									to="/home"
									tag={Link}
									activeStyle={{
										fontWeight: "bold",
										color: theme.text,
									}}
									style={{ color: theme.secondaryText }}
									onMouseEnter={(event) => onMouseEnter(event, theme.dark)}
									onMouseOut={(event) => onMouseOut(event)}
								>
									Home
								</NavLink>
							</li>

							<li>
								<NavLink
									to="/projects"
									tag={Link}
									activeStyle={{
										fontWeight: "bold",
										color: theme.text,
									}}
									style={{ color: theme.secondaryText }}
									onMouseEnter={(event) => onMouseEnter(event, theme.dark)}
									onMouseOut={(event) => onMouseOut(event)}
								>
									Projects
								</NavLink>
							</li>

							<li>
								<NavLink
									to="/contact"
									tag={Link}
									activeStyle={{
										fontWeight: "bold",
										color: theme.text,
									}}
									style={{ color: theme.secondaryText }}
									onMouseEnter={(event) => onMouseEnter(event, theme.dark)}
									onMouseOut={(event) => onMouseOut(event)}
								>
									Hire Me
								</NavLink>
							</li>
						</ul>
					</header>
				</div>
			</Fade>
		);
	}
}
export default Header;
