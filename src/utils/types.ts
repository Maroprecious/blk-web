export interface AuthPayload {
  email: string;
  password: string;
}

export interface ForgotPasswordPayload {
  email: string;
}
export interface resetPasswordPayload {
  email: string;
  password: string;
  token: string;
}
export interface updatePasswordPayload {
  oldPassword: string;
  newPassword: string;
}
export interface createProfilePayload {
  continent: string;
  firstName: string;
  lastName: string;
  dob: string;
  photoUrl: string;
}
export interface logOutPayload {
  refreshToken: string;
}
interface Profile {
  birthDate: string;
  continent: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  updatedAt: string;
  userId: string;
}
export interface AuthUserDetails {
  email: string;
  googleId: string;
  id: string;
  isActive: boolean;
  isProfileFilled: boolean;
  profile: Profile;
  refreshToken: string;
  role: string;
}

export interface PasswordResetDTO {
  email: string;
  password: string;
  token: string;
}

interface UserProfile {
  userId: string;
  photoUrl: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  continent: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserData {
  id: string;
  role: string;
  email: string;
  isActive: boolean;
  isProfileFilled: boolean;
  googleId: string;
  refreshToken: string;
  profile: UserProfile;
}

export interface ApiResponse {
  success: boolean;
  data: UserData;
}

export interface CreateOrderDto {
  products: {
    productId: number;
    quantity: number;
  }[];
  customer: {
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
  };
  address: {
    country: string;
    state: string;
    city: string;
    zip: string;
    line1: string;
    apartment?: string;
  };
}
export interface addShippingPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  suit: string;
  city: string;
  state: string;
  zip: string;
}

export interface makeEnquiryPayload {
  name: string;
  email: string;
  message: string;
  retreatId: number;
}
export interface bookRetreatPayload {
  email: string;
  name: string;
  amount: number;
  paymentType: "partial" | "full"; 
  retreatId: number;
  hotelName: string;
}