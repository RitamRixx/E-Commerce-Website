const scriptURL = 'https://script.google.com/macros/s/AKfycbwW2gS8J-3I05EUkMfeHcTcHRt3yKKr5Z9iECjxEppqfnl_40Oh_sNgyJsARzUYWd9h/exec'
            const form = document.forms['submit-googlesheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Feedback! Hope you had great shopping with us..☺"))
                .catch(error => console.error('Error!', error.message))
            })


        
          