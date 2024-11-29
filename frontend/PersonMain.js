import { getAllPersons, addPerson, deletePerson } from "../requests/person.requests.js";
new Vue({
    el: "#add-form",
    data: {
        firstname:"",
        lastname:"",
        phone:""
    },
    methods: {
        addPerson: async function () {
            await addPerson(this.firstname, this.lastname, this.phone);
            // Обновляем список велосипедов после добавления
            this.$emit('person-added');
        }
    }
});
Vue.component('personlist', {
    props: ["persons"],
    template: `
    <div>
        <div v-for="bic in persons" :key="bic.id" class="card m-3" style="width: 18rem; float:left; border-radius: 100px;">
            <div class="card-body" style="-webkit-box-shadow: -6px 7px 83px 29px rgba(34, 60, 80, 0.2); border-radius: 100px; -moz-box-shadow: -6px 7px 83px 29px rgba(34, 60, 80, 0.2);box-shadow: -6px 7px 83px 29px rgba(34, 60, 80, 0.2); border: 1px solid black; ">
                <p class="card-text" style="text-align: center;" >{{ bic.id }}</p>
                <h5 class="card-title" style="text-align: center;" >{{ bic.firstname }}</h5>
                <p class="card-text" style="text-align: center;" >{{ bic.lastname }}</p>
                <p class="card-text" style="text-align: center;" >{{ bic.phone }}</p>
                <p class="card-text" style="text-align: center;" >{{ bic.personId }}</p>
                <div class="btn-group" role="group" aria-label="Простой пример">
                    <button @click="delpersons(bic.id)" type="button" class="btn btn-danger" style="position: relative;left: 85px;">Удалить</button>
                </div>
            </div>
        </div>  
    </div>`,
    methods: {
        async delpersons(personId) {
            await deletePerson(personId);
            this.$emit('person-deleted');
        }
    }
});
new Vue({
    el: "#person-list",
    data: {
        persons: await getAllPersons()
    },
    methods: {
        async updatePersons() {
            this.persons = await getAllPersons();
        }
    },
    mounted() {
        this.$on('person-added', this.addPerson);
        this.$on('person-deleted', this.updatePerson);
    }
});