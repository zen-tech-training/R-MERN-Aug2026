let cName : string = "Abc Pvt Ltd";
console.log(cName);

//===================== Class 
class Account{
    accId: number;
    static bankName: string = "Global Bank"; //
    static totalAccounts: number = 0;

    constructor(accId:number){
        this.accId = accId;   
        Account.totalAccounts++;
    }
    m1(){
        console.log(this.accId);
    }
}

let obj1 = new Account(10);
obj1.m1();
console.log("Total Accounts: ", Account.totalAccounts);


//================ Single Inheritance
class SavingAccount extends Account{
    m2(){
        console.log(this.accId);
    }
}

let obj2 = new SavingAccount(11);
obj2.m2();
console.log("Total Accounts: ", Account.totalAccounts);



//================ Single Inheritance
class CurrentAccount extends Account{
    secondProperty : string ;     //accId, secondProperty

    constructor(accId:number, secondProperty: string ){
        super(accId); //calls parent class constructor        
        this.secondProperty = secondProperty;
    }
    m2(){
        console.log(this.accId, "::::", this.secondProperty);
    }
}

let obj3 = new CurrentAccount(11, "value2");
obj3.m2();
console.log("Total Accounts: ", Account.totalAccounts);