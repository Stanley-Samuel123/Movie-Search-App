// // // import React from 'react'
// // // import { useState } from 'react';

// // // const App = () => {
// // //   const data = [
// // //     {id:1, name: 'Stanley'},
// // //     {id:2, name: 'Grace'},
// // //     {id:3, name: 'Matthew'},
// // //     {id:4, name: 'samuel'},
// // //     {id:5, name: 'Stanley'}
// // //   ]
// // // const [people, setPeople] = useState(data); 
// // // const removeItem = (id) =>{
// // //   let newPeople = people.filter((person) => person.id !==id)
// // //   setPeople(newPeople)
// // // }
// // // return(
// // //   <>
// // //   {people.map((person) => { 
// // //   const {id,name} = person;
// // // return(
// // //   <div key={id} className='item'>
// // //     <h4>{name}</h4>
// // //     <button onClick={() => removeItem(id)}>remove</button>
// // //     </div>
// // // );
// // //   })}
// // //     <button onClick={() => setPeople([])}>remove</button>
// // // </>
// // // ) }
// // // export default App

// // import React from 'react'
// // import { useState } from 'react';

// // const App = () => {
 
// //   const [person, setPerson] = useState({
// //     name: 'Stanley',
// //     age: 24,
// //     message: 'Hi am Stanley, pleased to meet you'
// //   })
// //   const changeMessage = () =>{
// //     setPerson({...person, message:'new message'})
// //   }
// //   return (
// //     <>
// // <h3>{person.name}</h3>
// // <h3>{person.age}</h3>
// // <h3>{person.message}</h3>
// // <button onClick={changeMessage}>change message</button>
// //     </>
// //   )
// //   }
// // export default App


// import { useState } from 'react';

// const App = () => {
// const [value, setValue] = useState(0)

// const complexExample = {
//   setTimeout{() =>{
//     setValue{(prevState) => {
//       return prevState + 1;
//     }};
//   }, 2000};
// };
//   return (
//     <>
//     <h2>Regular Counter</h2>
//     <h2>{value}</h2>
//     <button onClick={() => setValue(value+1)}>+</button>
//     <button onClick={() => setValue(0)}>reset</button>
//     <button onClick={() => setValue(value-1)}>-</button>
//     </>
//   )
//   }


// export default App

// import { useState, useEffect} from 'react';

// const App = () => {
// const [value, setValue] = useState(0)
// useEffect(() => {
// console.log('call useEffect');
// if (value >= 1) {
//   document.title= 'new Message' + value;
// }
// }, []);
// console.log('render component');

//   return (
//     <>   
//     <h1>{value}</h1>
//     <button className='btn' onClick={() => setValue + 1}>click me</button>
//     </>
//   )
//   }
// export default App

// import { useState, useEffect} from 'react';

// const App = () => {
//   const [size, setSize] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);

//   const checkSize = () => {
//     setSize(window.innerWidth)
//   }
//     useEffect(() => {
//       window.addEventListener('resize', checkSize)
//       return () => {window.removeEventListener('resize', checkSize)
//       console.log('cleanup')};
//     }, []);
  
//   const checkH = () => {
//     setHeight(window.innerHeight)
//   }
//     useEffect(() => {
//       window.addEventListener('resize', checkH)
//   })
  
//   return (
//     <>   
//     <h2>UseEffect Cleanup</h2>
//     <h3>{size}</h3>
//     <h3>{height}</h3>
//     </>
//   )
//   }
// export default App


// import { useState, useEffect} from 'react';
// const url = 'https://api.github.com/users';

// const App = () => {
//    const [users, setUsers] = useState([]);

//    const getUsers = async() => {
//     const response = await fetch(url);
//     const users = await response.json();
//     console.log(users);
//    }

//    useEffect(()=>{
//     getUsers();
//    }, []);
//   return (
//     <>   
//     <h2>Github Users</h2>
//     <ul>
//       {users.map((users) => {
//         const {id, login, avatar_url, html_url} = users;
//         return (
//           <li key={id}>
//             <img src={avatar_url} alt={login} />
//             <div>
//               <h4>{login}</h4>
//               <a href={html_url}>Profile</a>
//             </div>
//           </li>
//         )
//       })}
//     </ul>
//     </>
//   )
//   }
// export default App


