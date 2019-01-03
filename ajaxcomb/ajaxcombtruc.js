$('body').on('change', '.product-variants [data-product-attribute]', function () {
    console.log('sqdfqsdf');
  });

$.post( "http://www.ps17.com/en/index.php?controller=product?token=513da5211a63eb67e354a9e453c596ea&id_product=4&id_customization=0&group%5B3%5D=19&qty=1", "ajax=1&action=refresh&quantity_wanted=1",function( data ) {
  console.log(data);
});
