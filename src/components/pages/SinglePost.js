import { useSelector } from "react-redux";
import { getPostById } from "../../Redux/postsRedux";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col"
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { removePost } from "../../Redux/postsRedux";

const SinglePost = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { postId } = useParams();

    const postData = useSelector(state => getPostById(state, postId));

    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removePost( postId ));
    }


    if(!postData) return <Navigate to="/" />
    return(
        <>
            <Row className="justify-content-center">
                <Col xs="12" md="10" lg="8">
                    <header className="d-flex justify-content-between align-items-center">
                        <h2>
                            {postData.title}
                        </h2>
                        <div>
                            <Button variant="outline-info" as={NavLink} to={`/post/edit/${postData.id}`}>Edit</Button>
                            <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
                        </div>
                    </header>
                    <div className="py-4">
                        <div>
                            <span className="fw-bold">Author:&nbsp;</span>
                            <span>{postData.author}</span>
                        </div>
                        <div>
                            <span className="fw-bold">Published:&nbsp;</span>
                            <span>{postData.publishedDate}</span>
                        </div>
                    </div>
                    <article>
                        {postData.content}
                    </article>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This operation will completely remove this post from the app.<br />
                            Are you sure you want to do that?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleRemove}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SinglePost;