// import { useState, useEffect} from 'react';
// const url = 'https://api.github.com/users/QuincyLarson';

// const App = () => {
//   const [isError, setIsError] = useState(false);
//   const [isLoading, setIsLoading] = useState(true)
//   const [user, setUser] = useState('default user');

//   useEffect(() =>{
//     fetch(url)
//     .then((resp) => {
//       if (resp.status >= 200 && resp.status <=299){
//         return resp.json();
//       } else {
//         setIsLoading(false)
//         setIsError(true)
//         throw new Error(resp.statusText);
//       }
//     })
//     .then((user) => {
//       const {login} = user;
//       setUser(login);
//       setIsLoading(false);
//     })
//     .catch((error) => console.log(error));
//   }, []);

//   if (isLoading){
//     return(
//     <div>
//       <h1>Loading...</h1>
//     </div>
//     );
//   }
//   if(isError){
//     return (
//     <div>
//       <h1>Multiple returns</h1>
//     </div>
//     )
//   }
//   return <h1>{user}</h1>
//   }
// export default App


// import { useState, useEffect} from 'react';

// const App = () => {
//   const [text, setText] = useState('');
//  return(
//  <>
//  <h1>{!text && 'There is an error'}</h1>
//  <h1>{text || 'There is no error'}</h1>
//  {!text ? (<p>you are welcome</p>) : (<p>you are not welcome</p>)}
//  </>
//  )
//   }
// export default App

// import { useState, useEffect} from 'react';

// const App = () => {
//   const [show, setShow] = useState(false);
 

  
//  return(
//  <>
//  <button className='btn' onClick={() => setShow(!show)}>show/hide</button>
//  {show && <Item />}
//  </>
//  );
// };
//  const Item = () => {
//   const [size, setSize] = useState(window.innerWidth)
//   const checkSize = () => {
//     setSize(window.innerWidth); 
//   } 
  // useEffect(() => {
  //   window.addEventListener('resize', checkSize)
  //   return () => {
  //     window.removeEventListener('resize', checkSize)
  //   };
  // }, []);
//   return(
//   <div>
//     <h1>Window</h1>
//     <h2>size: {size}</h2>
//   </div>
// ) };
// export default App

// import { useState, useEffect} from 'react';

// const App = () => {
// const [firstName, setFirstName] = useState('')
// const [surname, setSurName] = useState('')
// const [email, setEmail] = useState ('')
// const [phone, setPhone] = useState ('')
// const [date, setDate] = useState ('')
// const [people, setPeople] = useState([])
// const handleSubmit = (e) => {
// e.preventDefault();
// if(firstName && email && phone && date && surname){
// const person = {id: new Date().getTime().toString(), firstName, email, phone, surname, date};
// setPeople((people) =>{
//   return[...people, person];
// });
// setFirstName('')
// setEmail('')
// setPhone('')
// setDate('')
// setSurName('')
// }
// else{

// }
// }
//   return(
//   <>
//   <div>
//     <h2>A biodata Update Portal</h2>
//   </div>
//   <article>
//     <form className='form' onSubmit={handleSubmit}>
//       <div className='first'>
//         <label htmlFor='firstName' >Name: </label>
//         <input type='text' id='firstName' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//       </div>
//       <div className='second'>
//         <label htmlFor='surname' >Sname: </label>
//         <input type='text' id='surname' name='surname' value={surname} onChange={(e) => setSurName(e.target.value)} />
//       </div>

//       <div className='third'>
//         <label htmlFor='email' >Email: </label>
//         <input type='text' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
//       </div>

//       <div className='fourth'>
//         <label htmlFor='phone' >Phone: </label>
//         <input type='number' id='phone' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
//       </div>

//       <div className='fifth'>
//         <label htmlFor='date' >D-O-B: </label>
//         <input type='date' id='date' name='date' value={date} onChange={(e) => setDate(e.target.value)}/>
//       </div>
      
//       <div className='sixth'>
//         <button className='btn' type='submit' onClick={() => prompt('Are you sure you want to submit?')}> Update Details</button>
//       </div>

//     </form>

