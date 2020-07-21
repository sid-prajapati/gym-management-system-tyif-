delmem=(id)=>{
    const url='/member/'+id;
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


eqidel=(id)=>{

    const url='/equipments/'+id;
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

instructoredit=(id)=>{

        const url='/instructor/'+id;
        const xhr=new XMLHttpRequest();
        xhr.open('GET',url,true);
        xhr.onload=()=>{
            if(xhr.readStatus==4||xhr.status==200)
            {
               const result=JSON.parse(xhr.responseText);
               console.log(result);
    
               document.getElementById('updateIid').value=result.instructor.id;
               document.getElementById('updateIname').value=result.instructor.name;
               document.getElementById('updateIspeciality').value=result.instructor.speciality;
                } 
        }
        xhr.send();
    }


    eqiedit=(id)=>{
        const url='/equipments/'+id;
        const xhr=new XMLHttpRequest();
           xhr.open('GET',url,true);
           xhr.onload=()=>{
                   if(xhr.readStatus==4||xhr.status==200)
                   {
                      const result=JSON.parse(xhr.responseText);
                      
                      document.getElementById('Eid').value=result.equipments.id;
                      document.getElementById('updateEname').value=result.equipments.name;
                     
            
                       } 
               }
               xhr.send();
           }


           classdel=(id)=>{
            const url='/classes/'+id;
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
               
          

            
    updateinstructor=(e)=>{
        e.preventDefault();
        const id=document.getElementById('updateIid').value;
        const name=document.getElementById('updateIname').value;
        const speciality=document.getElementById('updateIspeciality').value;
        const data={id:id,name:name,speciality:speciality};
        const paramters=JSON.stringify(data);
        let url='/instructor/'+id;
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
    
  let update_instructor_form=document.getElementById('update_instructor_form');
  update_instructor_form.addEventListener('submit',updateinstructor);

