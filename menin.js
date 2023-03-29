var productData = [{
    image_url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13640716/2021/5/24/48e9e3bc-8fb7-4af5-97fa-46927f68fbd81621838454680JeansRoadsterMenJeansRoadsterMenTrackPantsHRXbyHrithikRoshan1.jpg ",
    brand: "U.S. Polo Assn.",
    para: "Printed Polo Collar Pure Cotton T-Shirt",
    price: "Rs. 1259",
    rs: 1259,
    strikedoffprice: "Rs 2099",
    offer: "(40% OFF)",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Tshirts",
}, {
    image_url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11359600/2020/6/22/97e8ab74-25ff-4daf-bffb-b0a1ec708c191592819068194ShirtsUSPoloAssnMenShirtsUSPoloAssnMenShirtsUSPoloAssnMenShi1.jpg ",
    brand: "PUMA",
    para: "Colourblocked Polo Collar Pure Cotton ",
    price: "Rs. 1139 ",
    rs: 1139,
    strikedoffprice: "Rs 1899 ",
    offer: "(40% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Tshirts",
}, {
    image_url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11359590/2020/2/26/68da9e40-e8b1-4710-8282-802c2c6550c11582709189210-US-Polo-Assn-Men-Tshirts-9481582709187568-1.jpg ",
    brand: "HRX by Hrithik Roshan",
    para: "Stiped Polo Collar Pur Cotton T-Shirt ",
    price: "Rs. 949 ",
    rs: 949,
    strikedoffprice: "Rs 1899 ",
    offer: "(50% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Tshirts",
}, {
    image_url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/1/17/8088e3c4-5737-482b-80de-8d9bcede75f81579215077796-1.jpg ",
    brand: "Flying Machine",
    para: "Printed Polo Collar Pure Cotton T-Shirt ",
    price: "Rs. 1259 ",
    rs: 1259,
    strikedoffprice: "Rs 2099 ",
    offer: "(40% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Tshirts",
}, {
    image_url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1924785/2018/5/18/be8485c7-0944-4f38-8f5f-78b6e325fd201526634385328-US-Polo-Assn-Men-Khaki-Slim-Fit-Solid-Chinos-7181526634383854-1.jpg ",
    brand: "WROGN",
    para: "Men Slim Fit Chinos ",
    price: "Rs. 1049 ",
    rs: 1049,
    strikedoffprice: "Rs 2099 ",
    offer: "(50% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Trousers"
}, {
    image_url: "j1.webp",
    brand: "WRANGLER",
    para: "Men Slim Fit Jeans ",
    price: "Rs. 899 ",
    rs: 899,
    strikedoffprice: "Rs 1999 ",
    offer: "(55% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Trousers"
}, {
    image_url: "j2.webp",
    brand: "LEVI'S",
    para: "Men Slim Fit Jeans ",
    price: "Rs. 1449 ",
    rs: 1499,
    strikedoffprice: "Rs 2899 ",
    offer: "(50% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Trousers"
}, {
    image_url: "J3.webp",
    brand: "LEE",
    para: "Men's Slim Fit Jeans ",
    price: "Rs. 1398 ",
    rs: 1398,
    strikedoffprice: "Rs 2799 ",
    offer: "(50% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Trousers"
}, {
    image_url: "s1 (2).webp",
    brand: "PEPPYZONE",
    para: "Men's Regular Fit Checked Casual Shirt ",
    price: "Rs. 689 ",
    rs: 689,
    strikedoffprice: "Rs 999 ",
    offer: "(31% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Shirt"
}, {
    image_url: "s2 (1).webp",
    brand: "VAN HEUSEN SPORT",
    para: "Men's Shirt ",
    price: "Rs. 999 ",
    rs: 999,
    strikedoffprice: "Rs 1999 ",
    offer: "(50% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Shirt"
}, {
    image_url: "s3 (1).webp",
    brand: "INDOPRIMO",
    para: "Men's Classic Fit Casual Shirt",
    price: "Rs. 599 ",
    rs: 599,
    strikedoffprice: "Rs 1999 ",
    offer: "(70% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Shirt"
}, {
    image_url: "s4 (1).webp",
    brand: "LYMIO",
    para: "Men's Casual Shirt",
    price: "Rs. 498 ",
    rs: 498,
    strikedoffprice: "Rs 4999 ",
    offer: "(90% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Trousers"
}];

var wishListData = JSON.parse(localStorage.getItem("wishListObj")) || []

var bagData = JSON.parse(localStorage.getItem("BagListObj")) || []

window.addEventListener('load', function () {
    displayPage(productData)
})

document.getElementById('nameSort').addEventListener('change', sortNames);


function displayPage(productData) {

    document.getElementById("container").innerHTML = "";

    productData.map(function (elem) {
        var box = document.createElement("div")
        box.style.cursor = "pointer"

        var img = document.createElement("img")
        img.src = elem.image_url

        var contentBox = document.createElement('div');
        contentBox.setAttribute('class', 'contentBox')

        var brand = document.createElement("h4")
        brand.textContent = elem.brand

        var productname = document.createElement("p")
        productname.textContent = elem.para


        var mix = document.createElement("div")
        mix.setAttribute("class", "mixbox")


        var price = document.createElement("p")
        price.textContent = elem.price

        var strprice = document.createElement("p")
        strprice.textContent = elem.strikedoffprice
        strprice.setAttribute("class", "strikep")


        var offer = document.createElement("p")
        offer.textContent = elem.offer
        offer.setAttribute("class", "offerp")

        mix.append(price, strprice, offer)



        var atw = document.createElement("p")
        atw.setAttribute("class", "wishListp")
        atw.textContent = elem.atw;
        atw.style.cursor = "pointer"

        atw.addEventListener("click", function () {
            addToWishlist(elem)
            atw.style.color = "green"
            atw.innerText = "ADDED TO WISHLIST"
        })



        var atc = document.createElement("p")
        atc.setAttribute("class", "addToBagp")
        atc.textContent = elem.atc;
        atc.style.cursor = "pointer"


        atc.addEventListener("click", function () {
            addToBag(elem)
            atc.innerText = "ADDED TO BAG"
        })

        contentBox.append(brand, productname, mix, atw, atc)

        box.append(img, contentBox)

        document.querySelector("#container").append(box);



    });

}


