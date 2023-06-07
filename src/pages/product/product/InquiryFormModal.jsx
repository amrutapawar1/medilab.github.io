import React from "react";
import InquiryForm from "./InquiryForm";

const InquiryFormModal = () => {
  return (
    <div
      class="modal fade"
      id="inquiryFormPopup"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Inquiry Form
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              style={{cursor:"pointer"}}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <InquiryForm />
          </div>
          {/* <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Submit
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default InquiryFormModal;
