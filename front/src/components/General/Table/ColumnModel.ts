export default class Column {
    name: string;
  
    label: string;
  
    field: string;
  
    sortable: boolean;
  
    style?: string;
  
    align: string = "left";
  
    override: boolean = false;
  
    constructor(name: string, label: string, sortable: boolean = false, override: boolean = false, style: string = "") {
      this.name = name;
      this.label = label;
      this.field = name;
      this.sortable = sortable;
      this.style = style;
      this.override = override;
    }
  
    get templateName() {
      return `body-cell-${this.name}`;
    }
  }
  