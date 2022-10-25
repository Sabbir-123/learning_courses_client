import React from 'react';
import CoursesCom from './CoursesCom';
import Sidebar from './sidebar';

const Courses = () => {
    return (
        <div class="grid grid-cols-3 gap-4">
        
        <div class="..."><Sidebar></Sidebar></div>
        <div class="col-span-2 ..."><CoursesCom></CoursesCom></div>
      </div>
    );
};

export default Courses;