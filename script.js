window.alert("please run express server to see output!!!! if already did please ignore");
document.addEventListener("DOMContentLoaded",async()=>{
    
    let response = await fetch("https://node-day13.onrender.com/");
    let api_data = await response.json();
    console.log(api_data);
    let des = document.getElementById("description");
    des.innerHTML = `${api_data[0]['description']}`;
    des.style.border='2px solid blue';
    des.style.borderRadius='10px';
    des.style.fontSize='1.5rem'
    des.style.padding="10px"
    let heading1 = document.createElement("h1");
    heading1.innerHTML = `non_veg section`

    let non_veg = document.getElementById("non_veg");

    api_data[0]['non_veg'].forEach(element => {
        console.log(element)
        let card = document.createElement("div");
        card.id= "card"
        let item = document.createElement("p");
        let image = document.createElement("img");
        let price = document.createElement("p");
        item.innerHTML = `item is :-${element['item']}`;
        image.src = element['image'];
        price.innerHTML = `price of the item is :- ${element['price']}`;
        card.append(item,image,price);
        non_veg.append(card);

    });
    let heading2 = document.createElement("h1");
    heading2.innerHTML = `veg section`
    let veg = document.getElementById("veg");

    api_data[0]['veg'].forEach(element => {
        console.log(element)
        let card = document.createElement("div");
        card.id= "card"
        let item = document.createElement("p");
        let image = document.createElement("img");
        let price = document.createElement("p");
        item.innerHTML = `item is :-${element['item']}`;
        image.src = element['image'];
        price.innerHTML = `price of the item is :- ${element['price']}`;
        card.append(item,image,price);
        veg.append(card);

    });
    document.body.append(des,heading1,non_veg,heading2,veg,footer);
})