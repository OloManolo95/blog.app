import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../Redux/categoriesRedux';

const PostForm = ({action, actionText, ...props}) => {

        const [title, setTitle] = useState(props.title || '');
        const [author, setAuthor] = useState(props.author || '');
        const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
        const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
        const [selectedCategory, setSelectedCategory] = useState(props.category || '');
        const [content, setContent] = useState(props.content || '');

        const [contentError, setContentError] = useState(false);
        const [dateError, setDateError] = useState(false);
        const [categoryError, setCategoryError] = useState(false);

        const categories = useSelector(getAllCategories);

        const handleSubmit = e => {
            setContentError(!content)
            setDateError(!publishedDate)
            setCategoryError(!selectedCategory)

            if(content && publishedDate) {
                action({ title, author, publishedDate, selectedCategory, shortDescription, content });
            }
          };

        const { register, handleSubmit: validate, formState: { errors } } = useForm();

    return(
        <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
             {...register("title", { required: true, minLength: 3 })}
             value={title}
             onChange={e => setTitle(e.target.value)}
             type="text" placeholder="Enter title"
            />
            {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
             {...register("author", { required: true, minLength: 3 })}
             value={author}
             onChange={e => setAuthor(e.target.value)}
             type="text" placeholder="Enter author"
            />
            {errors.author && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Published</Form.Label>
            <DatePicker
             selected={publishedDate}
             onChange={(date) => setPublishedDate(date)}
            />
            {dateError && <small className="d-block form-text text-danger mt-2">Choose date</small>}
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select aria-label='Post category select'
             defaultValue={selectedCategory}
             onChange={e => setSelectedCategory(e.target.value)}>
                <option value="" disabled hidden>Select category...</option>
                {
                    categories.map(category => (
                        <option key={category.id} value={category.name}>
                            { category.name }
                        </option>
                    ))
                }
            </Form.Select>
            {categoryError && <small className="d-block form-text text-danger mt-2">You need to select a category</small>}
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Short description</Form.Label>
            <Form.Control
             as="textarea"
             {...register("shortDescription", { required: true, minLength: 20 })}
             rows={4}
             placeholder="Leave a comment here"
             value={shortDescription}
             onChange={e => setShortDescription(e.target.value)}
            />
            {errors.author && <small className="d-block form-text text-danger mt-2">Description is too short (min is 20)</small>}

        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Main content</Form.Label>
            <ReactQuill theme="snow"
             value={content}
             placeholder="Leave a comment here"
             onChange={setContent}
            />
            {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
        </Form.Group>

        <Button variant="primary" type="submit">
            { actionText }
        </Button>
    </Form>

    );
};

export default PostForm;