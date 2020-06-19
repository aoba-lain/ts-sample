class Animal {
  name: string;
  sound: string;

  constructor(name: string, sound: string) {
    this.name = name;
    this.sound = sound;
  }

  cry = () => {
    console.info(`${this.name}「${this.sound}」`);
  };
}

const cat = new Animal("猫", "ミャオ");
cat.cry();
