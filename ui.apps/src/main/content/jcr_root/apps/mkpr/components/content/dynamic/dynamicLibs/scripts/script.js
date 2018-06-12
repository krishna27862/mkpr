/*(function($, $document) {
"use strict";

$document.on("dialog-ready", function() {
var PROPERTIES = {
IMAGE: "image",
COLOR: "color",
PARENT_CLASS: ".dynamicstyle",
IMAGE_CLASS:".backgroundimage",
COLOR_CLASS:".backgroundcolor"
};
dynamicCheck(PROPERTIES);
$(PROPERTIES.PARENT_CLASS).change(function(){
dynamicCheck(PROPERTIES)
});
});

})($, $(document));*/
var PROPERTIES = {
    IMAGE: "image",
    COLOR: "color",
    PARENT_CLASS: ".dynamicstyle",
    IMAGE_CLASS:".backgroundimage",
    COLOR_CLASS:".backgroundcolor"
};
$(document).on("foundation-contentloaded", function(){

        dynamicCheck(PROPERTIES);
       	$(PROPERTIES.PARENT_CLASS).change(function(){
        dynamicCheck(PROPERTIES)
    });

});
function dynamicCheck(PROPERTIES) {
    var VALUE = $(PROPERTIES.PARENT_CLASS).children("input")[0].value;
    
    if ( $(PROPERTIES.PARENT_CLASS).children("input")[0].value == PROPERTIES.IMAGE) {
        $(PROPERTIES.IMAGE_CLASS).show();
        $(PROPERTIES.COLOR_CLASS).hide();
    } else if ($(PROPERTIES.PARENT_CLASS).children("input")[0].value == PROPERTIES.COLOR) {
        $(PROPERTIES.IMAGE_CLASS).hide();
        $(PROPERTIES.COLOR_CLASS).show();
        
    } else{
        $(PROPERTIES.IMAGE_CLASS+ "," +PROPERTIES.COLOR_CLASS).hide();
    }
}
