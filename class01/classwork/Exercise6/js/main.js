

function jsonFlickrApi (data) {
	console.log(data);


var gallery = document.getElementsByClassName('gallery')[0];
	data.photos.photo.forEach(function(photo) {
		var figcap = document.createElement("figcaption");
    	figcap.innerHTML = photo.title;
    	var figure = document.createElement("figure");
		gallery.appendChild(figure);
		figure.appendChild(figcap);
		var a = document.createElement("a");
		figure.appendChild(a);
		var href = document.createAttribute("href");       
		href.value = photo.url_l;                           
		a.setAttributeNode(href);
		var img = document.createElement('img');
		a.appendChild(img);
		var src = document.createAttribute('src');
		src.value = photo.url_s;
		img.setAttributeNode(src);

		var description = document.createElement('p');
		description.innerHTML = photo.description._content;
		figure.appendChild(description);

		var date = document.createElement('p');
		date.innerHTML = "Date taken: " + photo.datetaken;
		figure.appendChild(date);

		var userlink = document.createElement('a');
		
		userlink.innerHTML = "Username: " + photo.ownername;
		var userhref = document.createAttribute("href");
		var target = document.createAttribute("target");
		userhref.value = 'https://www.flickr.com/photos/' + photo.owner;
		target.value = '_blank';
		userlink.setAttributeNode(userhref);
		userlink.setAttributeNode(target);
		figure.appendChild(userlink);

		console.log(photo.url_s);
		console.log(photo.url_l);
      	console.log(photo.title);
      	console.log(photo.description.content);
      	console.log(photo.datetaken);
      	console.log(photo.ownername);
      	console.log("www.flickr.com/"+photo.owner);
   });

}