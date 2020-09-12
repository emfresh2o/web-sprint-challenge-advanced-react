import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    const checkoutHeader = getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText } = render(<CheckoutForm />);

    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const addressInput = getByLabelText(/address/i);
    const cityInput = getByLabelText(/city/i);
    const stateInput = getByLabelText(/state/i);
    const zipInput = getByLabelText(/zip/i);

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
    expect(zipInput).toBeInTheDocument();

    fireEvent.change(firstNameInput, { target: { value: 'Mitch' }})
    fireEvent.change(lastNameInput, { target: { value: 'Freshwater' }})
    fireEvent.change(addressInput, { target: { value: '2141 Kenneth Avenue' }})
    fireEvent.change(cityInput, { target: { value: 'Arnold' }})
    fireEvent.change(stateInput, { target: { value: 'PA' }})
    fireEvent.change(zipInput, { target: { value: '15068' }})

});

// test("form shows errors on submit", () => {
//     const successMessage = getByTestId(/successMessage/i)
//     expect(successMessage).toBeInTheDocument();
//     fireEvent.change(message, {target: { value: 'SORRY!'}})

// });
