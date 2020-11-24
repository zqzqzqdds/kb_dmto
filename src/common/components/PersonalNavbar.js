import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { LogoutButton } from '../../modules/Authorization/components/LogoutButton'

export const PersonalNavbar= ({ match }) => {

    const { username } = match.params
    const currentUser = useSelector(state => state.auth.login.currentUser)

    return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a href="" className="navbar-brand">Personal page</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <form className="form-inline">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {currentUser.username}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to={`/admin/`}>Открыть консоль администратора</Link>
                            <LogoutButton></LogoutButton>
                        </div>
                        </div>
                    </form>
                </div>
            </nav>
    )
}