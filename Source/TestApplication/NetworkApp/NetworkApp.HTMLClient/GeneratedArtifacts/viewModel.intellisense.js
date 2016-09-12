/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditPracticeScreen.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPracticeScreen
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPracticeScreen,
            data: lightSwitchApplication.AddEditPracticeScreen,
            value: lightSwitchApplication.AddEditPracticeScreen
        },
        Practice: {
            _$class: msls.ContentItem,
            _$name: "Practice",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditPracticeScreen,
            data: lightSwitchApplication.AddEditPracticeScreen,
            value: lightSwitchApplication.Practice
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "Practice",
            screen: lightSwitchApplication.AddEditPracticeScreen,
            data: lightSwitchApplication.Practice,
            value: Number
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Practice",
            screen: lightSwitchApplication.AddEditPracticeScreen,
            data: lightSwitchApplication.Practice,
            value: String
        },
        Address1: {
            _$class: msls.ContentItem,
            _$name: "Address1",
            _$parentName: "Practice",
            screen: lightSwitchApplication.AddEditPracticeScreen,
            data: lightSwitchApplication.Practice,
            value: String
        },
        Address2: {
            _$class: msls.ContentItem,
            _$name: "Address2",
            _$parentName: "Practice",
            screen: lightSwitchApplication.AddEditPracticeScreen,
            data: lightSwitchApplication.Practice,
            value: String
        },
        City: {
            _$class: msls.ContentItem,
            _$name: "City",
            _$parentName: "Practice",
            screen: lightSwitchApplication.AddEditPracticeScreen,
            data: lightSwitchApplication.Practice,
            value: String
        },
        State: {
            _$class: msls.ContentItem,
            _$name: "State",
            _$parentName: "Practice",
            screen: lightSwitchApplication.AddEditPracticeScreen,
            data: lightSwitchApplication.Practice,
            value: String
        },
        Country: {
            _$class: msls.ContentItem,
            _$name: "Country",
            _$parentName: "Practice",
            screen: lightSwitchApplication.AddEditPracticeScreen,
            data: lightSwitchApplication.Practice,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPracticeScreen
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPracticeScreen, {
        /// <field>
        /// Called when a new AddEditPracticeScreen screen is created.
        /// <br/>created(msls.application.AddEditPracticeScreen screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPracticeScreen],
        /// <field>
        /// Called before changes on an active AddEditPracticeScreen screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPracticeScreen screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPracticeScreen],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditPracticeScreen().findContentItem("Group"); }],
        /// <field>
        /// Called after the Practice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Practice_postRender: [$element, function () { return new lightSwitchApplication.AddEditPracticeScreen().findContentItem("Practice"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.AddEditPracticeScreen().findContentItem("Id"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditPracticeScreen().findContentItem("Name"); }],
        /// <field>
        /// Called after the Address1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPracticeScreen().findContentItem("Address1"); }],
        /// <field>
        /// Called after the Address2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address2_postRender: [$element, function () { return new lightSwitchApplication.AddEditPracticeScreen().findContentItem("Address2"); }],
        /// <field>
        /// Called after the City content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        City_postRender: [$element, function () { return new lightSwitchApplication.AddEditPracticeScreen().findContentItem("City"); }],
        /// <field>
        /// Called after the State content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        State_postRender: [$element, function () { return new lightSwitchApplication.AddEditPracticeScreen().findContentItem("State"); }],
        /// <field>
        /// Called after the Country content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Country_postRender: [$element, function () { return new lightSwitchApplication.AddEditPracticeScreen().findContentItem("Country"); }]
    });

    lightSwitchApplication.BrowsePracticeScreens.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePracticeScreens
        },
        PracticeScreenList: {
            _$class: msls.ContentItem,
            _$name: "PracticeScreenList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePracticeScreens,
            data: lightSwitchApplication.BrowsePracticeScreens,
            value: lightSwitchApplication.BrowsePracticeScreens
        },
        Practices: {
            _$class: msls.ContentItem,
            _$name: "Practices",
            _$parentName: "PracticeScreenList",
            screen: lightSwitchApplication.BrowsePracticeScreens,
            data: lightSwitchApplication.BrowsePracticeScreens,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePracticeScreens,
                _$entry: {
                    elementType: lightSwitchApplication.Practice
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Practices",
            screen: lightSwitchApplication.BrowsePracticeScreens,
            data: lightSwitchApplication.Practice,
            value: lightSwitchApplication.Practice
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowsePracticeScreens,
            data: lightSwitchApplication.Practice,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowsePracticeScreens,
            data: lightSwitchApplication.Practice,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePracticeScreens
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePracticeScreens, {
        /// <field>
        /// Called when a new BrowsePracticeScreens screen is created.
        /// <br/>created(msls.application.BrowsePracticeScreens screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePracticeScreens],
        /// <field>
        /// Called before changes on an active BrowsePracticeScreens screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePracticeScreens screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePracticeScreens],
        /// <field>
        /// Called after the PracticeScreenList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PracticeScreenList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePracticeScreens().findContentItem("PracticeScreenList"); }],
        /// <field>
        /// Called after the Practices content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Practices_postRender: [$element, function () { return new lightSwitchApplication.BrowsePracticeScreens().findContentItem("Practices"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowsePracticeScreens().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowsePracticeScreens().findContentItem("Name"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.BrowsePracticeScreens().findContentItem("Id"); }]
    });

    lightSwitchApplication.ViewPracticeScreen.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewPracticeScreen
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewPracticeScreen,
            data: lightSwitchApplication.ViewPracticeScreen,
            value: lightSwitchApplication.ViewPracticeScreen
        },
        Practice: {
            _$class: msls.ContentItem,
            _$name: "Practice",
            _$parentName: "Group",
            screen: lightSwitchApplication.ViewPracticeScreen,
            data: lightSwitchApplication.ViewPracticeScreen,
            value: lightSwitchApplication.Practice
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "Practice",
            screen: lightSwitchApplication.ViewPracticeScreen,
            data: lightSwitchApplication.Practice,
            value: Number
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Practice",
            screen: lightSwitchApplication.ViewPracticeScreen,
            data: lightSwitchApplication.Practice,
            value: String
        },
        Address1: {
            _$class: msls.ContentItem,
            _$name: "Address1",
            _$parentName: "Practice",
            screen: lightSwitchApplication.ViewPracticeScreen,
            data: lightSwitchApplication.Practice,
            value: String
        },
        Address2: {
            _$class: msls.ContentItem,
            _$name: "Address2",
            _$parentName: "Practice",
            screen: lightSwitchApplication.ViewPracticeScreen,
            data: lightSwitchApplication.Practice,
            value: String
        },
        City: {
            _$class: msls.ContentItem,
            _$name: "City",
            _$parentName: "Practice",
            screen: lightSwitchApplication.ViewPracticeScreen,
            data: lightSwitchApplication.Practice,
            value: String
        },
        State: {
            _$class: msls.ContentItem,
            _$name: "State",
            _$parentName: "Practice",
            screen: lightSwitchApplication.ViewPracticeScreen,
            data: lightSwitchApplication.Practice,
            value: String
        },
        Country: {
            _$class: msls.ContentItem,
            _$name: "Country",
            _$parentName: "Practice",
            screen: lightSwitchApplication.ViewPracticeScreen,
            data: lightSwitchApplication.Practice,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewPracticeScreen
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewPracticeScreen, {
        /// <field>
        /// Called when a new ViewPracticeScreen screen is created.
        /// <br/>created(msls.application.ViewPracticeScreen screen)
        /// </field>
        created: [lightSwitchApplication.ViewPracticeScreen],
        /// <field>
        /// Called before changes on an active ViewPracticeScreen screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewPracticeScreen screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewPracticeScreen],
        /// <field>
        /// Called to determine if the Method method can be executed.
        /// <br/>canExecute(msls.application.ViewPracticeScreen screen)
        /// </field>
        Method_canExecute: [lightSwitchApplication.ViewPracticeScreen],
        /// <field>
        /// Called to execute the Method method.
        /// <br/>execute(msls.application.ViewPracticeScreen screen)
        /// </field>
        Method_execute: [lightSwitchApplication.ViewPracticeScreen],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.ViewPracticeScreen().findContentItem("Group"); }],
        /// <field>
        /// Called after the Practice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Practice_postRender: [$element, function () { return new lightSwitchApplication.ViewPracticeScreen().findContentItem("Practice"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.ViewPracticeScreen().findContentItem("Id"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewPracticeScreen().findContentItem("Name"); }],
        /// <field>
        /// Called after the Address1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address1_postRender: [$element, function () { return new lightSwitchApplication.ViewPracticeScreen().findContentItem("Address1"); }],
        /// <field>
        /// Called after the Address2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address2_postRender: [$element, function () { return new lightSwitchApplication.ViewPracticeScreen().findContentItem("Address2"); }],
        /// <field>
        /// Called after the City content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        City_postRender: [$element, function () { return new lightSwitchApplication.ViewPracticeScreen().findContentItem("City"); }],
        /// <field>
        /// Called after the State content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        State_postRender: [$element, function () { return new lightSwitchApplication.ViewPracticeScreen().findContentItem("State"); }],
        /// <field>
        /// Called after the Country content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Country_postRender: [$element, function () { return new lightSwitchApplication.ViewPracticeScreen().findContentItem("Country"); }]
    });

}(msls.application));