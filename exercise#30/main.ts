let userNames :string[] = ["hassan","abdullah","admin","faiz","mahad"]; 
for (let i = 0;i <userNames.length;i++)
    if (userNames[i] == 'admin'){
        console.log("Hello Admin would you like to see a status report")
    }else{
        console.log(`hello ${userNames[i]} thank you for logging in again`)
    }