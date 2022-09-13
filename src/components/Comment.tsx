interface Props {
    commentText: string;
  }
  
  function Comment(props: Props) {
    return <div>{props.commentText}</div>;
  }
  
  export default Comment