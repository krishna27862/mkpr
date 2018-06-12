function dynamicCheck(PROPERTIES) {
    var VALUE = $(PROPERTIES.PARENT_CLASS).children("input")[0].value;
    if ( VALUE == PROPERTIES.IMAGE) {
        $(PROPERTIES.IMAGE_CLASS).show();
        $(PROPERTIES.COLOR_CLASS).hide();
    } else if (VALUE == PROPERTIES.COLOR) {
        $(PROPERTIES.IMAGE_CLASS).hide();
        $(PROPERTIES.COLOR_CLASS).show();

    } else{
        $(PROPERTIES.IMAGE_CLASS+ "," +PROPERTIES.COLOR_CLASS).hide();
    }
}


(function($, $document) {
    "use strict";
var PROPERTIES = {
    IMAGE: "image",
    COLOR: "color",
    PARENT_CLASS: ".dynamicstyle",
    IMAGE_CLASS:".backgroundimage",
    COLOR_CLASS:".backgroundcolor"
};
    $document.on("dialog-ready", function() {
        dynamicCheck(PROPERTIES);
        $(PROPERTIES.PARENT_CLASS).change(function(){
        dynamicCheck(PROPERTIES)
        });
    });

})($, $(document));

