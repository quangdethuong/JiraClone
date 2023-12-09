import React from 'react'
import { useSelector } from 'react-redux'

export default function Home(props) {
    const userLogin = useSelector(state => state.UserLoginCyberBugsReducer.userLogin)
    console.log(props)
    return (
        <div>
            {userLogin.phoneNumber}
        </div>
    )
}