//     {
//       people.map((person) => {
//         const {id, firstName, email, phone, date, surname} = person;
//         return(
//           <div className='container'>
//           <div className='item' key={id}>
//             <table>
//               <thead>
//                 <tr>
//                 <th>Name</th>
//                 <th>Surname</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Date of Birth</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 <tr>
//                   <td><h5>{firstName}</h5></td>
//                   <td><h5>{surname}</h5></td>
//                   <td><h5>{email}</h5></td>
//                   <td><h5>{phone}</h5></td>
//                   <td><h5>{date}</h5></td>
//                 </tr>
//               </tbody>
//             </table>
//         </div>
//         </div>  
//         )
//       } )
//     }
//   </article>
//   </>
// ) };
// export default App

// import { useState} from 'react';

// const App = () => {
// const home = () =>{
  
// }
// const [person, setPerson] = useState({firstName: '', email:'', phone: '', surname:'', date:''})
// const [people, setPeople] = useState([])
// const handleChange = (e) => {
// const name= e.target.name
// const value = e.target.value
// setPerson({...person, [name]: value})
// }
// const handleSubmit = (e) =>{
//   e.preventDefault();
//   if (person.firstName && person.email && person.phone && person.date && person.surname){
//     const newPerson = {...person, id: new Date().getTime().toString()}
//     setPeople([...people, newPerson]);
//     setPerson({firstName:'', email: '', phone: '', surname: '', date: ''})
// }
// else{

// }
// }
//   return(
//   <>
//   <ul>
//     <li><a href={home}>Home</a></li>
//   </ul>
//   <div>
//     <h2>A biodata Update Portal</h2>
//   </div>
//   <article>
//     <form className='form' onSubmit={handleSubmit}>
//       <div className='first'>
//         <label htmlFor='firstName' >Name: </label>
//         <input type='text' id='firstName' name='firstName' value={person.firstName} onChange={handleChange} />
//       </div>
//       <div className='second'>
//         <label htmlFor='surname' >Sname: </label>
//         <input type='text' id='surname' name='surname' value={person.surname} onChange={handleChange} />
//       </div>

//       <div className='third'>
//         <label htmlFor='email' >Email: </label>
//         <input type='text' id='email' name='email' value={person.email} onChange={handleChange}/>
//       </div>

//       <div className='fourth'>
//         <label htmlFor='phone' >Phone: </label>
//         <input type='number' id='phone' name='phone' value={person.phone} onChange={handleChange}/>
//       </div>

//       <div className='fifth'>
//         <label htmlFor='date' >D-O-B: </label>
//         <input type='date' id='date' name='date' value={person.date} onChange={handleChange}/>
//       </div>
      
//       <div className='sixth'>
//         <button className='btn' type='submit' onClick={() => prompt('Are you sure you want to submit?')}> Update Details</button>
//       </div>

//     </form>

//     {
//       people.map((person) => {
//         const {id, firstName, email, phone, date, surname} = person;
//         return(
//           <div className='container'>
//           <div className='item' key={id}>
//             <table>
//               <thead>
//                 <tr>
//                 <th>Name</th>
//                 <th>Surname</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Date of Birth</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 <tr>
//                   <td><h5>{firstName}</h5></td>
//                   <td><h5>{surname}</h5></td>
//                   <td><h5>{email}</h5></td>
//                   <td><h5>{phone}</h5></td>
//                   <td><h5>{date}</h5></td>
//                 </tr>
//               </tbody>
//             </table>
//         </div>
//         </div>  
//         )
//       } )
//     }
//   </article>
//   </>
// ) };
// export default App

// import React, {useEffect, useRef } from "react";

// function App() {
//   const refContainer = useRef(null)
//   const divContainer = useRef(null)
//   const handleSubmit= (e) =>{
//     e.preventDefault()
//     console.log(refContainer.current.value)
//     console.log(divContainer.current);
//   };
//   useEffect(()=>{
//     console.log(refContainer.current);
//     refContainer.current.focus();
 
//   })
//  return(
//   <>
//   <form className="form" onSubmit={handleSubmit}>
//     <div>
//       <input type='text' ref={refContainer}/> 
//       <button type="submit">submit</button>
//     </div>
//   </form>
//   </>
//  )
  
// }
// export default App



// import React, {useState, useEffect,  useReducer} from "react";

// const data= [
//   {id:1, name: 'Sammy'},
//   {id:2, name: 'Stanley'},
//   {id:3, name: 'Susan'},
//   {id:4, name: 'Anna'},
//   {id:5, name: 'Daniel'}

