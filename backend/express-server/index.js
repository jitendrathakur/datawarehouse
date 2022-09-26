var express = require('express');
var multer = require('multer');
var cors = require('cors')
var fs = require('fs');
var app = express();
app.use(express.json());
app.use(cors());


//23- task 1:-upload image

var fileStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'./images' )
    },
    filename:(req,file,cb) => {
        cb(null,Date.now() + "..." +  file.originalname);
    },
});

var upload = multer({storage:fileStorage});
app.post("/single", upload.single("image"),(req,res) => {
        console.log(req.file);
        res.send("upload file successfully!");
})

//23-today task 2 :-upload csv file



var fileStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'./csvdata' )
    },
    filename:(req,file,cb) => {
        cb(null,Date.now() + "..." +  file.originalname);
    },
});


    var upload = multer({storage:fileStorage});
    app.post("/csvfile", upload.single("csv"),(req,res) => {
        console.log(req.file);
       
        fs.readFile('./csvdata/1664177341924...data.csv','utf8',readingFile);
  
         function readingFile(error,data)
          {
               if(error){
               console.log(error);
               } else
                {
                   console.log(data);
                   
                   fs.writeFile('./file2.csv',data,'utf8',(err)=>{
                    if(err){
                        console.log(err)
                      } else {
                        console.log('Content has been pasted to file2.csv file');
                         res.download('./file2.csv');
                        }
                   });
                } 
           }
               
                   
     })
     







//23-task 3:- upload json file and read data and create new json file using that data done-
//download file pending 

var fileStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'./jsondata' )
    },
    filename:(req,file,cb) => {
        cb(null,Date.now() + "..." +  file.originalname);
    },
});
var upload = multer({storage:fileStorage});
app.post("/jsonfile", upload.single("json"),(req,res) => {
        console.log(req.file);
        

        // 23-task 4 

      fs.readFile('./jsondata/1664183036031...data2.json','utf8',readingFile);
  
         function readingFile(error,data)
          {
               if(error){
               console.log(error);
               } else
                {
                   console.log(data);
                   
                   fs.writeFile('./file2.json',data,'utf8',writeFile);
                } 
           }
                function writeFile(error)
                {
                  if(error){
                     console.log(error)
                   } else {
                     console.log('Content has been pasted to file2.json file');
                     }
                     res.download('./file2.json',"done");
                }
    })



app.post('/login', function (req, res) {
    
    console.log(req.body);
    if(req.body.server_name === "test" &&
    req.body.user_name === "test" &&
    req.body.password === "test") {
        res.send(JSON.stringify('success'));

    } else {
        res.send(JSON.stringify('invalid'));
    }
   
})

// 22-task1-download file

app.post('/download', function (req, res) {
    
    console.log(req.body);

    
    if(req.body.database_name === "test" &&
        req.body.table_name === "test" &&
        req.body.location === "test" &&
        req.body.format === "test") {
        
        res.download('./file.txt');
        
    } else {
         res.send(JSON.stringify('invalid file'));
    }
})

//22-task 2:-write txt file data and download file

app.post('/download2', function (req, res) {
    
    console.log(req.body);
    if(req.body.database_name === "test" &&
    req.body.table_name === "test" &&
    req.body.location === "test" &&
    req.body.format === "test") {
    fs.writeFile('./file2.txt', "All Good", function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
        res.download('./file2.txt');
    }); 
    
    } else {
     res.send(JSON.stringify('invalid file'));
    }

})


//22-task3:-write  csv data and download file

app.post('/download3', function (req, res) {
    
    console.log(req.body);
    if(req.body.database_name === "test" &&
    req.body.table_name === "test" &&
    req.body.location === "test" &&
    req.body.format === "test") {
    fs.writeFileSync('./file3.csv', "khare" ,function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
        res.download('./file3.csv');
    }); 
    
    } else {
     res.send(JSON.stringify('invalid file'));
    }

})
     
    
  
app.listen(4000, function () {
    console.log('Server running on port 4000');
});

