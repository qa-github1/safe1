const C = require('../../fixtures/constants');
const S = require('../../fixtures/settings');
const D = require('../../fixtures/data');
const E = require('../../fixtures/files/excel-data');
const api = require('../../api-utils/api-spec');
const ui = require('../../pages/ui-spec');
const {parentLocation1} = require("../../fixtures/files/excel-data");

let user = S.getUserData(S.userAccounts.orgAdmin);

describe('Import Locations', function () {

    before(function () {
        api.auth.get_tokens(user);
    });

    after(function () {
        api.auth.get_tokens(user);
        api.locations.get_and_save_any_location_data_to_local_storage('root')
        api.locations.update_location('parent', 'root')
        api.locations.update_location('child1', 'root')
        api.locations.update_location('child2', 'root')
 })

    it('1 Import Locations with all fields', function () {
        ui.app.log_title(this);
        let fileName = 'LocationsImport_allFields_' + S.domain;
        api.auth.get_tokens(user);

        E.generateDataFor_LOCATIONS_Importer(3);
        ui.app.generate_excel_file(fileName, E.locationsImportAllFields);

        ui.menu.click_Tools__Data_Import();
        ui.importer.upload_then_Map_and_Submit_file_for_importing(fileName, C.importTypes.locations)
            .verify_toast_message([
                C.toastMsgs.importComplete,
                3 + C.toastMsgs.recordsImported])

        ui.menu.click__Storage_Locations()
            .verify_text_is_present_on_main_container(E.parentLocation1.name)
            .verify_text_is_NOT_present_on_main_container(E.childLocation1.name)
            .verify_text_is_NOT_present_on_main_container(E.childLocation2.name)
        ui.storageLocations.expand_Location(E.parentLocation1.name)
            .verify_text_is_present_on_main_container(E.childLocation1.name)
            .verify_text_is_NOT_present_on_main_container(E.childLocation2.name)
        ui.storageLocations.expand_Location(S.selectedEnvironment.locations[0].name)
            .verify_text_is_present_on_main_container(E.childLocation1.name)
            .verify_text_is_NOT_present_on_main_container(E.childLocation2.name)
        ui.storageLocations.verify_location_properties(E.parentLocation1)
        ui.storageLocations.verify_location_properties(E.childLocation2)
    });

    it('2 Import Locations with required fields - verify default properties', function () {
        ui.app.log_title(this);
        let fileName = 'LocationsImport_requiredFields_' + S.domain;
        api.auth.get_tokens(user);
        E.generateDataFor_LOCATIONS_Importer(0);
        E.parentLocation1.legacyBarcode = '';
        E.setLocationImportStructure(1);

        ui.app.generate_excel_file(fileName, E.locationsImportRequiredFields);

        ui.menu.click_Tools__Data_Import();
        ui.importer.upload_then_Map_and_Submit_file_for_importing(fileName, C.importTypes.locations)
            .verify_toast_message([
                C.toastMsgs.importComplete,
                1 + C.toastMsgs.recordsImported])

        ui.menu.click__Storage_Locations()
            .verify_text_is_present_on_main_container(E.parentLocation1.name)
        ui.storageLocations.verify_location_properties(E.parentLocation1)
    });

    it('3 Import Locations - Precheck Only', function () {
        ui.app.log_title(this);
        let fileName = 'LocationsImport_precheckOnly_'+ S.domain;
        let user = S.userAccounts.orgAdmin;
        api.auth.get_tokens(user);
        E.generateDataFor_LOCATIONS_Importer(3);
        ui.app.generate_excel_file(fileName, E.locationsImportAllFields);

        ui.menu.click_Tools__Data_Import();
        ui.importer.upload_then_Map_and_Submit_file_for_precheck(fileName, C.importTypes.locations)
            .verify_toast_message([
                C.toastMsgs.precheckComplete,
                3 + C.toastMsgs.recordsPrechecked]);
        ui.menu.click__Storage_Locations()
            .verify_text_is_present_on_main_container(S.selectedEnvironment.locations[0].name)
            .verify_text_is_NOT_present_on_main_container(E.parentLocation1.name)
    });
});
