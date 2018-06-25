// When size is submitted by the user, call makeGrid()
    $('#sizePicker').submit(function (event) { 
        event.preventDefault(); //prevents default action (of submitting the form) allowing for the table to be created  
    makeGrid();
    })
    
function makeGrid() {
     $('tr').remove();
     // Select size of table by inputting height and width
     const rows = $('#inputHeight').val();
     const columns = $('#inputWeight').val();
     // Adds table cells
    for(let i=1; i<=rows ;i++){
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
       for(let j=1; j<=columns ;j++){
         $('#table' + i).append('<td></td>');
        }   
    }
     // selects color to input in the table cells
    $('td').click(function color() { 
        const rangi =$('#colorPicker').val();
        if($(this).attr('style')) {
             $(this).removeAttr('style')
         } else {
            $(this).attr('style', 'background-color:' + rangi);
        }
    });
}
