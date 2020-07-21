#language:en
  Feature:
    Asset Registration
    Background:
      Given The application is open
      Given I visit the Page Identification

      Scenario: Registration of an asset
        Given A single asset
        When I select the asset
        And I open "Registration"
        And I choose "Bloxberg" as blockchain
        And I choose the first wallet from available wallets
        And I click "Register"
        Then The registration is successful


