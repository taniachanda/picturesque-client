import React from 'react';
import './Header.css'
import Navbar from '../Navbar/Navbar';
import bg1 from '../../../Images/wallpaperflare.com_wallpaper.jpg'

const Header = () => {
	return (
		<div className="container-fluid p-0" style={{height:'95vh',  backgroundImage: `url(${bg1})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",}}>
			<Navbar/>
			<div className="pt-5 pt-5">
			<h1 className="header-text text-end px-5 text-light display-2 fw-bold">Experience <br/>Photography  <br/> <span className="fst-italic">in a new </span><br/>dimension</h1>	
			</div>

		</div>
	);
};

export default Header;