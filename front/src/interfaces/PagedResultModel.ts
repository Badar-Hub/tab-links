export default class PagedResultModel<T> {
    public currentPage: number = 1;
  
    public pageSize: number = 10;
  
    public rowCount: number = 1;
  
    public pageCount: number = 1;
  
    public results: Array<T> = [];
  }
  