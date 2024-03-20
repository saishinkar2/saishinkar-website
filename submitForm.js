// submitForm.js

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);
  
  // Here you can perform custom logic like sending emails, storing data, etc.
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form submitted successfully!' }),
  };
};
