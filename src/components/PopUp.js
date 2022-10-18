import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const PopUp = ({
  modalIsOpen,
  closeModal,
  commentName,
  commentEmail,
  commenterName,
  commenterEmail,
  commentSubmit,
}) => {
  console.log(commenterName, commenterEmail, "test");

  return (
    <div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <button
            style={{
              float: "right",
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
            onClick={closeModal}
          >
            x
          </button>
          <form onSubmit={(e) => e.preventDefault()}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                margin: "10px",
              }}
            >
              <label htmlFor='name'>
                Name:
                <input
                  type='text'
                  style={{ width: "100%", padding: "5px", margin: "10px 0" }}
                  onChange={commentName}
                  value={commenterName}
                />
              </label>
              <label htmlFor='email'>
                Email:
                <input
                  type='email'
                  style={{ width: "100%", padding: "5px", margin: "10px 0" }}
                  onChange={commentEmail}
                  value={commenterEmail}
                />
              </label>
              <button
                type='submit'
                style={{
                  cursor: "pointer",
                  padding: "5px 10px",
                  backgroundColor: "#E59866",
                  color: "#fff",
                  borderRadius: "5px",
                  width: "fit-content",
                  margin: "5px 0",
                }}
                onClick={() => {
                  commentSubmit();
                  closeModal();
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default PopUp;
