import Article from "./articleModel";

interface Post {
    status: string,
    totalResults: number,
    articles: Article[]
};

export default Post;