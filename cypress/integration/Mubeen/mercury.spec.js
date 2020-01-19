/// <reference types="cypress"/>

describe('Test Suite2', function(){
    it('test case1', function(){
        cy.visit('http://newtours.demoaut.com/');
        cy.get('[name=userName]').should('be.visible').should('be.enabled').clear().type('mercury');
        cy.get('[name=password]').should('be.visible').should('be.enabled').clear().type('mercury');
        cy.get('[name=login]').should('be.visible').should('be.enabled').click();
    })

    it('test case2', function(){
        console.log("Test case 2");
        
    })
})