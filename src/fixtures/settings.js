const S = exports;
const C = require('./constants');
const accounts = require('./user-accounts');
const helper = require('../support/e2e-helper');

S.domain = Cypress.env('domain')
S.base_url = Cypress.env('baseUrl')
S.api_url = Cypress.env('apiUrl')
S.orgNum = Cypress.env('orgNum')

S.currentDateAndTime = helper.getCurrentDateInCurrentFormat(C.currentDateTimeFormat);
S.currentDate = helper.getCurrentDateInCurrentFormat(C.currentDateFormat);
S.tomorrowsDate = helper.tomorrowsDate(C.currentDateTimeFormat);
S.yesterdaysDate = helper.yesterdaysDate(C.currentDateTimeFormat);

S.isOrg1 = function () {
    return Cypress.env('orgNum') === 1
}

S.isOrg2 = function () {
    return Cypress.env('orgNum') === 2
}

S.getCurrentDate = function (mask) {
    S.currentDateAndTime = helper.getCurrentDateInCurrentFormat(C.currentDateTimeFormat);
    S.currentDate = helper.getCurrentDateInCurrentFormat(C.currentDateFormat);
    return helper.getCurrentDateInSpecificFormat(mask)
};

S.getCurrentDate();
S.getYesterdaysDate = function (mask) {
    return helper.getYesterdaysDateInSpecificFormat(mask)
};
S.getDateBeforeXDaysInSpecificFormat = function (mask, daysBeforeTheCurrentDate) {
    return helper.getDateBeforeXDaysInSpecificFormat(mask, daysBeforeTheCurrentDate)
};
S.base_url = Cypress.config('baseUrl')
S.currentUrl = null;
S.selectedOfficeId = 1;
S.selectedorganizationId = 1;
S.passwordPattern = 'mmm/dd/yyyy';
S.userRoles = accounts.userRoles;

S.headers = {
    'Content-Type': 'application/json',
    officeid: '1',
    organizationid: '1',
    authorization: null,
    refreshtoken: null,
};

S.QA = {
    org2: {
        id: 1,
        orgName: "Tracker HQ",
        officeId: 1,
        officeName: "Main",
        orgAndOfficeName: "Tracker HQ - Main"
    },
    // user from Org#2
    org2Admin: {
        id: 39,
        guid: '54f39f56-03d9-eb11-82f2-068f48eb83b1',
        organizationId: 4,
        officeId: 13
    },
    fieldIds: {
        case: {
            offenseLocation: 1,
            offenseDescription: 2,
            tags: 3,
            offenseDate: 4
        },
        item: {
            recoveredAt: 5,
            custodyReason: 6,
            recoveredBy: 7,
            make: 8,
            model: 9,
            serialNumber: 10,
            tags: 11,
            description: 12,
            recoveryDate: 13,
            itemBelongsTo: 14,
            barcodes: 15,
            expectedReturnDate: 16,
            actualDisposedDate: 17,
        },
        person: {
            businessName: 18,
            middleName: 19,
            alias: 20,
            dob: 21,
            driverLicense: 22,
            race: 23,
            gender: 24,
            mobilePhone: 25,
            otherPhone: 26,
            deceased: 27,
            juvenile: 28,
            email: 29,
            address: 30,
        }
    },
    caseOfficerId: () => S.userAccounts.powerUser.id,
    offenseType: {
        name: C.offenseTypes.burglary,
        id: 77
    },
    offenseType2: {
        name: C.offenseTypes.arson,
        id: 33
    },
    offenseTypelinkedToRequiredForm1: {
        name: C.offenseTypes.vandalism,
        id: 0
    },
    offenseTypelinkedToRequiredForm2: {
        name: C.offenseTypes.accident,
        id: 0
    },
    category: {
        name: C.itemCategories.alcohol,
        id: 12
    },
    category2: {
        name: C.itemCategories.computer,
        id: 108
    },
    categorylinkedToRequiredForm1: {
        name: C.itemCategories.vehicle,
        id: 0
    },
    categorylinkedToRequiredForm2: {
        name: C.itemCategories.ammunition,
        id: 0
    },
    custodyReason: {
        name: C.custodyReason.asset,
        id: 8
    },
    custodyReason2: {
        name: C.custodyReason.investigation,
        id: 54
    },
    checkoutReason: {
        name: C.checkoutReasons.court,
        id: 13
    },
    checkoutReason2: {
        name: C.checkoutReasons.lab,
        id: 39
    },
    personType: {
        name: C.personTypes.suspect,
        id: 145
    },
    personType2: {
        name: C.personTypes.victim,
        id: 142
    },
    personTypelinkedToRequiredForm1: {
        name: C.personTypes.wife,
        id: 0
    },
    personTypelinkedToRequiredForm2: {
        name: C.personTypes.witness,
        id: 0
    },
    race: {
        name: C.races.asian,
        id: 4
    },
    race2: {
        name: C.races.hispanic,
        id: 7
    },
    caseCustomForm: {
        name: "Cypress Case Form",
        id: 28,
        checkboxListId: "field2094",
        radioButtonListId: "field2096",
        selectListId: "field2098",
        number: "field2071",
        password: "field2088",
        textbox: "field5746",
        email: "field2069",
        textarea: "field3227",
        checkbox: "field2092",
        date: "field2104",
        user: "field2100",
        person: "field2102",
    },
    // need to modify some other shared Item form and adjust data here
    itemCustomForm: {
        name: "Cypress Item Form",
        id: 2,
        checkboxListId: "field2295",
        radioButtonListId: "field2297",
        selectListId: "field2299",
        number: "field2287",
        password: "field2289",
        textbox: "field2283",
        email: "field2285",
        textarea: "field2291",
        checkbox: "field2293",
        date: "field2305",
        user: "field2301",
        person: "field2303",
    },
};

