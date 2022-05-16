/**
 * 8.	Classes & Modules: Write a class Account with attributes id, name, balance. 
 * Add two sub classes SavingAccount & CurrentAccount having specific attribute 
 * interest & cash_credit respectively. Create multiple saving & current account objects. 
 * Write a functionality to find out total balance in the bank.
 */
 class Account{
    constructor(id,name,balance){
        this.id=id;
        this.name= name;
        this.balance = balance;
    }
}
class SavingAccount extends Account{
   constructor(id,name,balance,interest){
          super(id,name,balance);
          this.interest  = interest;
   }
   getBalance(){
       this.totalBalance=0;
       this.totalBalance = this.balance + (this.balance*this.interest);
       return this.totalBalance;
   }
}

class CurrentAccount extends Account{
   constructor(id,name,balance,cash_credit){
          super(id,name,balance);
          this.cash_credit  = cash_credit;
   }
   getBalance(){
       this.totalBalance=0;
       this.totalBalance = this.balance -this.cash_credit;
       return this.totalBalance;
   }
}

SavingAccountObj = new SavingAccount(11,"john",1500,10);
console.log(SavingAccountObj.getBalance())

CurrentAccountObj = new CurrentAccount(11,"jack",15000,500);
console.log(CurrentAccountObj.getBalance())