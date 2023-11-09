// const UserResources = async (data) => {
//     return data.map((element) => {
//       return {
//         id: element.id,
//         customer_name: element.name,
//         customer_email: element.email,
//         dob: element.birthDate,
//       };
//     });
//   };

  class UserResources {
      async handleCollection(collection) {
        // Perform operations on the collection
        // return  collection.length;
        if(collection.length == 1) handleSingleObject(collection)
        return collection.map((element) => {
          return {
            id: element.id,
            customer_name: element.name,
            customer_email: element.email,
            dob: element.birthDate,
            status: element.status == true ? 'Active' : 'Deactive'
          };
        });
      }
    
      async handleSingleObject(obj) {
          // Perform operations on the single object
          // return  obj.length;
          return {
            id: obj.id,
            customer_name: obj.name,
            customer_email: obj.email,
            dob: obj.birthDate,
            status: obj.status == true ? 'Active' : 'Deactive'
        };
    }
}
export default UserResources;