import React from 'react';
import { Table } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
             <div className='container'>
                 <h2 className='mt-3 mb-3'>Q1:Difference between javascript and javascript </h2>
                 <Table striped bordered hover>
  <thead>
    <tr>
      {/* <th>#</th> */}
      <th className='text-center'>Javascript</th>
      <th className='text-center'>Nodejs</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>JavaScript is a simple programming language that runs in any browser JavaScript Engine </td>
      <td>Node JS is an interpreter or running environment for a JavaScript programming language</td>
     
    </tr>
    <tr>
      
      <td> Used on the client-side</td>
      <td>Used on the server-side.</td>
     
    </tr>
    <tr>
     
      <td> Capable enough to add HTML and play with the DOM</td>
      <td>Does not have the capability to add HTML tags</td>
     
    </tr>
  
  </tbody>
</Table>
             </div>
             <div className='container mt-5 mb-4'>
                 <h2>Q2: When should you use Nodejs and when should you use Mongodb</h2>
                 <p className='mt-3'>MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store data in a database and to perform operations like data create, updates, or to search data by some criterias</p>
                 <p>

                Nodejs is a Javascript  engine that you can write any application you want . It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests</p>
             </div>
             <div className='container mt-5'>
                 <h2 className='mb-8'>Q3: Differences between sql and nosql databases</h2>
                 <Table striped bordered hover>
  <thead>
    <tr>
      {/* <th>#</th> */}
      <th className='text-center'>SQL</th>
      <th className='text-center'>NoSQL</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td> Relational Database management system</td>
      <td>Non-relational or distributed database system.</td>
     
    </tr>
    <tr>
      
      <td>Structured query language and have predefined schema</td>
      <td> Nosql database have dynamic schemas for unstructured data</td>
     
    </tr>
    <tr>
     
      <td> Vertically Scalable</td>
      <td>Horizontally scalable</td>
     
    </tr>
    <tr>
     
      <td> are better for multi-row transactions 
</td>
      <td>are better for unstructured data like as JSON </td>
     
    </tr>
  
  </tbody>
</Table>
             </div>
             <div className='container mt-5 mb-10'> 
                 <h2 className='mt-5 mb-8'>Q4: What is the purpose of jwt and how does it work</h2>
                 <p>JSON Web Token, is an open standard used to share security information between two parties a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</p>
             </div>
        </div>
    );
};

export default Blog;