export interface Purchase {
    PaintingEntityId: number;
    PurchaseEntityId: number;
    BuyerName: string;
    BuyerEmail: string;
    StreetAddress: string;
    AptNumber?: string;
    City: string;
    State: string;
    Zip: number;
    Title: string;
    Price: number;
}