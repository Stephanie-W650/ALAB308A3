// // Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  try {
    //find out which database the user with this id belongs to
    const userLocation = await central(id);
    console.log(userLocation)
 // call the db function correspoding to the users id
  const basicUserInfo = await dbs[userLocation](id)
  console.log(basicUserInfo)
   //call the vault function to grab the remaining user data
   const personalUserInfo = await vault(id);
  console.log(personalUserInfo)

  //return the formatted data
  const userData = {
    id,
    ...basicUserInfo,
    ...personalUserInfo
  }
  return console.log(userData)

  } catch {
    console.log("the number does not correspond")
  } finally {
    
  }

}

// .then()
// .catch()
// .finally()
// only use for promise outside of async

getUserData(1)
// getUserData(2)
// getUserData(3)
// getUserData(4)
// getUserData(5)
// getUserData(6)
// getUserData(7)
// getUserData(8)
// getUserData(9)
// getUserData(10)

//way 2
function getUserData2(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  central(id)
  .then(userLocation => {
    return Promise.all([dbs[userLocation](id), vault(id)])
  })
  .then (resultsArr => {
    return {id, ...resultsArr[0], ...resultsArr[1]}
  })
  .then(userData => {
    return console.log(userData)
  })
  .catch(() => {
    return console.log("the number does not correspond")
  })
}

//getUserData2(1)
//getUserData2(2)
// getUserData2(3)
// getUserData2(4)
 getUserData2(5)
// getUserData2(6)
// getUserData2(7)
// getUserData2(8)
// getUserData2(9)
// getUserData2(10)







 
