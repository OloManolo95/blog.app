import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { getAllPosts } from '../../Redux/postsRedux';

const Posts = () => {

    const posts = useSelector(getAllPosts);
    return(
        <Row className='py-4'>
            {
                posts.map(post => (
                    <Col key={post.id} xs="12" md="6" lg="4" className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <div>
                                    <span className='fw-bold'>Author:&nbsp;</span>
                                    <span>{post.author}</span>
                                </div>
                                <div>
                                    <span className="fw-bold">Published:&nbsp;</span>
                                    <span>{post.publishedDate}</span>
                                </div>
                                <Card.Text className="mt-2">
                                    {post.shortDescription}
                                </Card.Text>
                                <Button variant="primary" as={NavLink} to={`/post/${post.id}`}>Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
};

export default Posts;