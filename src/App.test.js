import React from 'react';
import ReactDOM from 'react-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import App from './App';

describe("<App/>", () => {
  afterEach(cleanup)
  beforeEach(() => {
    window.localStorage.removeItem('token')
  })

  it("Renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
  })
})
