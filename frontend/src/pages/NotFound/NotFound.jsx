import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            PAGE IS NOT FOUND!
            <p>Go back to <Link to="/catalog">catalog</Link></p>
        </div>
    )
}

export default NotFound
