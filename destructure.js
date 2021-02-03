const person={ name:'Habib',age:23,gfName:'Janifa Rahman',phone:'90023158',friends:['hghg','hjgt'] };

const {name,phone,gfName}=person;
console.log(phone,name,gfName);

const complexObject={
    name:'jhh',
    info:{
        add: "fwsfiouy",
        leader:'ggg'
    }
}
const{leader}=complexObject.info;
console.log(leader);

//Array Destructure
const friends=['s khan','tonoy','tasin','habib'];
const [e,...re]=friends;
console.log(e,re);