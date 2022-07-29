export default class donationSchema {
  constructor(
    name, 
    email,
  )
  {
    this.name = name;
    this.email = email;
  }
}

// const donationSchema = {
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   zip:{
//     type: String,
//     required: true,
//   },
//   city:{
//     type:String,
//     required: true,
//   },
//   state: {
//     type:String,
//     required: true,
//   },
//   streetAddress: {
//     type:String,
//     required: true,
//   },
//   number : {
//     type:Number,
//     required: true,
//   },
//   complement: {
//     type:String,
//     required: true,
//   },
//   neighborhood : {
//     type:String,
//     required: true,
//   },
//   deviceCount: {
//     type:Number,
//     required: true,
//   },
//   devices: [{ type:{
//     type: String,
//     required: true,
//   }, condition: {
//     type:String,
//     required: true,
//   } }],
// };