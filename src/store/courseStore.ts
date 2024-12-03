import { create } from 'zustand';

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  theme: string;
  createdBy: string;
}

interface CourseStore {
  courses: Course[];
  addCourse: (course: Omit<Course, 'id'>) => void;
  getCourses: () => Course[];
}

export const useCourseStore = create<CourseStore>((set, get) => ({
  courses: [],
  addCourse: (course) => {
    const newCourse = {
      ...course,
      id: `course-${Date.now()}`,
    };
    set((state) => ({ courses: [...state.courses, newCourse] }));
  },
  getCourses: () => get().courses,
}));