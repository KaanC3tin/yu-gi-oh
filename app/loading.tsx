import React from 'react'

const loading = () => {
  return (
      <div>
          <div className="flex items-center justify-center fixed inset-0" style={{ top: '5px' }}>
              <div className="loader">
                  <div data-glitch="Loading..." className="glitch">Loading...</div>
              </div>
          </div>
    </div>
  )
}

export default loading