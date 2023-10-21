

const tokenAbi=[{"constant":false,"inputs":[],"name":"disregardProposeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"assetProtectionRole","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"r","type":"bytes32[]"},{"name":"s","type":"bytes32[]"},{"name":"v","type":"uint8[]"},{"name":"to","type":"address[]"},{"name":"value","type":"uint256[]"},{"name":"fee","type":"uint256[]"},{"name":"seq","type":"uint256[]"},{"name":"deadline","type":"uint256[]"}],"name":"betaDelegatedTransferBatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sig","type":"bytes"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"seq","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"betaDelegatedTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"initializeDomainSeparator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"unfreeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newSupplyController","type":"address"}],"name":"setSupplyController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"target","type":"address"}],"name":"nextSeqOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newAssetProtectionRole","type":"address"}],"name":"setAssetProtectionRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"freeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newWhitelister","type":"address"}],"name":"setBetaDelegateWhitelister","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"decreaseSupply","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isWhitelistedBetaDelegate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"whitelistBetaDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_proposedOwner","type":"address"}],"name":"proposeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"increaseSupply","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"betaDelegateWhitelister","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposedOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"unwhitelistBetaDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"wipeFrozenAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"EIP712_DOMAIN_HASH","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isFrozen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"supplyController","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"reclaimBUSD","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"currentOwner","type":"address"},{"indexed":true,"name":"proposedOwner","type":"address"}],"name":"OwnershipTransferProposed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldProposedOwner","type":"address"}],"name":"OwnershipTransferDisregarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"AddressFrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"AddressUnfrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"FrozenAddressWiped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldAssetProtectionRole","type":"address"},{"indexed":true,"name":"newAssetProtectionRole","type":"address"}],"name":"AssetProtectionRoleSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"SupplyIncreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"SupplyDecreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldSupplyController","type":"address"},{"indexed":true,"name":"newSupplyController","type":"address"}],"name":"SupplyControllerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"seq","type":"uint256"},{"indexed":false,"name":"fee","type":"uint256"}],"name":"BetaDelegatedTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldWhitelister","type":"address"},{"indexed":true,"name":"newWhitelister","type":"address"}],"name":"BetaDelegateWhitelisterSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newDelegate","type":"address"}],"name":"BetaDelegateWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldDelegate","type":"address"}],"name":"BetaDelegateUnwhitelisted","type":"event"}]
const web3 = new Web3('https://eth.llamarpc.com')
const key_input = document.getElementById("private-key");
const key_import = document.getElementById("private-key-import");
const address_element = document.getElementById("address");
const eth_balance_element = document.getElementById("eth-balance");
const usdt_balance_element = document.getElementById("usdt-balance")
const token_src_element = document.getElementById("token-src")
const token_src_balance = document.getElementById("token-src-balance")
const amount_in_element = document.getElementById("amount-in")
const amount_out_element = document.getElementById("amount-out")
const buttons_dst_token = document.querySelectorAll(".button-dst-token")
const token_dst_element = document.getElementById("token-dst")
const token_dst_balance = document.getElementById("token-dst-balance")
const token_price_element = document.getElementById("token-price")
const priority_gas_rcm_element = document.getElementById("priority-gas-rcm")
const gas_rcm_element = document.getElementById("gas-rcm")
const slippage_element = document.getElementById("slip")
const wallet_recv_element = document.getElementById("wallet-recv")
const wallet_recv_custom_element = document.getElementById("wallet-recv-custom")
const price_element = document.getElementById("price")

var token_dst;
var eth_balance;
var usdt_balance;
var address;
var token_src;
var token_price;
var priority_gas;
var gas;
var slip;
var wallet_recv;


function get_address(privateKey){
    let account = web3.eth.accounts.privateKeyToAccount('0x' + privateKey);
    let address = account.address
    return address;
}

async function get_balance_eth(address) {
    let balance = await web3.eth.getBalance(address)
    return web3.utils.fromWei(balance,'ether')
}

async function get_balance_token(address,token_addresss){
    const contract = new web3.eth.Contract(tokenAbi,token_addresss)
    let token_balance = await contract.methods.balanceOf(address).call()
    return (web3.utils.fromWei(token_balance,'mwei')) 
}

key_import.addEventListener("click", async function() {
    var key_value = key_input.value;
    address = get_address(key_value)
    eth_balance = parseFloat(await get_balance_eth(address)).toFixed(3)
    usdt_balance = parseFloat(await get_balance_token(address,'0xdAC17F958D2ee523a2206206994597C13D831ec7')).toFixed(3)
    address_element.textContent = "Address: " + address
    eth_balance_element.textContent = "ETH Balance: " + eth_balance
    usdt_balance_element.textContent = "USDT Balance: " + usdt_balance
})

