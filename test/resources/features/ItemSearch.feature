Feature: Item search

    Scenario: Search existising item by keyword 
        Given User is on Home page
        When User clicks search item field
        And User types iPhone
        And User clicks search button
        Then item is shown in search results