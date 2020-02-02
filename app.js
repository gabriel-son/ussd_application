const app = require('express')();
const bodyParser = require('body-parser')
//const logger = require('morgan')

//app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('*',(req,res)=>{
    //res.sendFile(path.join(__dirname,'index.html'));
    res.send(`Good Evening`);
});

app.post('*',(req,res)=>{
    let {sessionId, serviceCode, phoneNumber, text} = req.body;
    if(text === ''){
        let response = `CON Welcome ${phoneNumber} to 2k Landlord 
Choose an option below
1. 2k Wallet.
2. Buy Ticket.
3. Prize to be won.
4. Previous winners.
        `
        res.send(response)
    }
    else if(text === '1'){
        let response = `CON Choose an option below
            1. Deposit.
            2. Withdraw.
            3. Account Balance.
        `
        res.send(response);
    }
    else if(text === '2'){
        let response = `END Your mobile number is ${phoneNumber}`
        res.send(response);
    }
    else if(text === '1*1'){
        let accNo = '234567899'
        let response = `END Your account number is ${accNo}`
        res.send(response);
    }
    else if(text === '1*3'){
        let accBal = 'NGN 10,000'
        let response = `END Your account balance is ${accBal}`
        res.send(response);
    }
    else{
        res.status(400).send('Bad request!')
    }
})

app.listen(process.env.PORT || 4000,()=>{
    console.log('Server is listening on....');
});
