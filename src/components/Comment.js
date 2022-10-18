import React, { useState } from "react";
import PopUp from "./PopUp";

const Comment = () => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commenterName, setCommenterName] = useState("");
  const [commenterEmail, setCommenterEmail] = useState("");
  const [postComment, setPostComment] = useState("")

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  console.log(commentText, "comment");

  const commentName = (e) => {
    setCommenterName(e.target.value);
  };

  const commentEmail = (e) => {
    setCommenterEmail(e.target.value);
  };

  const commentSubmit = () => {
    const commentList = JSON.parse(localStorage.getItem("commentList") || "[]");


    if (commentList.indexOf(commentSave) === -1) {
      commentList.push(commentSave);
      localStorage.setItem("commentList", JSON.stringify(commentList));
    }
    // setCommentText("")
    // setCommenterName("")
    setPostComment(prev => [...prev, commentSave])
  };

  // console.log(commentSubmit(), "testSubmit");
  const commentSave = [commenterName, commentText]
  console.log(commentSave)
  return (
    <div>
      <div>
        <h2>Comments:</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          margin: "20px 0",
        }}
      >
        <textarea
          name='comment'
          id='comment'
          cols='100'
          rows='8'
          onChange={(e) => setCommentText(e.target.value)}
          value={commentText}
        ></textarea>
        <button
          type='submit'
          onClick={() => {
            setModalIsShown(true);
            openModal();
            commentSubmit();
          }}
          style={{
            cursor: "pointer",
            padding: "10px 20px",
            backgroundColor: "#E59866",
            color: "#fff",
            borderRadius: "5px",
            margin: "20px 0",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Post
        </button>
        {modalIsShown && (
          <PopUp
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            commentName={commentName}
            commentEmail={commentEmail}
            commenterName={commenterName}
            commenterEmail={commenterEmail}
            commentSubmit={commentSubmit}
          />
        )}
      </div>
      {postComment && <div>
        <p><b>{[...commentSave, commentSave[0]]}</b></p>
        <p>{[commentSave, commentSave[1]]}</p>
      </div>}
    </div>
  );
};

export default Comment;
