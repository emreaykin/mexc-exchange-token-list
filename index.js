var t = $("#example").DataTable();
fetch("https://www.mexc.com/open/api/v2/market/coin/list")
  .then((response) => response.json())
  .then(function (data) {
    for (let i = 0; i < data.data.length; i++) {
      
      for (let k = 0; k < data.data[i].coins.length; k++) {
        t.row
          .add([
            data.data[i].currency,
            data.data[i].coins[k].chain,
            data.data[i].coins[k].is_withdraw_enabled,
            data.data[i].coins[k].is_deposit_enabled,
          ])
          .draw(false);
      }
    }
    
  })
  .catch((error) => {});
