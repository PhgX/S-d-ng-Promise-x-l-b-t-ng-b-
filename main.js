const onMyBirthday = (isKayoSick) => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            if(isKayoSick){
                rej (new Error ('So sad im sick now'));
            } else {
                res (12);
            }
        }, 2000)
    })
}

onMyBirthday(false)
.then((result) => {
    console.log(`I have ${result} cakes`);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('Lets party guys');
    console.log('=============================')
})



onMyBirthday(true)
.then((result) => {
    console.log(`I have ${result} cakes`);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('Party anyway');
})