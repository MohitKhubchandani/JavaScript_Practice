// Debit Credit System

class Account {
   constructor() {
     this.amount = 0; 
   }
 
   credit(amt) {
     this.amount += amt; 
     return `Credited ${amt}`; 
   }
 
   debit(amt) {
      if (this.amount < amt) {
         return "Insufficient balance"
      }
      else{
         let a = this.amount -= amt;
         return `Debited ${amt}`
      }
   }
 
   current() {
     return this.amount; 
   }
 }
 
 
 function Output() {
  const myAccount = new Account();
  
  console.log(myAccount.credit(3000)); 
  console.log(myAccount.debit(2000)); 
  console.log(`current balance :- ${myAccount.current()}`); 
  
 }

 Output() // Credited 3000
          //  Debited 2000
          //  current balance :- 1000