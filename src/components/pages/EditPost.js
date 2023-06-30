import { Row, Col } from "react-bootstrap";
import EditPostForm from "../features/EditPostForm";

const EditPost = () => {

    return(
        <>
            <Row className="justify-content-center">
                <Col xs="12" md="10" lg="8">
                    <h1 className="mb-5">Edit post</h1>
                    <EditPostForm />
                </Col>
            </Row>
        </>
    );
};

export default EditPost;