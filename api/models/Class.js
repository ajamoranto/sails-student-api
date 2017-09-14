/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    class_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    instructor_id: {
      type: 'integer',
      minLength: 1
    },
    subject: {
      type: 'string',
      minLength: 4
    },
    course: {
      type: 'integer',
      minLength: 3
    }
  },
  autoPK: false
};
