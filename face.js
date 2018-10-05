/* face.js */

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  function drawImage(canvas, posX, posY){
  	var img = document.getElementById("facelol");
  	context.drawImage(img, posX-img.width/2, posY-img.height/2);

  }

  function sleep(milliseconds) {
  	var start = new Date().getTime();
  	for (var i = 0; i < 1e7; i++) {
   	 	if ((new Date().getTime() - start) > milliseconds){
     		break;
    		}
  		}
	}

  canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
	sleep(20);
    drawImage(canvas, mousePos.x, mousePos.y);
  }, false);

