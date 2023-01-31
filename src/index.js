import React from "react";
import ReactDOM from 'react-dom/client';

const BookList = () => {
    return <section>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </section>
}

const Book = () => {
    return <article>
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