S.QA_1 = {
    orgSettings: {
        id: 3,
        name: 'Web Test Automation #1',
        guid: '42cd7f0a-dbd8-eb11-82f2-068f48eb83b1'
    },
    office_1: {
        id: 12,
        guid: '43cd7f0a-dbd8-eb11-82f2-068f48eb83b1',
        name: "Cypress Office 1",
        get orgAndOfficeName() {
            return S.QA_1.orgSettings.name + ' - ' + S.QA_1.office_1.name
        }
    },
    office_2: {},
    org2: {
        office_1: {
            id: 13,
            guid: '4111b114-dbd8-eb11-82f2-068f48eb83b1',
            name: "Cypress Office1",
            orgAndOfficeName: "Web Test Automation #2 - Cypress Office1"
        },
        id: 4,
        orgName: "Web Test Automation #2",
        officeId: 13,
        officeName: " Cypress Office1",
        orgAndOfficeName: "Web Test Automation #2 - Cypress Office1"
    },
    locations: [
        {
            id: 421,
            guid: '82833365-916f-4777-b726-ae6b59d622ec',
            name: "CypressLocation1"
        },
        {
            id: 422,
            guid: 'b4ab4199-f9d6-4490-8e55-afe117d2c49a',
            name: "CypressLocation2"
        }],
    users: {
        systemAdmin: {
            id: 35,
            guid: '477397a0-dbd8-eb11-82f2-068f48eb83b1',
            organizationId: 1,
            officeId: 1
        },
        orgAdmin: {
            id: 1321,
            guid: 'ecb9066b-6090-ed11-833a-0254a7906fb1'
        },
        powerUser: {
            id: 1322,
            guid: 'bcc373aa-d790-ed11-833a-0254a7906fb1'
        },
        // basic user should be corrected for QA1 (it was copied from Pentest just to fill missing reference
        basicUser: {
            id: 43530,
            guid: '2af70873-db6f-ed11-832d-021f02b7478f'
        },
        clpUser: {
            id: 38,
            guid: '77f14214-e5d8-eb11-82f2-068f48eb83b1'
        },
    },
    caseForReport: {
        id: null,
    },
    itemForReport: {
        id: null,
        descrption: ''
    },
    personForReport: {
        id: null,
    },
    oldClosedCase: {
        id: 202566,
        caseNumber: 'TestCase1',
        createdDate: '01/10/22',
        offenseDate: '01/03/23',
        reviewDate: '04/20/23',
        closedDate: '01/11/23',
    },
    oldActiveCase: {
        id: 202569,
        caseNumber: 'AutomatedTest-Active Case',
        createdDate: '01/10/23',
        offenseDate: '01/02/23',
        reviewDate: '04/20/23'
    },
    recentCase: {
        id: 76,
        caseNumber: 'Test Case 1'
    },
    person: {
        name: 'Person_1',
        fullName: 'Cypress Person_1',
        id: 56,
        get organizationId() {
            return S.QA_1.orgSettings.id
        },
        userId: null,
        guid: 'dac05e95-ac87-4480-b332-c137a4b47c43',
        email: 'qa+person_1@trackerproducts.com'
    },
    person_2: {
        name: 'Person_2',
        fullName: 'Cypress Person_2',
        id: 57,
        organizationId: () => S.QA_1.orgSettings.id,
        userId: null,
        guid: '2a709a9a-2ca9-41ff-a6ac-3dafcf8e3808',
        email: 'qa+person_2@trackerproducts.com'
    },
    recoveredById: () => S.QA_1.person.id,
    caseOfficerId: () => S.userAccounts.powerUser.id,
    offenseType: {
        name: C.offenseTypes.burglary,
        id: 77
    },
    offenseType2: {
        name: C.offenseTypes.arson,
        id: 33
    },
    category: {
        name: C.itemCategories.alcohol,
        id: 12
    },
    category2: {
        name: C.itemCategories.computer,
        id: 108
    },
    custodyReason: {
        name: C.custodyReason.asset,
        id: 8
    },
    custodyReason2: {
        name: C.custodyReason.investigation,
        id: 54
    },
    checkoutReason: {
        name: C.checkoutReasons.court,
        id: 13
    },
    checkoutReason2: {
        name: C.checkoutReasons.lab,
        id: 39
    },
    personType: {
        name: C.personTypes.suspect,
        id: 145
    },
    personType2: {
        name: C.personTypes.victim,
        id: 142
    },
    race: {
        name: C.races.asian,
        id: 4
    },
    race2: {
        name: C.races.hispanic,
        id: 7
    },
    caseCustomForm: {
        name: "Cypress Case Form",
        id: 32,
        checkboxListId: "field3231",
        radioButtonListId: "field3233",
        selectListId: "field3235",
        number: "field3223",
        password: "field3225",
        textbox: "field3219",
        email: "field3221",
        textarea: "field3227",
        checkbox: "field3229",
        date: "field3241",
        user: "field3237",
        person: "field3239",
    },
    itemCustomForm: {
        name: "Cypress Item Form",
        id: 33,
        checkboxListId: "field3291",
        radioButtonListId: "field3293",
        selectListId: "field3295",
        number: "field3283",
        password: "field3285",
        textbox: "field3279",
        email: "field3281",
        textarea: "field3287",
        checkbox: "field3289",
        date: "field3301",
        user: "field3297",
        person: "field3299",
    },
    admin_permissionGroup: {
        name: 'Cypress - ADMIN',
        id: 22,
        startingIndexForViewPermissions: 528,
        get startingIndexForCreatePermissions() {
            return S.QA_1.admin_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.QA_1.admin_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.QA_1.admin_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    blocked_permissionGroup: {
        name: 'Cypress - Blocked',
        id: 23,
        startingIndexForViewPermissions: 573,
        get startingIndexForCreatePermissions() {
            return S.QA_1.blocked_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.QA_1.blocked_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.QA_1.blocked_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    readOnly_permissionGroup: {
        name: 'Cypress - ReadOnly',
        id: 24,
        startingIndexForViewPermissions: 618,
        get startingIndexForCreatePermissions() {
            return S.QA_1.readOnly_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.QA_1.readOnly_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.QA_1.readOnly_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    admin_userGroup: {
        name: 'Cypress Admin Group',
        id: 3
    },
    blocked_userGroup: {
        name: 'Cypress Blocked Group',
        id: 4
    },
    readOnly_userGroup: {
        name: 'Cypress ReadOnly Group',
        id: 5
    },
};

S.QA_2 = {
    orgSettings: {
        id: 4,
        name: 'Web Test Automation #2',
        guid: '4011b114-dbd8-eb11-82f2-068f48eb83b1'
    },
    office_1: {
        id: 13,
        guid: '4111b114-dbd8-eb11-82f2-068f48eb83b1',
        name: "Cypress Office 1",
        get orgAndOfficeName() {
            return S.QA_2.orgSettings.name + ' - ' + S.QA_2.office_1.name
        }
    },
    office_2: {},
    locations: [
        {
            id: 56,
            guid: '4211b114-dbd8-eb11-82f2-068f48eb83b1',
            name: "root"
        },
        {
            id: 61,
            guid: 'f461f227-e3d8-eb11-82f2-068f48eb83b1',
            name: "CypressLocation1"
        }],
    users: {
        systemAdmin: {
            id: 35,
            guid: '477397a0-dbd8-eb11-82f2-068f48eb83b1',
            organizationId: 1,
            officeId: 1
        },
        orgAdmin: {
            id: 39,
            guid: '54f39f56-03d9-eb11-82f2-068f48eb83b1'
        },
        powerUser: {
            id: 40,
            guid: 'aab75165-03d9-eb11-82f2-068f48eb83b1'
        },
        clpUser: {
            id: 41,
            guid: 'e8fbe19b-03d9-eb11-82f2-068f48eb83b1'
        },
    },
    caseForReport: {
        id: null,
    },
    itemForReport: {
        id: null,
        descrption: ''
    },
    personForReport: {
        id: null,
    },
    oldClosedCase: {
        id: 78,
        caseNumber: 'Test Case 1'
    },
    recentCase: {
        id: 78,
        caseNumber: 'Test Case 1'
    },
    person: {
        name: 'Person_1',
        fullName: 'Cypress Person_1',
        id: 62,
        get organizationId() {
            return S.QA_2.orgSettings.id
        },
        userId: null,
        guid: 'd2f64702-feea-4688-9cb1-9acc0686be41',
        email: 'qa+person_1@trackerproducts.com'
    },
    person_2: {
        name: 'Person_2',
        fullName: 'Cypress Person_2',
        id: 63,
        organizationId: () => S.QA_2.orgSettings.id,
        userId: null,
        guid: '941a1ff1-8147-4023-9ab8-9e5a175acb15',
        email: 'qa+person_2@trackerproducts.com'
    },
    recoveredById: () => S.QA_2.person.id,
    admin_permissionGroup: {
        name: 'Cypress - ADMIN',
        id: 25,
        startingIndexForViewPermissions: 663,
        get startingIndexForCreatePermissions() {
            return S.QA_2.admin_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.QA_2.admin_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.QA_2.admin_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    blocked_permissionGroup: {
        name: 'Cypress - Blocked',
        id: 26,
        startingIndexForViewPermissions: 708,
        get startingIndexForCreatePermissions() {
            return S.QA_2.blocked_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.QA_2.blocked_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.QA_2.blocked_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    readOnly_permissionGroup: {
        name: 'Cypress - ReadOnly',
        id: 27,
        startingIndexForViewPermissions: 753,
        get startingIndexForCreatePermissions() {
            return S.QA_2.readOnly_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.QA_2.readOnly_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.QA_2.readOnly_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    admin_userGroup: {
        name: 'Cypress Admin Group',
        id: 6
    },
    blocked_userGroup: {
        name: 'Cypress Blocked Group',
        id: 7
    },
    readOnly_userGroup: {
        name: 'Cypress ReadOnly Group',
        id: 8
    },
};

S.QA_3 = {
    orgSettings: {
        id: 5,
        name: 'Web Test Automation #3',
        guid: 'd1fe3d1e-dbd8-eb11-82f2-068f48eb83b1'
    },
    office_1: {
        id: 14,
        guid: 'd2fe3d1e-dbd8-eb11-82f2-068f48eb83b1',
        name: "Cypress Office 1",
        get orgAndOfficeName() {
            return S.QA_3.orgSettings.name + ' - ' + S.QA_3.office_1.name
        }
    },
    office_2: {},
    locations: [
        {
            id: 57,
            guid: 'd3fe3d1e-dbd8-eb11-82f2-068f48eb83b1',
            name: "root"
        },
        {
            id: 64,
            guid: 'd3fe3d1e-dbd8-eb11-82f2-068f48eb83b1',
            name: "CypressLocation1"
        }],
    users: {
        systemAdmin: {
            id: 35,
            guid: '477397a0-dbd8-eb11-82f2-068f48eb83b1',
            organizationId: 1,
            officeId: 1
        },
        orgAdmin: {
            id: 42,
            guid: 'c85f9542-8fd9-eb11-82f2-068f48eb83b1'
        },
        powerUser: {
            id: 43,
            guid: 'b56d5062-8fd9-eb11-82f2-068f48eb83b1'
        },
        clpUser: {
            id: 44,
            guid: '9d5a5476-8fd9-eb11-82f2-068f48eb83b1'
        },
    },
    caseForReport: {
        id: null,
    },
    itemForReport: {
        id: null,
        descrption: ''
    },
    personForReport: {
        id: null,
    },
    oldClosedCase: {
        id: 87,
        caseNumber: 'Test Case 1'
    },
    recentCase: {
        id: 87,
        caseNumber: 'Test Case 1'
    },
    person: {
        name: 'Person_1',
        fullName: 'Cypress Person_1',
        id: 67,
        get organizationId() {
            return S.QA_3.orgSettings.id
        },
        userId: null,
        guid: '40afa8bd-bb87-49e0-8717-48768ad3a1fb',
        email: 'qa+person_1@trackerproducts.com'
    },
    person_2: {
        name: 'Person_2',
        fullName: 'Cypress Person_2',
        id: 68,
        organizationId: () => S.QA_3.orgSettings.id,
        userId: null,
        guid: '266f1941-3c19-4e9b-a4a8-50a2d78258ce',
        email: 'qa+person_2@trackerproducts.com'
    },
    recoveredById: () => S.QA_3.person.id,
    admin_permissionGroup: {
        name: 'Cypress - ADMIN',
        id: 28,
        startingIndexForViewPermissions: 798,
        get startingIndexForCreatePermissions() {
            return S.QA_3.admin_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.QA_3.admin_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.QA_3.admin_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    blocked_permissionGroup: {
        name: 'Cypress - Blocked',
        id: 29,
        startingIndexForViewPermissions: 843,
        get startingIndexForCreatePermissions() {
            return S.QA_3.blocked_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.QA_3.blocked_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.QA_3.blocked_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    readOnly_permissionGroup: {
        name: 'Cypress - ReadOnly',
        id: 30,
        startingIndexForViewPermissions: 888,
        get startingIndexForCreatePermissions() {
            return S.QA_3.readOnly_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.QA_3.readOnly_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.QA_3.readOnly_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    admin_userGroup: {
        name: 'Cypress Admin Group',
        id: 9
    },
    blocked_userGroup: {
        name: 'Cypress Blocked Group',
        id: 10
    },
    readOnly_userGroup: {
        name: 'Cypress ReadOnly Group',
        id: 11
    },
};

S.QA_4 = {
    orgSettings: {
        id: 6,
        name: 'Web Test Automation #4',
        guid: 'c557d528-dbd8-eb11-82f2-068f48eb83b1'
    },
    office_1: {
        id: 15,
        guid: 'c657d528-dbd8-eb11-82f2-068f48eb83b1',
        name: "Cypress Office 1",
        get orgAndOfficeName() {
            return S.QA_4.orgSettings.name + ' - ' + S.QA_4.office_1.name
        }
    },
    office_2: {},
    locations: [
        {
            id: 58,
            guid: 'c757d528-dbd8-eb11-82f2-068f48eb83b1',
            name: "root"
        },
        {
            id: 65,
            guid: 'c757d528-dbd8-eb11-82f2-068f48eb83b1',
            name: "CypressLocation1"
        }],
    users: {
        systemAdmin: {
            id: 35,
            guid: '477397a0-dbd8-eb11-82f2-068f48eb83b1',
            organizationId: 1,
            officeId: 1
        },
        orgAdmin: {
            id: 45,
            guid: 'd5c869fd-d3d9-eb11-82f2-068f48eb83b1'
        },
        powerUser: {
            id: 46,
            guid: '9088b321-d4d9-eb11-82f2-068f48eb83b1'
        },
        clpUser: {
            id: 47,
            guid: '09cfdf33-d4d9-eb11-82f2-068f48eb83b1'
        },
        basicUser: {
            id: 43530,
            guid: '2af70873-db6f-ed11-832d-021f02b7478f'
        },
    },
    caseForReport: {
        id: null,
    },
    itemForReport: {
        id: null,
        descrption: ''
    },
    personForReport: {
        id: null,
    },
    oldClosedCase: {
        id: 104,
        caseNumber: 'Test Case 1'
    },
    recentCase: {
        id: 104,
        caseNumber: 'Test Case 1'
    },
    person: {
        name: 'Person_1',
        fullName: 'Cypress Person_1',
        id: 77,
        get organizationId() {
            return S.QA_4.orgSettings.id
        },
        userId: null,
        guid: 'a57225e6-5e5c-4222-a61d-760f2a068fe5',
        email: 'qa+person_1@trackerproducts.com'
    },
    person_2: {
        name: 'Person_2',
        fullName: 'Cypress Person_2',
        id: 78,
        organizationId: () => S.QA_4.orgSettings.id,
        userId: null,
        guid: '4a699c9d-6b9e-414e-a611-57e4e8ab32f6',
        email: 'qa+person_2@trackerproducts.com'
    },
    recoveredById: () => S.QA_3.person.id,
    admin_permissionGroup: {
        name: 'Cypress - ADMIN',
        id: 31,
        startingIndexForViewPermissions: 933,
        get startingIndexForCreatePermissions() {
            return S.QA_4.admin_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.QA_4.admin_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.QA_4.admin_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    blocked_permissionGroup: {
        name: 'Cypress - Blocked',
        id: 32,
        startingIndexForViewPermissions: 978,
        get startingIndexForCreatePermissions() {
            return S.QA_4.blocked_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.QA_4.blocked_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.QA_4.blocked_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    readOnly_permissionGroup: {
        name: 'Cypress - ReadOnly',
        id: 33,
        startingIndexForViewPermissions: 1023,
        get startingIndexForCreatePermissions() {
            return S.QA_4.readOnly_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.QA_4.readOnly_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.QA_4.readOnly_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    admin_userGroup: {
        name: 'Cypress Admin Group',
        id: 12
    },
    blocked_userGroup: {
        name: 'Cypress Blocked Group',
        id: 13
    },
    readOnly_userGroup: {
        name: 'Cypress ReadOnly Group',
        id: 14
    },
};

S.QA_1 = {...S.QA, ...S.QA_1};

S.QA_2 = {...S.QA, ...S.QA_2};

S.QA_3 = {...S.QA, ...S.QA_3};

S.QA_4 = {...S.QA, ...S.QA_4};

S.PENTEST = {
    // user from Org#2
    org2Admin: {
        id: 39,
        guid: '54f39f56-03d9-eb11-82f2-068f48eb83b1',
        organizationId: 4,
        officeId: 13
    },
    fieldIds: {
        case: {
            offenseLocation: 29,
            offenseDescription: 30,
            tags: 31,
            offenseDate: 34
        },
        item: {
            recoveredAt: 20,
            custodyReason: 21,
            recoveredBy: 23,
            make: 24,
            model: 25,
            serialNumber: 26,
            barcodes: 27,
            tags: 28,
            description: 36,
            recoveryDate: 37,
            itemBelongsTo: 38,
            expectedReturnDate: 41,
            actualDisposedDate: 42,
        },
        person: {
            businessName: 9,
            middleName: 10,
            alias: 11,
            dob: 12,
            driverLicense: 13,
            race: 14,
            gender: 15,
            mobilePhone: 16,
            otherPhone: 17,
            deceased: 18,
            juvenile: 19,
            email: 39,
            address: 40,
        },
    },
    caseOfficerId: () => S.userAccounts.powerUser.id,
    offenseType: {
        name: C.offenseTypes.burglary,
        id: 4
    },
    offenseType2: {
        name: C.offenseTypes.arson,
        id: 2
    },
    offenseTypelinkedToRequiredForm1: {
        name: C.offenseTypes.vandalism,
        id: 28
    },
    offenseTypelinkedToRequiredForm2: {
        name: C.offenseTypes.accident,
        id: 158
    },
    category: {
        name: C.itemCategories.alcohol,
        id: 31
    },
    categorylinkedToRequiredForm1: {
        name: C.itemCategories.vehicle,
        id: 22
    },
    categorylinkedToRequiredForm2: {
        name: C.itemCategories.ammunition,
        id: 2
    },
    category2: {
        name: C.itemCategories.computer,
        id: 26
    },
    custodyReason: {
        name: C.custodyReason.asset,
        id: 7
    },
    custodyReason2: {
        name: C.custodyReason.investigation,
        id: 10
    },
    checkoutReason: {
        name: C.checkoutReasons.court,
        id: 1
    },
    checkoutReason2: {
        name: C.checkoutReasons.lab,
        id: 11
    },
    disposalMethod: {
        name: C.disposalMethods.auctioned,
        id: 4
    },
    disposalMethod2: {
        name: C.disposalMethods.destroyed,
        id: 2
    },
    personType: {
        name: C.personTypes.suspect,
        id: 1
    },
    personTypelinkedToRequiredForm1: {
        name: C.personTypes.wife,
        id: 813
    },
    personTypelinkedToRequiredForm2: {
        name: C.personTypes.witness,
        id: 3
    },
    personType2: {
        name: C.personTypes.victim,
        id: 2
    },
    titleRank: {
        name: 'Police Officer',
        id: 1
    },
    titleRank2: {
        name: 'Deputy Chief',
        id: 7
    },
    race: {
        name: C.races.asian,
        id: 4
    },
    race2: {
        name: C.races.hispanic,
        id: 7
    },
    caseCustomForm: {
        name: "Cypress Case Form",
        id: 2025,
        checkboxListId: "field9950",
        radioButtonListId: "field9952",
        selectListId: "field9954",
        number: "field9942",
        password: "field9944",
        textbox: "field9938",
        email: "field9940",
        textarea: "field9946",
        checkbox: "field9948",
        dropdownTypeahead: "field9956",
        user: "field9958",
        person: "field9960",
        date: "field9962",
    },
    itemCustomForm: {
        name: "Cypress Item Form",
        id: 2026,
        checkboxListId: "field8065",
        radioButtonListId: "field8067",
        selectListId: "field8069",
        number: "field8057",
        password: "field8059",
        textbox: "field8053",
        email: "field8055",
        textarea: "field8061",
        checkbox: "field8063",
        dropdownTypeahead: "field8071",
        user: "field8073",
        person: "field8075",
        date: "field8158",
    },
}

S.PENTEST_1 = {
    newUser: {},
    orgSettings: {
        id: 541,
        name: 'Web Test Automation',
        license: '/XKvU4HQo2Nupg5mO6mqE3F9Yzdw/IN13DomjvcyC1yA=',
        guid: 'a8e131e6-3d36-eb11-aa49-062d5b58f56e',
        cals: 10
    },
    office_1: {
        id: 1027,
        guid: 'a9e131e6-3d36-eb11-aa49-062d5b58f56e',
        name: "Cypress Office 1",
        orgAndOfficeName: "Web Test Automation - Cypress Office 1"
    },
    office_2: {
        id: 137,
        name: "Cypress Office 2"
    },
    org2: {
        office_1: {
            id: 1054,
            guid: '690a16e8-59ba-eb11-aa4f-062d5b58f56e',
            name: "Cypress Office 1",
            orgAndOfficeName: "Web Test Automtion #2 - Cypress Office 1"
        },
        id: 546,
        orgName: "Web Test Automtion #2",
        officeId: 1054,
        officeName: "Cypress Office 1",
        orgAndOfficeName: "Web Test Automtion #2 - Cypress Office 1"
    },
    users: {
        systemAdminId: 40357,
        orgAdminId: 43275,
        systemAdmin: {
            id: 40357,
            guid: '0cfa7c01-2f2e-ea11-aa3a-062d5b58f56e'
        },
        orgAdmin: {
            id: 43275,
            guid: 'f3c2c442-0855-ed11-832b-021f02b7478f'
        },
        org2Admin: {
            id: 40727,
            guid: '10589878-e7bb-eb11-aa4f-062d5b58f56e',
            organizationId: 546,
            officeId: 1054
        },
        powerUser: {
            id: 43356,
            guid: '7801ce14-fc36-eb11-aa49-062d5b58f56e'
        },
        clpUser: {
            id: 40383,
            guid: '7801ce14-fc36-eb11-aa49-062d5b58f56e'
        },
        basicUser: {
            id: 43530,
            guid: '2af70873-db6f-ed11-832d-021f02b7478f'
        },
    },
    divisions: {
        div1: {
            name: 'Patrol',
            id: 11
        },
        div2: {
            name: 'Investigations',
            id: 132
        }
    },
    units: {
        unit1: {
            name: 'UnitA',
            id: 63
        },
        unit2: {
            name: 'UnitB',
            id: 64
        },
        unit3: {
            name: 'UnitC',
            id: 85
        }
    },
    forms: {
        userFormWithRequiredFields: 3425,
        userFormWithOptionalFields: 3426,
        taskFormWithRequiredFields: 2547,
        taskFormWithOptionalFields: 2548
    },
    locations: [
        {
            id: 476096,
            guid: '67d3a4e4-8c55-4ee4-ab66-e225b114dc35',
            name: "CypressLocation1"
        },
        {
            id: 476104,
            guid: '0a2526be-752f-453a-85f7-77ab58984f56',
            name: "CypressLocation2"
        }
    ],
    caseForReport: {
        id: 120799,
    },
    itemForReport: {
        id: 1726599,
        description: 'Item for Automated Tests - DON\'T CHANGE ANYTHING'
    },
    personForReport: {
        id: 105156,
    },
    oldClosedCase: {
        id: 7199043,
        caseNumber: 'TestCase1',
        createdDate: '04/27/22',
        offenseDate: '04/27/22',
        reviewDate: '10/27/22',
        closedDate: '10/27/22',
    },
    oldActiveCase: {
        id: 7733747,
        caseNumber: 'AutomatedTest-Active Case',
        createdDate: '05/17/09',
        offenseDate: '05/15/09',
        reviewDate: '01/18/23'
    },
    recentCase: {
        id: 5446732,
        caseNumber: 'TestCase1'
    },
    existingItems_1kBarcodes: [],
    person: {
        name: 'Person_1',
        fullName: 'Cypress Person_1',
        id: 6606993,
        get organizationId() {
            return S.PENTEST_1.orgSettings.id
        },
        userId: null,
        guid: '6e2e9db2-48ab-4769-9eca-d678e6d77351',
        email: 'qa+person_1@trackerproducts.com'
    },
    person_2: {
        name: 'Person_2',
        fullName: 'Cypress Person_2',
        id: 6606994,
        get organizationId() {
            return S.PENTEST_1.orgSettings.id
        },
        userId: null,
        guid: 'bd59c56c-65c7-4ace-aa5d-986c258dee2f',
        email: 'qa+person_2@trackerproducts.com'
    },
    get recoveredById() {
        return S.PENTEST_1.person.id
    },
    admin_permissionGroup: {
        name: 'Cypress - ADMIN',
        id: 4429,
        startingIndexForViewPermissions: 64539,
        get startingIndexForCreatePermissions() {
            return S.PENTEST_1.admin_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.PENTEST_1.admin_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.PENTEST_1.admin_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    regularUser_permissionGroup: {
        name: 'Cypress - Regular User',
        id: 4437,
        startingIndexForViewPermissions: 65073,
        get startingIndexForCreatePermissions() {
            return S.PENTEST_1.regularUser_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.PENTEST_1.regularUser_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.PENTEST_1.regularUser_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    // readOnly_permissionGroup: {
    //     name: 'Cypress - ReadOnly',
    //     id: 2053,
    //     startingIndexForViewPermissions: 59816,
    //     get startingIndexForCreatePermissions() {
    //         return S.PENTEST_1.readOnly_permissionGroup.startingIndexForViewPermissions + 22
    //     },
    //     get startingIndexForUpdatePermissions() {
    //         return S.PENTEST_1.readOnly_permissionGroup.startingIndexForViewPermissions + 44
    //     },
    //     get startingIndexForDeletePermissions() {
    //         return S.PENTEST_1.readOnly_permissionGroup.startingIndexForViewPermissions + 65
    //     }
    // },
    permissionGroup_noAutoDispo: {
        name: 'All permissions except AutoDispo',
        id: 4247
    },
    admin_userGroup: {
        name: 'Cypress Admin Group',
        id: 2539
    },
    blocked_userGroup: {
        name: 'Cypress Blocked Group',
        id: 2540
    },
    readOnly_userGroup: {
        name: 'Cypress ReadOnly Group',
        id: 2541
    },
    orgTag1: {tagModelId: 6548, name: 'sensitive information', color: "#ad2355", tagUsedBy: 1},
    orgTag2: {tagModelId: 6714, name: 'eligible for disposal', color: "#4b9b62", tagUsedBy: 1},
    tagA: {tagModelId: 16806, name: 'Tag_A__', color: "#4b9b62", tagUsedBy: 1},
    tagB: {tagModelId: 16807, name: 'Tag_B__', color: "#4b9b62", tagUsedBy: 1},
    tagC: {tagModelId: 16812, name: 'Tag_C__', color: "#4b9b62", tagUsedBy: 1},
};

S.PENTEST_2 = {
    newUser: {},
    orgSettings: {
        id: 555,
        name: 'Web Test Automtion #2',
        license: '/XKvU4HQo2Nupg5mO6mqE3F9Yzdw/IN13DomjvcyC1yA=',
        guid: 'a8e131e6-3d36-eb11-aa49-062d5b58f56e',
        cals: 10
    },
    office_1: {
        id: 1117,
        guid: '951fef8c-4630-ed11-832b-021f02b7478f',
        name: "Cypress Office 1",
        orgAndOfficeName: "Web Test Automtion #2 - Cypress Office 1"
    },
    office_2: {
        id: 137,
        name: "Web Test Automtion #2 - Cypress Office 2"
    },
    org2: {
        office_1: {
            id: 1054,
            guid: 'a9e131e6-3d36-eb11-aa49-062d5b58f56e',
            name: "Cypress Office 1",
            orgAndOfficeName: "Web Test Automation - Cypress Office 1"
        },
        id: 546,
        orgName: "Web Test Automation",
        officeId: 1054,
        officeName: "Cypress Office 1",
        orgAndOfficeName: "Web Test Automation - Cypress Office 1"
    },
    users: {
        systemAdminId: 40357,
        orgAdminId: 43276,
        systemAdmin: {
            id: 40357,
            guid: '0cfa7c01-2f2e-ea11-aa3a-062d5b58f56e'
        },
        orgAdmin: {
            id: 43276,
            guid: 'a87ad8b6-0855-ed11-832b-021f02b7478f'
        },
        org2Admin: {
            id: 40727,
            guid: '10589878-e7bb-eb11-aa4f-062d5b58f56e',
            organizationId: 546,
            officeId: 1054
        },
        powerUser: {
            id: 43277,
            guid: 'a9e64052-0d55-ed11-832b-021f02b7478f'
        },
        clpUser: {
            id: 43529,
            guid: '99aa4fce-da6f-ed11-832d-021f02b7478f'
        },
        basicUser: {
            id: 43529,
            guid: '99aa4fce-da6f-ed11-832d-021f02b7478f'
        },
    },
    divisions: {
        div1: {
            name: 'Patrol',
            id: 127
        },
        div2: {
            name: 'Investigations',
            id: 133
        }
    },
    units: {
        unit1: {
            name: 'UnitA',
            id: 86
        },
        unit2: {
            name: 'UnitB',
            id: 81
        },
        unit3: {
            name: 'UnitC',
            id: 87
        }
    },
    forms: {
        userFormWithRequiredFields: 2542,
        userFormWithOptionalFields: 2546,
        taskFormWithRequiredFields: 2547,
        taskFormWithOptionalFields: 2548
    },
    locations: [
        {
            id: 477682,
            guid: '8c229a7e-53a7-4cd4-8dc2-87b18a86abf3',
            name: "CypressLocation1"
        },
        {
            id: 477683,
            guid: 'da3370fa-08c2-485f-a9db-acf9ac259528',
            name: "CypressLocation2"
        }
    ],
    caseForReport: {
        id: 120799,
    },
    itemForReport: {
        id: 1726599,
        description: 'Item for Automated Tests - DON\'T CHANGE ANYTHING'
    },
    personForReport: {
        id: 105156,
    },
    oldClosedCase: {
        id: 7736934,
        caseNumber: 'TestCase1',
        createdDate: '10/26/22',
        offenseDate: '10/26/22',
        reviewDate: '10/27/22',
        closedDate: '10/27/22',
    },
    oldActiveCase: {
        id: 7742549,
        caseNumber: 'AutomatedTest-Active Case',
        createdDate: '12/17/22',
        offenseDate: '12/13/22',
        reviewDate: '12/22/22'
    },
    recentCase: {
        id: 5446732,
        caseNumber: 'TestCase1'
    },
    existingItems_1kBarcodes: [],
    person: {
        name: 'Person_1',
        fullName: 'Cypress Person_1',
        id: 6606995,
        get organizationId() {
            return S.PENTEST_2.orgSettings.id
        },
        userId: null,
        guid: '535530de-c2e1-40bd-ad7d-4189dbbeb6af',
        email: 'qa+person_1@trackerproducts.com'
    },
    person_2: {
        name: 'Person_2',
        fullName: 'Cypress Person_2',
        id: 6606996,
        get organizationId() {
            return S.PENTEST_1.orgSettings.id
        },
        userId: null,
        guid: '8fbb5deb-86ef-4e7e-b427-5eae07c65b33',
        email: 'qa+person_2@trackerproducts.com'
    },
    get recoveredById() {
        return S.PENTEST_1.person.id
    },
    admin_permissionGroup: {
        name: 'Cypress - ADMIN',
        id: 4419,
        startingIndexForViewPermissions: 64147,
        get startingIndexForCreatePermissions() {
            return S.PENTEST_2.admin_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.PENTEST_2.admin_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.PENTEST_2.admin_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    blocked_permissionGroup: {
        name: 'Cypress - Blocked',
        id: 4420,
        startingIndexForViewPermissions: 64220,
        get startingIndexForCreatePermissions() {
            return S.PENTEST_2.blocked_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.PENTEST_2.blocked_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.PENTEST_2.blocked_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    regularUser_permissionGroup: {
        name: 'Cypress - Regular User',
        id: 4445,
        startingIndexForViewPermissions: 65585,
        get startingIndexForCreatePermissions() {
            return S.PENTEST_2.regularUser_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.PENTEST_2.regularUser_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.PENTEST_2.regularUser_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    readOnly_permissionGroup: {
        name: 'Cypress - ReadOnly',
        id: 4421,
        startingIndexForViewPermissions: 64293,
        get startingIndexForCreatePermissions() {
            return S.PENTEST_2.readOnly_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.PENTEST_2.readOnly_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.PENTEST_2.readOnly_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    permissionGroup_noAutoDispo: {
        name: 'All permissions except AutoDispo',
        id: 4422
    },
    admin_userGroup: {
        name: 'Cypress Admin Group',
        id: 2897
    },
    blocked_userGroup: {
        name: 'Cypress Blocked Group',
        id: 2540
    },
    readOnly_userGroup: {
        name: 'Cypress ReadOnly Group',
        id: 2898
    },
    orgTag1: {tagModelId: 6751, name: 'sensitive information', color: "#ad2355", tagUsedBy: 1},
    orgTag2: {tagModelId: 6752, name: 'eligible for disposal', color: "#4b9b62", tagUsedBy: 1},
    tagA: {tagModelId: 16809, name: 'Tag_A__', color: "#4b9b62", tagUsedBy: 1},
    tagB: {tagModelId: 16810, name: 'Tag_B__', color: "#4b9b62", tagUsedBy: 1},
    tagC: {tagModelId: 16811, name: 'Tag_C__', color: "#4b9b62", tagUsedBy: 1},
};

S.PENTEST_3 = {
    newUser: {},
    orgSettings: {
        id: 556,
        name: 'Web Test Automtion #3',
        license: 'CH9byWyGCZWALMV9S5V4BYE9T5DsquRUSa7zh+wF+zc=',
        guid: '51554d99-4630-ed11-832b-021f02b7478f',
        cals: 10
    },
    office_1: {
        id: 1118,
        guid: '52554d99-4630-ed11-832b-021f02b7478f',
        name: "Cypress Office 1",
        orgAndOfficeName: "Web Test Automtion #3 - Cypress Office 1"
    },
    office_2: {
        id: 1130,
        name: "Web Test Automtion #3 - Cypress Office 2"
    },
    org2: {
        office_1: {
            id: 1054,
            guid: 'a9e131e6-3d36-eb11-aa49-062d5b58f56e',
            name: "Cypress Office 1",
            orgAndOfficeName: "Web Test Automation - Cypress Office 1"
        },
        id: 546,
        orgName: "Web Test Automation",
        officeId: 1054,
        officeName: "Cypress Office 1",
        orgAndOfficeName: "Web Test Automation - Cypress Office 1"
    },
    users: {
        systemAdminId: 40357,
        orgAdminId: 43666,
        systemAdmin: {
            id: 40357,
            guid: '0cfa7c01-2f2e-ea11-aa3a-062d5b58f56e'
        },
        orgAdmin: {
            id: 43666,
            guid: 'f58daaef-7880-ed11-832d-021f02b7478f'
        },
        // org2Admin: {
        //     id: 40727,
        //     guid: '10589878-e7bb-eb11-aa4f-062d5b58f56e',
        //     organizationId: 546,
        //     officeId: 1054
        // },
        powerUser: {
            id: 43683,
            guid: '19330c4f-8c86-ed11-832d-021f02b7478f'
        },
        // clpUser: {
        //     id: 43529,
        //     guid: '99aa4fce-da6f-ed11-832d-021f02b7478f'
        // },
        basicUser: {
            id: 43684,
            guid: '6729d18f-8e86-ed11-832d-021f02b7478f'
        },
    },
    divisions: {
        div1: {
            name: 'Patrol',
            id: 129
        },
        div2: {
            name: 'Investigations',
            id: 134
        }
    },
    units: {
        unit1: {
            name: 'UnitA',
            id: 88
        },
        unit2: {
            name: 'UnitB',
            id: 83
        },
        unit3: {
            name: 'UnitC',
            id: 89
        }
    },
    // forms: {
    //     userFormWithRequiredFields: 2542,
    //     userFormWithOptionalFields: 2546,
    //     taskFormWithRequiredFields: 2547,
    //     taskFormWithOptionalFields: 2548
    // },
    locations: [
        {
            id: 487927,
            guid: '2047e0e8-e536-4b4b-acbd-03300c734617',
            name: "CypressLocation1"
        },
        {
            id: 487928,
            guid: '21e4c916-a184-4189-b139-e2235833540d',
            name: "CypressLocation2"
        }
    ],
    // caseForReport: {
    //     id: 120799,
    // },
    // itemForReport: {
    //     id: 1726599,
    //     description: 'Item for Automated Tests - DON\'T CHANGE ANYTHING'
    // },
    // personForReport: {
    //     id: 105156,
    // },
    oldClosedCase: {
        id: 7743098,
        caseNumber: 'TestCase1',
        createdDate: '12/28/22',
        offenseDate: '12/21/22',
        reviewDate: '12/30/22',
        closedDate: '12/29/22',
    },
    oldActiveCase: {
        id: 7743099,
        caseNumber: 'AutomatedTest-Active Case',
        createdDate: '12/28/22',
        offenseDate: '12/20/22',
        reviewDate: '01/03/23'
    },
    recentCase: {
        id: 7743099,
        caseNumber: 'AutomatedTest-Active Case'
    },
    existingItems_1kBarcodes: [],
    person: {
        name: 'Person_1',
        fullName: 'Cypress Person_1',
        id: 6608222,
        get organizationId() {
            return S.PENTEST_3.orgSettings.id
        },
        userId: null,
        guid: '5c11a259-d0fc-43c9-a42f-28b500ae5e6b',
        email: 'qa+person_1@trackerproducts.com'
    },
    person_2: {
        name: 'Person_2',
        fullName: 'Cypress Person_2',
        id: 6608223,
        get organizationId() {
            return S.PENTEST_3.orgSettings.id
        },
        userId: null,
        guid: 'd3cb6e62-e01a-4c49-ae6b-9aca6a9222f1',
        email: 'qa+person_2@trackerproducts.com'
    },
    get recoveredById() {
        return S.PENTEST_3.person.id
    },
    admin_permissionGroup: {
        name: 'Cypress - ADMIN',
        id: 4449,
        startingIndexForViewPermissions: 65919,
        get startingIndexForCreatePermissions() {
            return S.PENTEST_3.admin_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.PENTEST_3.admin_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.PENTEST_3.admin_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    blocked_permissionGroup: {
        name: 'Cypress - Blocked',
        id: 4450,
        startingIndexForViewPermissions: 65992,
        get startingIndexForCreatePermissions() {
            return S.PENTEST_3.blocked_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.PENTEST_3.blocked_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.PENTEST_3.blocked_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    regularUser_permissionGroup: {
        name: 'Cypress - Regular User',
        id: 4451,
        startingIndexForViewPermissions: 66065,
        get startingIndexForCreatePermissions() {
            return S.PENTEST_3.regularUser_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.PENTEST_3.regularUser_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.PENTEST_3.regularUser_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    // readOnly_permissionGroup: {
    //     name: 'Cypress - ReadOnly',
    //     id: 4421,
    //     startingIndexForViewPermissions: 64293,
    //     get startingIndexForCreatePermissions() {
    //         return S.PENTEST_3.readOnly_permissionGroup.startingIndexForViewPermissions + 22
    //     },
    //     get startingIndexForUpdatePermissions() {
    //         return S.PENTEST_3.readOnly_permissionGroup.startingIndexForViewPermissions + 44
    //     },
    //     get startingIndexForDeletePermissions() {
    //         return S.PENTEST_3.readOnly_permissionGroup.startingIndexForViewPermissions + 65
    //     }
    // },
    // permissionGroup_noAutoDispo: {
    //     name: 'All permissions except AutoDispo',
    //     id: 4422
    // },
    admin_userGroup: {
        name: 'Cypress Admin Group',
        id: 2903
    },
    blocked_userGroup: {
        name: 'Cypress Blocked Group',
        id: 2904
    },
    readOnly_userGroup: {
        name: 'Cypress ReadOnly Group',
        id: 2905
    },
    orgTag1: {tagModelId: 16827, name: 'sensitive information', color: "#ad2355", tagUsedBy: 1},
    orgTag2: {tagModelId: 16828, name: 'eligible for disposal', color: "#4b9b62", tagUsedBy: 1},
    tagA: {tagModelId: 16829, name: 'Tag_A__', color: "#4b9b62", tagUsedBy: 1},
    tagB: {tagModelId: 16830, name: 'Tag_B__', color: "#4b9b62", tagUsedBy: 1},
    tagC: {tagModelId: 16831, name: 'Tag_C__', color: "#4b9b62", tagUsedBy: 1},
};

S.PENTEST_4 = {
    newUser: {},
    orgSettings: {
        id: 557,
        name: 'Web Test Automtion #4',
        license: 'CH9byWyGCZWALMV9S5V4BVXKXGS/G6hqnPaCKAnFGeE=',
        guid: 'f26bc8a3-4630-ed11-832b-021f02b7478f',
        cals: 10
    },
    office_1: {
        id: 1119,
        guid: 'f36bc8a3-4630-ed11-832b-021f02b7478f',
        name: "Cypress Office 1",
        orgAndOfficeName: "Web Test Automtion #4 - Cypress Office 1"
    },
    office_2: {
        id: 1138,
        name: "Web Test Automtion #4 - Cypress Office 2"
    },
    org2: {
        office_1: {
            id: 1054,
            guid: 'a9e131e6-3d36-eb11-aa49-062d5b58f56e',
            name: "Cypress Office 1",
            orgAndOfficeName: "Web Test Automation - Cypress Office 1"
        },
        id: 546,
        orgName: "Web Test Automation",
        officeId: 1054,
        officeName: "Cypress Office 1",
        orgAndOfficeName: "Web Test Automation - Cypress Office 1"
    },
    users: {
        systemAdminId: 40357,
        orgAdminId: 43720,
        systemAdmin: {
            id: 40357,
            guid: '0cfa7c01-2f2e-ea11-aa3a-062d5b58f56e'
        },
        orgAdmin: {
            id: 43720,
            guid: '00e8a5a3-d98c-ed11-832e-021f02b7478f'
        },
        // org2Admin: {
        //     id: 40727,
        //     guid: '10589878-e7bb-eb11-aa4f-062d5b58f56e',
        //     organizationId: 546,
        //     officeId: 1054
        // },
        powerUser: {
            id: 43721,
            guid: '19330c4f-8c86-ed11-832d-021f02b7478f'
        },
        basicUser: {
            id: 43722,
            guid: '9fbf2a88-de8c-ed11-832e-021f02b7478f'
        },
    },
    divisions: {
        div1: {
            name: 'Patrol',
            id: 130
        },
        div2: {
            name: 'Investigations',
            id: 135
        }
    },
    units: {
        unit1: {
            name: 'UnitA',
            id: 90
        },
        unit2: {
            name: 'UnitB',
            id: 84
        },
        unit3: {
            name: 'UnitC',
            id: 91
        }
    },
    // // forms: {
    // //     userFormWithRequiredFields: 2542,
    // //     userFormWithOptionalFields: 2546,
    // //     taskFormWithRequiredFields: 2547,
    // //     taskFormWithOptionalFields: 2548
    // // },
    locations: [
        {
            id: 487942,
            guid: '92473db1-d9ce-4d43-8962-25b2d484a681',
            name: "CypressLocation1"
        },
        {
            id: 487943,
            guid: '037a10c6-d69b-47b2-ba0f-df7236a740db',
            name: "CypressLocation2"
        }
    ],
    // // caseForReport: {
    // //     id: 120799,
    // // },
    // // itemForReport: {
    // //     id: 1726599,
    // //     description: 'Item for Automated Tests - DON\'T CHANGE ANYTHING'
    // // },
    // // personForReport: {
    // //     id: 105156,
    // // },
    oldClosedCase: {
        id: 7744300,
        caseNumber: 'TestCase1',
        createdDate: '01/05/23',
        offenseDate: '12/21/22',
        reviewDate: '12/30/22',
        closedDate: '01/24/23',
    },
    oldActiveCase: {
        id: 7744372,
        caseNumber: 'AutomatedTest-Active Case',
        createdDate: '01/05/23',
        offenseDate: '12/20/22',
        reviewDate: '01/03/23'
    },
    // recentCase: {
    //     id: 7744372,
    //     caseNumber: 'AutomatedTest-Active Case'
    // },
    //  existingItems_1kBarcodes: [],
    person: {
        name: 'Person_1',
        fullName: 'Cypress Person_1',
        id: 6608222,
        get organizationId() {
            return S.PENTEST_3.orgSettings.id
        },
        userId: null,
        guid: '5c11a259-d0fc-43c9-a42f-28b500ae5e6b',
        email: 'qa+person_1@trackerproducts.com'
    },
    person_2: {
        name: 'Person_2',
        fullName: 'Cypress Person_2',
        id: 6609514,
        get organizationId() {
            return S.PENTEST_4.orgSettings.id
        },
        userId: null,
        guid: 'dcad04c6-23a5-4c8d-81c6-f2ae59abc65d',
        email: 'qa+person_2@trackerproducts.com'
    },
    get recoveredById() {
        return S.PENTEST_4.person.id
    },
    admin_permissionGroup: {
        name: 'Cypress - ADMIN',
        id: 4476,
        startingIndexForViewPermissions: 66572,
        get startingIndexForCreatePermissions() {
            return S.PENTEST_4.admin_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.PENTEST_4.admin_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.PENTEST_4.admin_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    // blocked_permissionGroup: {
    //     name: 'Cypress - Blocked',
    //     id: 4450,
    //     startingIndexForViewPermissions: 65992,
    //     get startingIndexForCreatePermissions() {
    //         return S.PENTEST_4.blocked_permissionGroup.startingIndexForViewPermissions + 22
    //     },
    //     get startingIndexForUpdatePermissions() {
    //         return S.PENTEST_4.blocked_permissionGroup.startingIndexForViewPermissions + 44
    //     },
    //     get startingIndexForDeletePermissions() {
    //         return S.PENTEST_4.blocked_permissionGroup.startingIndexForViewPermissions + 65
    //     }
    // },
    regularUser_permissionGroup: {
        name: 'Cypress - Regular User',
        id: 4477,
        startingIndexForViewPermissions: 66645,
        get startingIndexForCreatePermissions() {
            return S.PENTEST_4.regularUser_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.PENTEST_4.regularUser_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.PENTEST_4.regularUser_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    readOnly_permissionGroup: {
        name: 'Cypress - ReadOnly',
        id: 4478,
        startingIndexForViewPermissions: 66718,
        get startingIndexForCreatePermissions() {
            return S.PENTEST_4.readOnly_permissionGroup.startingIndexForViewPermissions + 22
        },
        get startingIndexForUpdatePermissions() {
            return S.PENTEST_4.readOnly_permissionGroup.startingIndexForViewPermissions + 44
        },
        get startingIndexForDeletePermissions() {
            return S.PENTEST_4.readOnly_permissionGroup.startingIndexForViewPermissions + 65
        }
    },
    // // permissionGroup_noAutoDispo: {
    // //     name: 'All permissions except AutoDispo',
    // //     id: 4422
    // // },
    admin_userGroup: {
        name: 'Cypress Admin Group',
        id: 2912
    },
    // blocked_userGroup: {
    //     name: 'Cypress Blocked Group',
    //     id: 2904
    // },
    readOnly_userGroup: {
        name: 'Cypress ReadOnly Group',
        id: 2913
    },
    orgTag1: {tagModelId: 16872, name: 'sensitive information', color: "#ad2355", tagUsedBy: 1},
     orgTag2: {tagModelId: 16873, name: 'eligible for disposal', color: "#4b9b62", tagUsedBy: 1},
    tagA: {tagModelId: 16874, name: 'Tag_A__', color: "#4b9b62", tagUsedBy: 1},
    tagB: {tagModelId: 16875, name: 'Tag_B__', color: "#4b9b62", tagUsedBy: 1},
    tagC: {tagModelId: 16876, name: 'Tag_C__', color: "#4b9b62", tagUsedBy: 1},
};

S.PENTEST_1 = {...S.PENTEST, ...S.PENTEST_1};

S.PENTEST_2 = {...S.PENTEST, ...S.PENTEST_2};

S.PENTEST_3 = {...S.PENTEST, ...S.PENTEST_3};

S.PENTEST_4 = {...S.PENTEST, ...S.PENTEST_4};


S.setEnvironmentProperties = function (orgNum) {
    let orgNumber = orgNum || Cypress.env('orgNum') || 1

    S.selectedEnvironment = S[`${S.domain}_${orgNumber}`]
    console.log('Org Number: ' + orgNumber)
    console.log('Selected environment: ' + JSON.stringify(S.selectedEnvironment))
    return S.selectedEnvironment;
}

S.setEnvironmentProperties();

S.chainOfCustody = {
    SAFE: {
        newItemEntry: {
            type: 'in',
            date: helper.getCurrentDateInCurrentFormat(C.currentDateTimeFormat.dateOnly),
            issuedTo: 'New Item Entry',
            organization: S.selectedEnvironment.orgSettings.name + ', ' + S.selectedEnvironment.office_1.name,
            storageLocation: S.selectedEnvironment.locations[0].name,
            Notes: 'Item entered into system.',
        },
        checkin: (itemObject) => {
            return {
                type: 'in',
                date: itemObject.checkInDate,
                issuedFrom: itemObject.returnedByName_name,
                issuedTo: itemObject.returnedByName_name,
                organization: S.selectedEnvironment.orgSettings.name + ', ' + S.selectedEnvironment.office_1.name,
                storageLocation: itemObject.location,
                Notes: itemObject.checkInNotes,
            }
        },
        move: (itemObject) => {
            return {
                type: 'move',
                date: itemObject.moveDate,
                issuedFrom: itemObject.movedBy_name,
                issuedTo: itemObject.movedBy_name,
                organization: S.selectedEnvironment.orgSettings.name + ', ' + S.selectedEnvironment.office_1.name,
                storageLocation: itemObject.location,
                Notes: itemObject.moveNotes,
            }
        },
        checkout: (itemObject) => {
            return {
                type: 'out',
                date: itemObject.checkoutDate,
                issuedFrom: itemObject.checkedOutBy_name,
                issuedTo: itemObject.checkedOutTo_name,
                organization: S.selectedEnvironment.orgSettings.name + ', ' + S.selectedEnvironment.office_1.name,
                checkoutReason: itemObject.checkoutReason,
                Notes: itemObject.checkedOutNotes,
            }
        },
        disposal: (itemObject) => {
            return {
                type: 'disposals',
                date: itemObject.disposedDate,
                issuedFrom: itemObject.disposedByName,
                issuedTo: itemObject.disposedByName,
                organization: S.selectedEnvironment.orgSettings.name + ', ' + S.selectedEnvironment.office_1.name,
                disposalMethod: itemObject.disposalMethod,
                Notes: itemObject.disposalNotes,
            }
        },
    },
    legacy: {
        checkedIn: {
            type: 'in',
            date: helper.getCurrentDateInCurrentFormat(C.currentDateTimeFormat.dateOnly),
            issuedTo: 'New Item Entry',
            organization: S.selectedEnvironment.orgSettings.name + ', ' + S.selectedEnvironment.office_1.name,
            storageLocation: S.selectedEnvironment.locations[0].name,
            Notes: 'Item entered into system.',
        },
        checkedOut: {
            type: 'out',
            date: helper.getCurrentDateInCurrentFormat(C.currentDateTimeFormat.dateOnly),
            checkoutReason: S.selectedEnvironment.checkoutReason.name,
            notes: helper.getRandomNo(),
            expectedReturnDate: helper.tomorrowsDate(C.currentDateTimeFormat.dateOnly),
            issuedTo: S.selectedEnvironment.person.name,
            organization: S.selectedEnvironment.orgSettings.name + ', ' + S.selectedEnvironment.office_1.name,
        }
    }
};

S.newCaseId = null;
S.oldClosedCase = S.selectedEnvironment.oldClosedCase;
S.recentCase = S.selectedEnvironment.recentCase;

S.colors = {
    redBorder: "rgb(231,24,45)"
};

S.gmailAccount = {
    email: 'qa@trackerproducts.com',
    password: 'alnlgmvivtryxfph'
};

S.userAccounts = accounts.getTestAccounts(S.selectedEnvironment, S.orgNum);
S.selectedEnvironment.clpUser = S.userAccounts.clpUser;
S.selectedUser = {};

S.getUserData = function (userAcc) {
    return Object.assign({}, userAcc)
};

S.getCurrentUrl = function () {
    return S.currentUrl;
};


module.exports = S;
