export class LoggingService{
    onAdded(category: string, item: string){
        console.log('Item Added as s'+ category+':'+item);
    }
}