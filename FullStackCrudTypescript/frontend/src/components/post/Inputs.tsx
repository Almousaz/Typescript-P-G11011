import React, { FC } from 'react'

const  Inputs : FC = () => {



    









  return (
    <div>
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text font-bold">Title</span>
      </div>
      <input
        value={input.title}
        type="text"
        name="title"
        placeholder="Post title"
        className="input input-bordered w-full input-sm"
        onChange={onChangeInput}
      />
    </label>
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text font-bold">Content</span>
      </div>
      <textarea
        value={input.content}
        placeholder="Post content"
        className="textarea textarea-bordered textarea-sm w-full "
        name="content"
        onChange={onChangeInput}
      ></textarea>
    </label>
    <button
      className="btn btn-primary w-full btn-sm mt-4"
      onClick={onClickSubmit}
    >
      {postState.selectedPost.id !== "" ? "Edit Post" : "Create Post"}
    </button>
  </div>
  )
}

export default Inputs
