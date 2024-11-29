async function getAllPersons(){
    const responce = await fetch('/api/person', {
        method: 'GET'
    });
    const result = await responce.json();
    return result;
}
async function getOnePerson(id){
    const responce = await fetch('/api/person/' + id, {
        method: 'GET'
    });
    const result = await responce.json();
    return result;
}
async function addPerson(firstname,lastname,phone){
    await fetch('/api/person', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            firstname,lastname,phone
        })
    });
}
async function deletePerson(id){
    await fetch('/api/person/' + id, 
    {
        method: 'DELETE'
    });
}
async function updatePerson(id, firstname,lastname,phone)
{
    await fetch('/api/person', {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            id, firstname,lastname,phone
        })
    });
}
export {getAllPersons, getOnePerson, deletePerson, updatePerson, addPerson}