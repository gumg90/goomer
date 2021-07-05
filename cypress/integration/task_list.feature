Feature: Task list

Scenario Outline: Add a new Task
    Given I'm on the home page
    And I include the task "<task>"
    Then Check if the task "<task>" exists in the list
    Examples:
    | task        | 
    | play soccer |

Scenario: Add a new Task
    Given I'm on the home page
    And I include the task "play soccer"
    And I include the task "wash the dishes"
    And I include the task "Walker"
    And I include the task "Clean the house"
    Then Check if the task "play soccer" exists in the list
    Then Check if the task "wash the dishes" exists in the list
    Then Check if the task "Walker" exists in the list
    Then Check if the task "Clean the house" exists in the list


Scenario: Complete and Clear Completed Task
    Given I'm on the home page
    And I include the task "play soccer"
    And I include the task "wash the dishes"
    And I finish the task
    Then I click in button Clear completed

Scenario: Leave completed task as Pending
    Given I'm on the home page
    And I include the task "play soccer"
    And I include the task "wash the dishes"
    And I finish the task
    Then I return the task to Pending

Scenario: refresh the page
    Given I'm on the home page
    And I include the task "play soccer"
    And Refresh the page
    Then Check if the task "play soccer" exists in the list

Scenario: edit task
    Given I'm on the home page
    And I include the task "play soccer"
    And Refresh the page
    When I double click in task
    And I edit task to "Walker"
    Then Check if the task "Walker" exists in the list
    And Check if the task "play soccer" not exists in the list

Scenario: Delete task
    Given I'm on the home page
    And I include the task "play soccer"
    And I include the task "Walker"
    And Refresh the page
    When I delete task
    And Check if the task "play soccer" not exists in the list

Scenario: finish all tasks
    Given I'm on the home page
    And I include the task "play soccer"
    And I include the task "Walker"
    When I finish all tasks
    Then Check all tasks finished

# Scenario: Leave Pending task as completed

# Scenario: View pending tasks

# Scenario: Validate task creation without description



