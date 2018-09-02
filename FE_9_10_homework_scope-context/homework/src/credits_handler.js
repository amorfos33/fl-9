function userCard(argument) {
  let balance = 100,
      limit = 100,
      historyLogs = [];
  const fullPercent = 100;
  const taxOfBank = 0.5;
      return {
        getCardOptions(){
          return {balance, limit, historyLogs, argument}
        },
        putCredits(money){
          balance += money;
          historyLogs.push({
            operationType: 'Received credits',
            credits: money,
            operationTime: new Date().toLocaleString('en-GB')
          });
        },
        takeCredits(money){
          balance -=money;
          historyLogs.push({
            operationType: 'Withdrawal of credits',
            credits: money,
            operationTime: new Date().toLocaleString('en-GB')
          });
        },
        setTransactionLimit(money){
          limit = money;
          historyLogs.push({
            operationType: 'Translation limit change',
            credits: money,
            operationTime: new Date().toLocaleString('en-GB')
          });
        },
        transferCredits(money, card) {
          const moneyTaxes = money * taxOfBank / fullPercent + money;
          if (moneyTaxes > balance) {
            console.log(`Error: You can't transfer credits - funds on your balance is not enough!`);
          } else if (moneyTaxes > this.limit) {
            console.log(
                `Error: You can't transfer credits - funds on your limit is not enough!`);
          } else {
            this.takeCredits(moneyTaxes);
            card.putCredits(money);
          }
        }
      };
}
function UserAccount(userName) {
  const maxCardsUser = 3;
  this.name = userName;
  this.cards = [];
  this.addCard = function(){
      if (this.cards.length < maxCardsUser) {
          this.cards.push(userCard(this.cards.length + 1));
          }
      };
  this.getCardByKey = function(key) { 
      this.cards[key - 1]; 
      }
} 