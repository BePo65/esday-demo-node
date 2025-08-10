import { esday } from 'esday';
import advancedFormatPlugin from 'esday/plugins/advancedFormat';

esday.extend(advancedFormatPlugin);

const now = esday();
const in5Days = now.add(5, 'days');

console.log('Demo for ESday v0.5.0');
console.log(`Now it is ${now.format('YYYY-MM-DD HH:mm:ss')}`);
console.log(`In 5 days it will be ${in5Days.format('YYYY-MM-DD HH:mm:ss')}`);
