#simple Jquery Modal
include simpleModal.css and simpleModal.js in your HTML file

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>

    <link rel="stylesheet" type="text/css" href="/path/to/simpleModal.css" />
  </head>
  <body>
    <a href="#" class="btn">Click Me</a>
    <script
      src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"
    ></script>
    <script type="text/javascript" src="/path/to/simpleModal.js"></script>
  </body>
</html>
```

_don`t forget to add jquery_

and then create a button and a simple-modal template like below :

```html
<!-- button -->
<button simple-modal="newModal">open modal</button>
<!-- simple modal template -->
<simple-modal id="newModal">
  <div class="simple-modal-header">
    <h3>this is title</h3>
    <div class="simple-close"></div>
  </div>
  <div class="simple-modal-body">
    <p>body of modal</p>
  </div>
  <div class="simple-modal-footer">
    <p>this is footer</p>
  </div>
</simple-modal>
```

and done!
