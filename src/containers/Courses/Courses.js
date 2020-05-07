import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            const id = course.id;
                            return (
                                <article
                                    className="Course"
                                    key={id}
                                    onClick={
                                        () => this
                                                .props
                                                .history
                                                .push(
                                                    `${this.props.match.path}/${id}?title=${this.state.courses.find(
                                                        (course) => course.id === id ? course.title : null).title}`
                                                )
                                    }
                                >
                                    {course.title}
                                </article>
                            );
                        } )
                    }
                </section>
                <Route path="/courses/:id" component={Course} />
            </div>
        );
    }
}

export default Courses;
