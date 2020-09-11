$(document).ready(function(){
        
        let addBtn = $('.add-todo');
        let input = $('input[type=text]');
        let tasks = $('.card-body');
        let deleteTodo = $('.delete-todo-btn');
        let checkbox = $('input[type=checkbox]');
        let ul = $('ul.list-unstyled');
        let li = $('li.list-group-item');

        // add todo
        addBtn.click(function(){
            let newLi = `<div class="row custom-body-row-2 no-gutters">
            <div class="col-lg-2 col-md-2 col-sm-2 col-2 custom-2">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checked-todo">
                <label class="form-check-label" for="checked-todo">
                </label>
              </div>
        </div> <!-- col-lg-2 ends here -->
        <div class="col-lg-8 col-md-8 col-sm-8 col-8 custom-8">
            <ul class="list-unstyled">
                <li class="list-group-item">${input.val()}</li>
            </ul>
        </div>

        <div class="col-lg-2 col-md-2 col-sm-2 col-2 custom-2">
        <button class="btn delete-todo-btn"><img class="img-fluid" src="assets/image/trash.svg" alt="delete"></button>
        </div>
        </div>`;

        tasks.append(newLi);
        input.val('');

        });

        // delete a todo 
        tasks.on('click', '.delete-todo-btn', function(){
            $(this).parent().parent().remove();
        });

        // adding line through 
        tasks.on('change', 'input[type=checkbox]', function(){
            $(this).parent().parent().next().children().children().toggleClass('checked');
            
        });

        // sorting
        $('#sortable').sortable();

});