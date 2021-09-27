var arrEmployee;
$.getJSON("https://www.swollenhippo.com/getProfileDetailsByAPIKey?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrEmployee = result;
    buildEmployeeCard();
})

function buildEmployeeCard(){
    $.each(arrEmployee,function(i,person){
        let strHTML = '<div class="text-align:left">';
        strHTML += '<div class="mt-3 mb-3">';
        strHTML += '<img class="mb-3 mr-5" src="images/lib/profile.jpg" alt="Avatar" style="margin:auto; max-width:100%; border-radius: 50%">';
        strHTML += '</div>';
        strHTML += '<div class="mt-4 ml-4">';
        strHTML += '<h2 class="text-info">' + person.FirstName + ' ' + person.LastName + '<h/2>';
        strHTML += '</div>';
        strHTML += '<h4 class="mt-3">Code Name: ' + person.CodeName + '<h/4>';
        strHTML += '<h4>Billing Agency: ' + person.Agency + '<h/4>';
        strHTML += '<h4>Position: ' + person.Job + '<h/3>';
        strHTML += '<h4>Hire Date: ' + person.HireDate + '<h/4>';
        strHTML += '<button class="btn btn-primary btn-block btnSlideContactDetails">Toggle Contact Details</button>';
        $('#divProfile').append(strHTML);
    })
}


var arrContact;
$.getJSON("https://www.swollenhippo.com/getProfileDetailsByAPIKey?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrContact = result;
    buildContactCard();
})
function buildContactCard(){
    $.each(arrContact,function(i,person){
        let strHTML = '<div class="text-left mt-4 mb-5">'
        strHTML += '<div>'
        strHTML += '<h4 class="mt-3">Email: <a href="mailto:' + person.Email + '" class="aEmail">' + person.Email + '</a><h/4>';
        strHTML += '<h4>Phone: <a href="tel:' + person.Phone + '" class="aPhone">' + person.Phone + '</a><h/4>';
        strHTML += '</div>'
        strHTML += '<div>'
        strHTML += '<h4>Street Address: ' + person.Street1 + '<h/4>';
        strHTML += '<h4>City: ' + person.City + '<h/4>';
        strHTML += '<h4>State: ' + person.State + '<h/4>';
        strHTML += '<h4>Zip Code: ' + person.ZIP + '<h/4>';
        strHTML += '</div>'
        strHTML += '<h4>Emergency Contact: ' + person.EContact + '<h/4>';
        strHTML += '<h4>Phone: <a href="tel:' + person.EContactNumber + '" class="aPhone">' + person.EContactNumber + '</a><h/4>';
        strHTML += '</div>'
        strHTML += '</div>'
        $('#divContact').append(strHTML);
    })
}
$(document).on('click','.btnSlideContactDetails', function(){
    $('#divContact').slideToggle();
})
var arrTableView;
$.getJSON("https://www.swollenhippo.com/getPayStubsByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrTableView = result;
    buildPayStubTable();
})
function buildPayStubTable(){
    $.each(arrTableView,function(i,person){
        $('#tblPayStubTotals tbody').append('<tr><td>' + person.Month + '</td><td>' + person.Year + '</td><td>' + person.Sales +'</td><td>' + person.Hours + '</td><td>' + person.Rate + '</td><td>' + person.CommissionRate + '</td><td>' + ((person.Hours * person.Rate)+ (person.CommissionRate * person.Sales)) + '</td></tr>');
    })
    $('#tblPayStubTotals').DataTable();
}


