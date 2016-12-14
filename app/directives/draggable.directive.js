angular.module('drag', [])
  .directive('draggable', draggable);

  function draggable($document){
    return function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0, maxY = jQuery('.container--box').height(), maxX = jQuery('.container--box').width();
      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.screenX - x;
        startY = event.screenY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.screenY - startY;
        x = event.screenX - startX;

        if(x >= maxX && y >= maxY){
          x = maxX - 5;
          y = maxY - 5;
        } else if(x <= 0 && y <= 0){
          x = 5;
          y = 5;
        } else if(x <= 0 && y >= maxY - 20){
          x = 5;
          y = maxY - 20;
        } else if(y <= 0 && x >= maxX - 20){
          y = 5;
          x = maxX - 20;
        } else if(x >= maxX - 60 && y >= maxY - 20){
          y = maxY - 20;
          x = maxX - 60;
        } else if(x >= maxX - 60 && y <= 0){
          y = 5;
          x = maxX - 60;
        } else if(x <= 0){
          x = 5;
        } else if(y <= 0){
          y = 5;
        } else if(x >= maxX - 60){
          x = maxX - 60;
        } else if(y >= maxY - 20){
          y = maxY - 20;
        }

        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    };
  }
