import DonationService from "../services/donationService";
exports.post = async (req, res) => {
  try {
    const createDonate = await DonationService.postDonate(req.body);
    res.status(201).json(createDonate({sucess:true}));
  } catch (error) {
    return res.status(400).json({ error: true });
  }
};
