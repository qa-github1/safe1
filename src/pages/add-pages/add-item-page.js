import BaseAddPage from "../base-pages/base-add-page";

let casesApi = require('../../api-utils/endpoints/cases/collection')
let orgSettingsApi = require('../../api-utils/endpoints/org-settings/collection')
let authApi = require('../../api-utils/endpoints/auth')

const C = require('../../fixtures/constants');
const S = require('../../fixtures/settings');
const D = require('../../fixtures/data');

let
    category = e => cy.get('[ng-model="newItem.categoryId"]'),
    caseNumberInput_enabled = e => cy.get('[for="primaryCaseId"]').parent('div').find('input'),
    recoveredBy = e => cy.contains('Recovered By').parent('div').find('input'),
    recoveryDate = e => cy.get('div[name="recoveryDate"]').find('[min-date="minDate"]'),
    custodyReason = e => cy.get('[name="custodyReason"]'),
    make = e => cy.get('[ng-model="newItem.make"]'),
    model = e => cy.get('[ng-model="newItem.model"]'),
    recoveredByTypeahead = e => cy.get('[ng-repeat="match in matches track by $index"]').first(),
    recoveredByResults = e => cy.get('[ng-model="newItem.recoveredById"] ul'),
    personTypeahead = e => cy.get('[ng-repeat="person in $select.items"]'),
    recoveredAt = e => cy.findByPlaceholderText(C.placeholders.addItem.recoveryLocation),
    itemDescription = e => cy.findByPlaceholderText(C.placeholders.addItem.itemDescription),
    itemBelongsTo = e => cy.get('.form-horizontal').contains('Item Belongs to').parent('div').find('input'),
    serialNumber = e => cy.findByPlaceholderText(C.placeholders.addItem.itemSerialNumber),
    storageLocation = e => cy.findByPlaceholderText(C.placeholders.addItem.storageLocation),
    arrowDownForStorageLocations = e => cy.get('[title="View next location level."]'),
    tagsInput = e => cy.findAllByPlaceholderText(C.placeholders.addCase.addTags).eq(1),
    addItemHeader = e => cy.get('[translate="ITEMS.ADD.MODAL_HEADING"]'),
    locationOnTypeahead = locName => cy.contains(locName).first()

//************************************ ELEMENTS ***************************************//

export default class AddItemPage extends BaseAddPage {

    constructor() {
        super();
    }

//************************************ ACTIONS ***************************************//

    enter_Case_Number_and_select_on_typeahead(caseNo) {
        casesApi.get_most_recent_case();
        this.wait_most_recent_case_to_be_populated()
        caseNumberInput_enabled().should('be.visible');
        caseNumberInput_enabled().should('be.enabled');
        caseNumberInput_enabled().clear();
        this.pause(1);
        caseNumberInput_enabled().should('have.class', 'ng-empty');
        caseNumberInput_enabled().type(caseNo);
        this.caseNumberOnTypeahead().click();
        return this;
    };

    wait_most_recent_case_to_be_populated() {
        cy.getLocalStorage("recentCase").then(recentCase => {
            if (recentCase) {
                caseNumberInput_enabled().should('have.class', 'ng-not-empty');
                caseNumberInput_enabled().should('have.value', JSON.parse(recentCase).caseNumber);
            }
        });
        return this;
    };

    verify_Add_Item_page_is_open() {
        this.toastMessage().should('not.exist');
        addItemHeader().should('contain', C.labels.addItem.title);
        this.pause(0.5)
        return this;
    };

    verify_Case_Number_is_populated_on_enabled_input_field(caseNo) {
        casesApi.get_most_recent_case();
        cy.getLocalStorage("recentCase").then(recentCase => {
            //cy.log('Fetching the most recent case from local storage');
            if (recentCase) {
                if (caseNo) {
                    expect(JSON.parse(recentCase).caseNumber).to.eq(caseNo);
                } else {
                    caseNo = JSON.parse(recentCase).caseNumber;
                }
            }

            this.toastMessage().should('not.exist');
            caseNumberInput_enabled().should('be.enabled');
            caseNumberInput_enabled().should('have.class', 'ng-not-empty');
            caseNumberInput_enabled().should('have.value', caseNo);

        });
        return this;
    };

