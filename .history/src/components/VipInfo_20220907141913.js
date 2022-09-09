import React from 'react'

function VipInfo(props) {
    let indexParam = props.match.params.id;
  return (
    <div>
    vip info {indexParam}
      
    </div>
  )
}

export default VipInfo
