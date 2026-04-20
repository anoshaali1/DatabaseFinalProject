const Profile = () =>{
    return(
        <>
        <div class="container">
    {/* <!-- Tstbite Components, My 4, My Md 5 --> */}
    <section class="tstbite-components my-4 my-md-5">
      <div class="row align-items-center pt-0 pt-md-5">
        <div class="col-lg-9 col-8 col-6">
          <h5 class="py-2 py-md-3 mb-0">Profile</h5>
        </div>
        <div class="col-lg-3 col-4 text-right">
          <a href="#0" class="btn btn-lg btn-primary px-4 px-md-5 text-uppercase">Save</a>
        </div>
      </div>
      <hr/>
      <div class="d-flex flex-wrap pt-3 pt-md-5 pb-4 mb-2 align-items-center">
        <div class="tstbite-profile tstbite-sm-profile">
          <img src="assets/images/avatars/avatar12.png" alt="Avatar"/>
        </div>
        <div>
          <a href="#0" class="btn btn-lg btn-primary px-4 px-md-5 ml-2 ml-md-4">Change photo</a>
          <a href="#0" class="btn btn-lg btn-outline-dark px-4 px-md-5 ml-2 ml-md-4">Delete</a>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <form class="mt-4">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group custom-form-group">
                  <label>Full Name</label>
                  <div class="form-control-box">
                    <input type="text" class="form-control" value="Suzan M"/>
                    <span class="form-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect data-name="Bounding Box" width="24" height="24" fill="rgba(255,255,255,0)"/>
                        <path d="M16,19V17a3,3,0,0,0-3-3H5a3,3,0,0,0-3,3v2a1,1,0,0,1-2,0V17a5,5,0,0,1,5-5h8a5,5,0,0,1,5,5v2a1,1,0,0,1-2,0ZM4,5a5,5,0,1,1,5,5A5.006,5.006,0,0,1,4,5ZM6,5A3,3,0,1,0,9,2,3,3,0,0,0,6,5Z" transform="translate(3 2)" fill="#7f7f7f"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group custom-form-group">
                  <label>Username</label>
                  <div class="form-control-box">
                    <input type="text" class="form-control" value="Miller"/>
                    <span class="form-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect data-name="Bounding Box" width="24" height="24" fill="rgba(255,255,255,0)"/>
                        <path d="M4.017,19.5A11,11,0,1,1,22,11v1a4,4,0,0,1-7.261,2.316A5,5,0,1,1,14,7V7a1,1,0,0,1,2,0v5a2,2,0,1,0,4,0V11a9,9,0,1,0-3.528,7.146,1,1,0,1,1,1.216,1.588A11,11,0,0,1,4.017,19.5ZM8,11a3,3,0,1,0,3-3A3,3,0,0,0,8,11Z" transform="translate(0.999 0.999)" fill="#7f7f7f"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group custom-form-group">
                  <label>Email</label>
                  <div class="form-control-box">
                    <input type="text" class="form-control" value="suzan@gmail.com"/>
                    <span class="form-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect data-name="Bounding Box" width="24" height="24" fill="rgba(255,255,255,0)"/>
                        <path d="M3,18a3,3,0,0,1-3-3V3.01C0,3,0,2.99,0,2.98A3,3,0,0,1,3,0H19a3,3,0,0,1,3,2.968c0,.018,0,.036,0,.054V15a3,3,0,0,1-3,3ZM2,15a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V4.921l-8.427,5.9a1,1,0,0,1-1.147,0L2,4.921ZM11,8.78l8.895-6.226A1,1,0,0,0,19,2H3a1,1,0,0,0-.895.553Z" transform="translate(1 3)" fill="#7f7f7f"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group custom-form-group">
                  <label>Password</label>
                  <div class="form-control-box">
                    <input type="password" class="form-control" value="......."/>
                    <span class="form-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect data-name="Bounding Box" width="24" height="24" fill="rgba(255,255,255,0)"/>
                        <path d="M3,22a3,3,0,0,1-3-3V12A3,3,0,0,1,3,9H4V6A6,6,0,0,1,16,6V9h1a3,3,0,0,1,3,3v7a3,3,0,0,1-3,3ZM2,12v7a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H3A1,1,0,0,0,2,12ZM14,9V6A4,4,0,1,0,6,6V9Z" transform="translate(2 1)" fill="#7f7f7f"/>
                      </svg>
                    </span>
                    <div class="text-right">
                      <a href="#0" class="text-orange small font-weight-medium">Change</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3 mt-md-5 pt-2 pt-md-4 pb-1">
              <h6 class="f-size-20 inter-font font-weight-semibold mb-3 mb-md-5">Connected Accounts</h6>
              <div class="form-group custom-form-group">
                <div class="d-flex flex-wrap">
                  <figure class="mb-1"><img src="assets/images/brands/facebook-logo.svg" alt="Facebook"/></figure>
                  <span class="ml-auto mt-2"><a href="#0">Disconnect</a></span>
                </div>
                <input type="text" class="form-control pl-0 pb-4 pt-0" value="Suzan Miller"/>
              </div>
              <div class="form-group custom-form-group">
                <div class="d-flex flex-wrap">
                  <figure class="mb-1"><img src="assets/images/brands/google-logo.svg" alt="Google"/></figure>
                  <span class="ml-auto mt-2"><a href="#0">Disconnect</a></span>
                </div>
                <input type="text" class="form-control pl-0 pb-4 pt-0" value="Suzan@gmail.com"/>
              </div>
            </div>
            <div class="mt-3 mt-md-5">
              <h6 class="f-size-20 inter-font font-weight-semibold mb-2 mb-md-4 pb-2">Newsletter</h6>
              <div class="d-md-flex align-items-center">
                <p class="mb-3">You are currently sunscribed to our newsletter</p>
                <div class="ml-auto mb-3">
                  <a href="#0" class="btn btn-lg btn-outline-dark px-4 px-md-5">Unsubscribe</a>
                </div>
              </div>
            </div>
            <hr class="my-4 my-md-5"/>
            <div class="d-flex align-items-center flex-wrap tstbite-svg mb-4 mb-md-5">
              <a href="#0">
                <svg data-name="feather-icon/log-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <rect data-name="Bounding Box" width="24" height="24" fill="rgba(255,255,255,0)"/>
                  <path d="M3,20a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H7A1,1,0,0,1,7,2H3A1,1,0,0,0,2,3V17a1,1,0,0,0,1,1H7a1,1,0,1,1,0,2Zm10.293-4.293a1,1,0,0,1,0-1.414L16.586,11H7A1,1,0,1,1,7,9h9.586L13.293,5.707a1,1,0,1,1,1.414-1.414l5,5a1,1,0,0,1,0,1.415l-5,5a1,1,0,0,1-1.414,0Z" transform="translate(2 2)"/>
                </svg>
                <span>Sign out</span>
              </a>
              <a href="#0" class="text-orange font-weight-medium ml-auto">Delete Account</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
        </>
    )
}
export default Profile;