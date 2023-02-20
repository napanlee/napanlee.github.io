$(dropOnScale);
  
function dropOnScale() {
  $('.dropme').draggable();
  $('#left, #right').droppable({
    // handleDropEvent will provide instructions for browser when something is dropped!
    drop:handleDropEvent,
  });
}
  
  function handleDropEvent(event,ui) {
    // dragID variable stores draggable element ID
    var dragId = ui.draggable.attr("id");
    // dropID variable stores droppable element ID, when draggable is dropped.
    var dropId = $("#left,#right").attr("id");
    // Append each draggable item to text on page.
    $("#listdropped").append(dragId);
  }

