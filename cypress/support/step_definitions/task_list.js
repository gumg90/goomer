import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I'm on the home page", function () {
    cy.access_url()
});

Given('I include the task {string}', function (task) {
    cy.input_task(task)
});

Given('I finish the task', function () {
    cy.conclude_task()
});

When('I click in button Clear completed', function () {
    cy.clear_conclude_task()
});

When('Refresh the page', function () {
    cy.refresh_page()
});

When('I double click in task', function () {
    cy.double_click_in_task()
});

When('I edit task to {string}', function (task) {
    cy.edit_input_task(task)
});

When('I delete task', function () {
    cy.delete_task()
});

When('I finish all tasks', function () {
    cy.finish_all_tasks()
});

Then('Check if the task {string} exists in the list', function (task) {
    cy.validate_included_task(task)
});

Then('Check if the task {string} not exists in the list', function (task) {
    cy.validate_not_included_task(task)
});

Then('Check all tasks finished', function () {
    cy.task_finished()
});

Then('I return the task to Pending', function () {
    cy.take_off_finish_task()
});



