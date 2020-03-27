import React from 'react'
import ActivityCard from "./../ActivityCard"
import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

import renderer from "react-test-renderer"

describe("Activity Card", () => {
    afterEach(cleanup);
    
    it("Renders card correctly with no props", () => {
        const { getByTestId, getByText } = render(<ActivityCard/>)

        expect(getByTestId("activity-card")).toHaveTextContent("Cannot Find Name")
        expect(getByTestId("activity-card")).toHaveTextContent("No Result Found")
    })

    it("Renders card correctly with props", () => {
        const activity = {name: "Joe's Crab Shack", formatted_address: "1600 Pennsylvania Avenue"}
        const { getByTestId } = render(<ActivityCard activity={activity}></ActivityCard>)
        expect(getByTestId("activity-card")).toHaveTextContent("Joe's Crab Shack")
        expect(getByTestId("activity-card")).toHaveTextContent("1600 Pennsylvania Avenue")
    })

    it("Renders add button with the right prop", () => {
        const addCallback = () => {
            return 
        }
        const activity = {name: "Joe's Crab Shack", formatted_address: "1600 Pennsylvania Avenue"}
        const { getByTestId } = render(<ActivityCard handleAdd={addCallback} activity={activity}></ActivityCard>)
        expect(getByTestId("activity-button")).toHaveTextContent("Add")
    })

    it("Matches snapshot with no props", () => {
        const tree = renderer.create(<ActivityCard></ActivityCard>).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("Matches snapshot with props", () => {
        const activity = {name: "Joe's Crab Shack", formatted_address: "1600 Pennsylvania Avenue"}
        const tree = renderer.create(<ActivityCard activity={activity}></ActivityCard>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
