const myPromiseExample = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10 > 5)
    }, 2000)
})

myPromiseExample
    .then(data => console.log(data))
    .catch(err => console.log(err))

