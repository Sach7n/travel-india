import React from 'react'
import useFirestore from './hooks/useFirestore';
import PlacesList from './PlaceList';


const Check = props => {
    const {tempDoc} = useFirestore('travApp')
    console.log(tempDoc)
    return (
    <PlacesList/>
  )
}

Check.propTypes = {}

export default Check