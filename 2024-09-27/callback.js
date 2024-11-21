const fs = require('fs');

fs.mkdir('./2024-09-27/seven', {recursive: true}, function(error){
    if (error) {
        console.log('Error creating direction: ', error)
    } else {
        fs.writrFile('./2024-09=27/seven/programming.txt', 'Hello World', function(err){
            if(err) {
                console.log('Create first file error: ', err); 
            } else {
                fs.writFile('./2024-09-27/web.json', '{"name":"hello world"}', function (er) {
                    if (er) {
                        console.log("Create second file error: ", er);
                    } else {
                        fs.readFile('./2024-09-27/programming.txt', 'utf8', function(e, data) {
                            if(e) {
                                console.log("Read first file error: ", e);
                            } else {
                                fs.appendFile("./2024-09-27/seven/web.json", data, function (errors) {
                                    if (errors) {
                                        console.log("Write first file error: ", errors);
                                    } else {
                                        fs.writeFile("./2024-09-27/seven/end.txt", 'okay', function (no) {
                                            if(no) {
                                                console.log("Create thirth file error: ", no);
                                            } else {
                                                console.log("All files created successfully");
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})