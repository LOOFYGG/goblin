import { getAllCurses, addCurse, deleteCurse } from "../requests/curs.requests.js"
import { getAllPersons, addPerson, deletePerson } from "../requests/person.requests.js";

new Vue({
    el: "#add-form",
    data: {
        curse_id:'',
        namecurs:'',
        description:'',
        
    },
    methods: {
        addCurse: async function () {
            await addCurse(this.namecurs, this.description, this.curse_id);
            // Обновляем список велосипедов после добавления
            this.$emit('curse-added');
        }
    }
});

Vue.component('curselist', {
    props: ["curses"],
    template: `
    <div>
        <div v-for="bics in curses" :key="bics.id" class="card m-3" style="width: 18rem; float:left; border-radius:100px;">
            <div class="card-body" style="-webkit-box-shadow: -6px 7px 83px 29px rgba(34, 60, 80, 0.2);-moz-box-shadow: -6px 7px 83px 29px rgba(34, 60, 80, 0.2);box-shadow: -6px 7px 83px 29px rgba(34, 60, 80, 0.2); border: 1px solid black; border-radius:100px;">
                <p class="card-text" style="text-align: center;" >{{ bics.firstname }}</p>
                <p class="card-text" style="text-align: center;" >{{ bics.lastname }}</p>
                <p class="card-text" style="text-align: center;" >{{ bics.namecurs }}</p>
                <p class="card-text" style="text-align: center;" >{{ bics.description }}</p>
                <p class="card-text" style="text-align: center;" >{{ bics.id }}</p>
                <div class="btn-group" role="group" aria-label="Простой пример">
                    <button @click="deleteCurse(bics.id)" type="button" class="btn btn-danger" style="position: relative;left: 85px;">Удалить</button>
                </div>
            </div>
        </div>  
    </div>`,
    methods: {
        async deleteCurse(curseId) {
            await deleteCurse(curseId);
            this.$emit('curse-deleted');
        }
    }
});
new Vue({
    el: "#curse-list",
    data: {
        curses: await getAllCurses()
    },
    methods: {
        async updateCrses() {
            this.curses = await getAllCurses();
        }
    },
    mounted() {
        this.$on('curse-added', this.addCurse);
        this.$on('curse-deleted', this.updateCurse);
    }
});