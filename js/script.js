var app = new Vue(
    {
        el: '#root',

        data: {
			newUserTodo: '',
           	todos: [
				{
					text: 'Fare la spesa'
				},

				{
					text: 'Fare il Bucato'
				},

				{
					text: 'Fare i compiti'
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
			}
		}
    });

