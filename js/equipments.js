updateequiment=(e)=>{
    e.preventDefault();
    const id=document.getElementById('Eid').value;
    const name=document.getElementById('updateEname').value;
    const data={id:id,name:name};
    const paramters=JSON.stringify(data);
    let url='/equipments/'+id;
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
let update_form=document.getElementById('update_form');
update_form.addEventListener('submit',updateequiment);


    