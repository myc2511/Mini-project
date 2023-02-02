import React from 'react'

function ComplaintForm() {
  return (
    <div>
      <form >
        <div>
      <label>
            <span class="lead">First Name 
            </span>
            <input placeholder="John" type="text"/>
          </label>
        </div>
        <div>
          <label>
          <span class="lead">Last Name</span>
          <input placeholder="Doe" type="text"/>
          </label>
        </div>
        <div>
          <label>
          <span class="lead">Email </span>
          <input placeholder="john.doe@google.com" type="text"/>
          </label>
        </div>
        <div>
          <label>
          <span class="lead">Your Address</span>
          <input placeholder="1000 Main St" type="text"/>
          </label>
        </div>
        <div>
          <label>
          <span class="lead">City </span>
          <input placeholder="Houston" type="text"/>
          </label>
        </div>
        <div>
          <label>
          <span class="lead">State</span>
          <select name="state" id="text">
            <option>Texas</option>
            </select>
          </label>
        </div>
        <div>
          <label>
          <span class="lead">Zipcode</span>
          <input placeholder="77700" type="text"/>
          </label>
        </div>
        <div>
          <label>
              <span class="lead">Daytime Phone # </span>
              <input placeholder="(281)550-1000" type="text"/>
          </label>
        </div>
        <div>
          <label>
              <span class="lead">Evening Phone # </span>
              <input placeholder="(281)550-1000" type="text"/>
          </label>
          </div>
      </form>
    </div>
  )
}

export default ComplaintForm
