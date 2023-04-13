import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfz41x146tyk01uifgjjdpgl/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      description
      slug
      datePublished
      content {
        html
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const slug = params.slug;
    const data = await graphcms.request(QUERY, { slug });
    const post = data.post;
    return {
      props: {
        post,
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

export default function BlogPost({ post }) {
  return (
    <div className="flex flex-col items-center ml-auto mr-auto w-[70%]">

      <Link href="/blog" className="mt-8">Back to blog</Link>
      <h1 className="mt-8 mb-8">{post.title}</h1>
      <div className="">
        <h5>{post.dataPublished}</h5>
      </div>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
    </div>
  );
}





