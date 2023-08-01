import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SinglePost from './components/pages/SinglePost';
import AddPost from './components/pages/AddPost';
import EditPost from './components/pages/EditPost';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import Categories from './components/pages/Categories';
import Category from './components/pages/Category';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/post/:postId" element={<SinglePost />} />
        <Route path ="/post/add" element={<AddPost />} />
        <Route path ="/post/edit/:postId" element={<EditPost />} />
        <Route path ="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path ="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
