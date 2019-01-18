export interface Purchase {
    PaintingEntityId: number;
    PurchaseId: number;
    StreetAddress: string;
    AptNumber?: string;
    City: string;
    State: string;
    Zip: number;
    BuyerEmail: string;
}