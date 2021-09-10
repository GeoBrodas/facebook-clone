import PostCard from './ui/PostCard';

import LinearProgress from '@material-ui/core/LinearProgress';

function Posts(props) {
  const { posts } = props;

  return (
    <div>
      {/* Optional chaining in action (down : ?.):-> returns undifined if found null -> sub for writing ternary operation */}
      {posts?.docs.map((doc) => (
        <PostCard
          key={doc.id}
          name={doc.data().name}
          message={doc.data().message}
          email={doc.data().email}
          timestamp={doc.data().timestamp}
          userimage={doc.data().image}
          postImage={doc.data().postImage}
        />
      ))}
    </div>
  );
}

export default Posts;
