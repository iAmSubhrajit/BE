//File System CRUD

const fs = require('fs');
const fsPromise = require('fs/promises') // for async await 

/*
//Working with Directories :-

//make dir
fs.mkdir('./new', (err)=>{
 console.log(err);
})

//Gives error: already exist
fs.mkdir('new', (err)=>{
 console.error(err);
})

console.log('Start');
fs.mkdir('myDir/new', { recursive: true }, (err) => {
    if(err){
        console.error(err);
    }
    else{
        console.log('Created Successfully');
    }
})

//Synchronous execution of mkdir
fs.mkdirSync('myDir')

console.log('End');

//read dir
fs.readdir('./', (err,files)=>{
    if(err){
        console.log('error occured', err);
    }
    else{
        console.log(files)
    }
})

//remove directories
fs.rmdir('FileSystem(FS)/myDir', { recursive: true }, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Directory removed Successfully');
    }
})
fs.rm('FileSystem(FS)/myDir', { recursive: true }, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Directory removed Successfully');
    }
})


//CRUD on Files
//writeFile
fs.writeFile('FileSystem(FS)/myFile.txt', 'Hi iam created using fs.writefile()', (err)=>{
    if(err){
        console.log('error occured', err);
    }
})
//if file is not there it will creates one
// but if file is already there it will overwrite with the updated content
fs.writeFile('FileSystem(FS)/myFile.txt', 'Hi iam created using fs.writefile() \n new code', (err)=>{
    if(err){
        console.log('error occured', err);
    }
})

//appendFile
fs.appendFile('FileSystem(FS)/File.txt', 'this is new line', (err)=>{
 if(err){
    console.log(err);
 }
 else{
    console.log('append successfully');
 }
})
//openFile
fs.open('FileSystem(FS)/File.txt','r', (err, file) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(file);
    }
})

//readFile
fs.readFile('FileSystem(FS)/File.txt', 'utf-8', (err, file) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(file); //gives o/p in Buffer, so used utf-8
        // console.log(file+""); 
    }
})
//Delete File
fs.unlink('FileSystem(FS)/File.txt', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File Deleted'); 
    }
})

//in async await way
const deleteFile = async () => {
    await fsPromise.unlink('FileSystem(FS)/myFile.txt')
}
deleteFile()
//IIFE
const deleteFile = (async () => {
    await fsPromise.unlink('FileSystem(FS)/myFile.txt')
})()
*/



