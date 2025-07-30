function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    console.log(name, email, phone, message);
  

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    console.log(formData);
       fetch('mailV2.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())  
        .then(data => {
            console.log(data);
            showConfirmation();
        })
        .catch(error => {
            console.error('Fehler:', error);
        });

    console.log('Validation erfolgreich');
    resetFormField();

}