import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfz41x146tyk01uifgjjdpgl/master"
);

const QUERY = gql`
  {
    posts {
      createdAt
      datePublished
      description
      id
      publishedAt
      slug
      title
      updatedAt
      content {
        html
      }
    }
  }
`;
console.log(graphcms);

export async function getStaticProps() {
  try {
    const { posts } = await graphcms.request(QUERY);
    return {
      props: {
        posts,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default function Blog({ posts }) {
  return (
    <div
      id="container"
      className="max-w-[600px] w-[80%] mx-auto h-full flex flex-col  "
    >
      <div className="flex w-auto pt-8 pb-8  ">
        <h1 className="inline-flex items-center justify-center align-middle ml-auto mr-auto">
          Learnings and writings
        </h1>
      </div>
      {posts.map((post) => (
        <BlogCard
          title={post.title}
          coverPhoto={post.coverPhoto}
          key={post.id}
          datePublished={post.datePublished}
          slug={post.slug}
          description={post.description}
        />
      ))}
    </div>
  );
}
