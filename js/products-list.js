var products = [
    {
        src : "../image/product-img(1).jpg",
        title : "ریمل",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "35000 تومان"
    },
    {
        src : "../image/product-img(2).jpg",
        title : "ریمل",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "50000 تومان"
    },
    {
        src : "../image/product-img(3).jpg",
        title : "رژ",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "20000 تومان"
    },
    {
        src : "../image/product-img(4).jpg",
        title : "رژ",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "12000 تومان"
    },
    {
        src : "../image/product-img(5).jpg",
        title : "رژ گونه",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "60000 تومان"
    },
    {
        src : "../image/product-img(6).jpg",
        title : "رژ گونه",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "75000 تومان"
    },
    {
        src : "../image/product-img(7).jpg",
        title : "کرم پودر",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "135000 تومان"
    },
    {
        src : "../image/product-img(8).jpg",
        title : "کرم پودر",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "70000 تومان"
    },
    {
        src : "../image/product-img(9).jpg",
        title : "کرم پودر",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "80000 تومان"
    },
    {
        src : "../image/product-img(10).jpg",
        title : "ضد آفتاب",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "210000 تومان"
    },
    {
        src : "../image/product-img(11).jpg",
        title : "ضد آفتاب",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "250000 تومان"
    },
    {
        src : "../image/product-img(12).jpg",
        title : "عطر",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "35000 تومان"
    },
    {
        src : "../image/product-img(13).jpg",
        title : "عطر",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "45000 تومان"
    },
    {
        src : "../image/product-img(14).jpg",
        title : "مایه لنز",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "30000 تومان"
    },
    {
        src : "../image/product-img(15).jpg",
        title : "مایه لنز",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "20000 تومان"
    },
    {
        src : "../image/product-img(16).jpg",
        title : "ژل",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "3000 تومان"
    },
    {
        src : "../image/product-img(17).jpg",
        title : "آبرسان",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "120000 تومان"
    },
    {
        src : "../image/product-img(18).jpg",
        title : "ماسک",
        information : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Soluta obcaecati in consequatur mollitia facilis dicta minima.",
        price : "10000 تومان"
    }
];

var lists = $('.lists');

for(const i in products){

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

    imgTag.setAttribute('src', products[i].src);
    h2Tag.innerHTML = products[i].title;
    pTag.innerHTML = products[i].information;
    h3tag.innerHTML = products[i].price;

    div.append(imgTag);
    div.append(h2Tag);
    div.append(pTag);
    div.append(h3tag);
    lists.append(div);
} 