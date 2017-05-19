$(document).ready(function() {
           var btn= "";
           $("button").click(function() {
                   var num=$(this).text();

                    if(num!=="=")
                    {
                             if (num!=="Clear")
                             {
                                   btn+=num;
                                   $(".txt").val(btn);
                             }
                             else
                             {
                                   $(".txt").val("").focus();
                                   btn="";
                             }
                      }

                    else {
                            var result=eval( $(".txt").val() );
                            $(".txt").val(result);
                            btn="";

                          }
           });
});
