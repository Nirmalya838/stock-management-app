function displayUserDetails() {
    let info = document.getElementById('info');
    axios.get('https://crudcrud.com/api/f68dc33c172549049bb411945d242b5d/data')
      .then((response) => {
        console.log(response);
        for (let i in response.data) {
          let n = document.createElement('li');
          let text = document.createTextNode(response.data[i].candyName + " - " + response.data[i].Quantity);
          n.appendChild(text);
  
          let buy = document.createElement("button");
          buy.textContent = "buy one";
          buy.setAttribute("id", "bt" + i);
          n.appendChild(buy);

          buy.addEventListener('click', () => {
            let obj = {
              candyName: response.data[i].candyName,
              Quantity: response.data[i].Quantity - 1
            };
            axios.put(`https://crudcrud.com/api/f68dc33c172549049bb411945d242b5d/data/${response.data[i]._id}`, obj)
              .then((response) => {
                console.log(response);
                location.reload();
              })
              .catch((error) => {
                console.error(error);
              });
          });

          let buyy = document.createElement("button");
          buyy.textContent = "buy two";
          buyy.setAttribute("id", "btt" + i);
          n.appendChild(buyy);
  
          buyy.addEventListener('click', () => {
            let obj = {
              candyName: response.data[i].candyName,
              Quantity: response.data[i].Quantity - 2
            };
            axios.put(`https://crudcrud.com/api/f68dc33c172549049bb411945d242b5d/data/${response.data[i]._id}`, obj)
              .then((response) => {
                console.log(response);
                location.reload();
              })
              .catch((error) => {
                console.error(error);
              });
          });

          let buyyy = document.createElement("button");
          buyyy.textContent = "buy three";
          buyyy.setAttribute("id", "bttt" + i);
          n.appendChild(buyyy);

          buyyy.addEventListener('click', () => {
            let obj = {
              candyName: response.data[i].candyName,
              Quantity: response.data[i].Quantity - 3
            };
            axios.put(`https://crudcrud.com/api/f68dc33c172549049bb411945d242b5d/data/${response.data[i]._id}`, obj)
              .then((response) => {
                console.log(response);
                location.reload();
              })
              .catch((error) => {
                console.error(error);
              });
          });

          let bur = document.createElement("button");
          bur.textContent = "buy";
          bur.setAttribute("id", "br" + i);
          let box = document.createElement("input");
          box.type = "number";
          n.appendChild(bur);
          n.appendChild(box);

          bur.addEventListener('click', () => {
            let obj = {
              candyName: response.data[i].candyName,
              Quantity: response.data[i].Quantity - box.value
            };
            axios.put(`https://crudcrud.com/api/f68dc33c172549049bb411945d242b5d/data/${response.data[i]._id}`, obj)
              .then((response) => {
                console.log(response);
                location.reload();
              })
              .catch((error) => {
                console.error(error);
              });
          });


          info.appendChild(n);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  window.addEventListener('load', displayUserDetails);
  
  let btn = document.getElementById('submit');
  btn.addEventListener('click', () => {
    let cname = document.getElementById('toffee').value;
    let qty = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;
  
    let object = {
      candyName: cname,
      Quantity: qty,
      Price : price
    };
  
    axios.post('https://crudcrud.com/api/f68dc33c172549049bb411945d242b5d/data', object)
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  });
  