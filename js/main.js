var nameInput=document.getElementById('bookmarkname')
var urlInput=document.getElementById('bookmarkurl')
var submitButton=document.getElementById('submitbutn')
var tableContent=document.getElementById('tableContent')

var bookMaark;
if (localStorage.getItem('bookMaark') == null)  {
    bookMaark=[];
}
else{
    bookMaark= JSON.parse(localStorage.getItem('bookMaark'));
    displayBok()
}

submitButton.onclick=function(){
if(nameValidation()==true && urlValidation()==true){
    var bookMark={
        name:nameInput.value,
        url:urlInput.value
    }
    
    bookMaark.push(bookMark);
    localStorage.setItem('bookMaark',JSON.stringify(bookMaark));
    displayBok();
}else{
    // alert("دخل داتا عدلة أحسنلك") 
}
}


function displayBok (){
var boook=``;
for (var i = 0; i<  bookMaark.length; i++) {
    boook += `   
    <tr>
    <td> ${bookMaark[i].name}</td>
    <td>  <a href="${ bookMaark[i].url}"> <button class="btn btn-primary"> visit </button> </a>  </td>
    <td> <button onclick="update(${i})"  class="btn btn-info"> update </button></td>
     <td> <button  onclick="deleteBok(${i})"  class="btn btn-danger"> delete</button></td>
    </tr>

    `
}
tableContent.innerHTML=boook;

}
function deleteBok(index) {
    bookMaark.splice(index,1)
    localStorage.setItem('bookMaark',JSON.stringify(bookMaark));
    displayBok();
}


function nameValidation(){
    var regex = /^[a-zA-Z0-9]{3,9}$/
    if(regex.test(nameInput.value)){
        nameInput.classList.remove("is-invalid")
        nameInput.classList.add("is-valid")
        return true
    }else{
        nameInput.classList.add("is-invalid")
        return false
    }

}
function urlValidation(){
    var regex =  /^(https?|ftp):\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/
    if(regex.test(urlInput.value)){
        urlInput.classList.remove("is-invalid")
        urlInput.classList.add("is-valid")
        return true
    }else{
        urlInput.classList.add("is-invalid")
        return false
    }

}