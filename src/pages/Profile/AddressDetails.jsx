import React from "react";

function AddressDetails({data}) {
  return (
    <>
      <div className="col-4 form-floating">
        <input
          type="text"
          id="addressLine1"
          className="form-control"
          placeholder="addressline1"
          value={data.addressLine1}
        />
        <label htmlFor="addressLine1">Street Name</label>
      </div>
      <div className="col-4 form-floating offset-1">
        <input
          type="text"
          id="addressLine2"
          className="form-control"
          placeholder="addressLine2"
          value={data.addressLine2}

        />
        <label htmlFor="addressLine2">House Number</label>
      </div>
      <div className="col-12 row gx-0 mt-3">
        <div className="col-4 form-floating">
          <input
            type="text"
            id="city"
            className="form-control"
            placeholder="city"
            value={data.city}
          />
          <label htmlFor="city">City</label>
        </div>
        <div className="col-4 form-floating offset-1">
          <input
            type="text"
            id="state"
            className="form-control"
            placeholder="state"
          value={data.state}

          />
          <label htmlFor="state">County</label>
        </div>
      </div>
    </>
  );
}

export default AddressDetails;
