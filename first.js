class Animal
{
   constructor(name,height,weight)
   {
  console.log("animal crated  "+ name);
  this.name=name;
  this.height=height;
  this.weight=weight;
   }
}

class dog extends Animal
{
    constructor(name,height,weight,barkvolume)
    {
    super(name,height,weight);
    this.barkvolume=barkvolume;
    }
    bark()
    {
        if(this.barkvolume>50)
        {
            console.log(this.name + " barkvolume is high");
        }
        else{
            console.log(this.name+" barkvolume is low");
        }
    }
}

class fish extends Animal{
    constructor(name,height,weight,swimspeed)
    {
        super(name,height,weight);
        this.swimspeed=swimspeed;

    }

    swim(doggievolume)
    {
        if(this.swimspeed > 50)
        {
            console.log(this.name + " speed is high");
        }
        else{
            console.log(this.name+" speed is low");
        }

        if(doggievolume > this.swimspeed)
        {
            console.log("doggie is winner");
        }
        else{
            console.log("fishiee is winner");
        }
    }

}

var doggie=new dog("doggie",67,89,80);
doggie.bark();
var fishiee=new fish("fishiee",47,28,90);

fishiee.swim(doggie.barkvolume);