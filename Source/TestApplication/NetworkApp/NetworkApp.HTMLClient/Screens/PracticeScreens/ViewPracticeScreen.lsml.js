/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewPracticeScreen.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Practice.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Practice." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

