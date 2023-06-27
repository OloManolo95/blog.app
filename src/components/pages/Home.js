import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';
import Posts from '../features/Posts';

const Home = () => {
    return(
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h2>All posts</h2>
                <Button variant="outline-info" as={NavLink} to="/post/add">Add Post</Button>
            </div>
            <Posts />
        </div>
    );
};

export default Home;