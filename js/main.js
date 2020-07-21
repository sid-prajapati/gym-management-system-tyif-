



editmem=(id)=>{

    const url='/member/'+id;
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=()=>{
        if(xhr.readStatus==4||xhr.status==200)
        {
           const result=JSON.parse(xhr.responseText);
           document.getElementById('updateid').value=result.member.id;
           document.getElementById('updatename').value=result.member.name;
         document.getElementById('updateage').value=result.member.age;
 
            } 
    }
    xhr.send();
}


updatemember=(e)=>{
    e.preventDefault();
    const id=document.getElementById('updateid').value;
    const name=document.getElementById('updatename').value;
    const age=document.getElementById('updateage').value;
    const data={name:name,age:age};
    const paramters=JSON.stringify(data);
    let url='/member/'+id;
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
let update_member_form=document.getElementById('update-member-form');
update_member_form.addEventListener('submit',updatemember);


    
    instructordel=(id)=>{

        const url='/instructor/'+id;
        const xhr=new XMLHttpRequest();
        xhr.open('DELETE',url,true);
        xhr.onload=()=>{
            if(xhr.readStatus==4||xhr.status==200)
            {
               const result=JSON.parse(xhr.responseText);
               window.location.reload();
            }
    }
        xhr.send();
    }
 


    
    
    

