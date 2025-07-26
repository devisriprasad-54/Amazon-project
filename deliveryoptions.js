

export const deliveryoptions = [
    {
        id:'1',
        priceCents:0,
        deliverydays:7
    },
    {
        id:'2',
        priceCents:499,
        deliverydays:3
    },
    {
        id:'3',
        priceCents:999,
        deliverydays:1
    }
];

export function getdeliveryid(deliveryoptionId){
    let matchop;
    deliveryoptions.forEach((option) => {
        if(option.id===deliveryoptionId){
        matchop=option;
        }
    })
    return matchop || deliveryoptions[0];
}