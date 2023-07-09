import React from 'react'
import { Link } from 'react-router-dom'
import './styles/HeaderButton.css'

function HeaderButton({page, name, path}) {
  return (
    <Link to={`/${name}`}>
          <div className={`header-button ${page===`/${name}` ? 'active':''}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d={path}
                fill={`${page===`/${name}`? "#FFD700":'white'}`}
              />
            </svg>
            <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
          </div>
        </Link>
  )
}

export default HeaderButton