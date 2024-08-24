$(document).ready(function(){

    getTodos()

    $('#createBtn').on('click', function(){
        // console.log("alerted");
        addTodo()
        
    })

    
});
const BASE_URL = "http://localhost:8080";

const GET_TASK = "/task";

const POST_TASK = "/task"

// GET REQUEST
function getTodos() {

    axios
    .get(BASE_URL + GET_TASK, {
      timeout: 5000
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
    
}

// POST REQUEST
function addTodo() {
    // axios
    //   .post(BASE_URL + POST_TASK, {
    //     task_id: 3,
    //     task_name: "buy boat"
    //   })
    //   .then(res => showOutput(res))
    //   .catch(err => console.error(err));

    var task_form = $('#task_form');

    var data = task_form.serialize();

    console.log(data);

    axios
      .post(BASE_URL + POST_TASK,data
      )
      .then(res => { 
          showOutput(res)

          if (res.status == 201) 
          {
            $('#task_form')[0].reset();
            
              Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
                )
          }
        })
      .catch(err => console.error(err));
  }

// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }