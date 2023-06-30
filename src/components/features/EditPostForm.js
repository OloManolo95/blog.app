import { useDispatch } from 'react-redux';
import { editPost } from '../../Redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostById } from '../../Redux/postsRedux';
import PostForm from './PostForm';

const EditPostForm = () => {


    const disptach = useDispatch();

    const navigate = useNavigate();

    const { postId } = useParams();

    const postData = useSelector(state => getPostById(state, postId));


    const handleSubmit = post => {
        disptach(editPost({...post, postId }));
        navigate('/');
    }

    if(!postData) return <Navigate to="/" />;

    return(
        <PostForm action={handleSubmit}
              actionText="Edit post"
              title={postData.title}
              author={postData.author}
              published={postData.publishedDate}
              shortDescription={postData.shortDescription}
              content={postData.content} />
        );
};

export default EditPostForm;