import React, { useEffect, useState } from 'react'
import { Anchor } from 'antd'
import 'antd/dist/antd.css'
import { Wrapper } from './ResursionStyles'

const Recursive = ({ items }) => {
  const { Link } = Anchor
  const [targetOffset, setTargetOffset] = useState<number | undefined>(
    undefined
  )

  useEffect(() => {
    setTargetOffset(window.innerHeight / 2)
  }, [])
  return (
    <Wrapper>
      <Anchor
        affix={false}
        style={{ minWidth: 250, height: '100%', borderRight: 0 }}
      >
        {items.map((item) => {
          console.log(item.title)
          return (
            <Link href={item.url} title={item.title}>
              {item.items && <Recursive items={item.items} />}
            </Link>
          )
        })}
      </Anchor>
    </Wrapper>
  )
}
export default Recursive
