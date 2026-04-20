import { useState } from 'react';
import { Link } from 'react-router-dom';
const Archive = () =>{
    return(
        <>
         <div class="container">
    {/* <!-- Tstbite Components, My 4, My Md 5, Desserts Box --> */}
    <section class="tstbite-components my-4 my-md-5 desserts-box">
      <div class="row align-items-end mb-0 mb-md-4 pt-0 pt-md-5">
        <div class="col-lg-9 col-md-8">
          <h5 class="py-3 mb-0">Breakfast, Lunch, Dinner, Deserts  <sup>(WORLDWIDE RECIPES)</sup></h5>
          <p>Samples of what you might create following our steps! BE IT PAKISTANI, ITALIAN, INDIAN, CHINESE, JAPANESE, KOREAN. ANY CUISINE, YOU NAME IT! :)</p>
        


        </div>
        <div class="col-lg-3 col-md-4">
          <div class="sort-filter">
            <span>Sort by: DATE</span>
          
          </div>
        </div>
      </div>
      <div class="row">
      
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="assets/images/menus/menu117.jpg" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Decadent Raspberry and Cream Cake</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="assets/images/menus/menu118.jpg" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Tripple Chocolate Cake</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://images.unsplash.com/photo-1684957691800-502e754ea1e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8fDA%3D" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Big Burgers</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://media.istockphoto.com/id/2125170487/photo/flying-pancakes-and-berries-topped-with-honey-pancake-levitation.webp?a=1&b=1&s=612x612&w=0&k=20&c=MCvQ58kCYBSEGoQDyaks2t5gL90tZHJMGx3rfGt7Cc4=" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Pancakes</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://media.istockphoto.com/id/1333127665/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.webp?a=1&b=1&s=612x612&w=0&k=20&c=3YtQkUbwhNVUKo0___k4URBOcL6o-LcMUCAZ-lIoGAw=" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Chicken Biryani</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGl0YWxsaWFuJTIwcGFzdGElMjBzbWFsbCUyMHBpY3N8ZW58MHx8MHx8fDA%3D" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Itallian Pasta</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://plus.unsplash.com/premium_photo-1664472757995-3260cd26e477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZHdpY2hlc3xlbnwwfHwwfHx8MA%3D%3D" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Salami Sandwich</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://images.unsplash.com/photo-1733907502048-d13331c4f7de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9hZGVkJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Loaded Fries</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://images.unsplash.com/photo-1710532767837-bddfa38b5736?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGl0YWxpYW4lMjBjdWlzaW5lfGVufDB8fDB8fHww" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Ginniochi</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://plus.unsplash.com/premium_photo-1673769108491-e87f4a72eec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbmVzZSUyMGN1aXNpbmV8ZW58MHx8MHx8fDA%3D" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Dumplings</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://images.unsplash.com/photo-1597490101653-8db754021a89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbmVzZSUyMGN1aXNpbmV8ZW58MHx8MHx8fDA%3D" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Whole Fish Fry</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://plus.unsplash.com/premium_photo-1683657860574-a13bf9800cf6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW1lcmljYW4lMjBjdWlzaW5lfGVufDB8fDB8fHww" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Crisp Hotdogs</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://plus.unsplash.com/premium_photo-1663012872761-33dd73e292cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2l6emxpbmclMjBjaGlja2VuJTIwc3RlYWtzJTIwZnVsbCUyMHZlZ2VzJTIwc2F1Y2VzfGVufDB8fDB8fHww" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Sizzling Steaks</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://plus.unsplash.com/premium_photo-1694547924505-caf71944b4df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amFwYW5lc2UlMjBjdWlzaW5lfGVufDB8fDB8fHww" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Japanese Noodles</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGN1aXNpbmV8ZW58MHx8MHx8fDA%3D" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Masala Dosa</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://media.istockphoto.com/id/2162493341/photo/exploring-the-tangy-spicy-and-refreshing-delight-of-pani-puri-indias-favourite-street-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=Tm9httJArZa4dzXcx7vuqp8viS9PyfN2rdJYkap2c5E=" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Pani Puri</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://media.istockphoto.com/id/1361087743/photo/lasagna-and-spinach.webp?a=1&b=1&s=612x612&w=0&k=20&c=QXF1irilBPx7KqIQZZbCe1hjsivi-gQ_7U_oft-zA9M=" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Dripping Lasagna</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="assets/images/menus/menu135.jpg" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">No Bake Cinnamon Cheesecake</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://media.istockphoto.com/id/1709721394/photo/delicious-chocolate-chip-cookies.webp?a=1&b=1&s=612x612&w=0&k=20&c=WrWtJgTdxpks4TNnJp4PQ7JWRFFM7k00V3m6-9sNdJ8=" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Choco Chip Cookies</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://media.istockphoto.com/id/1199607353/photo/fresh-chicken-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=jfb5jwlTURfywWZ_bQk5l16Wd4P7ZHP5ZQyDYL4QGmg=" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Caesar Salad</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://media.istockphoto.com/id/1676081951/photo/mediterranean-appeticer-antipasto-wooden-board-cold-cuts-meat-charcuterie-and-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=6mFk6eHdPxpH9aJSosp8cSfEO9QF0BJ2Ha7qltxeloE=" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Charcuterie Board</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
            <img src="https://media.istockphoto.com/id/1169975833/photo/chocolate-shake.webp?a=1&b=1&s=612x612&w=0&k=20&c=i_Y0FfntdcXvDqCiZx4g7RhRYMKRuBXDThn7GUE6XHc=" class="w-100" alt="Menu"/>
          </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Oreo Shakey</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://images.unsplash.com/photo-1542192477-a60644b01f5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGF0dGV8ZW58MHx8MHx8fDA%3D" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Latte</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <figure class="my-3 my-md-4 tstbite-card">
            <a href="#0" class="tstbite-animation stretched-link rounded-6">
              <img src="https://media.istockphoto.com/id/1423422264/photo/festive-christmas-dessert-tiramisu-sponge-cake-in-bright-rustic-kitchen-with-golden-christmas.webp?a=1&b=1&s=612x612&w=0&k=20&c=PH5jyf8ITkvTl_2W8RlZIhIDPyJ-_WXkdt1agPBW2TI=" class="w-100" alt="Menu"/>
            </a>
            <figcaption class="mt-2">
              <a href="#0" class="text-black d-block mt-1 font-weight-semibold big">Tiramisu Cheescake</a>
            </figcaption>
          </figure>
        </div>
        
      </div>
      <div>
      <Link to="/userpage">
  <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'black', border: 'none', cursor: 'pointer' }}>
    Want recipes? Click Me!
  </button>
</Link>
      </div>
      
    </section>
  </div>
        </>
    )
}
export default Archive;