async function getAllCurses(){
    const responce = await fetch('/api/curs', {
        method: 'GET'
    });
    const result = await responce.json();
    return result;
}
async function getOneCurse(id){
    const responce = await fetch('/api/curs/' + id, {
        method: 'GET'
    });
    const result = await responce.json();
    return result;
}
async function addCurse(namecurs,description,person_id){
    await fetch('/api/curs', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            namecurs,description,person_id
        })
    });
}
async function deleteCurse(id) {
    try {
        const response = await fetch('/api/curs/' + id, { method: 'DELETE' });

        if (!response.ok) {
            // Если ответ не в диапазоне 200-299
            if (response.status === 404) {
                console.error("Курс не найден.");
            } else if (response.status === 400) {
                console.error("Некорректный идентификатор курса.");
            } else {
                console.error("Ошибка при удалении курса:", response.statusText);
            }
            throw new Error("Ошибка при удалении курса: " + response.statusText);
        }

        console.log("Курс успешно удален.");
    } catch (error) {
        console.error("Ошибка при удалении:", error);
        throw error; // Пробрасываем ошибку дальше
    }
}

async function updateCurse(id, namecurs,description,person_id)
{
    await fetch('/api/curs', {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            id, namecurs,description,person_id
        })
    });
}
export {getAllCurses, getOneCurse, deleteCurse, updateCurse, addCurse}