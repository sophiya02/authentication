interface User_Cred{
  email: string,
  password: string,
}

interface User_Details{
  name: string,
  bio: string,
  phone: string,
  dob: Date,
  user_cred: User_Cred,
  img_url: string

}
