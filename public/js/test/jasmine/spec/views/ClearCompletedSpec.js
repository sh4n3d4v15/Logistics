
describe('View :: Clear Completed', function() {

	beforeEach(function(){
		var that = this;

		require(['views/todo','models/todo'], function(vTodo,mTodo){
			var model = new mTodo()
			that.viewTodo = new vTodo({model : model});
		});
		
		waitsFor(function(){
			return that.viewTodo;
		})
	})

  
  it('should confirm that the element has been appended to the DOM' , function(){
  	expect(this.viewTodo.el).toBe('div')
  })
});