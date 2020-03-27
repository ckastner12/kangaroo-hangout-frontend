import App from '../App'
import { renderWithRouter, fireEvent, wait } from '../test/test-utils'
import React from 'react'
import {api} from "../services/api"

describe("Login Flow", () => {
    beforeEach(() => {
        window.localStorage.removeItem('token')
    })

    it("Lets a user login to an account", async () => {
        const fakeUser = {
            email: "chris@hotmail.com",
            name: "Chris Stephens",
            password: "Boomgoesthedynamite"
        }

        const { container, getAllByPlaceholderText, getByText, getByTestId } = renderWithRouter(<App/>)
    
        fireEvent.click(getByText("Log in"))
    
        const emailInputs = getByTestId("login-email")
        const nameInputs = getAllByPlaceholderText("Name")
        const passwordInputs = getAllByPlaceholderText("Password")

        // api.auth.login.mockImplementationOnce(() => Promise.resolve({jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}))
    
        emailInputs.value = fakeUser.email
        nameInputs.forEach(email => email.value = fakeUser.name)
        passwordInputs.forEach(email => email.value = fakeUser.password)
        
        fireEvent.click(getByTestId("login-btn"))

        await wait(() => expect(window.localStorage.getItem("token")).toBeDefined())

        expect(api.auth.login).toHaveBeenCalledTimes(1)
        expect(window.localStorage.getItem("token")).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")

        fireEvent.click(getByText("Log out"))

        expect(window.localStorage.getItem("token")).toBeFalsy()
    })

    it("Let's a user create an account", async () => {
        const fakeUser = {
            email: "chris@hotmail.com",
            name: "Chris Stephens",
            password: "Boomgoesthedynamite"
        }

        const { container, getAllByPlaceholderText, getByText, getByTestId } = renderWithRouter(<App/>)
    
        fireEvent.click(getByText("Log in"))
    
        const emailInputs = getByTestId("login-email")
        const nameInputs = getAllByPlaceholderText("Name")
        const passwordInputs = getAllByPlaceholderText("Password")

        api.user.signup.mockImplementationOnce(() => Promise.resolve({user: {jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}}))
    
        emailInputs.value = fakeUser.email
        nameInputs.forEach(email => email.value = fakeUser.name)
        passwordInputs.forEach(email => email.value = fakeUser.password)
        
        fireEvent.click(getByTestId("signup-btn"))

        await wait(() => expect(window.localStorage.getItem("token")).toBeDefined())

        expect(api.user.signup).toHaveBeenCalledTimes(1)
        expect(api.user.signup).toHaveBeenCalledWith({})
        expect(window.localStorage.getItem("token")).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
    })
})