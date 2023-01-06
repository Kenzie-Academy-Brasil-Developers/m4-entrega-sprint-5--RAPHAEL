import { IAddressRequest } from "../address"

export interface IPropertyRequest {
    value: number;
    size: number;
    address: IAddressRequest;
    categoryId: string;
  }