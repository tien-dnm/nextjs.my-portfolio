import { getPostByID } from "../../getPost";
import PostForm from "../../postForm";
import { Post } from "../../postModel";

export default async function Page({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const data: Post = await getPostByID(postId);
  return (
    <PostForm
      key={data._id}
      title={data.title}
      _id={data._id}
      author={data.author}
      content={data.content}
      publish_date={data.publish_date}
      sub_title={data.sub_title}
      slug={data.slug}
      thumbnail_link={data.thumbnail_link}
    />
  );
}
