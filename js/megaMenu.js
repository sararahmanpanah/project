megaMenu( $( ".make-up" ) , $( ".mega-menu-make-up" ) );
megaMenu( $( ".sanitary" ) , $( ".mega-menu-sanitary" ) );
megaMenu( $( ".skin" ) , $( ".mega-menu-skin" ) );
megaMenu( $( ".hair" ) , $( ".mega-menu-hair" ) );
megaMenu( $( ".Perfume" ) , $( ".mega-menu-Perfume" ) );

function megaMenu(object,megaMenuViewner){
    object.hover( function () {
        megaMenuViewner.toggle("slow");
    }); 
};