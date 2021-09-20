var arrStaff;
$.getJSON("https://www.swollenhippo.com/getStaffByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrStaff = result;
    buildEmployeeCard();

})

function buildEmployeeCard(){
    $.each(arrStaff,function(i,person){
            let strHTML = '<div class="card col-3 mt-5 ml-3">';
            strHTML += '<img src="images/lib/profile.png" alt="Avatar" style="margin:auto; max-width:100%;">';
            strHTML += '<div class="text-center">';
            strHTML += '<h3>' + person.FirstName + ' ' + person.LastName + '</a></h3>';
            strHTML += '<h4>' + person.Title +'<h/4>';
            strHTML += '</div>';
            strHTML += '<div>'
            strHTML += '<h4 class="mt-3">Contact Details<h/4>';
            strHTML += '</div>';
            strHTML += '<p>PhoneNumber: ' + person.HomePhone + '</p>';
            strHTML += '<p class=>Email: ' + person.Email + '</p>';
            strHTML += '<div>';
            strHTML += '<h4>Address<h/4>';
            strHTML += '</div>';
            strHTML += '<p>'+ person.StreetAddress1 +'</p>';
            strHTML += '<div>';
            strHTML += '<h4>Pay Details<h/4>';
            strHTML += '</div>';
            strHTML += '<p class="txtHourlyWage" data-rate="' + person.HourlyWage + '">Pay Rate:' + person.HourlyWage + '</p>';
            strHTML += '<p class="txtHours" data-hours="' + person.Hours + '">Hours Worked:' + person.Hours + '</p>';
            strHTML += '<p class="txtTaxRate" data-tax="' + person.TaxRate + '">Tax Rate:' + person.TaxRate + '</p>';
            strHTML += '<div class="form-group mb-0">';
            strHTML += '<label class="mr-2">GoalPay</label>';
            strHTML += '<input class="txtGoalPay">';
            strHTML += '</div>';
            strHTML += '<button class="btn btn-primary btn-block btnTotalPay">Find Hours for Goal</button>';
            strHTML += '</div>';
            $('#divNostalgiaEmployeeCards').append(strHTML);
            $('#tblNostalgiaEmployees tbody').append('<tr><td>' + person.FirstName + '</td><td>' + person.LastName + '</td><td>' + person.Title +'</td><td>' + (person.Hours * person.HourlyWage * (1-person.TaxRate)) + '</td></tr>');
    })
    $('#tblNostalgiaEmployees').DataTable();
}

$(document).on('click','.btnTotalPay',function(){
    let decHourlyWage = $(this).closest('.card').find('.txtHourlyWage').attr('data-rate');
    let decHours = $(this).closest('.card').find('.txtHours').attr('data-hours');
    let decTaxRate = $(this).closest('.card').find('.txtTaxRate').attr('data-tax');
    $(this).closest('.card').find('.txtGoalPay').val(decHourlyWage * decHours * decTaxRate);
});

function ToggleTableView() {
    $('#divTableContainer').slideToggle();
    $('#divNostalgiaEmployeeCards').slideToggle();
  }
