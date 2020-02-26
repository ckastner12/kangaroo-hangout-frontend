import React from 'react';
import ReactDOM from 'react-dom'
import axiosMock from 'axios'
import { render, cleanup, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import App from './App';

describe("<App/>", () => {
  afterEach(cleanup)
  beforeEach(() => {
    window.localStorage.removeItem('token')
    axiosMock.__mock.reset()
    initAPI()
  })

  it("Renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<App></App>, div);
  })

  it("lets a user login", async () => {
    const {
      getByTestId,
      container,
      getByText,
      getByLabelText,
      finishLoading,
    } = render(<App />)

    await finishLoading()

    fireEvent.click(getByText(/login/i))


  })
})
