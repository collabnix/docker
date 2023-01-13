import { Menu } from 'antd'
import React from 'react'
import MenuItem from 'antd/lib/menu/MenuItem'
import { NavItems } from './NavItems'

const Navbar = () => {
  return (
    <Menu style={{ width: '100%' }} mode="horizontal">
      <MenuItem style={{ marginRight: 'auto' }}>Collabnix</MenuItem>
      {NavItems.map((key) => {
        return (
          <MenuItem key={key.key} disabled={key.disabled}>
            <a href={key.link} target="_blank" rel="noopener noreferrer">
              {key.label}
            </a>
          </MenuItem>
        )
      })}
    </Menu>
  )
}
export default Navbar
