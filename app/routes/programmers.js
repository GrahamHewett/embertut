import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model() {
        return ['Lukester', 'Jordster', 'Liamster', 'Timster', 'Grayster', "Jamester", "Davester"]
    }
}
