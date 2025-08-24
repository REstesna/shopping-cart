let apiURL = "https://chplfhizcvuwbcdtdotu.supabase.co/rest/v1/users";

let aut =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNocGxmaGl6Y3Z1d2JjZHRkb3R1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTY4NDY0OCwiZXhwIjoyMDcxMjYwNjQ4fQ.OEmwUAS7qvlNnrrzLtqZ9iMXy0oWUi0aKoMGu7MIfqo";

export async function getUserFromSUPA(username) {

  try {
    const res = await fetch(`${apiURL}?select=*&username=eq.${username}`, {
      method: "GET",
      headers: {
        apikey: aut,
        Authorization: ` Bearer ${aut}`,
      },
    });

    const data = await res.json();
    // console.log('data', data);
    


    if (data.length === 1) {

      return {status: "login", ...data[0]};

    } else if (data.length === 0) {
      return {status: "signup", ...data[0]};

    } else {
      Swal.fire({
        icon: "error",
        title: "Something went wrong...",
        text: "try another username!",
      });
    }
  } catch (err) {

    Swal.fire({
        icon: "error",
        title: "Something went wrong...",
        text: "try another username!",
      });

    return;
  }
}


export async function updateUserHandler (username, basket) {

    try {

      const res = await fetch(`${apiURL}?username=eq.${username}`, {
        method: "PATCH",
        headers:{
          "apikey": aut,
          "Authorization": `Bearer ${aut}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify([{basket: basket}])
      })

    } catch ( err ) {
      
      Swal.fire({
        title: 'check your internet and try again',
        icon: 'error'
      })
      
    }
  
}

export async function  insertRowInUser(name, basket, password, lastname, username ) {
  
  try {

    const res = await fetch(apiURL, {
      method: "POST",
      headers:{
        "apikey": aut,
        "Authorization": `Bearer ${aut}`,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify({ name, basket, password, lastname, username }),
    });

    Cookies.set( 'username' ,username);
    location.href = './index.html'


  } catch (err) {
      Swal.fire({
        title: 'check your internet and try again',
        icon: 'error'
      })
  }


}