// ]
// function App() {
//   const [name, setName] = useState('');
//   const [people, setPeople] = useState(data);
//   const [showModal, setShowModal] = useState(false);
 
//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     if(name){
//       setShowModal(true);
//       setPeople([...people, {id: new Date().getTime().toString(), name}]);
//       setName('');
//     }
//     else{
//       setShowModal(true)
//     }
//   };
//  return(
//   <>
//   {showModal && <Modal />}
//   <form onSubmit={handleSubmit} className='form'>
//     <input 
//     type='text' 
//     value={name} 
//     onChange={(e) => setName(e.target.value)}/>
//     <button type="submit">Add</button>
//   </form>
//   {people.map((person) => {
//     return(
//       <div key={person.id}>
//         <h4>{person.name}</h4>
//       </div>
//     );
//   })}
//   </>
//  );
// };
// export default App

// import React, {useState, useEffect,  useReducer} from "react";
// const data= [
//     {id:1, name: 'Sammy'},
//     {id:2, name: 'Stanley'},
//     {id:3, name: 'Susan'},
//     {id:4, name: 'Anna'},
//     {id:5, name: 'Daniel'}
  
//   ]

  
// function App() {
// const [people, setPeople] = useState(data);

// const removePerson = (id) =>{
//   setPeople((people)=>{
//     return people.filter((person)=> person.id !== id);
//   })
// } 

//  return <section>
//   <h3>Prop drilling</h3>
//   <List people={people} removePerson= {removePerson}/>
//   </section>;
// };

// const List = ({people, removePerson}) =>{
//   return (
//   <>
//   {people.map((person) => {
//     return <SinglePerson key={person.id} {...person} removePerson={removePerson}/>;
//   })}
//   </>
//   );
// }

// const SinglePerson = ({id, name, removePerson} ) =>{
//   return(
//     <div className="item">
//       <h4>{name}</h4>
//       <button onClick={() => removePerson(id)}>remove</button>
//     </div>
//   )
// }
// export default App
// import React from 'react'
// import "./App.css"

// const Person = (props) => {
//   return (
//     <>
//     <h3> Name: {props.name} </h3>

//     <h5>Last Name: {props.Lname} </h5>
//     </>
//   )
// }

// const App = () => {
//   return (
//     <div className='app'>
//       <Person name = 'Blessing ' Lname=' Ofem'/>
//       {/* <h1>Hello {isName ? name : 'someone'}</h1>
//       {name ? 
//       (
//         <>
//         <h1>The name is {name}</h1>
//         </>
//       ):(
//         <>
//         <h1>There is no name</h1>
//         </>
//       )} */}
//       </div>
//   )
//   }

// export default App

// import React from 'react'
// import { useState, useEffect} from 'react'
// import "./App.css"

// // a4932783
// const App = () => {
//   const [value, setValue] = useState(0);
//   useEffect(()=>{
//     setValue(100)
//   }, [])
//   return (
//     <div className='app'>
//     <button onClick={() =>{
//       setValue(value -1)
//     }}>-</button>
//     <h1>{value}</h1>
//     <button onClick={() =>{
//       setValue(value+1)
//     }}>+</button>
//     </div>
//   )
//   }

// export default App

import React from 'react'
import { useState, useEffect} from 'react'
import "./App.css"
import MovieCard from './movieCard'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=a4932783';
const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const SearchMovies = async (title) =>{
  const response = await fetch(`${API_URL}&s=${title}`)
  const data = await response.json();
  setMovies(data.Search)
}
  useEffect(()=>{
    SearchMovies('avatar')
  }, [])
  return (
    <div className='app'>
      <h1>Movie Land</h1>
   
  <div className='search'>
  <input 
  olaceholder='Search for movies' 
  value={search} 
  onChange={(e)=>{setSearch(e.target.value)}} />

  <img className='s'
  src='icons8-google-web-search-64.png'
  alt='Search-icon'
  onClick={()=> SearchMovies(search)} />

  </div>
  <div className='container'>
  <div className='movie'>
    {
      movies.map((movie) =>(
        <MovieCard movie={movie}/>
      ))
    }
  </div>
  </div>
  </div>
  )
  }

export default App