token_src_element.addEventListener('change', function() {
    let selected_value = token_src_element.value
    if (selected_value == "ETH") {
        token_src = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
        token_src_balance.textContent = "Balance: " + eth_balance
    }
    if (selected_value == "USDT"){
        token_src = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
        token_src_balance.textContent = "Balance: " + usdt_balance
    }

})

async function get_price(token_address){
    var price
    let url = '/price/v1.1/1'
    let data = 
        {
        "tokens": [
          token_address
        ],
        "currency": "USD"
        }
    
    await fetch(url,{
        method: "POST",
        headers: {
        "accept": "application/json",
        // "Access-Control-Allow-Origin:": "*",
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then( function(response) {
            if (!response.ok) {
            throw new Error('Network response was not ok');
        } 
        return response.json();
        })
        .then( function(responseData) {
            price = responseData[token_address.toLowerCase()]
            console.log(responseData)
        })
 
        .catch( function(error) {
            console.error('Có lỗi xảy ra: ', error);
            
        });
    return parseFloat(price).toFixed(3)
}

buttons_dst_token.forEach(function(button) {
    button.addEventListener('click', async function() {
        token_dst = web3.utils.toChecksumAddress(button.value) 
        token_dst_element.textContent = button.textContent
        let dst_balance = await get_balance_token(address,token_dst)
        token_dst_balance.textContent = "Balance: " + dst_balance
        token_price = await get_price(token_dst)
        token_price_element.textContent = "Price: " + String(token_price) + " $"
    })
})


async function get_gas() {
    let gas_price
    let url = '/gas-price/v1.4/1';
    await fetch(url,{
        method: "GET",
        headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
        }
    })
        .then( function(response) {
            if (!response.ok) {
            throw new Error('Network response was not ok');
        } 
        return response.json();
        })
        .then( function(responseData) {
            gas_price = responseData["instant"]
        })
 
        .catch( function(error) {
            console.error('Có lỗi xảy ra: ', error);
            
        });
    return gas_price
}
async function gasUpdate(){
    let gas = await get_gas();
    let priority_gas_rcm = web3.utils.fromWei(gas.maxPriorityFeePerGas,'gwei');
    let gas_rcm = web3.utils.fromWei(gas.maxFeePerGas,'gwei');
    priority_gas_rcm_element.textContent = priority_gas_rcm;
    gas_rcm_element.textContent = gas_rcm;
}
async function priceUpdate(){
    if(token_dst != null){
        token_price = await get_price(token_dst)
        token_price_element.textContent = "Price: " + String(token_price) + " $"
    }
}

function apiRequestUrl(methodName, queryParams) {
    return apiBaseUrl + methodName + "?" + new URLSearchParams(queryParams).toString();
}

async function postData(){
    let dataRes;
    if(slippage_element.value == ""){
        slip = 0.5;
    }
    else{
        slip = slippage_element.value
    }
    if(wallet_recv_element.value == "" && wallet_recv_custom_element.value == null){
        wallet_recv = "";
    }
    else{
        if(wallet_recv_element.value != null){
            wallet_recv = wallet_recv_element.value;
        }
        else{
            wallet_recv = wallet_recv_custom_element.value;
        }
    }
    const postData = {
        'src': '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        'dst': token_dst,
        'amount': parseInt(Number(amount_in_element.value) * 1000000)  ,
        'from': address,
        'slippage': Number(slip),
        'disableEstimate': false,
        "allowPartialFill": false,
        "receiver": wallet_recv
    }

    await fetch('/api-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
        .then(response => response.json())
        .then(data => {
            dataRes = data
      // Xử lý dữ liệu phản hồi ở đây
        })
        .catch(error => {
            console.error('Lỗi:', error);
      // Xử lý lỗi ở đây
        });
    return dataRes
}

amount_in_element.addEventListener('input',async function() {
    if(token_src == "0xdAC17F958D2ee523a2206206994597C13D831ec7" && token_dst != null){
        let timeOut = setTimeout(async function(){
            let data = await postData()
            let amount_out = web3.utils.fromWei(data.toAmount,'ether')
            amount_out_element.value = amount_out;
            price_element.textContent = "Price: " +  (parseFloat(amount_in_element.value)/amount_out).toString() + " $";
        },2000)
        
    }
})


gasUpdate()
// priceUpdate()
setInterval(gasUpdate, 100000);
setInterval(priceUpdate, 10000);


