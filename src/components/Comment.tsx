interface Props {
    commentText: string;
  }
  
  function Comment(props: Props) {
    return <div className="comment">{props.commentText}</div>;
  }
  
  export default Comment