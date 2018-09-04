let form = document.querySelector('#root');
form.style.width = '800px';
form.style.height = '600px';
form.style.margin = '0 auto';
form.style.border = '1px solid black';
form.style.padding = '20px';
let header = document.querySelector('header');
header.style.display = 'flex';
header.style.justifyContent = 'center'
let footer = document.querySelector('footer');
footer.style.display = 'flex';
footer.style.justifyContent = 'center';
let newActionInput = document.querySelector('.action');
newActionInput.style.display = 'flex';
newActionInput.style.width = '90%';
newActionInput.style.margin = '0 auto';
let inputHolder = document.querySelector('.newInput');
inputHolder.style.width = '95%';
let input = document.querySelector('input');
input.style.width = '100%';
let button = document.querySelector('.material-icons');
button.style.fontSize = '28px';
button.style.marginTop = '-4px';
button.style.marginLeft = '10px';
let img = document.querySelector('img');
img.style.position = 'fixed';
img.style.bottom = '14px';
disableAddButton(document.getElementById('input'));
document.getElementById('input').setAttribute('onkeyup','disableAddButton(this)');
function checkedItem(aCheckbox) {
    aCheckbox.innerText = 'check_box';
}
function deleteItem(aItem) {
    aItem.style.display = 'none';
}
function disableAddButton(addInput) {
    let addNewButton = document.getElementById('icon');
    if (addInput.value === '') {
        addNewButton.style.color = 'grey';
        addNewButton.onclick = null;
    } else {
        addNewButton.style.color = 'black';
        addNewButton.setAttribute('onClick', 'addAction()');
    }
}
function addAction() {
    let actionsListItems = document.getElementsByClassName('actionItem');
    const listLength = 10;
    if(actionsListItems.length === null || actionsListItems.length < listLength) {
        let actionItem = document.createElement('div');
        actionItem.setAttribute('class','actionItem');
        actionItem.setAttribute('id','actionItem');
        actionItem.style.display = 'flex';
        actionItem.style.alignItems = 'center';
        let actionItemCheckbox = document.createElement('i');
        actionItemCheckbox.setAttribute('class','material-icons');
        actionItemCheckbox.innerText = 'check_box_outline_blank';
        actionItemCheckbox.style.flex = '5%';
        actionItemCheckbox.style.cursor = 'pointer';
        actionItemCheckbox.setAttribute('onClick','checkedItem(this)');
        actionItem.appendChild(actionItemCheckbox);
        let actionItemText = document.createElement('p');
        let inputText = document.getElementById('input').value;
        let itemText = document.createTextNode(inputText);
        actionItemText.appendChild(itemText);
        actionItem.appendChild(actionItemText);
        document.getElementById('input').value = '';
        disableAddButton(document.getElementById('input'));
        actionItemText.style.flex = '90%';
        actionItemText.style.margin = '0';
        let actionItemDelete = document.createElement('i');
        actionItemDelete.setAttribute('class','material-icons');
        actionItemDelete.innerText = 'delete';
        actionItemDelete.style.cursor = 'pointer';
        actionItemDelete.setAttribute('onClick','deleteItem(parentNode)');
        actionItem.appendChild(actionItemDelete);
        actionItemDelete.style.flex = '5%';
        let actionsList = document.getElementById('list');
        actionsList.appendChild(actionItem);
    } else {
        let newAction = document.getElementById('action');
        newActionInput = document.getElementById('newInput');
        let newActionBtn = document.getElementById('actionButton');
        let maximumItemPerList = document.createElement('h2');
        maximumItemPerList.innerText = 'Maximum item per list are created’ is displayed';
        maximumItemPerList.style.display = 'block';
        maximumItemPerList.style.marginLeft = 'auto';
        maximumItemPerList.style.marginRight = 'auto';
        maximumItemPerList.style.color = 'red';
        newAction.replaceChild(maximumItemPerList,newActionInput);
        newAction.removeChild(newActionBtn);
    } 
}