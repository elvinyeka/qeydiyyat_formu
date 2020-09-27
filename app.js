
data = []

class UserData {
    constructor(_name, _surname, _email, _date) {
        this.Name = _name;
        this.Surname = _surname;
        this.Email = _email;
        this.Date = _date;
    }

    showData(){
        console.log(this.Name + "/" + this.Surname + "/" + this.Email + "/" + this.Date)
    }
}



submitBtn = document.querySelector("#submitBtn")
submitBtn.addEventListener("click",function () {
    userName = document.querySelector('#userName')
    userSurname = document.querySelector('#userSurname')
    userEmail = document.querySelector('#userEmail')
    userBirthDate = document.querySelector('#userBirthDate')
    user = new UserData(userName.value, userSurname.value, userEmail.value, userBirthDate.value)
    data.push(user)
    //elem = document.querySelector('.table');


    htmlData = `
    <tr>
        <th>Name</th>
         <th>Surname</th>
         <th>Email</th>
         <th>Birth Date</th>
        </tr>
`

    for (let i = 0; i < data.length; i++) {
        htmlData +=
            `
    <tr>
    <td>${data[i].Name}</td>
    <td>${data[i].Surname}</td>
    <td>${data[i].Email}</td>
    <td>${data[i].Date}</td>
    </tr>
    `
    }
    document.querySelector('#userTable').innerHTML = htmlData;
})
