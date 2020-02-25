import React from 'react'
import ReactDOM from "react-dom"
import EventCard from "./../ActivityCard"
import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

import renderer from "react-test-renderer"

describe("EventCard", () => {
    afterEach(cleanup);
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<EventCard></EventCard>, div);

    })

    it('renders button correctly with no props', () => {
        const {getByTestId} = render(<EventCard></EventCard>)
        expect(getByTestId("event-card")).toHaveTextContent("click me please")
    })
})