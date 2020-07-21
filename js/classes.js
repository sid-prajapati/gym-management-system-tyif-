classedit=(id)=>{

    const url='/classes/get/'+id;
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=()=>{
        if(xhr.readStatus==4||xhr.status==200)
        {
            const result=JSON.parse(xhr.responseText);
           document.getElementById('updateCid').value=result.class.id;
           document.getElementById('updateCname').value=result.class.name;
         document.getElementById('updateCinstructor').value=result.class.instructor;
            } 
    }
    xhr.send();
}
updateclasses=(e)=>{
    e.preventDefault();
    const id=document.getElementById('updateCid').value;
    const name=document.getElementById('updateCname').value;
    const instructor=document.getElementById('updateCinstructor').value;
    const data={id:id,name:name,instructor:instructor};
    const paramters=JSON.stringify(data);
    let url='/classes/'+id;
    let xhr=new XMLHttpRequest();
    console.log(paramters);
    xhr.open('PUT',url,true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.onload=function(){
        if(xhr.readyState==4||xhr.status==200)
        {
            window.location.reload();
        }
        else
        {
            
        }
    }
    xhr.send(paramters);
}
let update_class_form=document.getElementById('update_class_form');
update_class_form.addEventListener('submit',updateclasses);


    