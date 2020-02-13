const API_ROOT = 'http://localhost:3001'
const token = localStorage.getItem('token')

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    Authorization: token
};

const login = data => {
    return fetch(`${API_ROOT}/auth`, {
        method: 'POST',
        headers,
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
      headers
    }).then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return {error: "Not a valid username or password"}
        }
    })
};

export const api = {
    auth: {
        login,
        getCurrentUser
    },
    user: {
        signup
    }
}