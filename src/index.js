import React from "react";
import ReactDOM from 'react-dom/client';

// This is how we import css we put . because we have to find the file path
import './booktutorial.css'

// We are creating an array for the books instead of using objects or components
const books = [
    {
        author: 'Prince Harry',
        title: 'Spare',
        img:'https://m.media-amazon.com/images/I/41hYQIILU3L.jpg',
        id: 1,
    },

    {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: 'https://m.media-amazon.com/images/I/71F4+7rk2eL.jpg',
        id: 2,
    }
];


// map-creates a new array from calling a function for every array element. We are using map to loop through the names and output them
// const names = ['David', 'Luca', 'Lessly'];
//
// const newNames = names.map((name) => {
//     return <h1>{name}</h1>
// })



const BookList = () => {
    // If we want to style we use a className
    return (
    <section className="booklist">
        <EventExamples/>
        {books.map((book) =>{
            console.log(book)
            // We are pulling the properties out of the object by created a const with the properties and passing book
            return (
                // We set up the key by passing a id to the book objects
                <Book book={book} key={book.id} />
                // We can also use the spread operator
                // <Book {...book} key ={book.id}/>
            )
        })}
    </section>
    );
};

// continue map

const Book = (props) => {
    // We are passing props.book so it gets the book list properties
    // If we use the spread operator we would need to take of the book out of props.book
    const {img, title, author, children} = props.book
    console.log(props)
    return (
        <article className='book'>
            {/*If we have a parameter props we would call like props.image but we change it to include the argument*/}
            {/*<img src={props.img} alt={props.title}/>*/}
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <h4>{author}</h4>
            {children}

        </article>
    )
}


const EventExamples = () => {
    // this is for when we type on the input box in logs
    // We are passing e, so we can log the event

    const handleFormInput = (e) =>{
        console.log(e)
        // log e.value gets what you enter. We are getting target from the event e
        console.log(e.target.value)
        // this is getting the  input name that we put
        console.log(e.target.name)
        console.log("handle form input")
    }

    // This is for when we click the button is does the event
    const handleButtonClick = () =>{
        alert("handle button click")
    }
    const handleFormSubmission = (e) =>{
        // E prevent default helps you when you submit something
        e.preventDefault();
        console.log("Form Submitted")
    }

    return(
    <section>
        <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
            {/*We pass on change, so it knows to console log the event*/}
            <input type="text" name="example" onChange={handleFormInput} style={{margin: '1rem 0'}} />
        </form>
        {/*We pass on click so it knows when button is click to alert*/}
        <button onClick={handleButtonClick}>Click me</button>
    </section>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);






// Other way to create is on the notes below






//////////////////////////////////////////////////////////////////////// NOTES before refactoring////////////////////////////////////////////


// creating objects

// const firstBook = {
//     author: 'Colleen Hoover',
//     title: 'It Ends with Us: A Novel',
//     img:'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg'
// };
//
// const secondBook = {
//     author: 'Bonnie Garmus',
//     title: 'Lessons in Chemistry',
//     img: 'https://m.media-amazon.com/images/I/413bIQtFVFL.jpg'
// };
//
// //NOTES *    parameters
// const someFunc = (param1, param2) => {
//     console.log(param1, param2)
// }
// // arguments
// someFunc('job', 'developer');
//
//
//
// const BookList = () => {
//     // If we want to style we use a className
//     return <section className="booklist">
//         <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto aut enim est hic mollitia odio provident soluta ut veniam.</p>
//             <button>Click me</button>
//         </Book>
//
//         <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
//     </section>
// };
//
// const Book = (props) => {
//     const {img, title, author, children} = props
//     console.log(props)
//     return (
//         <article className='book'>
//             {/*If we have a parameter props we would call like props.image but we change it to include the argument*/}
//             {/*<img src={props.img} alt={props.title}/>*/}
//             <img src={img} alt={title}/>
//             <h2>{title}</h2>
//             <h4>{author}</h4>
//             {children}
//
//         </article>
//     )
// }










//////////////////////////////////////////////////////////////////////// NOTES before refactoring////////////////////////////////////////////
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
