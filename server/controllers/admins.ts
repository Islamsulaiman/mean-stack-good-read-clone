import { Admin } from '../models';

const getAdmin = (data : string) => {
  const AdminData = Admin.findOne({ email: data }).exec();
  return AdminData;
};

export { getAdmin };
