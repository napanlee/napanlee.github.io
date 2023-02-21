$(dropOnScale);
  
function dropOnScale() {
  $('.dropme').draggable();
  $('#left, #right').droppable({
    drop:handleDropEvent,
  });
}
  
  function handleDropEvent(event,ui) {
    var dragId = ui.draggable.attr("id");
    var dropId = $("#left,#right").attr("id");
    $("#listdropped").append(dragId);
  }

