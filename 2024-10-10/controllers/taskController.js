// const Task = require('../controllers/index.controlle')
 
// const create = async (request,response) => {
//     const body  = request.body;
//     if (body.name && body.message && body.contact){
//         const task = new Task({
//             name: body.name,
//             message: body.message,
//             contact:body.contact
//         });
//       const save =  await task.save();
//       return response.status(201).json({
//             status: 'Created',
//             status_code : 201,
//             message: 'contact created successfully',
//             data: save
//       })
//     }

//     return response.status(422).json({
//         status: 'Form data error',
//         status_code : 422,
//         message: 'Contact is required, please make sure to fill it in',
//         data: save
//   })
// };

// const getAll = async(request,response) => {
//     const tasks = await Task.find();
//     return response.json({
//         status: 'OK',
//         status_code : 200,
//         message: 'All contacts',
//         data: tasks
//   })
// };

// const getOneById = async (request,response) => {
//     const {id} = request.params;
//     const task = await Task.findOne({_id: id})
//     if (task) {
//         response.json({
//             status: 'OK',
//             status_code : 200,
//             message: 'contact Found',
//             data: task   
//       })
//     }
//     return  response.status(404).json({
//         status: 'Not found',
//         status_code : 404,
//         message: 'Contatct with id ' + id + ' does not exist',
//   })
// };
// const update = async (request,response) => {
//     const {id} = request.params;
//     const task = await Task.updateOne({_id: id}) 
//     if (task) {
//       const body  = request.body;
//       if (body.name && body.message && body.contact){
//           const task = new Task({
//               name: body.name,
//               message: body.message,
//               contact:body.contact
//           });
//         const save =  await task.save();
//         return response.json({
//               status: 'updated',
//               status_code : 201,
//               message: 'Contact updated successfully',
//               data: save
//         })
//       }
//     }
//   };
// const remove = async (request,response) => {
//   const {id} = request.params;
//   const task = await Task.deleteOne({_id: id})
//   if (task) {
//       response.json({
//           status: 'Deleted',
//           status_code : 204,
//           message: 'Deleted Succesfully',
         
//       })
//     }
// };

// module.exports = { getAll,getOneById,create,update,remove };