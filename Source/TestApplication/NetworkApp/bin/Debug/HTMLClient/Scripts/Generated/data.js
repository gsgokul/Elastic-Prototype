/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Network(entitySet) {
        /// <summary>
        /// Represents the Network entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this network.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this network.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this network.
        /// </field>
        /// <field name="CreateDate" type="Date">
        /// Gets or sets the createDate for this network.
        /// </field>
        /// <field name="details" type="msls.application.Network.Details">
        /// Gets the details for this network.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Practice(entitySet) {
        /// <summary>
        /// Represents the Practice entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this practice.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this practice.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this practice.
        /// </field>
        /// <field name="CreateDate" type="Date">
        /// Gets or sets the createDate for this practice.
        /// </field>
        /// <field name="Address1" type="String">
        /// Gets or sets the address1 for this practice.
        /// </field>
        /// <field name="Address2" type="String">
        /// Gets or sets the address2 for this practice.
        /// </field>
        /// <field name="City" type="String">
        /// Gets or sets the city for this practice.
        /// </field>
        /// <field name="State" type="String">
        /// Gets or sets the state for this practice.
        /// </field>
        /// <field name="Country" type="String">
        /// Gets or sets the country for this practice.
        /// </field>
        /// <field name="details" type="msls.application.Practice.Details">
        /// Gets the details for this practice.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };

    function NetworkData(dataWorkspace) {
        /// <summary>
        /// Represents the NetworkData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Networks" type="msls.EntitySet">
        /// Gets the Networks entity set.
        /// </field>
        /// <field name="Practices" type="msls.EntitySet">
        /// Gets the Practices entity set.
        /// </field>
        /// <field name="details" type="msls.application.NetworkData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="NetworkData" type="msls.application.NetworkData">
        /// Gets the NetworkData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Network: $defineEntity(Network, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "CreateDate", type: Date }
        ]),

        Practice: $defineEntity(Practice, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "CreateDate", type: Date },
            { name: "Address1", type: String },
            { name: "Address2", type: String },
            { name: "City", type: String },
            { name: "State", type: String },
            { name: "Country", type: String }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
        ], [
        ]),

        NetworkData: $defineDataService(NetworkData, lightSwitchApplication.rootUri + "/NetworkData.svc", [
            { name: "Networks", elementType: Network },
            { name: "Practices", elementType: Practice }
        ], [
            {
                name: "Networks_SingleOrDefault", value: function (Id, Name, CreateDate) {
                    return new $DataServiceQuery({ _entitySet: this.Networks },
                        lightSwitchApplication.rootUri + "/NetworkData.svc" + "/Networks(" + "Id=" + $toODataString(Id, "Int32?") + "," + "Name=" + $toODataString(Name, "String?") + "," + "CreateDate=" + $toODataString(CreateDate, "DateTime?") + ")"
                    );
                }
            },
            {
                name: "Practices_SingleOrDefault", value: function (Id, Name, CreateDate) {
                    return new $DataServiceQuery({ _entitySet: this.Practices },
                        lightSwitchApplication.rootUri + "/NetworkData.svc" + "/Practices(" + "Id=" + $toODataString(Id, "Int32?") + "," + "Name=" + $toODataString(Name, "String?") + "," + "CreateDate=" + $toODataString(CreateDate, "DateTime?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData },
            { name: "NetworkData", type: NetworkData }
        ])

    });

}(msls.application));
