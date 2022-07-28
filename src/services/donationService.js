import Donate from "../models/donationModel.js";

export default  class DonationService{
    static async addDonate(data){
        try{
            const newDonate = {
                name:data.name,
                email:data.email,
                phone:data.phone,
                zip:data.zip,
                city:data.city,
                state:data.state,
                streetAddress:data.streetAddress,
                number:data.number,
                complement:data.complement,
                neighborhood:data.neighborhood,
                deviceCount:data.deviceCount,
                devices: [
                    {type:data.type, condition:data.condition},
                ]
            };
            const response = await new Donate(newDonate).save();
        }catch (error){
            console.log(error)
        }
    }
};