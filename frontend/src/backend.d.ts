import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    hotelName: string;
    city: string;
    name: string;
    createdAt: Time;
    numberOfRooms: bigint;
    email: string;
    phoneNumber: string;
}
export type LeadId = bigint;
export type Time = bigint;
export interface backendInterface {
    getAllLeads(): Promise<Array<Lead>>;
    getLead(id: LeadId): Promise<Lead>;
    getLeadsByCreatedAt(): Promise<Array<Lead>>;
    getLeadsByName(): Promise<Array<Lead>>;
    submitLead(name: string, hotelName: string, city: string, numberOfRooms: bigint, phoneNumber: string, email: string): Promise<void>;
}
