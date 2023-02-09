const helper = require('../support/e2e-helper')
const DF = require('../support/date-time-formatting')

let C = exports;

C = {
    buttons: {
        ok: 'Ok',
        edit: 'Edit',
        save: 'Save',
        cancel: 'Cancel',
        actions: 'Actions',
        search: 'Search',
        reports: 'Reports',
        view: 'View',
        add: 'Add',
        next: 'Next',
        nextSave: 'Next (Save)',
        import: 'Import',
        precheckOnly: 'Precheck Only',
        runReport: 'Run Report',
        login: 'Login',
        setPassword: 'Set Password',
        changePassword: 'Change Password',
        yes: 'Yes',
        details: 'Details',
        addItem: 'Add Item',
        addPerson: 'Add Person',
        addExternal: 'Add External',
        addTask: 'Add Task',
        addNote: 'Add Note',
        addStorageLocations: 'Add Storage Locations',
        newReport: 'New Report',
        start: 'Start',
        menuCustomization: 'Menu Customization',
        views: 'Views',
        options: 'Options',
        redestributeCaseReviewDates: 'Re-Distribute Case Review Dates',
        recalculateCasesToDispose: 'Recalculate Cases to Dispose',
        updateCases: `Update Cases`,
        closeCases: `Close Cases`,
        closeXCases: X => `Close ${X} Cases`,
        viewXCases: X => `View ${X} Cases`,
    },
    itemFields: {
        allFieldsOnHistory: [
            'Update Made By',
            'Update Date',
            'Org #',
            'Item #',
            'Case',
            'Status',
            'Recovered At',
            'Recovery Date',
            'Recovered By',
            'Storage Location',
            'Submitted By',
            'Category',
            'Custody Reason',
            'Serial Number',
            'Model',
            'Barcode',
            'Additional Barcodes',
            'Make',
            'Description',
            'Item Belongs to',
            'Custodian',
            'Tags'],
        allEditableFieldsArray: [
            'Recovered At',
            'Recovery Date',
            'Recovered By',
            'Category',
            'Custody Reason',
            'Serial Number',
            'Model',
            'Make',
            'Description',
            'Item Belongs to',
            'Tags'
        ],
        reducedEditableFieldsArray: ['Category'],
        orgNo: 'Org #',
        active: 'Active',
        barcode: 'Barcode',
        additionalBarcodes: 'Additional Barcodes',
        category: 'Category',
        custodian: 'Custodian',
        custodyReason: 'Custody Reason',
        itemBelongsTo: 'Item Belongs To',
        description: 'Description',
        location: 'Location',
        make: 'Make',
        model: 'Model',
        parentItemDescription: 'Parent Item Description',
        parentItemId: 'Parent Item Id',
        parentSequentialOrgNumber: 'Parent Sequential Org Number',
        primaryCaseNumber: 'Primary Case Number',
        primaryCaseOfficer: 'Primary Case Officer',
        recoveredBy: 'Recovered By',
        recoveryDate: 'Recovery Date',
        recoveryDateEditMode: 'Recovery Date',
        recoveryLocation: 'Recovery Location',
        sequentialCaseNumber: 'Sequential Case Number',
        sequentialOrgNumber: 'Sequential Org Number',
        serialNumber: 'Serial Number',
        status: 'Status',
        tags: 'Tags',
        submittedBy: 'Submitted By',
        expectedReturnDate: 'Expected Return Date',
        actualDisposedDate: 'Actual Disposed Date',
    },
    personFields: {
        allEditableFieldsArray: [
            'Business Name',
            'First Name',
            'Middle Name',
            'Last Name',
            'Alias',
            'Driver\'s License',
            'Date of Birth',
            'Race',
            'Gender',
            'Mobile Phone',
            'Other Phone',
            'Deceased',
            'Juvenile',
            'Email'
        ],
        allFieldsOnHistory: [
            'Update Made By',
            'Update Date',
            'Business Name',
            'First Name',
            'Middle Name',
            'Last Name',
            'Alias',
            'Driver\'s License',
            'Race',
            'Gender',
            'Mobile Phone',
            'Other Phone',
            'Deceased',
            'Juvenile',
            'Email'
        ],
        dateOfBirth: 'Date of Birth',
        middleName: 'Middle Name',
        businessName: 'Business Name',
        alias: 'Alias',
        driversLicense: 'Driver Licence',
        race: 'Race',
        gender: 'Gender',
        mobilePhone: 'Mobile Phone',
        otherPhone: 'Other Phone',
        deceased: 'Deceased',
        juvenile: 'Juvenile',
        email: 'Email',
        addresses: 'Addresses'
    },
    caseFields: {
        allFieldsOnHistory: [
            'Update Made By',
            'Update Date',
            'Org / Office',
            'Case Number',
            'Offense Type',
            'Case Officer(s)',
            'Offense Location',
            'Offense Description',
            'Offense Date',
            'Tags',
            'Status',
            'Review Date',
            'Review Date Notes'
        ],
        allEditableFieldsArray: [
            'Case Number',
            'Offense Type',
            'Case Officer(s)',
            'Offense Location',
            'Offense Description',
            'Offense Date',
            'Tags',
            'Status',
            'Review Date',
            'Review Date Notes'
        ],
        reducedEditableFieldsArray: [
            'Case Number',
            'Offense Type',
            'Case Officer(s)',
            'Status',
            'Review Date',
            'Review Date Notes'
        ],
        active: "Active",
        caseNumber: "Case Number",
        caseOfficer: "Case Officer",
        createdDate: "Created Date",
        creator: "Creator",
        tags: "Tags",
        followUpDate: "Follow-Up Date",
        offenseDate: "Offense Date",
        offenseDateEditMode: "Offense Date",
        offenseDescription: "Offense Description",
        offenseLocation: "Offense Location",
        offenseType: "Offense Type",
        office: "Office",
    },
    caseCustomFields: {
        cypressCaseForm_Textbox: "Cypress Case Form > Textbox",
        cypressCaseForm_Email: "Cypress Case Form > Email",
        cypressCaseForm_Number: "Cypress Case Form > Number",
        cypressCaseForm_Password: "Cypress Case Form > Password",
        cypressCaseForm_Textarea: "Cypress Case Form > Textarea",
        cypressCaseForm_Checkbox: "Cypress Case Form > Checkbox",
        cypressCaseForm_RadiobuttonList: "Cypress Case Form > Radiobutton List",
        cypressCaseForm_CheckboxList: "Cypress Case Form > Checkbox List",
        cypressCaseForm_SelectList: "Cypress Case Form > Select List",
        cypressCaseForm_Date: "Cypress Case Form > Date",
    },
    itemCustomFields: {
        cypressItemForm_Textbox: "Cypress Item Form > Textbox",
        cypressItemForm_Email: "Cypress Item Form > Email",
        cypressItemForm_Number: "Cypress Item Form > Number",
        cypressItemForm_Password: "Cypress Item Form > Password",
        cypressItemForm_Textarea: "Cypress Item Form > Textarea",
        cypressItemForm_Checkbox: "Cypress Item Form > Checkbox",
        cypressItemForm_RadiobuttonList: "Cypress Item Form > Radiobutton List",
        cypressItemForm_CheckboxList: "Cypress Item Form > Checkbox List",
        cypressItemForm_SelectList: "Cypress Item Form > Select List",
        cypressItemForm_Date: "Cypress Item Form > Date",
    },
    tableColumns: {
        details: 'Details',
        caseSearch: {
            createdBy: 'Created By'
        },
    },
    dropdowns: {
        itemActions: {
            checkItemIn: "Check Item In",
            checkItemOut: "Check Item Out",
            moveItem: "Move Item",
            transferItem: "Transfer Item",
            disposeItem: "Dispose Item",
            undisposeItem: "Undispose Item",
            duplicate: "Duplicate",
            split: "Split",
            addToCase: "Add To Case",
            removeFromCase: "Remove From Case",
            changePrimaryCase: "Change Primary Case",
            manageCases: "Manage Cases",
        },
        caseActions: {
            massUpdate: "Mass Update"
        },
        userActions: {
            sendVerificationEmail: 'Send Verification Email',
            setPermissions: 'Set Permissions',
            addToGroup: 'Add to Group',
            addExternalUsers: 'Add External Users',
            removeExternalUsers: 'Remove External Users',
            unlockUser: 'Unlock User',
            deactivateUsers: 'Deactivate Users',
            activateUsers: 'Activate Users',
        }
    },
    tabs: {
        basicInfo: 'Basic Info',
        cases: 'Cases',
        items: 'Items',
        people: 'People',
        media: 'Media',
        notes: 'Notes',
        tasks: 'Tasks',
        chainOfCustody: 'Chain of Custody',
        scanHistory: 'Scan History',
        history: 'History',
        permissions: 'Permissions',
        addresses: 'Addresses',
        casesInvolved: 'Cases Involved',
        itemsRecoveredBy: 'Items Recovered By',
        itemsBelongingTo: 'Items Belonging To',
        itemCustodian: 'Item Custodian',
        noDate: 'No Date',
        pastDue: 'Past Due',
        upcoming: 'Upcoming',
        all: 'All',
    },
    itemStatuses: {
        checkedIn: 'Checked In',
        checkedOut: 'Checked Out',
        disposed: 'Disposed',
    },
    searchCriteria: {
        dates: {
            before: 'before',
            after: 'after',
            between: 'between',
            exactly: 'exactly',
            newerThanX: 'newer than X',
            olderThanX: 'older than X',
            betweenXandY: 'between X and Y',
            currentWeek: 'Current week',
            lastWeek: 'Last week',
            monthToDate: 'Month to date',
            lastMonth: 'Last month',
            yearToDate: 'Year to date',
            lastYear: 'Last year',
        },
        inputFields: {
            equals: 'equals',
            notEquals: 'not equals',
            startsWith: 'starts with',
            contains: 'contains',
            textSearch: 'text search',
        },
        multiSelectFields: {
            equalsOr: 'equals (or)',
            equalsAnd: 'equals (and)',
            notEquals: 'not equals',
        }
    },
    validation_msgs: {
        forbidden: 'Forbidden',
        caseNumberDoesNotExist: 'Case with such number doesn\'t exist',
        authenticationError: 'Authentication error',
        incorrectCredentials: 'The user name or password is incorrect',
        areYouSure: 'Are you sure?',
        userLoggedInOnOtherMachine: 'Your account is logged in on another machine/browser. If you continue, you will be logged out.',
        wrongPassword_1st_attempt: 'You typed the password incorrectly 1 time.  You have 4 tries until you will be locked out.',
        wrongPassword_4th_attempt: 'You typed the password incorrectly 4 times.  You have 1 try until you will be locked out.',
        wrongPassword_5th_attempt: 'The user has had too many failed login attempts and has been locked out for a duration of 1 minute.',
    },
    checkoutReasons: {
        lab: 'Lab',
        court: 'Court',
        audit: 'Audit'
    },
    custodyReason: {
        asset: 'Asset',
        investigation: 'Investigation',
    },
    offenseTypes: {
        accident: 'Accident',
        arson: 'Arson',
        burglary: 'Burglary',
        vandalism: 'Vandalism',
    },
    personTypes: {
        prosecutor: 'Prosecutor',
        wife: 'Wife',
        witness: 'Witness',
        suspect: 'Suspect',
        victim: 'Victim'
    },
    races: {
        asian: 'Asian',
        hispanic: 'Hispanic',
        white: 'White'
    },
    addressTypes: {
        home: {
            name: 'Home',
            id: 1
        },
        work: {
            name: 'Work',
            id: 2
        },
        other: {
            name: 'Other',
            id: 3
        },
    },
    states: {
        Alabama: {
            name: 'Alabama',
            id: 1
        },
        Kentucky: {
            name: 'Kentucky',
            id: 17
        },
        Texas: {
            name: 'Texas',
            id: 43
        },
    },
    disposalMethods: {
        auctioned: 'Auctioned',
        destroyed: 'Destroyed'
    },
    itemCategories: {
        alcohol: 'Alcohol',
        computer: 'Computer',
        ammunition: 'Ammunition',
        vehicle: 'Vehicle',
    },
    noteCategories: {
        misc: 'Miscellaneous',
        sensitive: 'Sensitive',
    },
    toastMsgs: {
        saved: 'Saved!',
        noteSaved: 'Note Saved',
        uploadComplete: 'Upload Complete',
        importComplete: 'Import Complete',
        precheckComplete: 'Precheck Complete',
        recordsImported: ' records imported',
        recordsPrechecked: ' records successfully prechecked',
        addedNewCase: 'Added new Case: ',
        addedNewItem: (caseNumber, orgNo, itemNo) => `Item has been saved in Case # ${caseNumber} with Org # ${orgNo} and Item # ${itemNo}`,
        resultsLimitExceeded: 'Result Limit Exceeded',
        reportRunning: 'The report is running and will automatically open in a new window when it is finished.',
        daysCanOnlyBePositiveNumber: 'Days can only be Positive Number',
        locationChanged: 'Location Changed',
        emailsSent: numberOfEmails => `${numberOfEmails} emails sent`
    },
    importTypes: {
        cases: 'Cases',
        items: 'Items',
        people: 'People',
        users: 'Users',
        notes: 'Notes',
        media: 'Media',
        legacyTasks: 'Legacy Tasks',
        legacyCoC: 'Legacy Chain of Custody',
        locations: 'Locations',
    },
    reports: {
        printCaseAndPeopleOnly: 'Print Case and People only',
        selectPeople: 'Select People',
        primaryLabel4x3: '4x3 Primary Label',
        evidenceList: 'Evidence List _ Report by Case - Landscape',
        propertyReleaseForm: 'Property Release Form',
    },
    login: {
        messages: {
            permissionsNotSet: 'While you are properly authenticated, your admin has not set any Permission Groups for your account. Please ask them to assign your account a Permission Group.',
            inactiveUser: 'User is inactive'
        }
    },
    users: {
        setPassword: {
            confirmationMsg: 'Your Password has been set'
        },
        emailTemplates: {
            welcomeToSafe: {
                subject: 'Welcome to SAFE!',
                content: (userObject, spaceBeforeMiddleName = '') =>
                    `Hello ${userObject.firstName}${spaceBeforeMiddleName}${userObject.middleName} ${userObject.lastName},<br><br>A request was just made to allow ${userObject.emailEncoded} access to the SAFE system. Before you can continue you need to verify the request.`,
            }
        },
    },
    tasks: {
        emailTemplates: {
            taskCreated: {
                subject: 'Notice: Task notification',
                content1: (taskObject) =>
                    // `has been created by ${taskObject.createdBy}. <a href=\\"https://pentest.trackerproducts.com/#/view-task/483284\\">Click here to view the Task</a><br /><br /><b>Title:</b> ${taskObject.title}<br/><b>Message:</b> ${taskObject.message}<br/><b>Status:</b> New<br/><b>Due Date:</b> ${taskObject.dueDate}`,
                    `Click here to view the Task</a><br /><br /><b>Title:</b> ${taskObject.title}<br/><b>Message:</b> ${taskObject.message}<br/><b>Status:</b> New<br/><b>Due Date:</b> ${taskObject.dueDate}`,
                content2: (assignedTo) =>
                    `Assigned to:</b> ${assignedTo}<br/>`
            },
            taskCreated_noDetails: {
                subject: 'Notice: Task notification',
                content1: (taskObject) =>
                   `has been created by ${taskObject.createdBy}. <a href=\\"https://`,
                content2: () =>
                    `Click here to view the Task</a>`
            },
        },
    },
    workflows: {
        types: {
            items: 'items',
            cases: 'cases'
        },
        executeWhen: {
            created: 'Created',
            edited: 'Edited',
            createdOrEdited: 'Created or Edited',
            fieldEdited: 'Field Edited',
            customFieldEdited: 'Custom Field Edited',
        },
        whichRecords: {
            all: 'All',
            matchingCriteria: 'Matching Criteria:',
            matchingCriteriaCustomField: 'Matching Criteria Custom Field',
            filterByOffice: 'Filter by office',
        },
        itemCreated: {
            subject: 'Item Created',
            content: (itemObject) =>
                `<h1>Item Created</h1>A new item with barcode <b>${itemObject.barcode}</b> has been added into your system by <b>${itemObject.submittedByName} (${itemObject.submittedById})</b>.<br><br><b>Primary Case:</b> ${itemObject.caseNumber}<br><b>Item Number:</b> ${itemObject.sequentialCaseId}<br><b>Item Location:</b> ${itemObject.location}<br><b>Item Description:</b> ${itemObject.description}`
        },
        itemEdited: {
            subject: 'Item Edited',
            content: (itemObject) =>
                `<h1>Item Edited</h1>Item with barcode <b>${itemObject.barcode}</b> edited by user <b>${itemObject.submittedByName} (${itemObject.submittedById})</b>.<br><br><b>Primary Case:</b> ${itemObject.caseNumber}<br><b>Item Number:</b> ${itemObject.sequentialCaseId}<br><b>Item Location:</b> ${itemObject.location}<br><b>Item Description:</b> ${itemObject.description}`
        },
        itemFieldEdited: {
            subject: 'Item Field Edited',
            content: (itemObject, fieldEdited) =>
                `Item with barcode ${itemObject.barcode} edited field ${fieldEdited} by user ${itemObject.submittedByName} (${itemObject.submittedById})</b>.<br><br><b>Primary Case:</b> ${itemObject.caseNumber}<br><b>Item Number:</b> ${itemObject.sequentialCaseId}<br><b>Item Location:</b> ${itemObject.location}<br><b>Item Description:</b> ${itemObject.description}`
        },
        itemCustomFieldEdited: {
            subject: 'Item Custom Field Edited',
            content: (itemObject, fieldEdited) =>
                `Item with barcode ${itemObject.barcode} edited custom field ${fieldEdited} by user ${itemObject.submittedByName} (${itemObject.submittedById})</b>.<br><br><b>Primary Case:</b> ${itemObject.caseNumber}<br><b>Item Number:</b> ${itemObject.sequentialCaseId}<br><b>Item Location:</b> ${itemObject.location}<br><b>Item Description:</b> ${itemObject.description}`
        },
        caseCreated: {
            subject: 'Case Created',
            content: (caseObject) =>
                `Case created with number ${caseObject.caseNumber} by user ${caseObject.submittedByName} (${caseObject.submittedById})`
        },
        caseEdited: {
            subject: 'Case Edited',
            content: (caseObject) =>
                `Case with number ${caseObject.caseNumber} edited by user ${caseObject.submittedByName} (${caseObject.submittedById})`
        },
        caseFieldEdited: {
            subject: 'Case Field Edited',
            content: (caseObject, fieldEdited) =>
                `Case with number ${caseObject.caseNumber} edited field ${fieldEdited} by user ${caseObject.submittedByName} (${caseObject.submittedById})`
        },
        caseCustomFieldEdited: {
            subject: 'Case Custom Field Edited',
            content: (caseObject, fieldEdited) =>
                `Case with number ${caseObject.caseNumber} edited custom field ${fieldEdited} by user ${caseObject.submittedByName} (${caseObject.submittedById})`
        },
        actionToPerform: {
            email: 'Email',
            SMS: 'SMS',
        },
        operators: {
            equals: '=',
            notEquals: '!=',
        }
    },
    CLP: {
        cannot_set_CLP: `    Cannot Set Case Level Permissions
    Permissions cannot be applied: `,
        items_belong_to_several_cases: `There are Item(s) that belong to several cases:`,
        addingItemIsForbidden: 'Adding item is forbidden. Item belongs to a restricted case',
        changingPrimaryCaseIsForbidden: 'Changing Primary Case for restricted items is not allowed',
        managingCasesIsForbidden: 'Managing Cases is forbidden. Item belongs to the restricted case.',
        access_allowed_based_on_office_permissions: `Case is available to the Users according to their Office permissions`,
        cannot_display_case_due_to_CLP: `This Case cannot be displayed, you do not have access to view this Case.`,
        cannot_display_item_due_to_CLP: `This item cannot be displayed, you do not have access to view this item.`,
        cannot_display_task_due_to_CLP: `This Task cannot be displayed, you do not have access to view this Task.`,
        noPermissionsToAddItemsToCase: `You do not have permissions to add Items to this Case`,
        caseLevelPermissionsForGroups: `Note - you will be applying case level permissions to all users (in all offices) for the following groups:`,
    },
};

