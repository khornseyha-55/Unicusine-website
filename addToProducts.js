document.getElementById("bookingForm").addEventListener("submit", function(e){
        e.preventDefault();
        let msg = document.getElementById("successMsg");
        msg.classList.remove("d-none");
        setTimeout(()=>{
            msg.classList.add("d-none");
        },10000);
        this.reset();
    });
// Search Menus data 
    document.getElementById("searchFood").addEventListener("keyup", function () {
        let value = this.value.toLowerCase();
        let items = document.querySelectorAll(".menu-item");
        items.forEach(item => {
            let text = item.innerText.toLowerCase();
            item.style.display = text.includes(value) ? "flex" : "none";
        });
    });
// scroll btn and dark and light mode display
    document.getElementById("themeBtn").addEventListener("click",()=>{
        document.body.classList.toggle("dark-mode");
        const topBtn=document.getElementById("topBtn");
        window.onscroll=function(){
            if(window.scrollY>300){
                topBtn.style.display="block";
            }else{
                topBtn.style.display="none";
            }
        };
        topBtn.onclick=function(){
            window.scrollTo({
                top:0,
                behavior:"smooth"
            });
        };
    });
    let selectedProducts = [];
// Add data on Menus ( Breakfas , Lunchd , Dinner)
    const Breakfastdate = [
        {
            id : 1,
            name : "Crispy Chicken",
            price : 3,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        },
        {
            id : 2,
            name : "Pizza",
            price : 1.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        },
        {
            id : 3,
            name : "Burger",
            price : 2.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1550547660-d9450f859349"
        },
        {
            id : 4,
            name : "pasta",
            price : 1.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        },
        {
            id : 5,
            name : "Crispy Chicken Poblano",
            price : 1.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1544025162-d76694265947"
        },
        {
            id : 6,
            name : "Chicken",
            price : 2.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        },
        {
            id : 7,
            name : "steak",
            price : 2.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        },
        {
            id : 8,
            name : "Soup",
            price : 1.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        }
    ]
    const Lunchdate = [
    {
            id : 1,
            name : "អាម៉ុក",
            price : 3,
            title : "Beef, ត្រី, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        },
        {
            id : 2,
            name : "នំបាញ់ឆែវ",
            price : 1.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        },
        {
            id : 3,
            name : "spakati",
            price : 2.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1550547660-d9450f859349"
        },
        {
            id : 4,
            name : "ice cream",
            price : 1.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        },
        {
            id : 5,
            name : "Milk tea",
            price : 2.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1544025162-d76694265947"
        },
        {
            id : 6,
            name : "Crispy Chicken rice",
            price : 3,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        },
        {
            id : 7,
            name : "potato",
            price : 2.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        },
        {
            id : 8,
            name : "stek",
            price : 1.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        }
    ]
    const Dinnerdate =[
        {
            id : 1,
            name : "milk",
            price : 3,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        },
        {
            id : 2,
            name : "coffee",
            price : 1.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        },
        {
            id : 3,
            name : "Green tea",
            price : 2.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1550547660-d9450f859349"
        },
        {
            id : 4,
            name : "Crispy Chicken Poblano",
            price : 2.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        },
        {
            id : 5,
            name : "Ice late",
            price : 2.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1544025162-d76694265947"
        },
        {
            id : 6,
            name : "tea",
            price : 2.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        },
        {
            id : 7,
            name : "Matcha",
            price : 2.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        },
        {
            id : 8,
            name : "Matcha late",
            price : 1.5,
            title : "Beef, chicken, turkey.",
            image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        }
    ]

    const Breakfast = document.getElementById("product-list-Breakfast");
    const Lunch = document.getElementById("product-list-Lunch");
    const Dinner = document.getElementById("product-list-Dinner");
// Show data on Breakfast Menus
    Breakfastdate.forEach(product => {
    Breakfast.innerHTML += `
        <div class="col">
                <div class="menu-item">
                    <img src="${product.image}">
                    <div>
                        <h5>${product.name}</h5>
                        <p>${product.title}</p>
                    </div>
                    <span>${product.price}$</span>
                    <button
                        class="btn btn-outline-success shadow"
                        onclick='addToCart(${JSON.stringify(product)})'>
                        Add Menu
                    </button>
                </div>
            </div> 
    `;
    });
// Show data on Lunch Menus
    Lunchdate.forEach(product => {
    Lunch.innerHTML += `
        <div class="col">
                <div class="menu-item">
                    <img src="${product.image}">
                    <div>
                        <h5>${product.name}</h5>
                        <p>${product.title}</p>
                    </div>
                    <span>${product.price}$</span>
                    <button
                        class="btn btn-outline-success shadow"
                        onclick='addToCart(${JSON.stringify(product)})'>
                        Add Menu
                    </button>
                </div>
            </div> 
    `;
    });
// Show data on Dinner Menus
    Dinnerdate.forEach(product => {
    Dinner.innerHTML += `
        <div class="col">
                <div class="menu-item">
                    <img src="${product.image}">
                    <div>
                        <h5>${product.name}</h5>
                        <p>${product.title}</p>
                    </div>
                    <span>${product.price}$</span>
                    <button
                        class="btn btn-outline-success shadow"
                        onclick='addToCart(${JSON.stringify(product)})'>
                        Add Menu
                    </button>
                </div>
            </div> 
    `;
    });

    function addToCart(product) {
    selectedProducts.push(product);

        localStorage.setItem("cart",JSON.stringify(selectedProducts)
        );

        const toast = new bootstrap.Toast(document.getElementById('cartToast'));
        toast.show();
        // alert(product.name + "The Menu added !");
    }

    function goToCart() {
    window.location.href = "project.html";
    } 
// save data on page booking payments
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartBody = document.getElementById("cartBody");

    displayCart();

// បង្ហាញ រូបភាព ឈ្មោះ តម្លៃ នៅពេល add menus
    
    function displayCart() {

        cartBody.innerHTML = "";
        let total = 0;

        cart.forEach(product => {

            total += product.price;

            cartBody.innerHTML += `
            <tr>
                <td>
                    <img src="${product.image}" width="80">
                </td>
                <td>${product.name}</td>
                <td>$${product.price}</td>
            </tr>
            `;
        });

// total price display
        cartBody.innerHTML += `
        <tr class="table-primary">
            <td colspan="2"><strong>Total</strong></td>
            <td><strong>$${total}</strong></td>
        </tr>
        `;
    }

// Restart data
    function restartPage() {
        location.reload();
    }
// លក្ខខណ្ឌសម្រាប់បង្ហាញបើសិនជាមិនបាន Add Menus
    function clearCart() {
        if(confirm("Clear all products from cart?")) {

            localStorage.removeItem("cart");
            cartBody.innerHTML = `
            <tr>
                <td colspan="3" class="text-center">
                    Menu is empty
                </td>
            </tr>
            
            `;
        }
    }
// Payments display User data
    function Pay(){
        document.getElementById('username').innerText = document.getElementById('name').value;
        document.getElementById('useremail').innerText = document.getElementById('email').value;
        document.getElementById('userphone').innerText = document.getElementById('phone').value;
        document.getElementById('paydate').innerText = document.getElementById('date').value;

        const now = new Date();

        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }
        document.getElementById("paytime").textContent =
            now.toLocaleString('en-US', options);
    }