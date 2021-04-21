var app = new Vue(
    {
        el: '#root',

        data: {
			newUserTodo: '',
			userSearch: '',
			checked: false,
           	todos: [
				{
					text: 'Fare la spesa',
					visible: true,
					done: false
				},

				{
					text: 'Fare il Bucato',
					visible: true,
					done: false
				},

				{
					text: 'Fare i compiti',
					visible: true,
					done: false
				}, 
		   	]

        },

        methods: {
            addNewTodo(){
				if (this.newUserTodo.length > 0 ){
					this.todos.push({
						text: this.newUserTodo,
						visible: true,
						done: false
					});
					this.newUserTodo = '';
			}

        	},

			deleteTodo(index){
				this.todos.splice(index, 1);
			},

			filterList(){
				this.todos.forEach(todo => {
					if(todo.text.toLowerCase().includes(this.userSearch.toLowerCase())){
						todo.visible = true;
					} else{
						todo.visible = false;
					}
				});
			},

			checkThisTodo(todo){
				todo.done = !todo.done;
			},

			filterDoneTask(){

				if(this.checked){
					this.todos.forEach(todo => {
						if(todo.done == true){
							todo.visible = false;

						} else{
							todo.visible = true;
						}
					})
				} else {
					this.todos.forEach(todo => {
						todo.visible = true;
					})
				}
			}
		}
    });

