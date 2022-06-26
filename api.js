const apiData = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingleUser(data.results[0]))
};


apiData();

const displaySingleUser = (user) => {
    console.log(user);
}