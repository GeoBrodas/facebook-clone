import { db } from 'firebase-config';
import { useCollection } from 'react-firebase-hooks/firestore';
import PostCard from './ui/PostCard';

function Posts() {
  // posts, loading, error (down)
  const [realtimePosts] = useCollection(
    db.collection('posts').orderBy('timestamp', 'desc')
  );

  return (
    <div className="pb-5">
      {/* Optional chaining in action (down : ?.):-> returns undifined if found null -> sub for writing ternary operation */}
      {realtimePosts?.docs.map((doc) => (
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
