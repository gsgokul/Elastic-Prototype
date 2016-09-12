/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function ViewPracticeScreen(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewPracticeScreen screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Practice" type="msls.application.Practice">
        /// Gets or sets the practice for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewPracticeScreen.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewPracticeScreen", parameters);
    }

    function BrowsePracticeScreens(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePracticeScreens screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Practices" type="msls.VisualCollection" elementType="msls.application.Practice">
        /// Gets the practices for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePracticeScreens.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePracticeScreens", parameters);
    }

    function AddEditPracticeScreen(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPracticeScreen screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Practice" type="msls.application.Practice">
        /// Gets or sets the practice for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPracticeScreen.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPracticeScreen", parameters);
    }

    msls._addToNamespace("msls.application", {

        ViewPracticeScreen: $defineScreen(ViewPracticeScreen, [
            { name: "Practice", kind: "local", type: lightSwitchApplication.Practice }
        ], [
            { name: "Method" }
        ]),

        BrowsePracticeScreens: $defineScreen(BrowsePracticeScreens, [
            {
                name: "Practices", kind: "collection", elementType: lightSwitchApplication.Practice,
                createQuery: function () {
                    return this.dataWorkspace.NetworkData.Practices;
                }
            }
        ], [
        ]),

        AddEditPracticeScreen: $defineScreen(AddEditPracticeScreen, [
            { name: "Practice", kind: "local", type: lightSwitchApplication.Practice }
        ], [
        ]),

        showViewPracticeScreen: $defineShowScreen(function showViewPracticeScreen(Practice, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewPracticeScreen screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewPracticeScreen", parameters, options);
        }),

        showBrowsePracticeScreens: $defineShowScreen(function showBrowsePracticeScreens(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePracticeScreens screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePracticeScreens", parameters, options);
        }),

        showAddEditPracticeScreen: $defineShowScreen(function showAddEditPracticeScreen(Practice, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPracticeScreen screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPracticeScreen", parameters, options);
        })

    });

}(msls.application));
