const items =JSON.parse(localStorage.getItem("items")) ? JSON.parse(localStorage.getItem("items")) : [
    {
       property_id:1,
        apartment_name:"Apartment 1",
        imgURL:"https://i.postimg.cc/3N51gSDr/Apartment-1.webp",
        bedrooms:5,
        bathrooms:2,
        garage:1,
        size:1200,
        madeIn:2016,
        status:"Rent",
    },
    {
        property_id:2,
         apartment_name:"Apartment 2",
         imgURL:"https://i.postimg.cc/KvdGtt0q/Apartment-2.webp",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2016,
         status:"Sale",
     },
     {
        property_id:3,
         apartment_name:"Apartment 3",
         imgURL:"https://i.postimg.cc/LsmMVDLT/Apartment-3.webp",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2017,
         status:"Sale",
     },
     {
        property_id:4,
         apartment_name:"Apartment 4",
         imgURL:"https://i.postimg.cc/7ZnLDfNK/Apartment-4.jpg",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2020,
         status:"Sale",
     },
     {
        property_id:5,
         apartment_name:"Apartment 5 ",
         imgURL:"https://i.postimg.cc/hj6DMxSt/Apartment-5.webp",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2019,
         status:"Rent",
     },
     {
        property_id:6,
         apartment_name:"Apartment 6",
         imgURL:"https://i.postimg.cc/pXtxTPr4/Apartment-6.webp",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2020,
         status:"Rent",
     },
     {
        property_id:7,
         apartment_name:"Apartment 7",
         imgURL:"https://i.postimg.cc/Qdx29C34/Apartment-7.webp",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2019,
         status:"Sale",
     },
     {
        property_id:8,
         apartment_name:"Apartment 8",
         imgURL:"https://i.postimg.cc/KjGNqKQC/Apartment-8.webp",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2017,
         status:"Sale",
     },
     {
        property_id:9,
         apartment_name:"Apartment 9",
         imgURL:"https://i.postimg.cc/bJzk87bt/Apartment-9.webp",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2018,
         status:"Rent",
     },
     {
        property_id:10,
         apartment_name:"Apartment 10",
         imgURL:"https://i.postimg.cc/gj1xwQw4/Apartment-10.webp",
         bedrooms:7,
         bathrooms:4,
         garage:2,
         size:2300,
         madeIn:2018,
         status:"Rent",
     },
];

// read and display

function DisplayItems(items) {
    console.log(items)
    document.querySelector("#container").innerHTML = " ";
    items.forEach(item => {
        document.querySelector("#container").innerHTML+=`
        <div class="container" style="width:300px;">
        <div class="card" id="item${item.property_id}">
        <img src=${item.imgURL} alt="Apartment" / >
        </div>
        <p>Name:${item.apartment_name}</p><span>Status:${item.status}</span>
        </div>
        `
    });
    
}

DisplayItems (items);



function locationFilter(e){
    const location = e.target.value;
    if (location === "All_Cites") {
      return showItems(items);
    }
    const filtered = items.filter((item) => item.Location === location);
    return showItems(filtered);
  };

  function SortingPrice (e){
    const direction = e.target.value;
    const sorted = items.sort((a, b) => a.Price - b.Price);
    if (direction === "5600") {
      showItems(sorted);
    } else {
      showItems(sorted.reverse());
    }
  };function StatusFilter(e){
    const status = e.target.value;
    if (status === "All-Status") {
      return showItems(items);
    }
    const statusfiltered = items.filter((item) => item.status === status);
    return showItems(statusfiltered);
  };
    function SortingBeds (e) {
    const direction = e.target.value;
    const sorted = items.sort((a, b) => a.bedrooms - b.bedrooms);
    if (direction === "Asc.Bedrooms") {
      showItems(sorted);
    } else {
      showItems(sorted.reverse());
    }
    }