import { Admin } from '../models';

// eslint-disable-next-line @typescript-eslint/naming-convention
type newAdmin = {
  firstName: String;
  lastName: String;
  password: String
  email: String,
  userName: String
};

const getAdmin = (data : string) => {
  const AdminData = Admin.findOne({ email: data }).exec();
  return AdminData;
};

const create = (data: newAdmin) => Admin.create(data);

export {
  getAdmin, create,
};
