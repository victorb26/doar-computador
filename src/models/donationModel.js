const donationSchema = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  zip:{
    type:Number,
    required: true,
  },
  city:{
    type:String,
    required: true,
  },
  state: {
    type:String,
    required: true,
  },
  streetAddress: {
    type:String,
    required: true,
  },
  number : {
    type:Number,
    required: true,
  },
  complement: {
    type:String,
    required: true,
  },
  neighborhood : {
    type:String,
    required: true,
  },
  deviceCount: {
    type:Number,
    required: true,
  },
  devices: [{ type:{
    type: String,
    required: true,
  }, condition: {
    type:String,
    required: true,
  } }],
};

export default donationSchema;