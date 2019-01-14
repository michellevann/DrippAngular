export interface Edit {
    PaintingEntityId: number;
    Artist: string;
    OwnerId: number;
    Title: string;
    Size: string;
    Color: string;
    Price: number;
    IsSold: boolean;
    DateAdded?: Date;
}