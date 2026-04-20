import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import RecipeItemList from './RecipeItemList';
const Home = () => {
  // useEffect(()=>{
  //   //link copied
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //   //json parse
  //   .then(res=>res.json())
  //   //body
  //   .then(rz=>{
  //   console.log(rz[5]);
  //   })
  // });
  return (
    <>
      <section className="tstbite-section p-0">
        <div className="container">
          {/* <!-- Tstbite Search --> */}
          <div className="tstbite-search">
            <div className="container">
              <div className="input-group search-box">
                <input type="text" name="Search" placeholder="Search" className="form-control" id="Search" />
                <button type="button"><img src="assets/images/icons/close.svg" alt="img" /></button>
              </div>
              <div className="search-results" id="SearchList">
                <div className="tstbite-search-list">
                  <a href="#0">
                    <figure><img src="assets/images/menus/menu111.png" className="rounded-circle" alt="Menu" /></figure>
                    <div className="tstbite-search-name">
                      <strong className="small">Cake</strong>
                      <span className="tiny">Category</span>
                    </div>
                  </a>
                </div>
                <div className="tstbite-search-list">
                  <a href="#0">
                    <figure><img src="assets/images/menus/menu112.jpg" className="rounded-2" alt="Menu" /></figure>
                    <div className="tstbite-search-name">
                      <strong className="small">Black Forest Birthday Cake</strong>
                    </div>
                  </a>
                </div>
                <div className="tstbite-search-list">
                  <a href="#0">
                    <figure><img src="assets/images/menus/menu113.jpg" className="rounded-2" alt="Menu" /></figure>
                    <div className="tstbite-search-name">
                      <strong className="small">Double Thick Layered Sponge Cake</strong>
                    </div>
                  </a>
                </div>
                <div className="tstbite-search-list">
                  <a href="#0">
                    <figure><img src="assets/images/menus/menu114.jpg" className="rounded-2" alt="Menu" /></figure>
                    <div className="tstbite-search-name">
                      <strong className="small">Cranberry Macaroon Ice cream Cake</strong>
                    </div>
                  </a>
                </div>
                <div className="tstbite-search-list">
                  <a href="#0">
                    <figure><img src="assets/images/menus/menu115.jpg" className="rounded-2" alt="Menu" /></figure>
                    <div className="tstbite-search-name">
                      <strong className="small">Almond Cinnamon Sponge Cake</strong>
                    </div>
                  </a>
                </div>
                <div className="tstbite-search-list">
                  <a href="#0">
                    <figure><img src="assets/images/menus/menu116.jpg" className="rounded-2" alt="Menu" /></figure>
                    <div className="tstbite-search-name">
                      <strong className="small">Four Mini Birthday Cupcakes</strong>
                    </div>
                  </a>
                </div>
                <div className="text-center py-4">
                  <a href="#0" className="btn btn-sm btn-outline-dark px-4 py-2">See all 343 results</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card rounded-16 overflow-hidden border-0 bg-secondary mt-0 mt-md-4">
            <div className="row g-0">
              <div className="col-lg-7">
                <img src="assets/images/menus/menu1.jpg" className="w-100" alt="Menu" />
              </div>
              <div className="col-lg-5">
                <div className="p-4 p-md-5 d-flex flex-column justify-content-center h-100 position-relative">
                  <strong>
                    <svg data-name="feather-icon/trending-up" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                      <rect data-name="Bounding Box" width="20" height="20" fill="rgba(255,255,255,0)" />
                      <path d="M.244,11.423a.834.834,0,0,1,0-1.178L6.494,3.994a.834.834,0,0,1,1.178,0L11.25,7.571l5.9-5.9H14.167a.833.833,0,1,1,0-1.667h5A.833.833,0,0,1,20,.833v5a.834.834,0,0,1-1.667,0V2.845L11.839,9.339a.834.834,0,0,1-1.179,0L7.083,5.761l-5.66,5.661a.834.834,0,0,1-1.179,0Z" transform="translate(0 4.167)" fill="#ff642f" />
                    </svg>
                    <span className="ml-2 caption font-weight-medium">85% would make this again</span>
                  </strong>
                  <h4 className="my-3">Mighty Super Cheesecake</h4>
                  <p className="big pr-0 pr-md-5 pb-3 pb-sm-5 pb-lg-0">Look no further for a creamy and ultra smooth classic cheesecake recipe! no one can deny its simple decadence.</p>
                  <a href="#0" className="circle circle-lg tstbite-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13.333" height="13.333" viewBox="0 0 13.333 13.333">
                      <path d="M6.077,13.089a.833.833,0,0,1,0-1.178L10.488,7.5H.833a.833.833,0,0,1,0-1.667h9.655L6.077,1.423A.834.834,0,0,1,7.256.244l5.829,5.83a.833.833,0,0,1,0,1.186L7.256,13.089a.834.834,0,0,1-1.179,0Z" fill="#ff642f" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Tstbite Components, My 4, My Md 5 --> */}
          <section className="tstbite-components my-4 my-md-5">
            <h5 className="py-3 mb-0">Super Delicious</h5>
            <div className="row">
              <div className="col-md-4">
                <figure className="my-3 tstbite-card">
                  <a href="#0" className="tstbite-animation rounded-6">
                    <img src="assets/images/menus/menu2.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <div className="w-100 float-left">
                      <div className="float-left">
                        <div className="fabrx-ratings has-rating rating">
                          <input type="radio" id="radio1" name="rate1" value="1" checked="checked" />
                          <label for="radio1" className="custom-starboxes"></label>
                          <input type="radio" id="radio2" name="rate1" value="2" />
                          <label for="radio2" className="custom-starboxes"></label>
                          <input type="radio" id="radio3" name="rate1" value="3" />
                          <label for="radio3" className="custom-starboxes"></label>
                          <input type="radio" id="radio4" name="rate1" value="4" />
                          <label for="radio4" className="custom-starboxes"></label>
                          <input type="radio" id="radio5" name="rate1" value="5" />
                          <label for="radio5" className="custom-starboxes"></label>
                        </div>
                      </div>
                    </div>
                    <a href="#0" className="f-size-20 text-black d-block mt-1 font-weight-semibold">Spinach and Cheese Pasta</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="my-3 tstbite-card">
                  <a href="#0" className="tstbite-animation rounded-6">
                    <img src="assets/images/menus/menu3.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <div className="w-100 float-left">
                      <div className="float-left">
                        <div className="fabrx-ratings has-rating rating">
                          <input type="radio" id="radio6" name="rate2" value="1" checked="checked" />
                          <label for="radio6" className="custom-starboxes"></label>
                          <input type="radio" id="radio7" name="rate2" value="2" />
                          <label for="radio7" className="custom-starboxes"></label>
                          <input type="radio" id="radio8" name="rate2" value="3" />
                          <label for="radio8" className="custom-starboxes"></label>
                          <input type="radio" id="radio9" name="rate2" value="4" />
                          <label for="radio9" className="custom-starboxes"></label>
                          <input type="radio" id="radio10" name="rate2" value="5" />
                          <label for="radio10" className="custom-starboxes"></label>
                        </div>
                      </div>
                    </div>
                    <a href="#0" className="f-size-20 text-black d-block mt-1 font-weight-semibold">Fancy Glazed Dounts</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="my-3 tstbite-card">
                  <a href="#0" className="tstbite-animation rounded-6">
                    <img src="assets/images/menus/menu4.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <div className="w-100 float-left">
                      <div className="float-left">
                        <div className="fabrx-ratings has-rating rating">
                          <input type="radio" id="radio11" name="rate3" value="1" checked="checked" />
                          <label for="radio11" className="custom-starboxes"></label>
                          <input type="radio" id="radio12" name="rate3" value="2" />
                          <label for="radio12" className="custom-starboxes"></label>
                          <input type="radio" id="radio13" name="rate3" value="3" />
                          <label for="radio13" className="custom-starboxes"></label>
                          <input type="radio" id="radio14" name="rate3" value="4" />
                          <label for="radio14" className="custom-starboxes"></label>
                          <input type="radio" id="radio15" name="rate3" value="5" />
                          <label for="radio15" className="custom-starboxes"></label>
                        </div>
                      </div>
                    </div>
                    <a href="#0" className="f-size-20 text-black d-block mt-1 font-weight-semibold">Mighty Cheesy Breakfast Burger</a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
          {/* <!-- Tstbite Components, My 4, My Md 5 --> */}
          <section className="tstbite-components my-4 my-md-5">
            <h5 className="py-3 mb-0">Sweet Tooth</h5>
            <div className="row">
              <div className="col-md-4">
                <figure className="my-3 tstbite-card">
                  <a href="#0" className="tstbite-animation rounded-6">
                    <img src="assets/images/menus/menu5.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <div className="w-100 float-left">
                      <div className="float-left">
                        <div className="fabrx-ratings has-rating rating">
                          <input type="radio" id="radio16" name="rate4" value="1" checked="checked" />
                          <label for="radio16" className="custom-starboxes"></label>
                          <input type="radio" id="radio17" name="rate4" value="2" />
                          <label for="radio17" className="custom-starboxes"></label>
                          <input type="radio" id="radio18" name="rate4" value="3" />
                          <label for="radio18" className="custom-starboxes"></label>
                          <input type="radio" id="radio19" name="rate4" value="4" />
                          <label for="radio19" className="custom-starboxes"></label>
                          <input type="radio" id="radio20" name="rate4" value="5" />
                          <label for="radio20" className="custom-starboxes"></label>
                        </div>
                      </div>
                    </div>
                    <a href="#0" className="f-size-20 text-black d-block mt-1 font-weight-semibold">Caramel Strawberry Milkshake</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="my-3 tstbite-card">
                  <a href="#0" className="tstbite-animation rounded-6">
                    <img src="assets/images/menus/menu6.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <div className="w-100 float-left">
                      <div className="float-left">
                        <div className="fabrx-ratings has-rating rating">
                          <input type="radio" id="radio21" name="rate5" value="1" checked="checked" />
                          <label for="radio21" className="custom-starboxes"></label>
                          <input type="radio" id="radio22" name="rate5" value="2" />
                          <label for="radio22" className="custom-starboxes"></label>
                          <input type="radio" id="radio23" name="rate5" value="3" />
                          <label for="radio23" className="custom-starboxes"></label>
                          <input type="radio" id="radio24" name="rate5" value="4" />
                          <label for="radio24" className="custom-starboxes"></label>
                          <input type="radio" id="radio25" name="rate5" value="5" />
                          <label for="radio25" className="custom-starboxes"></label>
                        </div>
                      </div>
                    </div>
                    <a href="#0" className="f-size-20 text-black d-block mt-1 font-weight-semibold">Chocolate and Banana Jar Cake</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="my-3 tstbite-card">
                  <a href="#0" className="tstbite-animation rounded-6">
                    <img src="assets/images/menus/menu7.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <div className="w-100 float-left">
                      <div className="float-left">
                        <div className="fabrx-ratings has-rating rating">
                          <input type="radio" id="radio26" name="rate6" value="1" checked="checked" />
                          <label for="radio26" className="custom-starboxes"></label>
                          <input type="radio" id="radio27" name="rate6" value="2" />
                          <label for="radio27" className="custom-starboxes"></label>
                          <input type="radio" id="radio28" name="rate6" value="3" />
                          <label for="radio28" className="custom-starboxes"></label>
                          <input type="radio" id="radio29" name="rate6" value="4" />
                          <label for="radio29" className="custom-starboxes"></label>
                          <input type="radio" id="radio30" name="rate6" value="5" />
                          <label for="radio30" className="custom-starboxes"></label>
                        </div>
                      </div>
                    </div>
                    <a href="#0" className="f-size-20 text-black d-block mt-1 font-weight-semibold">Berry Maddness Biscuts</a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
          {/* <!-- Tstbite Components, My 4, My Md 5 --> */}
          <section className="tstbite-components my-4 my-md-5">
            <h5 className="py-3 mb-0">Popular Categories</h5>
            <RecipeItemList count={16} />
          </section>
        </div>
        {/* <!-- Tstbite Components Bg Primary Light, My 5, Py 5 --> */}
        <section className="tstbite-components bg-primary-light my-5 py-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 offset-xl-3 offset-lg-2 text-center py-4 py-md-5">
                <h2 className="mb-3 h1">Deliciousness to your inbox</h2>
                <p className="f-size-24 font-weight-regular">Enjoy weekly hand picked recipes <br />and recommendations</p>
                <div className="input-group custom-input-group mt-4">
                  <input type="text" className="form-control" placeholder="Email Address" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">JOIN</button>
                  </div>
                </div>
                <small className="mt-3 d-block">By joining our newsletter you agree to our <a href="#0" className="text-black d-block d-sm-inline-block"><u className="tstbite-underline">Terms and Conditions</u></a></small>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          {/* <!-- Tstbite Components, My 4, My Md 5 --> */}
          <section className="tstbite-components my-4 my-md-5">
            <h5 className="py-3 h3 mb-0">Hand-Picked Collections</h5>
            <div className="row">
              <div className="col-md-6">
                <figure className="my-3 tstbite-card">
                  <a href="#0" className="tstbite-animation stretched-link rounded-top-6">
                    <img src="assets/images/menus/menu14.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="tstbite-collection border-top-0 rounded-bottom-6">
                    <div className="text-black pt-3 pb-4 px-4 d-lg-flex align-items-end justify-content-between text-right">
                      <h5 className="mb-3 md-lg-0 pr-0 pr-lg-4 text-left"><a href="#0" className="stretched-link">Sushi Combos for your Next Party</a></h5>
                      <span className="btn btn-sm btn-outline-dark text-nowrap">156 Recipes</span>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6">
                <figure className="my-3 tstbite-card">
                  <a href="#0" className="tstbite-animation stretched-link rounded-top-6">
                    <img src="assets/images/menus/menu15.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="tstbite-collection border-top-0 rounded-bottom-6">
                    <div className="text-black pt-3 pb-4 px-4 d-lg-flex align-items-end justify-content-between text-right">
                      <h5 className="mb-3 md-lg-0 pr-0 pr-lg-4 text-left"><a href="#0">Everything Bagel</a></h5>
                      <span className="btn btn-sm btn-outline-dark text-nowrap">156 Recipes</span>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6">
                <figure className="my-3 tstbite-card">
                  <a href="#0" className="tstbite-animation stretched-link rounded-top-6">
                    <img src="assets/images/menus/menu16.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="tstbite-collection border-top-0 rounded-bottom-6">
                    <div className="text-black pt-3 pb-4 px-4 d-lg-flex align-items-end justify-content-between text-right">
                      <h5 className="mb-3 md-lg-0 pr-0 pr-lg-4 text-left"><a href="#0">Cook Like a Chef</a></h5>
                      <span className="btn btn-sm btn-outline-dark text-nowrap">156 Recipes</span>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6">
                <figure className="my-3 tstbite-card">
                  <a href="#0" className="tstbite-animation stretched-link rounded-top-6">
                    <img src="assets/images/menus/menu17.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="tstbite-collection border-top-0 rounded-bottom-6">
                    <div className="text-black pt-3 pb-4 px-4 d-lg-flex align-items-end justify-content-between text-right">
                      <h5 className="mb-3 md-lg-0 pr-0 pr-lg-4 text-left"><a href="#0">Exquisite Dinner Recipe Ideas</a></h5>
                      <span className="btn btn-sm btn-outline-dark text-nowrap">156 Recipes</span>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6">
                <figure className="my-3 tstbite-card">
                  <a href="#0" className="tstbite-animation stretched-link rounded-top-6">
                    <img src="assets/images/menus/menu18.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="tstbite-collection border-top-0 rounded-bottom-6">
                    <div className="text-black pt-3 pb-4 px-4 d-lg-flex align-items-end justify-content-between text-right">
                      <h5 className="mb-3 md-lg-0 pr-0 pr-lg-4 text-left"><a href="#0">The Ultimate Cookie Frenzy</a></h5>
                      <span className="btn btn-sm btn-outline-dark text-nowrap">156 Recipes</span>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6">
                <figure className="my-3 tstbite-card">
                  <a href="#0" className="tstbite-animation stretched-link rounded-top-6">
                    <img src="assets/images/menus/menu19.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="tstbite-collection border-top-0 rounded-bottom-6">
                    <div className="text-black pt-3 pb-4 px-4 d-lg-flex align-items-end justify-content-between text-right">
                      <h5 className="mb-3 md-lg-0 pr-0 pr-lg-4 text-left"><a href="#0">For the Love of Donuts</a></h5>
                      <span className="btn btn-sm btn-outline-dark text-nowrap">156 Recipes</span>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
          {/* <!-- Tstbite Components, My 4, My Md 5 --> */}
          <section className="tstbite-components my-4 my-md-5">
            <h5 className="py-3 mb-0">Latest Recipes</h5>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu20.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Caramel Strawberry Milkshake</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu21.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Cashew Vegan Rice</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu22.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Smoked Salmon Salad Sandwich</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu23.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Salmon in Creamy Sun Dried Tomato Sauce</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu24.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Healthy Jam Waffle Breakfast</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu25.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Chocolate and Banana Jar Cake</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu26.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Caramel Blueberry Scones</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu27.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Blueberry Carrot Cake</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu28.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Vegan Cauliflower Salad</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu29.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Roasted Red Pepper Soup</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu30.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Eggs and Avocado Toast</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu31.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Pork Shoulder Cashew Noodles</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu32.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Toasted Farfalle In Pesto Sauce</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu33.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Cheesy Bacon Burger Sliders</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu34.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Fig and Raisins Oatmeal</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu35.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Silky Smooth Panacotta</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu36.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Triple Decker Cranberry Cake</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu37.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Very Berry Healthy Summer Smoothie</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu38.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Crispy Orange Chips</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu39.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Tumeric Lavendar Tea</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu40.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Blue Velvet Brownies</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu41.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Birthday Cupcakes</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu42.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Gourmet Fillet in Roasted Almond Sauce</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <figure className="my-3 my-md-4 tstbite-card">
                  <a href="recipe-sidebar.html" className="tstbite-animation stretched-link rounded-6">
                    <img src="assets/images/menus/menu43.jpg" className="w-100" alt="Menu" />
                  </a>
                  <figcaption className="mt-2">
                    <a href="recipe-sidebar.html" className="text-black d-block mt-1 font-weight-semibold big">Four Ingredient Oatmeal Pancakes</a>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="text-center py-5">
              <a href="#0" className="btn btn-outline-dark px-4 px-md-5 py-1 py-md-2 big font-weight-medium">Load More</a>
            </div>
          </section>
        </div>

      </section>




    </>
  )
}
export default Home;