const API_ROOT = 'https://evening-peak-84473.herokuapp.com'

const headers = () => {
    return {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
        Authorization: localStorage.getItem('token')
    }
};

const login = data => {
    return fetch(`${API_ROOT}/auth`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(data)
    }).then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return {error: "Not a valid username or password"}
        }
    });
};

const signup = data => {
    return fetch(`${API_ROOT}/users`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    }).then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return {error: "Not a valid profile"}
        }
    })
}

const getCurrentUser = () => {
    return fetch(`${API_ROOT}/current_user`, {
        method: "GET",
        headers: headers()
    }).then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return {error: "Not a valid profile"}
        }
    })
};

const editCurrentUser = (data) => {
    return fetch(`${API_ROOT}/current_user`,{
        method: "PATCH",
        headers: headers(),
        body: JSON.stringify(data)
    }).then(resp => {
        if(resp.ok) {
            return resp.json()
        } else {
            return {error: "Not a valid profile"}
        }
    })
}

const deleteCurrentUser = () => {
    return fetch(`${API_ROOT}/current_user`, {
        method: "DELETE",
        headers: headers(),
    }).then(resp => {
        if(resp.ok) {
            return resp.json()
        } else {
            return {error: "Not a valid profile"}
        }
    })
}

const createEvent = (data) => {
    return fetch(`${API_ROOT}/events`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    }).then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return {error: "Not a valid profile"}
        }
    })
}

const deleteEvent = (data) => {
    return fetch(`${API_ROOT}/events/${data}`, {
        method: "DELETE",
        headers: headers()
    }).then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return {error: "Not a valid profile"}
        }
    })
}

const fetchPlaces = (search) => {
    return fetch(`${API_ROOT}/google_api`, {
        method: "POST",
        headers: {
            Accept: 'applicaton/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({google_api: search})
    })
    .then(resp => resp.json())
}

const fetchAddress = (search) => {
    fetch(`${API_ROOT}/google_api/geocode`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(search)
        }).then(resp => resp.json())
}


const api = {
    auth: {
        login,
        getCurrentUser,
        editCurrentUser,
        deleteCurrentUser
    },
    user: {
        signup,
    },
    event: {
        createEvent,
        deleteEvent
    },
    google: {
        fetchPlaces,
        fetchAddress
    }
}

export { api }