
      var link = document.querySelector('link[rel=import]');
      var content = link.import.querySelector('#background');
	  var el = content.querySelector('.bg');
      document.body.appendChild(content.cloneNode(true));
