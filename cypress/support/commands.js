import * as locators from './locators/locators'

Cypress.Commands.add("access_url", () => { 
    cy.visit('/')
})

Cypress.Commands.add("input_task", (task) => { 
    cy.get(locators.input_field_tasks).type(`${task}{ENTER}`)
})

Cypress.Commands.add("edit_input_task", (task) => { 
    cy.get(locators.input_edit_task).clear().type(`${task}{ENTER}`)
})

Cypress.Commands.add("validate_included_task", (task) => { 
    cy.get(locators.task_in_list).should('be.contains.text', task)
})

Cypress.Commands.add("validate_not_included_task", (task) => { 
    cy.get(locators.task_in_list).should('be.not.contains.text', task)
})

Cypress.Commands.add("conclude_task", () => { 
    cy.get(locators.button_complete_task).click()
})

Cypress.Commands.add("clear_conclude_task", () => { 
    cy.get(locators.button_clear_completed).click()
})

Cypress.Commands.add("take_off_finish_task", () => { 
    cy.get(locators.button_complete_task).click()
})

Cypress.Commands.add("refresh_page", () => { 
    cy.reload()
})

Cypress.Commands.add("double_click_in_task", () => { 
    cy.get(locators.task_in_list).dblclick()
})

Cypress.Commands.add("delete_task", () => { 
    cy.get(locators.delete_button).invoke('show').first().click({force:true})
})

Cypress.Commands.add("finish_all_tasks", () => { 
    cy.get(locators.complete_all_task).each( finish =>{
        cy.get(finish).click({force:true})
    })
})

Cypress.Commands.add("task_finished", () => { 
    cy.get(locators.input_edit_task).each( finish =>{
        cy.get(finish).should('have.attr', 'class',  'completed')
    })
})