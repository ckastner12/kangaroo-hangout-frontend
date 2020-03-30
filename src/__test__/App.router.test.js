import App from '../App'
import { renderWithRouter, fireEvent, wait } from '../test/test-utils'
import React from 'react'
import {api} from "../services/api"

describe("Login Flow", () => {
    beforeEach(() => {
        window.localStorage.removeItem('token')
    })

    it("Lets a user login to an account", async () => {
        const fakeUserLogin = {
            email: "chris@hotmail.com",
            password: "Boomgoesthedynamite"
        }

        const fakeUser = {
            ...fakeUserLogin,
            name: "Chris Stephens",
        }

        const { container, getAllByPlaceholderText, getByText, getByTestId } = renderWithRouter(<App/>)
    
        fireEvent.click(getByText("Log in"))
    
        const emailInput = getAllByPlaceholderText("Email")
        const nameInput = getAllByPlaceholderText("Name")
        const passwordInput = getAllByPlaceholderText("Password")

        emailInput.forEach(email => fireEvent.change(email, { target: {value: fakeUser.email}}))
        passwordInput.forEach(password => fireEvent.change(password, { target: {value: fakeUser.password}}))

        fireEvent.click(getByTestId("login-btn"))

        await wait(() => expect(window.localStorage.getItem("token")).toBeDefined())

        expect(api.auth.login).toHaveBeenCalledTimes(1)
        expect(api.auth.login).toHaveBeenCalledWith({user: fakeUserLogin})
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

        const emailInput = getAllByPlaceholderText("Email")
        const nameInput = getAllByPlaceholderText("Name")
        const passwordInput = getAllByPlaceholderText("Password")

        emailInput.forEach(email => fireEvent.change(email, { target: {value: fakeUser.email}}))
        nameInput.forEach(name => fireEvent.change(name, { target: {value: fakeUser.name}}))
        passwordInput.forEach(password => fireEvent.change(password, { target: {value: fakeUser.password}}))

        api.user.signup.mockImplementationOnce(() => Promise.resolve({user: {jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}}))
    
        fireEvent.click(getByTestId("signup-btn"))

        await wait(() => expect(window.localStorage.getItem("token")).toBeDefined())

        expect(api.user.signup).toHaveBeenCalledTimes(1)
        expect(api.user.signup).toHaveBeenCalledWith({user: fakeUser})
        expect(window.localStorage.getItem("token")).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
    })
})