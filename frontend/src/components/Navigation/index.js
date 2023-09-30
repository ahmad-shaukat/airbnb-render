import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/nav-logo.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  // console.log(sessionUser, 'test session user')

  return (
    <ul className='nav-ul'>
      <li className='nav-li'>
        <NavLink exact to="/">
          <img src={logo} className='nav-logo' />
        </NavLink>
      </li>
      <div className='user-menu-create'>

      <div>
        {sessionUser ? <div className='crt-btn'>

          <NavLink to={'/spots/new'} className='add-spt-login-nav'>
            Add a Spot
          </NavLink>

        </div> : <div></div>}
      </div>

      {isLoaded && (
        <>
          

          <li>
            <ProfileButton user={sessionUser} className='profile-button' />
          </li>

        </>

      )}
      </div>
    </ul>
  );

  // return (

  //   <>
  //   <div className='navigation-container'>
  //     <div className='' >
  //       <NavLink exact to="/" style={{color: 'red'}}><i class="fa-brands fa-airbnb"></i></NavLink>
  //     </div>

  //     {sessionUser ?
  //     <div className=''>
  //       <NavLink to='/spots/new'>Add a Spot</NavLink>
  //     </div> : <div></div>
  //     }

  //     {isLoaded && (
  //       <div className=''>
  //         <ProfileButton user={sessionUser} />
  //       </div>
  //       )}
  //   </div>
  //   </>

  // );
}

export default Navigation;
