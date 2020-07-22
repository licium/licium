import {Given} from 'cypress-cucumber-preprocessor/steps';

export function openApplication() {
    cy.visit('/')
}

export function visitIdentification() {
    cy.select('#identification').click()
}

Given('The application is open', function() {
    openApplication()
})
Given(/^I visit the Page Identification$/, function() {
    visitIdentification()
});