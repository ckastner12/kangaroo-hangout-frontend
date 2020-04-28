import React from 'react'
import EventCard from "./../EventCard"
import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

describe("EventCard", () => {
    afterEach(cleanup);
    
    it('renders correctly with no props', () => {
        const {getByTestId} = render(<EventCard></EventCard>)
        const today = new Date()
        expect(getByTestId("event-card")).toHaveTextContent("Cannot be found")
        expect(getByTestId("event-card")).toHaveTextContent(today.toDateString())
    })
    it('renders correctly with props', () => {
        const event = {date: new Date('2020-02-26'), activities: [
            {name: "Joe's Crab Shack", formatted_address: "1600 Pennsylvania Avenue", id: 1},
            {name: "Ortiz's", formatted_address: "9 3/4 Hogwarts Street", id: 2},
            {name: "In-n-out", formatted_address: "123 Green Avenue", id: 3}
        ]}
        const {getByTestId} = render(<EventCard event={event}></EventCard>)
        expect(getByTestId("event-card")).toHaveTextContent("Joe's Crab Shack")
        expect(getByTestId("event-card")).toHaveTextContent("Ortiz's")
        expect(getByTestId("event-card")).toHaveTextContent("In-n-out")
        expect(getByTestId("event-card")).toHaveTextContent(event.date.toDateString())
    })

})