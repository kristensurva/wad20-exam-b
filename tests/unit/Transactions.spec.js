// Import the mount() method from the test utils
// and the component you want to test

import { mount } from '@vue/test-utils'
import Transactions from "../../src/components/Transactions";

const mocktestData = [
    {
        to: "John Doe",
        amount: 100,
        currency: "EUR",
        type: "spending"
    },
    {
        from: "Unknown OU",
        amount: 2045.87,
        currency: "EUR",
        type: "income"
    },
    {
        to: "Jane Doe",
        amount: 200,
        currency: "EUR",
        type: "spending"
    },
    {
        to: "Generic Store",
        amount: 10.7,
        currency: "EUR",
        type: "spending"
    },
    {
        from: "Bob Smith",
        amount: 50.7,
        currency: "EUR",
        type: "income"
    },
    {
        from: "Grandma",
        amount: 150,
        currency: "EUR",
        type: "income"
    },
    {
        to: "Amazon",
        amount: 76.90,
        currency: "EUR",
        type: "spending"
    },
    {
        to: "Bolt",
        amount: 4.5,
        currency: "EUR",
        type: "spending"
    },
    {
        to: "Bill Newsome",
        amount: 9.6,
        currency: "EUR",
        type: "spending"
    },
]

describe('Transactions', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Transactions, {
        propsData: {
            transactions: mocktestData
            }
    });

    it("as many rows as items in array", function() {
        let expectedValue = mocktestData.length
        let rows = wrapper.findAll('tr')
        expect(rows.length-2).toEqual(expectedValue) // -2 because one of the rows is the table header and the other is total balance.
    });

    it("correct .income or .spending class", function() {
        let rows = wrapper.findAll('tr')
        for (let i = 0; i < rows.length; i++) {
            if (i===0 || i===rows.length-1) { // We ignore the first and last row
                continue
            }
            let row = rows.at(i);
            if (mocktestData[i-1].type==="income") {
                expect(row.html().includes("row income")).toBe(true)
            }
            if (mocktestData[i-1].type==="spending") {
                expect(row.html().includes("row spending")).toBe(true)
            }
        }
    })

    it("final balance correct", function () {
        let rows = wrapper.findAll('tr')
        let finalRow = rows.at(rows.length-1)
        let sum = 0.0;
        for (let i = 0; i < mocktestData.length; i++) {
            if (mocktestData[i].type==="income") {
                sum+=mocktestData[i].amount
            }
            if (mocktestData[i].type==="spending") {
                sum+=-mocktestData[i].amount
            }
        }
        expect(finalRow.html().includes(sum))
    })

});