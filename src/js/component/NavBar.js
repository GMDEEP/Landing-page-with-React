import React from "react";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Contact Page
				</a>
				<button className="navbar-toggler" type="button">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Bots
							</a>
						</li>
						{/* <li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#">
								Dropdown
							</a>
						</li> */}
						<ul className="dropdown-menu">
							<li>
								<a className="dropdown-item" href="#">
									Contact Page
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</li>
							<li>
								<hr className="dropdown-divider" />
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</li>
						</ul>
					</ul>
				</div>
			</div>
		</nav>
	);
}
