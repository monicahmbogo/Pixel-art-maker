
 // Select color input
 // Select size input
 

 // When size is submitted by the user, call makeGrid()

 
    $('#sizePicker').submit(function (event) {
        event.preventDefault();
        var rows = $('#inputHeight').val();
        var columns = $('#inputWeight').val();  
    makeGrid(rows, columns);
    })

function makeGrid(h,w) {
     $('tr').remove();

    // Your code goes here!

    for(var i=1; i<=h;i++){
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
       for(var j=1; j<=w ;j++){
         $('#table' + i).append('<td></td>');
        }   
    }
    $('td').click(function color() {
        var rangi =$('#colorPicker').val();

        if($(this).attr('style')) {
             $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + rangi);
        }
    });
}
