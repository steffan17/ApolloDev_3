const app = document.getElementById('app')
const tablesList = document.getElementById('tablesList')

const axios = require('axios');



const start = {
    renderTablesList: ()=>
    {
        axios.get('http://localhost:3000/api/getTables')
            .then(function (response) {
                console.log(response.data)
      
                const newItem = document.createElement('li')

                response.data.map(names=>{
                    newItem.classList.add('tablesListItem')
                    newItem.textContent=names.name
                    console.log(names.name)
                    tablesList.appendChild(newItem.cloneNode(true))
                })

                const tablesListItems = ([...document.getElementsByClassName('tablesListItem')])
                tablesListItems.map(item=>{
                    item.addEventListener('click', ()=>{console.log(item.textContent)})
                })

                
                console.log(document.getElementsByClassName('tablesListItem'))
              

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

start.renderTablesList();