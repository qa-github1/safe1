const C = require('../../fixtures/constants');
const S = require('../../fixtures/settings');
const D = require('../../fixtures/data');
const E = require('../../fixtures/files/excel-data');
const api = require('../../api-utils/api-spec');
const ui = require('../../pages/ui-spec');

describe('Import Item Updates', function () {

    let orgAdmin = S.userAccounts.orgAdmin;

    before(function () {
        api.auth.get_tokens(orgAdmin);
        api.users.update_current_user_settings(orgAdmin.id)
        api.org_settings.update_org_settings(true, true)
    });

    it('1. Import updates for all item fields', function () {
        ui.app.log_title(this);
        let fileName = 'ItemUpdatesImport_allFields';

        api.auth.get_tokens(orgAdmin);
        api.org_settings.enable_all_Item_fields();
        D.generateNewDataSet();
        api.cases.add_new_case(D.newCase.caseNumber);
        api.items.add_new_item(false);
        D.editedItem.caseNumber = D.newCase.caseNumber;
        D.editedItem.people.shift()

        cy.getLocalStorage("newItem").then(newItem => {
            D.editedItem.barcode = JSON.parse(newItem).barcode
            E.generateDataFor_ITEMS_Importer([D.editedItem], null, true);
            cy.generate_excel_file(fileName, E.itemImportDataWithAllFields);
            ui.menu.click_Tools__Data_Import();
            ui.importer.upload_then_Map_and_Submit_file_for_Item_Updates_import(fileName)
                .verify_toast_message([
                    C.toastMsgs.importComplete,
                    1 + C.toastMsgs.recordsImported]);
            let allEditedFields = C.itemFields.allEditableFieldsArray.concat(['Case'])
            ui.itemView.open_newly_created_item_via_direct_link()
                .verify_edited_and_not_edited_values_on_Item_View_form(allEditedFields, D.editedItem, D.newItem, true, true)
                .click_Edit()
                .verify_edited_and_not_edited_values_on_Item_Edit_form(allEditedFields, D.editedItem, D.newItem, true, true)
                .open_last_history_record()
                .verify_all_values_on_history(D.editedItem, D.newItem)
                .verify_red_highlighted_history_records(allEditedFields)
        });
    });

    it('2. Import update for item status (Check Out transaction)', function () {
        ui.app.log_title(this);
        let fileName = 'ItemUpdatesImport_CheckOut_' + S.domain;

        api.auth.get_tokens(orgAdmin);
        api.org_settings.enable_all_Item_fields();
        D.generateNewDataSet();
        api.cases.add_new_case();
        api.items.add_new_item(false);

        D.editedItem.caseNumber = D.newCase.caseNumber;
        D.getCheckedOutItemData()
        D.newItem.checkedOutNotes = 'Checked_out_through_Importer';
        let CoC_newItemEntry = S.chainOfCustody.SAFE.newItemEntry;
        let CoC_checkout = S.chainOfCustody.SAFE.checkout(D.editedItem);

        cy.getLocalStorage("newItem").then(newItem => {
            D.editedItem.barcode = JSON.parse(newItem).barcode
            E.generateDataFor_ITEMS_Importer([D.editedItem], null);
            cy.generate_excel_file(fileName, E.itemImportDataWithAllFields);
            ui.menu.click_Tools__Data_Import();
            ui.importer.upload_then_Map_and_Submit_file_for_Item_Updates_import(fileName)
                .verify_toast_message([
                    C.toastMsgs.importComplete,
                    1 + C.toastMsgs.recordsImported]);
            let allEditedFields = C.itemFields.allEditableFieldsArray.concat(['Case', 'Status', 'Storage Location', 'Custodian'])
            ui.itemView.open_newly_created_item_via_direct_link()
                .verify_edited_and_not_edited_values_on_Item_View_form(allEditedFields, D.editedItem, D.newItem, true, true)
                .click_Edit()
                .verify_edited_and_not_edited_values_on_Item_Edit_form(allEditedFields, D.editedItem, D.newItem, true, true)
                .select_tab(C.tabs.chainOfCustody)
                .verify_content_of_sequential_rows_in_results_table([
                    CoC_checkout,
                    CoC_newItemEntry
                ])
                .open_last_history_record()
                .verify_all_values_on_history(D.editedItem, D.newItem)
                .verify_red_highlighted_history_records(allEditedFields)
        });
    });

    it('3. Import update for item status (Move transaction)', function () {
        ui.app.log_title(this);
        let fileName = 'ItemUpdatesImport_Move_' + S.domain;

        api.auth.get_tokens(orgAdmin);
        api.org_settings.enable_all_Item_fields();
        D.generateNewDataSet();
        api.cases.add_new_case();
        api.items.add_new_item(true);
        D.newItem.caseNumber = D.newCase.caseNumber

        D.getEditedItemData(S.selectedEnvironment.oldActiveCase, S.selectedEnvironment.locations[1])
        D.getMovedItemData(S.selectedEnvironment.locations[1])
        let CoC_newItemEntry = S.chainOfCustody.SAFE.newItemEntry;
        let CoC_move = S.chainOfCustody.SAFE.move(D.editedItem);

        cy.getLocalStorage("newItem").then(newItem => {
            D.editedItem.barcode = JSON.parse(newItem).barcode
            E.generateDataFor_ITEMS_Importer([D.editedItem], null);
            cy.generate_excel_file(fileName, E.itemImportDataWithAllFields);
            ui.menu.click_Tools__Data_Import();
            ui.importer.upload_then_Map_and_Submit_file_for_Item_Updates_import(fileName)
                .verify_toast_message([
                    C.toastMsgs.importComplete,
                    1 + C.toastMsgs.recordsImported]);
            let allEditedFields = C.itemFields.allEditableFieldsArray.concat(['Case','Storage Location'])
            ui.itemView.open_newly_created_item_via_direct_link()
                .verify_edited_and_not_edited_values_on_Item_View_form(allEditedFields, D.editedItem, D.newItem, true, true)
                .click_Edit()
                .verify_edited_and_not_edited_values_on_Item_Edit_form(allEditedFields, D.editedItem, D.newItem, true, true)
                .select_tab(C.tabs.chainOfCustody)
                .verify_content_of_sequential_rows_in_results_table([
                    CoC_move,
                    CoC_newItemEntry
                ])
                .open_last_history_record()
                .verify_all_values_on_history(D.editedItem, D.newItem)
                .verify_red_highlighted_history_records(allEditedFields)
        });
    });

    it('4. Import update for item status (Disposal transaction)', function () {
        ui.app.log_title(this);
        let fileName = 'ItemUpdatesImport_Disposal_' + S.domain;

        api.auth.get_tokens(orgAdmin);
        api.org_settings.enable_all_Item_fields();
        D.generateNewDataSet();
        D.getEditedItemData(S.selectedEnvironment.oldActiveCase);
        api.cases.add_new_case();
        api.items.add_new_item(true);

        D.getDisposedItemData()
        D.newItem.actualDisposedDate = '';
        D.newItem.caseNumber = D.newCase.caseNumber;
        D.editedItem.disposalNotes = 'Disposed_through_Importer'
        let CoC_newItemEntry = S.chainOfCustody.SAFE.newItemEntry;
        let CoC_disposal = S.chainOfCustody.SAFE.disposal(orgAdmin, D.editedItem);

        cy.getLocalStorage("newItem").then(newItem => {
            D.editedItem.barcode = JSON.parse(newItem).barcode;
            E.generateDataFor_ITEMS_Importer([D.editedItem], null);
            cy.generate_excel_file(fileName, E.itemImportDataWithAllFields);
            ui.menu.click_Tools__Data_Import();
            ui.importer.upload_then_Map_and_Submit_file_for_Item_Updates_import(fileName)
                .verify_toast_message([
                    C.toastMsgs.importComplete,
                    1 + C.toastMsgs.recordsImported]);
            let allEditedFields = C.itemFields.allEditableFieldsArray.concat(['Case', 'Status', 'Storage Location'])
            ui.itemView.open_newly_created_item_via_direct_link()
                .verify_edited_and_not_edited_values_on_Item_View_form(allEditedFields, D.editedItem, D.newItem, true, true)
                .click_Edit()
                .verify_edited_and_not_edited_values_on_Item_Edit_form(allEditedFields, D.editedItem, D.newItem, true, true)
                .select_tab(C.tabs.chainOfCustody)
                .verify_content_of_sequential_rows_in_results_table([
                    CoC_disposal,
                    CoC_newItemEntry
                ])
                .open_last_history_record()
                .verify_all_values_on_history(D.editedItem, D.newItem)
                .verify_red_highlighted_history_records(allEditedFields)
                .click_button_on_modal(C.buttons.cancel);
        });
    });

    it('5. Import update for item status (Undispose transaction)', function () {
        ui.app.log_title(this);
        let fileName = 'ItemUpdatesImport_Undispose_' + S.domain;

        api.auth.get_tokens(orgAdmin);
        api.org_settings.enable_all_Item_fields();
        D.generateNewDataSet();
        D.getEditedItemData(S.selectedEnvironment.oldActiveCase)
        api.cases.add_new_case();

        // set 'true' as parameter in the next line when the issue in the following card gets fixed : '[Importer] ‘Error updating items in Elastic Search’ when performing ‘CheckIn/Undispose’ transaction'
        api.items.add_new_item(false);
        api.transactions.dispose_item();

        D.getDisposedItemData(D.editedItem)
        D.getCheckedInItemData(S.selectedEnvironment.locations[1])
        D.newItem.location = '';
        D.newItem.status = 'Disposed';
        D.editedItem.status = 'Checked In';
        let CoC_newItemEntry = S.chainOfCustody.SAFE.newItemEntry;
        let CoC_disposal = S.chainOfCustody.SAFE.disposal(D.editedItem);
        let CoC_undispose = S.chainOfCustody.SAFE.checkin(D.editedItem);

        cy.getLocalStorage("newItem").then(newItem => {
            D.editedItem.barcode = JSON.parse(newItem).barcode
            E.generateDataFor_ITEMS_Importer([D.editedItem], null);
            cy.generate_excel_file(fileName, E.itemImportDataWithAllFields);
            ui.menu.click_Tools__Data_Import();
            ui.importer.upload_then_Map_and_Submit_file_for_Item_Updates_import(fileName)
                .verify_toast_message([
                    C.toastMsgs.importComplete,
                    1 + C.toastMsgs.recordsImported]);
            let allEditedFields = C.itemFields.allEditableFieldsArray.concat(['Case', 'Status', 'Storage Location'])
            ui.itemView.open_newly_created_item_via_direct_link()
                .verify_edited_and_not_edited_values_on_Item_View_form(allEditedFields, D.editedItem, D.newItem, true, true)
                .click_Edit()
                .verify_edited_and_not_edited_values_on_Item_Edit_form(allEditedFields, D.editedItem, D.newItem, true, true)
                .select_tab(C.tabs.chainOfCustody)
                .verify_content_of_sequential_rows_in_results_table([
                    CoC_undispose,
                    CoC_disposal,
                    CoC_newItemEntry
                ])
                .open_last_history_record()
                // uncomment the lines below when bug gets fixed in card #14769 /5
                // .verify_all_values_on_history(D.editedItem, D.newItem, false)
               // .verify_red_highlighted_history_records(allEditedFields)
        });
    });

    it('6. Import update for item status (CheckIn transaction)', function () {
        ui.app.log_title(this);
        let fileName = 'ItemUpdatesImport_CheckIn_' + S.domain;

        api.auth.get_tokens(orgAdmin);
        api.org_settings.enable_all_Item_fields();
        D.generateNewDataSet();
        D.getEditedItemData(S.selectedEnvironment.oldActiveCase)
        api.cases.add_new_case();

        // set 'true' as a first parameter in the next line when the issue in the following card gets fixed : '[Importer] ‘Error updating items in Elastic Search’ when performing ‘CheckIn/Undispose’ transaction'
        api.items.add_new_item(false, null,);
        api.transactions.check_out_item();

        D.newItem.location = '';
        D.newItem.status = 'Checked Out';
        // let editedItem = Object.assign({}, D.newItem)
        D.editedItem.status = 'Checked In';
        let CoC_newItemEntry = S.chainOfCustody.SAFE.newItemEntry;
        let CoC_checkin = S.chainOfCustody.SAFE.checkin(D.editedItem);

        cy.getLocalStorage("newItem").then(newItem => {
            D.editedItem.barcode = JSON.parse(newItem).barcode
            E.generateDataFor_ITEMS_Importer([D.editedItem], null);
            cy.generate_excel_file(fileName, E.itemImportDataWithAllFields);
            ui.menu.click_Tools__Data_Import();
            ui.importer.upload_then_Map_and_Submit_file_for_Item_Updates_import(fileName).verify_toast_message([
                C.toastMsgs.importComplete,
                1 + C.toastMsgs.recordsImported]);
            let allEditedFields = C.itemFields.allEditableFieldsArray.concat(['Case', 'Status', 'Storage Location'])
            ui.itemView.open_newly_created_item_via_direct_link()
                .verify_edited_and_not_edited_values_on_Item_View_form(allEditedFields, D.editedItem, D.newItem, true, true)
                .click_Edit()
                .verify_edited_and_not_edited_values_on_Item_Edit_form(allEditedFields, D.editedItem, D.newItem, true, true)
                .select_tab(C.tabs.chainOfCustody)
                .verify_content_of_sequential_rows_in_results_table([
                    CoC_checkin,
                    CoC_newItemEntry
                ])
                .open_last_history_record()
            // uncomment the lines below when bug gets fixed in card #14769 /5
            // .verify_all_values_on_history(D.editedItem, D.newItem, false)
            // .verify_red_highlighted_history_records(allEditedFields)
        });
    });

    it('7. Item Updates Import - Precheck Only', function () {
        ui.app.log_title(this);
        let fileName = 'ItemUpdates_precheckOnly_' + S.domain;

        api.auth.get_tokens(orgAdmin);
        api.org_settings.enable_all_Item_fields();
        D.generateNewDataSet();
        api.cases.add_new_case(D.newCase.caseNumber);
        D.editedItem.caseNumber = D.newCase.caseNumber
        api.items.add_new_item(true)

        cy.getLocalStorage("newItem").then(newItem => {
            D.editedItem.barcode = JSON.parse(newItem).barcode
            E.generateDataFor_ITEMS_Importer([D.editedItem], null);
            cy.generate_excel_file(fileName, E.itemImportDataWithAllFields);
            ui.menu.click_Tools__Data_Import();
            ui.importer.upload_then_Map_and_Submit_file_for_updates_precheck(fileName, C.importTypes.items, 'ItemBarcode')
                .verify_toast_message([
                    C.toastMsgs.precheckComplete,
                    1 + C.toastMsgs.recordsPrechecked]);
            ui.app.open_newly_created_item_via_direct_link()
                .click_button(C.buttons.edit);
            ui.itemView.verify_values_on_Edit_form(D.newItem);
        });
    });

});
