import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
export const Navbar = () => {
  const currentUser = {
    id: 1,
    username: "NV Truong",
    isSeller: true,
  };
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);

  const handleClickOptions = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const isActive = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const menuItems = [
    "Graphics & Design",
    "Writing & Translation",
    "Video & Animation",
    "Music & Audio",
    "Programming & Tech",
    "Business",
    "Lifestyle",
  ];

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="navbar__logo">
          <Link to="/" className="link">
            <span className="navbar__logo__text">NV Truong</span>
          </Link>
          <span className="navbar__logo__icon">.</span>
        </div>
        <div className="navbar__links">
          <ul className="navbar__links__list">
            <li className="navbar__links__list__item">Bussiness solutions</li>
            <li className="navbar__links__list__item">Explores</li>
            <li className="navbar__links__list__item">English</li>
            <li className="navbar__links__list__item">
              {!currentUser?.isSeller && "Become a Seller"}
            </li>
            {!currentUser?.isSeller ? (
              <button className="navbar__links__list__button">Join</button>
            ) : (
              <div className="user" onClick={() => handleClickOptions()}>
                <img src="/src/assets/img/00001.png" alt="" />
                <span>{currentUser?.username}</span>
                {!!open && (
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <Link className="link" to="/mygigs" key="gigs">
                          Gigs
                        </Link>
                        <Link className="link" to="/add" key="add-gig">
                          Add New Gig
                        </Link>
                      </>
                    )}
                    <Link className="link" to="/orders">
                      Orders
                    </Link>
                    <Link className="link" to="/messages">
                      Messages
                    </Link>
                    <Link className="link" to="/">
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>
      </div>
      {active ||
        (pathname !== "/" && (
          <>
            <hr />
            <div className="menu">
              <ul className="menu__list">
                {menuItems.map((item, index) => (
                  <li className="menu__list__item" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ))}
    </div>
  );
};
