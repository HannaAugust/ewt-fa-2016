// If you need to review loops and objects:
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

function jsonFlickrApi (data) {
	//console.log(data);
	//console.log(data.photos.photo.length);
	//var length = data.photos.photo.length;

	data.photos.photo.forEach(function(photo) {
		document.getElementsByClassName('gallery').appendChild('a');
		console.log(photo.url_s);
		console.log(photo.url_l);
      	console.log(photo.title);
      	console.log(photo.description.content);
      	console.log(photo.datetaken);
      	console.log(photo.ownername);
      	console.log("www.flickr.com/"+photo.owner);
   });

// var length = photo.length;
// console.log(length);
	// properties
	// append title
	// append image that links to bigger image
	// append description
	// append date taken
	// append the user name along with a link to their flickr account
}
