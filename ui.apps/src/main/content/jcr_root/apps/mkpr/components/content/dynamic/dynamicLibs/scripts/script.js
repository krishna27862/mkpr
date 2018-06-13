(function($){
    var LAST_VALUE = "empty";

    var PROPERTIES = {
        IMAGE: "image",
        COLOR: "color",
        PARENT_CLASS: ".dynamicstyle",
        IMAGE_CLASS:".backgroundimage",
        COLOR_CLASS:".backgroundcolor"
    };


        $(document).on("foundation-contentloaded", function(){
                LAST_VALUE = currentNodeCheck();
                LAST_VALUE = dynamicCheck();
                $(PROPERTIES.PARENT_CLASS).change(function(){
                LAST_VALUE = dynamicCheck();
           });
        });
    function currentNodeCheck(){
          $("div[datanodeid]").children("div#"+LAST_VALUE, function(){
                if(this.attr() == ''){
                return this.attr("id");
                }
          });
         }

    function dynamicCheck() {
        var VALUE = $(PROPERTIES.PARENT_CLASS+" input[name='./backgroundstyle']").val() || LAST_VALUE;
        if (VALUE == PROPERTIES.IMAGE ) {
            $(PROPERTIES.IMAGE_CLASS).show();
            $(PROPERTIES.COLOR_CLASS).hide();
        } else if (VALUE == PROPERTIES.COLOR) {
            $(PROPERTIES.IMAGE_CLASS).hide();
            $(PROPERTIES.COLOR_CLASS).show();

        } else{
            $(PROPERTIES.IMAGE_CLASS+ "," +PROPERTIES.COLOR_CLASS).hide();
        }
        return VALUE;
    }

})(Granite.$);
