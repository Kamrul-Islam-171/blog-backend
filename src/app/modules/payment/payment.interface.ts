export interface IOrder {
    name: string;
    email: string;
    amount: number;
    payment_id: string;
    status: "pending" | "success" | "failed";
    product:string;
}