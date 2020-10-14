import React from "react";
import { render, screen, getByAltText, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

//comps
import App from '../App';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
        //Arrange
        render(<App/>)
        //Act
        const nav = screen.getByText(/React Plants/)
        //Assert
        expect(nav).toBeInTheDocument();
    
});

test("form shows success message on submit with form details", () => {
        //Arrange
        render(<CheckoutForm/>)
        //Act
        const success = screen.getAllByTestId('successMessage')
        //Assert
        fireEvent.click(getByText('Checkout', success));
});
