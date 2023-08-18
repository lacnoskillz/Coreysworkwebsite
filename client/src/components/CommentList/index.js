import React from 'react';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }
// console.log(comments,"commments")
  return (
    <>
      <h3
        className="m-2 display-inline-block"
        style={{ borderBottom: '1px solid black' }}
      >
        Comments
      </h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="card mb-4">
            <h4 className="card-header bg-dark text-light p-2 m-0">
              {comment.commentAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                made this review on {comment.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
            <p>{comment.commentText}</p>
          </div>
          </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
