export class Upload {

    $key: string;
    name: string;
    url: string;
    file: File;
    progress:number;
    timestamp: Date = new Date();
  
    constructor(file: File) {
      this.file = file;
    }
  }