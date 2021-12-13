import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = props => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#6e6e6e"
    foregroundColor="#d9e7e3"
      {...props}
    >
      <rect x="50" y="6" rx="4" ry="4" width="350" height="38" />
      <rect x="50" y="55" rx="4" ry="4" width="350" height="38" />
      <rect x="50" y="104" rx="4" ry="4" width="350" height="38" />
    </ContentLoader>
  )
}


export default Loader
