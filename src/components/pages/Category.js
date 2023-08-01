import Posts from "../features/Posts";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostByCategory } from "../../Redux/postsRedux";

const Category = () => {

  const { name } = useParams();
  const categoryName = name.charAt(0).toUpperCase() + name.slice(1);

  const postByCategory = useSelector(state => getPostByCategory(state, categoryName));

  return (
    <div>
      <div>
        <h1>
          { `Category: ${ categoryName }` }
        </h1>
      </div>
      <Posts posts={postByCategory} />
    </div>
  );

};

export default Category;