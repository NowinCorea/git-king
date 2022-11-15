import React, { FunctionComponent } from 'react'
import Text from '../components/Text'
import { Link } from 'gatsby'

const IndexPage: FunctionComponent = function () {
  return (
    <>
      <Text text={'hello world!'}></Text>
      <Link to="/info">To Info</Link>
    </>
  )
}

export default IndexPage
