var searchIcon = document.querySelector('.search-icon')
var searchInput = document.querySelector('#search-input');
var lists = document.querySelector('.lists');
var searchResult = [];

function search(array, word) {
    for( const i in array){
        if(array[i].title.includes(word)){
            searchResult.push(array[i]);
        }
    }
    return searchResult;
}

searchIcon.addEventListener('click', function(){
    searchResult = [];
    lists.innerHTML = ' ';

    search(products, searchInput.value);
    for( const i in searchResult){
        var div = document.createElement('div');
        var imgTag = document.createElement('img');
        var h2Tag = document.createElement('h2');
        var pTag = document.createElement('p');
        var h3tag = document.createElement('h3');

        div.classList.add('product');
        imgTag.classList.add('product-img');
        h2Tag.classList.add('product-title');
        pTag.classList.add('information');
        h3tag.classList.add('price');

        imgTag.setAttribute('src', searchResult[i].src);
        h2Tag.innerHTML = searchResult[i].title;
        pTag.innerHTML = searchResult[i].information;
        h3tag.innerHTML = searchResult[i].price;

        div.appendChild(imgTag);
        div.appendChild(h2Tag);
        div.appendChild(pTag);
        div.appendChild(h3tag);
        lists.appendChild(div);
    }
});