/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Network, {
        /// <field>
        /// Called when a new network is created.
        /// <br/>created(msls.application.Network entity)
        /// </field>
        created: [lightSwitchApplication.Network]
    });

    msls._addEntryPoints(lightSwitchApplication.Practice, {
        /// <field>
        /// Called when a new practice is created.
        /// <br/>created(msls.application.Practice entity)
        /// </field>
        created: [lightSwitchApplication.Practice]
    });

    msls._addEntryPoints(lightSwitchApplication.Provider, {
        /// <field>
        /// Called when a new provider is created.
        /// <br/>created(msls.application.Provider entity)
        /// </field>
        created: [lightSwitchApplication.Provider]
    });

}(msls.application));
