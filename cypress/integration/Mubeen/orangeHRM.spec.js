/// <reference types="cypress"/>

describe('Test Suite1', function(){
    it('test case1', function(){
        cy.visit('https://orangehrm-demo-6x.orangehrmlive.com/');
        cy.get('#txtUsername').should('be.visible').should('be.enabled').clear().type('admin');
        cy.get('#txtPassword').should('be.visible').should('be.enabled').clear().type('admin123');
        cy.get('#btnLogin').should('be.visible').should('be.enabled').click();
    })

    it('test case2', function(){
        cy.visit('https://orangehrm-demo-6x.orangehrmlive.com/');
        cy.get('#txtUsername').should('be.visible').should('be.enabled').clear().type('admin');
        cy.get('#txtPassword').should('be.visible').should('be.enabled').clear().type('admin123');
        cy.get('#btnLogin').should('be.visible').should('be.enabled').click();
    })

    it('test case3', function(){
        cy.visit('https://orangehrm-demo-6x.orangehrmlive.com/');
        cy.get('#txtUsername').should('be.visible').should('be.enabled').clear().type('admin');
        cy.get('#txtPassword').should('be.visible').should('be.enabled').clear().type('admin123');
        
    })

    it('test case4', function(){
        console.log("Test case 4");
        
    })
})