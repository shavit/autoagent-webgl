import Doc from './document';
import { StageDom } from './stage';

const appDom = document.querySelector('stage-object');
Doc.register('stage-object', StageDom);
