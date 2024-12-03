const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
];

const tasks = [
    { userId: 1, task: "Write code" },
    { userId: 1, task: "Review PRs" },
    { userId: 2, task: "Prepare presentation" },
];

//  solution is a callback 
function fetchUserData (cb){
    console.log("fetching userData...")
    setTimeout(() => {
        const userData = users
        console.log("start fetching userData using callback ...", userData)
        cb(userData)
    }, 1000)
    
}

function fetchTasksData (){
    console.log("fetching tasksData...")
    setTimeout(() => {
        const tasksData = tasks
        console.log("start fetching tasksData ...", tasksData)
    }, 1000)
}
fetchUserData(fetchTasksData)

// Solution is a promise
function fetchUserDataPromise(){
    return new Promise((resolve, reject) => {
        console.log("fetching userData...")
        setTimeout(() => {
            const userData = users
            console.log("start fetching users using promise ...", userData)
            resolve(userData)
        }, 1000)
    })
}

// Solution is a async / await

 function fetchUserDataAsync (){
    setTimeout(async() => {
        const userData = await fetchUserDataPromise()
        console.log("start fetching tasks using async ...", tasks)
        console.log("fetch userData using async",userData)
        return userData
    }, 2000)
    
}
fetchUserDataAsync ()