    get_next_item_id_for_case_and_Org(caseNumber) {
        cy.getLocalStorage("currentUserSettings").then(currentUserSettings => {
            if (!JSON.parse(currentUserSettings).isOrgAdmin) {
                authApi.get_tokens_without_page_reload(S.userAccounts.orgAdmin)
            }
        })
        casesApi.fetch_current_case_data(caseNumber);
        orgSettingsApi.get_current_org_settings();

        cy.getLocalStorage("orgSettings").then(orgSettings => {
            cy.getLocalStorage("currentCase").then(currentCase => {
                orgSettings = JSON.parse(orgSettings);
                currentCase = JSON.parse(currentCase).cases[0];

                cy.setLocalStorage('nextItemId_inOrg', orgSettings.nextItemId)
                cy.setLocalStorage('nextItemId_onCase', currentCase.nextItemId)
            });
        });
    }

    click_Save(itemObject = D.newItem) {
        this.get_next_item_id_for_case_and_Org(itemObject.caseNumber)
        super.click_Save()
        return this;
    };

    verify_toast_message_(caseObject, nextItemId_case, nextItemId_org, splitItem_secondPart) {
        this.wait_response_from_API_call('addItem', 200, 'newItem')
        cy.getLocalStorage("nextItemId_onCase").then(nextItemId_onCase => {
            cy.getLocalStorage("nextItemId_inOrg").then(nextItemId_inOrg => {

                let orgNo = nextItemId_org || nextItemId_inOrg
                let itemNo = nextItemId_case || nextItemId_onCase
                if (splitItem_secondPart) itemNo = (parseInt(itemNo)-1) + splitItem_secondPart

                this.verify_toast_message(C.toastMsgs.addedNewItem(caseObject.caseNumber, orgNo, itemNo))
            });
        });
        return this;
    };

    select_Category(option) {
        category().select(option);
        return this;
    };

    verify_Category(selectedCategory) {
        category().should('contain', selectedCategory);
        return this;
    };

    populate_all_fields_on_first_form(caseNo, category) {
        this.verify_Add_Item_page_is_open();
        this.enter_Case_Number_and_select_on_typeahead(caseNo);
        this.select_Category(category);
        this.verify_Category(category);
        this.click_Next();
        return this;
    }

    populate_all_fields_on_second_form(itemObject, skipStorageLocation) {

        this.type_if_values_provided(
            [
                [recoveredBy, itemObject.recoveredBy, recoveredByTypeahead],
                [recoveredAt, itemObject.recoveryLocation],
                [recoveryDate, itemObject.recoveryDate],
                [itemDescription, itemObject.description],
                [make, itemObject.make],
                [model, itemObject.model],
                [serialNumber, itemObject.serialNumber],
            ]);

        this.enter_values_on_multi_select_typeahead_fields(
            [
                [itemBelongsTo, itemObject.itemBelongsTo],
                [this.tagsInput, itemObject.tags],
            ]);

        if (!skipStorageLocation) {
            this.type_if_value_provided(storageLocation, itemObject.location, this.firstLocationOnTypeahead);
        }

        if (itemObject.custodyReason) custodyReason().select(itemObject.custodyReason);

        this.define_API_request_to_be_awaited('POST', 'api/items', 'addItem', 'newItem')
        return this;
    };

    populate_all_fields_on_both_forms(itemObject, enterCaseNumber = true, addingItemToClosedCase) {
        if (enterCaseNumber) this.enter_Case_Number_and_select_on_typeahead(itemObject.caseNumber);

        this.select_Category(itemObject.category)
            .click(C.buttons.next)

        if (addingItemToClosedCase) {
            cy.contains('The Case is closed.').should('be.visible')
            this.click_button_on_sweet_alert('OK')
        }
        this.populate_all_fields_on_second_form(itemObject);
        return this;
    };

    enter_storage_location(location) {
        storageLocation().clear().type(location);
        this.pause(2)
        return this;
    };

    select_Storage_Locations_with_arrow_icon(locationName) {
        storageLocation().clear()
        this.pause(1)
        arrowDownForStorageLocations().click()

        locationOnTypeahead(locationName).click()
        return this;
    };

    verify_storage_location_typeahead_is_not_shown() {
        this.locationsOnTypeahead().should('not.exist');
        return this;
    };

    verify_location(location) {
        storageLocation().should('have.value', location);
        return this;
    };

    enter_recoveredBy(value) {
        recoveredBy().clear().type(value);
        this.wait_until_spinner_disappears();
        return this;
    };

    verify_RecoveredBy_dropdown_is_visible(numberOfEntries) {
        if (numberOfEntries) {
            recoveredByResults().children().should('have.length', numberOfEntries);
        } else {
            recoveredByResults().children().its('length').should('be.greaterThan', 0)
        }
        return this;
    }

    verify_RecoveredBy_dropdown_is_NOT_visible() {
        recoveredByResults().children().should('have.length', 0);
        return this;
    }
}

