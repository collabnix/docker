import { createGlobalStyle } from 'styled-components'
export const Global = createGlobalStyle`

    table {
    border-collapse: separate ; 
    border-spacing: 1.2rem 0.5rem  ;
    padding-bottom: 1rem;
}
.code-box-demo .ant-affix {
  z-index: 11;
}
.ant-layout{
  max-height: 100vh;
  overflow-y: auto;
  background-color: white;
}
.ant-layout-content{
font-size: 1.2rem;
}
`
