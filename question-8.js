// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let Jsonplacehokder = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
};

const handleResponse = (response) => {
    return response.json();
};

const onSucess = (data) => {
    const newUsers = data.map(user => user.name);
    console.log(newUsers);
};

let onFailure = (error) => {
    console.error(error);
};
Jsonplacehokder ()
.then(handleResponse)
.then(onSucess)
.catch(onFailure);
