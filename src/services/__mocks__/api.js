const fakeData = {
    user: {
        email: "chris@hotmail.com",
        name: "Chris Stephens",
        password: "Boomgoesthedynamite"
    },
    badReponse: {
        
    }
}

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



export const api = {
    auth: {
        login,
        badLogin
        // getCurrentUser,
        // editCurrentUser,
        // deleteCurrentUser
    },
    user: {
        signup,
        badSignup
    },
    event: {
        // createEvent,
        // deleteEvent
    }
}