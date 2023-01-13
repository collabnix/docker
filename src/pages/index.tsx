import * as React from 'react'
import { Button, Col, Layout, Row, Space } from 'antd'
import Navbar from '../Components/Navbar/Navbar'
import { StaticImage } from 'gatsby-plugin-image'
import { SlackOutlined, GithubOutlined } from '@ant-design/icons'
const IndexPage = () => {
  return (
    <Layout
      style={{
        padding: '0 5vw 0rem 5vw',
        background: '#fff',
      }}
    >
      <Navbar />
      <Row
        style={{
          paddingTop: '6vw',
        }}
      >
        <Col sm={24} lg={12}>
          <StaticImage
            style={{ borderRadius: '2rem' }}
            src="../images/dockerlabs.jpeg"
            alt="hero"
          ></StaticImage>
        </Col>
        <Col
          style={{
            paddingLeft: '2rem',
          }}
          sm={24}
          lg={12}
        >
          <h4>LEARN - IMPORVE - LEAD</h4>
          <h1 style={{ fontSize: '2rem' }}>
            Wanna get involed with over 7,700+ Devops engineers?
          </h1>
          <h3>
            A Community Effort To Help Students And Developers Get Better!
          </h3>
          <p>
            Collabnix is an independent community project founded by Ajeet Singh
            Raina, a Docker Captain from India & Docker Community Leader which
            is now being built & shaped by a growing community of contributors
            across the globe.
          </p>
          <Space>
            <Button icon={<SlackOutlined />} type="primary" size="large">
              Slack
            </Button>
            <Button icon={<GithubOutlined />} type="default" size="large">
              Github
            </Button>
          </Space>
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage
