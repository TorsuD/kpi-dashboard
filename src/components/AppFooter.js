import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
          Union Systems Global
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
