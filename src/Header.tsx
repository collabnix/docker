import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Menu, Row } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

interface Props {
  siteTitle: string
}

export class Header extends Component<Props> {
  render() {
    const { siteTitle } = this.props
    return (
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to="/">{siteTitle}</Link>
        </Menu.Item>
        <Menu.Item icon={<GithubOutlined />}>
          <a href="https://github.com/collabnix/docker" target="_blank">
            GitHub
          </a>
        </Menu.Item>
        <Menu.Item icon={<TwitterOutlined />}>
          <a href="https://twitter.com/collabnix" target="_blank">
            Twitter
          </a>
        </Menu.Item>
      </Menu>
    )
  }
}
