

const Blogs = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-center my-4 bg-red-600 text-white p-4 rounded-xl">Blogs</h2>
            <div className="my-12">
                <h2 className="text-red-700 my-4 font-bold text-2xl">Q-1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="text-gray-600"> <span className="font-bold">Answer:</span> Access Token: A credential used to access protected resources, typically short-lived and contains user information and permissions.
                <br />
                <br />

Refresh Token: A long-lived credential used to obtain a new access token when it expires.
<br />
<br />

Access tokens are stored in memory, while refresh tokens are securely stored on the client-side, such as using HTTP-only cookies with secure flag set.
                </p>
            </div>
            <div className="my-12">
                <h2 className="text-red-700 my-4 font-bold text-2xl">Q-2:Compare SQL and NoSQL databases?</h2>
                <p className="text-gray-600"> <span className="font-bold">Answer:</span> SQL databases are relational, have predefined schemas, use SQL for querying, and provide strong data consistency. NoSQL databases are non-relational, have flexible schemas, use various query languages, prioritize scalability and performance, and offer eventual consistency.
                </p>
            </div>
            <div className="my-12">
                <h2 className="text-red-700 my-4 font-bold text-2xl">Q-3:What is express js? What is Nest JS ?</h2>
                <p className="text-gray-600"> <span className="font-bold">Answer:</span> Express.js is a minimalist web application framework for Node.js that simplifies the creation of server-side applications and APIs.
                    <br />
                    <br />

                    Nest.js is a progressive Node.js framework for building efficient and scalable server-side applications. It utilizes TypeScript and follows architectural patterns like Dependency Injection and Decorators.
                </p>
            </div>
            <div className="my-12">
                <h2 className="text-red-700 my-4 font-bold text-2xl">Q-4: What is MongoDB aggregate and how does it work ?</h2>
                <p className="text-gray-600"> <span className="font-bold">Answer:</span>MongoDB aggregate is a powerful feature that allows performing complex data processing and analysis operations on data stored in a MongoDB database. It works by defining a pipeline of stages that manipulate and transform the data, including filtering, grouping, sorting, joining, and performing various calculations. The aggregate pipeline is executed on the server side, allowing efficient and flexible data aggregation operations.
                </p>
            </div>
        </div>
    );
};

export default Blogs;