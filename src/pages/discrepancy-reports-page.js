let helper = require('../support/e2e-helper');
let C = require('../fixtures/constants');
import BasePage from "./base-pages/base-page";

//************************************ ELEMENTS ***************************************//

let
    nameInput = e => cy.findByPlaceholderText('Name for the report.'),
    scanBarcodeInput = e => cy.findByPlaceholderText('Scan barcode.'),
    enterBarcodeButton = e => cy.findByText('Enter Barcode'),
    scannedBarcodesSection = e => cy.get('#barcode'),
    locationBarcodesSection = e => cy.get('#locations'),
    storageLocationInput = e => cy.findByPlaceholderText('Please scan or enter the bardcode of the location you would like to audit.')

export default class DiscrepancyReportsPage extends BasePage {

    constructor() {
        super()
    }

    //************************************ ACTIONS ***************************************//

    start_report(name, locationBarcode) {
        nameInput().type(name)
        storageLocationInput().type(locationBarcode)
        this.click_button(C.buttons.start)
        return this;
    };

    verify_summary_table(totalActiveItems, locationsScanned, itemsScanned, discrepanciesFound) {
        this.verify_content_of_specific_cell_in_first_table_row(C.labels.discrepancyReports.summaryTableColumns.totalActiveItems, totalActiveItems)
        this.verify_content_of_specific_cell_in_first_table_row(C.labels.discrepancyReports.summaryTableColumns.locationsScanned, locationsScanned)
        this.verify_content_of_specific_cell_in_first_table_row(C.labels.discrepancyReports.summaryTableColumns.itemsScanned, itemsScanned)
        this.verify_content_of_specific_cell_in_first_table_row(C.labels.discrepancyReports.summaryTableColumns.discrepanciesFound, discrepanciesFound)
        return this;
    };

    enter_barcode(barcode, isLocationBarcode = false) {
        scanBarcodeInput().type(barcode);
        enterBarcodeButton().click();

        if (isLocationBarcode) {
            this.verify_element_does_NOT_contain_text(scannedBarcodesSection, barcode)
            this.verify_text(locationBarcodesSection, barcode)
            this.verify_toast_message(C.toastMsgs.locationChanged)
        } else {
            this.verify_text(scannedBarcodesSection, barcode)
            this.verify_specific_toast_message_is_NOT_visible(C.toastMsgs.locationChanged)
        }
        return this;
    };


}
