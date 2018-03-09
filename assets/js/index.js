

var photos = [];

$.get('https://jsonplaceholder.typicode.com/photos/').then(photosConfirmed).catch(error)


function photosConfirmed(response){

    console.log(response);
    for(var i = 0 ; i < 100; i++){
    var photo = response[i];
    photos.push(photo);
    var html = ` <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${photos[i].thumbnailUrl}" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>`
    $(".photos").append(html)  
    $(".photos").css({"display":"flex", "flex-wrap":"wrap"});  

    }
    console.log(photos);
}

function error(response){
    console.log('error');
}

console.log(photos)

