import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../Redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');

    const disptach = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        disptach(addPost({title, author, publishedDate, shortDescription, content}));
        setTitle('');
        setAuthor('');
        setPublishedDate('');
        setShortDescription('');
        setContent('');

        navigate('/');
    }
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Published</Form.Label>
                <Form.Control  placeholder="Enter date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Short description</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Main content</Form.Label>
                <Form.Control as="textarea" rows={10}  placeholder="Leave a comment here" value={content} onChange={e => setContent(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Add post
            </Button>
        </Form>
  );
};

export default AddPostForm;