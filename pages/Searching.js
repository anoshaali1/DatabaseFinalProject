import { Link } from "react-router-dom";
const Searching =()=>{
    return(
        <>
        {/* <!-- Tstbite Search --> */}
  <div className="tstbite-search">
    <div className="container">
      <div className="input-group search-box">
        <input type="text" name="Search" placeholder="Search" className="form-control" id="Search"/>
        <button type="button"><img src="assets/images/icons/close.svg" alt="img"/></button>
      </div>
      <div className="search-results" id="SearchList">
        <div className="tstbite-search-list">
          <a href="#0">
            <figure><img src="assets/images/menus/menu111.png" className="rounded-circle" alt="Menu"/></figure>
            <div className="tstbite-search-name">
              <strong className="small">Cake</strong>
              <span className="tiny">Category</span>
            </div>
          </a>
        </div>
        <div className="tstbite-search-list">
          <a href="#0">
            <figure><img src="assets/images/menus/menu112.jpg" className="rounded-2" alt="Menu"/></figure>
            <div className="tstbite-search-name">
              <strong className="small">Black Forest Birthday Cake</strong>
            </div>
          </a>
        </div>
        <div className="tstbite-search-list">
          <a href="#0">
            <figure><img src="assets/images/menus/menu113.jpg" className="rounded-2" alt="Menu"/></figure>
            <div className="tstbite-search-name">
              <strong className="small">Double Thick Layered Sponge Cake</strong>
            </div>
          </a>
        </div>
        <div className="tstbite-search-list">
          <a href="#0">
            <figure><img src="assets/images/menus/menu114.jpg" className="rounded-2" alt="Menu"/></figure>
            <div className="tstbite-search-name">
              <strong className="small">Cranberry Macaroon Ice cream Cake</strong>
            </div>
          </a>
        </div>
        <div className="tstbite-search-list">
          <a href="#0">
            <figure><img src="assets/images/menus/menu115.jpg" className="rounded-2" alt="Menu"/></figure>
            <div className="tstbite-search-name">
              <strong className="small">Almond Cinnamon Sponge Cake</strong>
            </div>
          </a>
        </div>
        <div className="tstbite-search-list">
          <a href="#0">
            <figure><img src="assets/images/menus/menu116.jpg" className="rounded-2" alt="Menu"/></figure>
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
        </>
    )
}
export default Searching;