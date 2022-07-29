import donationSchema from"../models/donationModel.js";


export default class DonateController{
  static async insertDonate (req, res) {
    const body =  req.body;
    if (!Object.keys(body).length > 1) {
      return res.status(400).json({ error: "error" });
    }
    const donate = new donationSchema(
      body.name, 
      body.email, 
      // body.phone, 
      // body.zip, 
      // body.city, 
      // body.state, 
      // body.streetAddress, 
      // body.number, 
      // body.complement, 
      // body.neighborhood, 
      // body.deviceCount, 
      // body.devices
    )
    try {
      res.status(200).json({success:true});
    } 
    catch (error) {
      return res.status(500).json({ error: error });
    }
  };
};
