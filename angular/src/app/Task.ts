// An interface/model of a generic task
export interface Task {
    // The ? means the property is optional
    // Make id optional because the task won't initially have an id until we save it
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}