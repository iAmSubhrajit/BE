
// const path = require('path')
// console.log('path', path)
const { dirname, basename, extname, join, isAbsolute } = require('path')

// const dirName = path.dirname('C:/Users/SUBHRAJIT/Desktop/BE/Node_Basics/export-import/info.js')
// console.log('dirName', dirName);

// const pathDirName = dirname('C:/Users/SUBHRAJIT/Desktop/BE/Node_Basics/export-import/info.js')
// console.log('dirName:-', pathDirName);

// const pathFileName = basename('C:/Users/SUBHRAJIT/Desktop/BE/Node_Basics/export-import/info.js')
// console.log('fileName:-', pathFileName);

// const pathFileNameWithOutExt = basename('C:/Users/SUBHRAJIT/Desktop/BE/Node_Basics/export-import/info.js', '.js')
// console.log('fileNameWithOutExt:-', pathFileNameWithOutExt);

// const pathFileExtName = extname('C:/Users/SUBHRAJIT/Desktop/BE/Node_Basics/export-import/info.js')
// console.log('pathFileExtName', pathFileExtName);

const rootPath = 'C:/Users/SUBHRAJIT/Desktop/BE/Node_Basics'
// const infoJSPath = join(rootPath, 'export-import/info.js')
// console.log(infoJSPath);
// const pathModulePath = join(rootPath, 'path', '../', 'path/path.js')
// console.log(pathModulePath);

const isPathAbsolute = isAbsolute(rootPath)
console.log(isPathAbsolute);
const isPathAbsolute1 = isAbsolute('../export-import/index.js')
console.log(isPathAbsolute1);



/*
//relative path
const {first_name} = require('../export-import/info')  

//absolute path
const {first_name} = require('C:/Users/SUBHRAJIT/Desktop/BE/Node_Basics/export-import/info.js') 

console.log(first_name)

*/