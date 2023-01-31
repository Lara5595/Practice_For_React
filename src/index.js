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
        <img src=" https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg"/>
        <h2>It Ends with Us: A Novel</h2>
        <h4>Colleen Hoover</h4>
    </article>
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);






// Other way to create is on the notes below



















//////////////////////////////////////////////////////////////////////// NOTES ////////////////////////////////////////////
// const BookList = () => {
//     // If we want to style we use a className
//     return <section className="booklist">
//         <Book/>
//         <Book/>
//         <Book/>
//         <Book/>
//     </section>
// }
//
// const Book = () => {
//     return <article className="book">
//         <Image/>
//         <Title/>
//         <Author/>
//     </article>
// }
//
//
// // We created components, so we can use em inside the books
// const Image = () => <img src=" https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg"/>;
//
// // this is how you would import a image if you had a img folder
// // const Image = () => <img src="/images/lessonsInChemistry.webp"/>;
//
//
// // You can also create a variable and pass it as a style
// const inlineHeadingStyles = {
//     color: 'pink'
// }
//
// const Title = () => <h2 style={inlineHeadingStyles}>It Ends with Us: A Novel</h2>;
//
//     // You can also make a component like this ex is author. Inline css takes priority over css file.
// const Author = () => {
//    //  You can also use inline css
//    return <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop:'0.5rem' }}>Colleen Hoover</h4>;
// }
