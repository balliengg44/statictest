$(function(){
	var employees =JSON.parse(localStorage.getItem("employees"));
    $("#gridContainer").dxDataGrid({
        dataSource: employees,
        columnHidingEnabled: true,
        keyExpr: "ID",
        showBorders: true,
        pager: {
            allowedPageSizes: [10, 25, 50, 100],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true
        },
        paging: {
            enabled: true,
			pageSize: 10
        },
        "export": {
            enabled: true,
            fileName: "Employees",
            allowExportSelectedData: true
        },
		sorting: {
			mode: "multiple"
		},
		allowColumnReordering : true,
		allowColumnResizing : true,
		filterRow: {
			visible: true
		},
		selection: {
			mode: "multiple"
		},
		groupPanel: {
			visible: true
		},
        editing: {
            mode: "popup",
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
			
        },
        columns: [
            {
                dataField: "Prefix",
                caption: "Title",
                width: 70,
                validationRules: [{ type: "required" }]
            },
            "FirstName",
            "LastName", {
                dataField: "Position",
                width: 170,
                validationRules: [{ type: "required" }]
            }, {
                dataField: "StateID",
                caption: "State",
                width: 125,
                validationRules: [{ type: "required" }],
                lookup: {
                    dataSource: JSON.parse(localStorage.getItem("states")),
                    displayExpr: "Name",
                    valueExpr: "ID"
                }
            },{
                dataField: "ManagerID",
                caption: "Manager",
                width: 125,
                validationRules: [{ type: "required" }],
                lookup: {
                    dataSource: employees,
                    displayExpr: "FirstName",
                    valueExpr: "ID"
                }
            }, {
                dataField: "BirthDate",
                dataType: "date",
                validationRules: [{ type: "required" }]
            }
        ],
        onEditingStart: function(e) {
            console.log("EditingStart");
        },
        onInitNewRow: function(e) {
			localStorage.setItem("employees", JSON.stringify(employees));
            console.log("InitNewRow");
        },
        onRowInserting: function(e) {
            console.log("RowInserting");
        },
        onRowInserted: function(e) {
			localStorage.setItem("employees", JSON.stringify(employees));
            console.log("RowInserted");
        },
        onRowUpdating: function(e) {
            console.log("RowUpdating");
        },
        onRowUpdated: function(e) {
			localStorage.setItem("employees", JSON.stringify(employees));
            console.log("RowUpdated");
        },
        onRowRemoving: function(e) {
            console.log("RowRemoving");
        },
        onRowRemoved: function(e) {
			localStorage.setItem("employees", JSON.stringify(employees));
            console.log("RowRemoved");
        }
    });
});