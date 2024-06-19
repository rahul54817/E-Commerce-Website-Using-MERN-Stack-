import React from 'react';

function UserProfile() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="text-center">
                    <img src="avatar.jpg" className="img-fluid rounded-circle mb-3" alt="User Avatar" />
                    <h5 className="mb-0">John Doe</h5>
                    <p className="text-muted mb-2">johndoe@example.com</p>
                    <p className="text-muted">123 Main St, City</p>
                    <hr />
                    <h6 className="mb-3">Account Settings</h6>
                    <ul className="list-unstyled mb-0">
                      <li><a href="#" className="text-muted">Edit Profile</a></li>
                      <li><a href="#" className="text-muted">Change Password</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <h2 className="mb-4">Order History</h2>
                  <ul className="list-group mb-4">
                    <li className="list-group-item">Order 1</li>
                    <li className="list-group-item">Order 2</li>
                    <li className="list-group-item">Order 3</li>
                    {/* Render user's order history */}
                  </ul>
                  <h2 className="mb-4">Saved Addresses</h2>
                  <ul className="list-group mb-4">
                    <li className="list-group-item">Address 1</li>
                    <li className="list-group-item">Address 2</li>
                    <li className="list-group-item">Address 3</li>
                    {/* Render user's saved addresses */}
                  </ul>
                  <h2 className="mb-4">Saved Payment Methods</h2>
                  <ul className="list-group mb-4">
                    <li className="list-group-item">Payment Method 1</li>
                    <li className="list-group-item">Payment Method 2</li>
                    <li className="list-group-item">Payment Method 3</li>
                    {/* Render user's saved payment methods */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
