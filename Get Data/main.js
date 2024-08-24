$(document).ready(function(){
   
    
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function(response){

        // console.log("status : " + response.status);

        $('#status').html(response.status).addClass('btn btn-sm btn-success');

        // console.log(response.data);

        response.data.map(element => {

            const para = document.createElement("p");
        
            para.innerHTML = element.id + " " +  element.title;
    
            document.getElementById("data").appendChild(para);

            // $('#data').append(para);

        })

        
    })
    .catch(function(error){
        // console.log(error);

        $('#status').html(error).addClass('btn btn-sm btn-danger');
    })

});