C.labels = {
    dashboard: {
        title: 'Dashboard'
    },
    addCase: {
        title: 'Add Case'
    },
    addItem: {
        title: 'Add Item',
        confirmItemDuplication: 'Confirm Item Duplication',
        confirmItemSplit: 'Confirm Item Split',
    },
    addPerson: {
        title: 'Add Person'
    },
    caseView: {
        title: 'Case View'
    },
    itemView: {
        title: 'Item View'
    },
    personView: {
        title: 'Person View'
    },
    tasksPage: {
        title: 'Tasks'
    },
    userAdmin: {
        title: 'User Admin'
    },
    organization: {
        title: 'Org Settings',
        tabs: {
            orgSettings: 'Org Settings',
            autoDisposition: 'Auto Disposition',
        }
    },
    storageLocations: {
        title: 'Storage Locations',
    },
    discrepancyReports: {
        summaryTableColumns: {
            totalActiveItems: 'Total Active Items In Scanned Locations:',
            locationsScanned: 'Locations Scanned',
            itemsScanned: 'Items Scanned',
            discrepanciesFound: 'Discrepancies Found'
        },
        title: 'Discrepancy Reports',
        noDiscrepanciesFound: 'No Discrepancies Found',
        wrongStorageLocation: numberOfItems => `Wrong Storage Location (${numberOfItems}):`,
        containersInWrongLocation: numberOfItems => `Containers in Wrong Location (${numberOfItems}):`,
        containersNotScanned: numberOfItems => `Containers Not Scanned (${numberOfItems}):`,
        itemsNotScanned: numberOfItems => `Not Scanned (${numberOfItems}):`,
    },
    autoDisposition: {
        casesWithNoReviewDate: numberOfCases => `Open Cases with NO Review Date: ${numberOfCases}`,
        casesWithReviewDatePastDue: numberOfCases => `Open Cases with Review Date PAST DUE: ${numberOfCases}`,
        casesWithUpcomingReviewDate: numberOfCases => `Open Cases with UPCOMING Review Date: ${numberOfCases}`,
        casesWithoutItems: numberOfCases => `There are ${numberOfCases} Cases without Items or with all disposed Items.`,
        casesWithoutTasks: numberOfCases => `There are ${numberOfCases} Cases with Review Date in the past and without open Tasks.`,
        updateCases: ['Update Cases', 'Review Date', 'Distribute Between', 'Review Date Notes', 'Update in Order?', 'Order By Offense Date'],
        pleaseWait: `Please wait while updated review dates are applied.`,
        casesToBeClosed: caseNumber =>
            [`Cases to be closed:`,
                caseNumber],
        viewCases: `View Cases`,
        calculatingCasesToDispose: `Calculating cases to close...`,
        lastCasesCalculation: numberOfCases => [
            `Last Cases Calculation Date:`,
            `${helper.getCurrentDateInCurrentFormat(C.currentDateTimeFormat.dateOnly)}`,
            `Cases amount: ${numberOfCases}`],
    },
    workflows: {
        title: 'Workflows'
    },
    systemServices: {
        title: 'System Services'
    },
    userSettings: {
        title: 'User Settings'
    },
    importer: {
        notes: {
            validationMsgs: {
                notMapped: [
                    'User GUID field is not mapped',
                    'Case Number field is not mapped',
                    'Office GUID field is not mapped',
                    'Date field is not mapped',
                    'Text field is not mapped',
                    'Either the Item Id or the Item GUID MUST be mapped!'
                ],
                wronglyFormattedValues: [
                    'Row #2 has Error: Field UserGUID. Cannot use $ as GUID.',
                    'Row #2 has Error: Field ItemID. Value \'$\' is not in a recognizable format.',
                    'Row #2 has Error: Field OfficeGUID. Cannot use $ as GUID.',
                ],
                invalidValues: [
                    'Row #2 has Error: Field UserGUID. User not found',
                    'Row #2 has Error: The note is neither Case nor Item',
                    'Field OfficeGUID. Office not found',
                    'Row #2 has Error: Field Date. Date \'02032022\' is not in the proper format.',
                    'Row #2 has Error: Field CaseNumber. Case \'non-existing case number>>\' not found.',
                ],
                blankValues: [
                    'Row #2 has Error: Field UserGUID. Cannot use <blank value> as GUID.',
                    'Row #2 has Error: Field OfficeGUID. Cannot use <blank value> as GUID.',
                    'Row #2 has Error: Field Date. Date is empty.',
                    'Row #2 has Error: Field Text is empty.',
                    'Row #2 has Error: Field CaseNumber. Case number invalid format.',
                    'Row #2 has Error: The note is neither Case nor Item',
                ]
            }
        },
        legacyCoC: {
            validationMsgs: {
                notMapped: [
                    'Type field is not mapped!',
                    'IssuedFrom field is not mapped!',
                    'IssuedTo field is not mapped!',
                    'Location field is not mapped!',
                    'Office field is not mapped!',
                    'Notes field is not mapped!',
                    'TransactionDate field is not mapped!',
                    'TransactionActivityDate field is not mapped!',
                    'Either the Item Id or the Item GUID MUST be mapped!',
                ],
                wronglyFormattedValues: [
                    'Row #2 has Error: Field ItemId. Value \'$\' is not in a recognizable format.',
                    'Row #2 has Error: Field CustodyId. Value \'$\' is not in a recognizable format.',
                    'Row #2 has Error: Field LogNum. Value \'$\' is not in a recognizable format.',
                    'Row #2 has Error: Field ItemNum. Value \'$\' is not in a recognizable format.',
                    'Row #2 has Error: Field TransactionDate. Date \'$\' is not in the proper format.',
                    'Row #2 has Error: Field TransactionActivityDate. Date \'$\' is not in the proper format.',
                ],
                invalidValues: [
                    'Row #2 has Error: Field ItemGUID. Cannot use invalidbarcode as GUID.',
                ],
                blankValues: [
                    'Row #2 has Error: Field TransactionDate. Date is empty.',
                    'Row #2 has Error: Field TransactionActivityDate. Date is empty.'
                ]
            }
        }
    },
}

