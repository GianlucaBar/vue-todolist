var app = new Vue(
    {
        el: '#root',

        data: {
			newUserTodo: '',
			userSearch: '',
           	todos: [
				{
					text: 'Fare la spesa',
					visible: true
				},

				{
					text: 'Fare il Bucato',
					visible: true
				},

				{
					text: 'Fare i compiti',
					visible: true
				}, 
		   	]

        },

        methods: {
            addNewTodo(){
				if (this.newUserTodo.length > 0 ){
					this.todos.push({
						text: this.newUserTodo
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
			}
		}
    });

