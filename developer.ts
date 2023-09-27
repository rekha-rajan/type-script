interface Developer {
    name: string;
    position: string;
    develop(): void;
}

class SoftwareDeveloper implements Developer {

    name: string;
    position: string;
    stream: string;
    constructor(name: string, position: string, stream: string) {
        this.name = name;
        this.position = position;
        this.stream = stream;
    }

    develop() {
        console.log(`${this.name} is developing ${this.stream} stream.`);
    }  

} 
const softwareDev = new SoftwareDeveloper("Roni", "Software Engineer", "Backend");
softwareDev.develop();

class FrontEndDeveloper extends SoftwareDeveloper {
    constructor(name: string, position: string, stream: string) {
      super(name, position, stream);
    }
  
    develop() {
      console.log(`${this.name} is working on the Frontend.`);
    }
}

const FrontEndDev = new FrontEndDeveloper("Ram Nath", "Angular", "FrontEnd");
FrontEndDev.develop();