C.pages = {
    caseSearch: {
        numberOfStandardColumns: 17,
        numberOfStandardColumnsReduced: 10,
    },
    itemSearch: {
        numberOfStandardColumns: 39,
        numberOfStandardColumnsReduced: 26,
    },
    peopleSearch: {
        numberOfStandardColumns: 19,
        numberOfStandardColumnsReduced: 6,
    },
    userAdmin: {
        numberOfStandardColumns: 24
    }
}

C.perissionMatrixEntity = {
    cases: 4,
    items: 5,
    media: 7,
    shareMedia: 44,
    thumbnails: 36,
    notes: 27,
    people: 11,
    checkins: 16,
    checkout: 17,
    disposals: 19,
    move: 20,
    transfers: 18,
    tasks: 14,
    userAdmin: 10,
    storageLocation: 6,
    autoDispo: 32,
    discrepancyReports: 34,
    randomAudits: 45,
    imports: 35,
    tags: 8,
    tagGroups: 43,
}

C.permissionMatrixAccessType = {
    viewAll: 1,
    viewIfOwner: 9,
    create: 4,
    updateAll: 3,
    updateIfOwner: 14,
    createOrgTag: 11,
    createGroupTag: 12,
    createPersonalTag: 13,
    attachOrgTag: 4,
    detachOrgTag: 5
}

