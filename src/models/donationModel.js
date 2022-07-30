import db from "../infra/db.js";

class Donate {
  constructor(
    name,
    email,
    phone,
    zip,
    city,
    state,
    streetAddress,
    number,
    complement,
    neighborhood,
    deviceCount,
    devices
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.zip = zip;
    this.city = city;
    this.state = state;
    this.streetAddress = streetAddress;
    this.number = number;
    this.complement = complement;
    this.neighborhood = neighborhood;
    this.deviceCount = deviceCount;
    this.devices = devices;
  }
}
export default Donate;