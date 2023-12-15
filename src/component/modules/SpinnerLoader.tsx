import { Spinner } from '@nextui-org/react'
import React from 'react'

const SpinnerLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
          <Spinner label="Loading..." color="warning" />
    </div>
  )
}

export default SpinnerLoader
