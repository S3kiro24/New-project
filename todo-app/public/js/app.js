// public/js/app.js

$(document).ready(function () {
    // Function to handle form submissions using AJAX
    function handleFormSubmit(formSelector, apiEndpoint, successCallback) {
      $(formSelector).submit(function (event) {
        event.preventDefault();
  
        const formData = $(this).serialize();
  
        $.ajax({
          type: 'POST',
          url: `/api${apiEndpoint}`,
          data: formData,
          success: function (response) {
            // Refresh the list or update the UI as needed
            successCallback(response);
          },
          error: function (error) {
            console.error(`Error submitting form for ${apiEndpoint}:`, error);
          }
        });
      });
    }
  
    // Example: Handling form submission for adding a baby
    handleFormSubmit('#addBabyForm', '/babies', function (response) {
      // Refresh the baby list or update the UI as needed
      console.log('Baby added successfully:', response);
    });
  
    // Example: Handling click event for deleting a baby
    $('#babyList').on('click', '.deleteBaby', function () {
      const babyId = $(this).data('id');
  
      $.ajax({
        type: 'DELETE',
        url: `/api/babies/${babyId}`,
        success: function () {
          // Remove the deleted baby from the UI
          console.log('Baby deleted successfully');
        },
        error: function (error) {
          console.error('Error deleting baby:', error);
        }
      });
    });
  
    // Example: Handling form submission for adding a doctor
    handleFormSubmit('#addDoctorForm', '/doctors', function (response) {
      // Refresh the doctor list or update the UI as needed
      console.log('Doctor added successfully:', response);
    });
  
    // Example: Handling click event for deleting a doctor
    $('#doctorList').on('click', '.deleteDoctor', function () {
      const doctorId = $(this).data('id');
  
      $.ajax({
        type: 'DELETE',
        url: `/api/doctors/${doctorId}`,
        success: function () {
          // Remove the deleted doctor from the UI
          console.log('Doctor deleted successfully');
        },
        error: function (error) {
          console.error('Error deleting doctor:', error);
        }
      });
    });
  
    // Example: Handling form submission for adding an appointment
    handleFormSubmit('#addAppointmentForm', '/appointments', function (response) {
      // Refresh the appointment list or update the UI as needed
      console.log('Appointment added successfully:', response);
    });
  
    // Example: Handling click event for deleting an appointment
    $('#appointmentList').on('click', '.deleteAppointment', function () {
      const appointmentId = $(this).data('id');
  
      $.ajax({
        type: 'DELETE',
        url: `/api/appointments/${appointmentId}`,
        success: function () {
          // Remove the deleted appointment from the UI
          console.log('Appointment deleted successfully');
        },
        error: function (error) {
          console.error('Error deleting appointment:', error);
        }
      });
    });
  
    // Example: Handling form submission for user sign-up
    $('#signUpForm').submit(function (event) {
      event.preventDefault();
  
      const formData = $(this).serialize();
  
      $.ajax({
        type: 'POST',
        url: '/auth/signup',
        data: formData,
        success: function (response) {
          // Handle successful sign-up (redirect, show success message, etc.)
          console.log('User signed up successfully:', response);
        },
        error: function (error) {
          console.error('Error signing up user:', error);
        }
      });
    });
  
    // Example: Handling form submission for user sign-in
    $('#signInForm').submit(function (event) {
      event.preventDefault();
  
      const formData = $(this).serialize();
  
      $.ajax({
        type: 'POST',
        url: '/auth/signin',
        data: formData,
        success: function (response) {
          // Handle successful sign-in (redirect, show success message, etc.)
          console.log('User signed in successfully:', response);
        },
        error: function (error) {
          console.error('Error signing in user:', error);
        }
      });
    });
  
    // Example: Handling click event for user sign-out
    $('#signOutBtn').click(function () {
      $.ajax({
        type: 'GET',
        url: '/auth/signout',
        success: function () {
          // Handle successful sign-out (redirect, show success message, etc.)
          console.log('User signed out successfully');
        },
        error: function (error) {
          console.error('Error signing out user:', error);
        }
      });
    });
  
  });
  