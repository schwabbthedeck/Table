(function ($, window, document) {
    $(function () {
    var nextColumnNumber = 7;

    $("tbody").sortable({
      handle: ".selector-cell"
    });

    $(".delete").click(function() {
      deleteRow(this);
    });

    $(".new-category").click(function() {
      var html = `
        <tr>
          <td class="selector-cell">
              <div class="selector"></div>
          </td>
          <td>
            <input type="text" cellNumber="${nextColumnNumber}" class="form-control" id="categoryInput" placeholder="Category Name">
          </td>
          <td>
              <div class="rectangle-text">${nextColumnNumber}</div>
          </td>
          <td>
              <div class="save">SAVE</div>
          </td>
        </tr>`;
        $("tbody").append(html);
        nextColumnNumber++;
        
        $(".save").click(function() {
          var input = this.parentElement.parentElement.getElementsByTagName("input")[0];
          var cellNumber = input.attributes.cellnumber.value;
          if (input.value == "") {
            input.parentElement.append("Category " + cellNumber);
          } else {
            input.parentElement.append(input.value);
          }
          input.remove();
          var html = document.createElement("div");
          html.className = "delete";
          html.onclick = function() { deleteRow(this) };
          this.parentElement.append(html);
          this.remove();
        });
    });

    

  });
}(window.jQuery, window, document));

function deleteRow(element) {
  element.parentElement.parentElement.remove();
}