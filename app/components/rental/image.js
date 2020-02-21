import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
    @tracked isLarge = false;
    // didInsertElement() {
    //     console.log(`Hi, my full name is ${this.args.firstName} ${this.args.lastName}`);
    // }    
    @action toggleSize() {
        this.isLarge = !this.isLarge;
    }
}
