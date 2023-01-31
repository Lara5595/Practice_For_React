import React from "react";
import ReactDOM from 'react-dom/client';

// This is how we import css we put . because we have to find the file path
import './booktutorial.css'

const BookList = () => {
    // If we want to style we use a className
    return <section className="booklist">
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </section>
}

const Book = () => {
    return <article className="book">
        <Image/>
        <Title/>
        <Author/>
    </article>
}


// We created components so we can use em inside the books
const Image = () => <img src=" https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg"/>;
const Title = () => <h2>It Ends with Us: A Novel</h2>;

    // You can also make a component like this ex is author
const Author = () => {
   return <h4>Colleen Hoover</h4>;
}




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);