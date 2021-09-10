import InputBox from './InputBox';
import Posts from './Posts';
import Stories from './Stories';

function Feed(props) {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 ml-2 sm:ml-0 mr-2 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* Stories */}
        <Stories />
        {/* Input */}
        <InputBox />
        {/* Posts */}
        <Posts posts={props.posts} />
      </div>
    </div>
  );
}

export default Feed;
