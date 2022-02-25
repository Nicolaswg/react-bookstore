import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';

import { FaUser } from 'react-icons/fa';
import style from './styles/Navbar.module.css';

const Navbar = () => {
  const links = [
    {
      id: uuidv4(),
      path: '/',
      text: 'Books',
    },
    {
      id: uuidv4(),
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <>
      <div className={style.panelBg}>
        <nav className={style.navbar}>
          <h1>Bookstore CMS</h1>
          {
            links.map((link) => (
              <>
                <span>
                  <NavLink key={link.id} to={link.path} className={style.link}>
                    {link.text}
                  </NavLink>
                </span>
              </>
            ))
          }
        </nav>
        <div className={style.oval}>
          <FaUser className={style.userIcon} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
