const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    <div class="form-group">
      <label for="author" class="col-sm-2 control-label">Username</label>
      <div class="col-sm-10">
        <input id="author" name="author" type="text" class="form-control" placeholder="Username">
      </div>
    </div> 
    
    <div class="form-group">
      <label for="email" class="col-sm-2 control-label">Email</label>
      <div class="col-sm-10">
        <input id="email" name="email" type="text" class="form-control" placeholder="Email">
      </div>
    </div> 

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>
    
    <div class="form-group">
      <label for="content" class="col-sm-2 control-label">Content</label>
      <div class="col-sm-10">
        <textarea id="content" name="content" type="text" class="form-control" rows="5"></textarea>
      </div>
    </div>

    <div class="form-group">
      <label for="status" class="col-sm-2 control-label">Status</label>
      <div class="col-sm-10">
        <label for="status" class="radio-inline">
          <input type="radio" name="status" id="open" value="open" />Open
        </label>
        <label for="status" class="radio-inline">
          <input type="radio" name="status" id="closed" value="closed" />Closed
        </label>
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  
  </form>
`);