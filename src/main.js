import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
console.log('Running AOT compiled');
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
});
//# sourceMappingURL=main.js.map