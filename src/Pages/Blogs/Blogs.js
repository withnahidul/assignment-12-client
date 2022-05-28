import React from 'react';

const Blogs = () => {
    return (
        <div className="md:mx-5 mx-3 my-28 grid md:grid-cols-2 grid-cols-1 gap-3">
            <div className="shadow-xl rounded-lg px-10 py-5 my-5">
                <h2 className=" text-xl font-mono font-bold">
                    1.How will you improve the performance of a React Application?
                </h2>
                <p>
                    There is some factor if we follow performance can improve of react application:
                </p>
                <p>
                    i. Avoid inline functions as much as possible.
                    ii. Remember that Immutability is the key to avoid unnecessary re-renders.
                    iii. Always render hidden components like Modals and Dropdowns conditionally.
                    iv .Always call multiple APIs parallelly.
                    v. Code-splitting in React using dynamic 'import()'.
                    vi .Memoizing React components to prevent unnecessary re-renders.
                </p>

                <div>
                    <h2 className=" text-xl font-mono font-bold">
                        2.What are the different ways to manage a state in a React application?
                    </h2>
                    <p>
                        5 Types of Application State in React and How They Help in State Management:
                    </p>
                    <p>
                        i. Communication State
                        ii. Data State
                        iii. Control State
                        iv. Session State
                        v. Location State
                    </p>
                </div>

            </div>

            <div className="shadow-xl rounded-lg px-10 py-5 my-5">
                <h2 className=" text-xl font-mono font-bold">
                    3.How does prototypical inheritance work?
                </h2>
                <p>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.
                </p>
                <p>
                    It is a method by which an object can inherit the properties and methods of another object.
                    Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object simply put, prototypical inheritance refers to the ability to access object properties from another object.
                    We use a JavaScript prototype to add new properties and methods to an existing object constructor.
                    We can then essentially tell our JS code to inherit properties from a prototype
                </p>
            </div>


            <div className="shadow-xl rounded-lg px-10 py-5 my-5">


                <h2 className=" text-xl font-mono font-bold">
                    4. Why you do not set the state directly in React. For example, if you have 'const [products, setProducts]' = 'useState([])'.
                    Why you do not set 'products = [...]' instead, you use the setProducts?

                </h2>
                <p>
                    One should never update the state directly because of the following reasons:
                    If we update it directly, calling the 'setState() ' it may just replace the update we made.
                    When we directly update the state, it does not change this.
                </p>
                <p>
                    i. That if we mutate state directly and then subsequently
                    call this.setState this may replace the mutation we made.
                    I don't see how this can happen in the above code.

                    ii. That setState may mutate this.state effectively in an
                    asynchronous / deferred way and so when accessing this.state right after
                    calling this.setState you are not guaranteed to access the final mutated state.
                    I get that, by this is not an issue if this.setState is the last call of the update function.

                    By doing this, all the references of this.state.a won't get affected until we use setState.
                    This gives you control over your code and this'll help you write
                    elegant test and make you confident about the performance of the code in production.
                </p>

                <h2 className=" text-xl font-mono font-bold">
                    5. What is a unit test? Why should write unit tests?

                </h2>
                <p>
                    Unit testing is a software development process in which the smallest testable parts of an application, called units,
                    are individually and independently scrutinized for proper operation.
                    This testing methodology is done during the development process by the software developers and sometimes QA staff.
                </p>
                <p>
                    Unit testing ensures that all code meets quality standards before it's deployed.
                    This ensures a reliable engineering environment where quality is paramount.
                    Over the course of the product development life cycle, unit testing saves time and money,
                    and helps developers write better code, more efficiently
                </p>
            </div>

        </div>
    );
};

export default Blogs;