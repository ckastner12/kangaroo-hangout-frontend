const API_ROOT = 'http://localhost:3001'

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
        headers,
        body: JSON.stringify(data)
    }).then(res => res.json())
}

const getCurrentUser = () => {
    console.log("getting current user", headers)
    return fetch(`${API_ROOT}/current_user`, {
      headers: headers()
    }).then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return {error: "Not a valid profile"}
        }
    })
};

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

export const api = {
    auth: {
        login,
        getCurrentUser
    },
    user: {
        signup
    },
    event: {
        createEvent,
        deleteEvent
    }
}