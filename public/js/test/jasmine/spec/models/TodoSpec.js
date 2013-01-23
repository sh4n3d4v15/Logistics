
describe('Model :: Todo', function() {

  beforeEach(function(){
    var that = this;

    require(['models/todo'], function(Todo) {
      that.todo = new Todo();
    });

  waitsFor(function() {
      return that.todo;
    });

  })

    afterEach(function(){
    this.todo.destroy();
  })

  it('should get someting' , function(){
    expect(this.todo).toBeTruthy();
  })

  it('should check for heading attribute of model to match default' , function(){
    expect( this.todo.get('heading') ).toMatch(/heading yet!/i);
  })

  it('should assign new attributes to a new model' , function(){
      this.todo.set({ heading : "a new heading from Jasmine"});
      expect(this.todo.get("heading")).toMatch(/jasmine/i)
  })
  
}); 