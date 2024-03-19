
import { Quill } from '@vueup/vue-quill';
import Parchment from '@vueup/vue-quill/node_modules/parchment';

const Block = Quill.import('blots/block');
const Container = Quill.import('blots/container');


class DivCol extends Block {};
DivCol.blotName = 'divCol';
DivCol.tagName = 'DIV';
DivCol.className = 'my-col';
DivCol.scope = Parchment.Scope.BLOCK_BLOT;

class DivRow extends Container {
    static blotName = 'divRow';
    static tagName = 'DIV';
    static className = 'my-row';

    insertBefore(blot, ref) {
        console.log('DivRow:insertBefore', blot, ref);
        console.log(blot, ref)
        if (blot instanceof DivCol) {
            super.insertBefore(blot, ref);
        } else if (ref instanceof DivCol) {
            ref?.insertBefore(blot);
        }
    }
    static formats(domNode) {
        console.log('DivRow:static formats', domNode)
        
    }

    format(name, value) {
        console.log('DivRow:format', name, value)
        if (this.children.length > 0) {
            this.children.tail.format(name, value);
        }
    }

    formats() {
        console.log('DivRow:formats')
        return { [this.statics.blotName]: this.statics.formats(this.domNode) };
    }
    replace(target) {
        console.log('DivRow:replace', target)
        super.replace(target);
    }
    deleteAt(index, length) {
        console.log('DivRow:deleteAt', index, length);
        if (index === 0 && length === this.length() - 1) {
            return this.remove();
        }
        super.deleteAt(index, length);
    }

};
DivRow.allowedChildren = [DivCol];
DivRow.scope = Parchment.Scope.BLOCK_BLOT;
DivRow.defaultChild = 'divCol'
// DivRow.allowedChildren = [DivCol];
// DivCol.requiredContainer = DivRow;

class Grid {
    static register() {
        Quill.register(DivCol, true);
        Quill.register(DivRow, true);
    }
}

export default Grid;
