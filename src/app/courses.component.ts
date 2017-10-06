import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2 class="page-header">{{ title }}</h2>
        <ul *ngFor="let course of courses">
            <li class="btn btn-primary">{{ course }}</li>
        </ul>
        `
})

export class CoursesComponent {
    title = 'List of courses';
    courses;

    constructor(service: CoursesService) {
        
        this.courses = service.getCourses();
    }
}