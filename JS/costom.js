function parsonalInfo(){
    var name =document.myForm.name.value;
    if(!name){
        alert("please input name");
        return false;
        
    }
    else{
        var ShowName="User Name is:"+name;
    }
    var father =document.myForm.father.value;
    if(!father){
        alert("please input fatherName");
        return false;
        
    }
    else{
        var ShowFatherName="Father Name:"+father;
    }
    var mother =document.myForm.mother.value;
    if(!mother){
        alert("please input motherName");
        return false;
        
    }
    else{
        var ShowMotherName="Mother Name:"+mother;
    }
    var districe =document.myForm.districe.value;
    if(!districe){
        alert("please input districeName");
        return false;
        
    }
    else{
        var ShowDistriceName="Districe Name:"+districe;
    }
    var email =document.myForm.email.value;
    if(!email){
        alert("please input email");
        return false;
        
    }
    else{
        var ShowEmail="Email add:"+email;
    }
    var phone =document.myForm.phone.value;
    if(!phone){
        alert("please input phone");
        return false;
        
    }
    else{
        var ShowPhone="Phone Numer:"+phone;
    }
    var barthday =document.myForm.barthday.value;
    if(!barthday){
        alert("please input barthday");
        return false;
        
    }
    else{
        var ShowBarthday="Barthday:"+barthday;
    }
    document.getElementById("display").innerHTML= ShowName+"<br>"+ShowFatherName+"<br>"+ShowMotherName+"<br>"+ShowDistriceName+"<br>"+ShowEmail+"<br>"+ShowPhone+"<br>"+ShowBarthday;
    console.log(ShowName)
    console.log(ShowFatherName)
    console.log(ShowMotherName)
    console.log(ShowDistriceName)
    console.log(ShowEmail)
    console.log(ShowPhone)
    console.log(ShowBarthday)

}
