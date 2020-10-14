import React from "react";
import { render, screen, getByAltText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

//comps
import App from '../App';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
        //Arrange
        render(<App/>)
        //Act
        screen.getByText(react plants)


        //Assert
    
});

test("form shows success message on submit with form details", () => {});
