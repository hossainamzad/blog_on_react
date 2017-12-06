import React from 'react';
const BlogList = (props) => {
  return(
    <div className="blog-container">
      {props.blog.map(blog=> {
        return(
          <div className="blogItem">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
          )
        })
      }
    </div>
  )
}
export default BlogList;