C.customForms = {
    casesFormWithRequiredFields: 'Required fields - Cypress Cases Form',
    casesFormWithOptionalFields: 'Optional fields - Cypress Cases Form',

    itemsFormWithRequiredFields: 'Required fields - Cypress Items Form',
    itemsFormWithOptionalFields: 'Optional fields - Cypress Items Form',

    usersFormWithRequiredFields: 'Required fields - Cypress Users Form',
    usersFormWithOptionalFields: 'Optional fields - Cypress Users Form',

    peopleFormWithRequiredFields: 'Required fields - Cypress People Form',
    peopleFormWithOptionalFields: 'Optional fields - Cypress People Form',

    // tasksFormWithRequiredFields: 'Cypress Task Form -- required fields',
    // tasksFormWithOptionalFields: 'Cypress Task Form -- optional fields'
}

C.placeholders = {
    dashboard: {},
    addCase: {
        enterUser: 'Users...',
        offenseLocation: 'offense location',
        offenseDescription: 'offense description',
        reviewDateNotes: 'Review Date Notes',
        addTags: 'Enter Tag Name',
    },
    addItem: {
        recoveryLocation: 'recovery location',
        itemDescription: 'item description',
        itemSerialNumber: 'item serial number',
        itemBelongsTo: 'Find persons to search for',
        addTags: 'Enter Tag Name',
        storageLocation: 'type ‘/‘ or start typing a location name',
    },
    addPerson: {
        businessName: 'Business Name',
        firstName: 'First Name',
        middleName: 'Middle Name',
        lastName: 'Last Name',
        alias: 'Alias',
        driversLicense: 'Driver\'s License',
        mobilePhone: 'e.g. +387 30 123-456',
        otherPhone: 'e.g. +387 30 123-456',
        email: 'Email',
    },
    tasksPage: {}
};

C.postSaveActions = {
    addCase: 'Add a Case',
    addItem: 'Add an Item',
    addPerson: 'Add a Person',
    viewAddedCase: 'View Added Case',
    viewCase: 'View Case',
    viewAddedItem: 'View Added Item',
    viewAddedPerson: 'View Added Person',
    addMediaForTheCase: 'Add Media for the Case',
    addNoteForTheCase: 'Add a Note for the Case',
    addMediaForTheItem: 'Add Media for the Item',
    addNoteForTheItem: 'Add a Note for the Item',
    viewItemsInCase: 'View All Items in the Case',
    duplicateItem: 'Duplicate the Item',
    splitItem: 'Split the Item'
};

C.currentDateFormat = DF.dateFormats.shortDate;
C.currentDateTimeFormat = DF.dateTimeFormats.short;
C.currentDate_inCurrentFormat = helper.getCurrentDateInSpecificFormat(C.currentDateTimeFormat.mask);
C.currentDate_In_ISO_Format = helper.getCurrentDateAndTimeInIsoFormat();
C.currentDateTimeFormat_dateOnly = C.currentDateTimeFormat.dateOnly;

module.exports = C;
